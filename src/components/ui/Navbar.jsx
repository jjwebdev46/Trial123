import { Box, Button, Flex, HStack } from "@chakra-ui/react";
// import { useColorMode } from "./color-mode";

const Links = ["About", "Services", "Projects"];

export default function Navbar() {
  return (
    <>
      <Box bg={"white.300"} px={4}>
        {/** px is for padding left, higher = more right */}
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>Logo</Box>
          <HStack>
            <Box px={2} py={1} rounded={"md"}>
              <Button variant="ghost">About</Button>
            </Box>

            <Box px={2} py={1} rounded={"md"}>
              <Button variant="ghost">Services</Button>
            </Box>

            <Box px={2} py={1} rounded={"md"}>
              <Button variant="ghost">Projects</Button>
            </Box>

          </HStack>
        </Flex>
      </Box>
    </>
  );
}
