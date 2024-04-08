import { Container } from "@chakra-ui/react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Container
      maxW="container.xl"
      px={{ base: "0" }}
      pt={{ base: "12vh", md: "10vh" }}
    >
      {children}
    </Container>
  );
}
