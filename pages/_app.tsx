import "@fontsource/inter/variable.css";
import { ThemeProvider } from "next-themes";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import type { AppProps } from "next/app";
import Script from "next/script";

const fonts = {
  sans: 'InterVariable, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
};

const lightTheme = createTheme({
  type: "light",
  theme: {
    fonts,
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    fonts,
  },
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </ThemeProvider>
      <Script
        src="https://analytics.fyralabs.com/js/script.outbound-links.js"
        strategy="afterInteractive"
        data-domain="terra.fyralabs.com"
        defer
      />
    </>
  );
};

export default MyApp;
