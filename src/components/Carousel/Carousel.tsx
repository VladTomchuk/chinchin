"use client";
import { Image } from "@chakra-ui/react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useRef } from "react";
import { NextButton, PrevButton, usePrevNextButtons } from "./ArrowButtons";
import { DotButton, useDotButton } from "./DotButtons";

const TWEEN_FACTOR_BASE = 0.2;

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__parallax__layer") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `translateX(${translate}%)`;
        });
      });
    },
    [],
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenParallax)
      .on("scroll", tweenParallax);
  }, [emblaApi, tweenParallax]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides &&
            slides.map((i, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__parallax">
                  <div className="embla__parallax__layer">
                    <Image src={i} alt={i} />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : "",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;

// const TWEEN_FACTOR_BASE = 0.52;

// const numberWithinRange = (number: number, min: number, max: number): number =>
//   Math.min(Math.max(number, min), max);

// type PropType = {
//   slides: string[];
//   options?: EmblaOptionsType;
// };

// const EmblaCarousel: React.FC<PropType> = (props) => {
//   const { slides, options } = props;
//   const [emblaRef, emblaApi] = useEmblaCarousel(options);
//   const tweenFactor = useRef(0);
//   const tweenNodes = useRef<HTMLElement[]>([]);

//   const { selectedIndex, scrollSnaps, onDotButtonClick } =
//     useDotButton(emblaApi);

//   const {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick,
//   } = usePrevNextButtons(emblaApi);

//   const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
//     tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
//       return slideNode.querySelector(".embla__slide__number") as HTMLElement;
//     });
//   }, []);

//   const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
//     tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
//   }, []);

//   const tweenScale = useCallback(
//     (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
//       const engine = emblaApi.internalEngine();
//       const scrollProgress = emblaApi.scrollProgress();
//       const slidesInView = emblaApi.slidesInView();
//       const isScrollEvent = eventName === "scroll";

//       emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
//         let diffToTarget = scrollSnap - scrollProgress;
//         const slidesInSnap = engine.slideRegistry[snapIndex];

//         slidesInSnap.forEach((slideIndex) => {
//           if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

//           if (engine.options.loop) {
//             engine.slideLooper.loopPoints.forEach((loopItem) => {
//               const target = loopItem.target();

//               if (slideIndex === loopItem.index && target !== 0) {
//                 const sign = Math.sign(target);

//                 if (sign === -1) {
//                   diffToTarget = scrollSnap - (1 + scrollProgress);
//                 }
//                 if (sign === 1) {
//                   diffToTarget = scrollSnap + (1 - scrollProgress);
//                 }
//               }
//             });
//           }

//           const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
//           const scale = numberWithinRange(tweenValue, 0, 1).toString();
//           const tweenNode = tweenNodes.current[slideIndex];
//           tweenNode.style.transform = `scale(${scale})`;
//         });
//       });
//     },
//     [],
//   );

//   useEffect(() => {
//     if (!emblaApi) return;

//     setTweenNodes(emblaApi);
//     setTweenFactor(emblaApi);
//     tweenScale(emblaApi);

//     emblaApi
//       .on("reInit", setTweenNodes)
//       .on("reInit", setTweenFactor)
//       .on("reInit", tweenScale)
//       .on("scroll", tweenScale);
//   }, [emblaApi, tweenScale]);

//   return (
//     <div className="embla">
//       <div className="embla__viewport" ref={emblaRef}>
//         <div className="embla__container">
//           {slides.map((i, index) => (
//             <div className="embla__slide" key={index}>
//               <div className="embla__slide__number">
//                 <Image src={i} alt={i} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="embla__controls">
//         <div className="embla__buttons">
//           <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
//           <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
//         </div>

//         <div className="embla__dots">
//           {scrollSnaps.map((_: number, index: number) => (
//             <DotButton
//               key={index}
//               onClick={() => onDotButtonClick(index)}
//               className={"embla__dot".concat(
//                 index === selectedIndex ? " embla__dot--selected" : "",
//               )}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmblaCarousel;

// import { Box, Flex, Image } from "@chakra-ui/react";
// import Autoplay from "embla-carousel-autoplay";
// import useEmblaCarousel from "embla-carousel-react";
// import { useCallback } from "react";

// interface Props {
//   images: string[];
// }

// export function EmblaCarousel({ images }: Props) {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext();
//   }, [emblaApi]);
//   console.log({ images });
//   return (
//     <div style={{ overflow: "hidden" }} ref={emblaRef}>
//       <div className="embla__container" style={{ display: "flex" }}>
//         {images &&
//           images.map((i, index) => (
//             <Box
//               style={{ flex: "0 0 100%", minWidth: "0" }}
//               className="embla__slide"
//               key={index}
//             >
//               <Image src={i} alt={i} />
//             </Box>
//           ))}
//       </div>
//       <button className="embla__prev" onClick={scrollPrev}>
//         Prev
//       </button>
//       <button className="embla__next" onClick={scrollNext}>
//         Next
//       </button>
//     </div>
//   );
// }
