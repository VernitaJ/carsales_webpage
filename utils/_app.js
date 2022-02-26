import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import theme from "./theme";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
      <Nav />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;