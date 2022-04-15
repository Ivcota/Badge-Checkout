import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;

  return (
    <MantineProvider withGlobalStyles>
      <AnyComponent {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
