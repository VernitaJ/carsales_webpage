import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Spacer,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
      <Box backgroundColor={useColorModeValue("black", "white")} color={useColorModeValue("white", "darkblue")}px={70}>
        <Flex
          // position={"fixed"}
          h={100}
          mb={"4"}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <img src="/logoclipping.png" alt="this" height="60" width="300" />
          <Spacer />

          <Flex align={"flex-end"}>
            <Stack
              direction={"row"}
              spacing={30}
              fontSize={"25px"}
              fontStyle={"bold"}
              marginLeft={"50vw"}
            >
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </Stack>
          </Flex>
        </Flex>
      </Box>
  );
}
