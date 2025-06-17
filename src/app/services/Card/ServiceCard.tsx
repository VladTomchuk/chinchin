import { Service } from "@/const/types";
import { useTheme } from "@/hooks/useTheme";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";

interface Props {
  item: Service;
}

export const ServiceCard = ({ item }: Props) => {
  const { theme } = useTheme();
  const { colorMode } = useColorMode();
  const borderMode =
    colorMode === "light" ? "transparent" : `1px solid ${theme.accent}`;
  return (
    <Card
      height="100%"
      bg={theme.bg}
      transition={"all 300ms ease-in-out"}
      shadow={colorMode === "light" ? `${theme.shadow}` : "none"}
      _hover={{
        transform: "scale(1.03)",
        boxShadow: colorMode === "light" ? "2xl" : `${theme.shadow}`,
      }}
    >
      <CardHeader bg={theme.accentPale} borderTopRadius="md">
        <Heading size="sm" color={theme.darkText}>
          {item.title}
        </Heading>
      </CardHeader>
      <CardBody
        borderX={borderMode}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Text>{item.description}</Text>

        <Box>
          <Divider borderColor={theme.accent} variant="dashed" my={2} />
          <Text>
            Group: {item.min_group} - {item.max_group} persons.
          </Text>
          <Text>
            Price from: {item.price} {item.price_condition}
          </Text>
          <Divider borderColor={theme.accent} variant="dashed" my={2} />
        </Box>
      </CardBody>
      <CardFooter
        borderX={borderMode}
        borderBottom={borderMode}
        borderBottomRadius="md"
        pt={0}
      >
        <Button color={theme.accent} variant="outline">
          Read more
        </Button>
      </CardFooter>
    </Card>
  );
};
