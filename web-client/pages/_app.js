import { ColorSchemeProvider, MantineProvider } from "@mantine/core";

import { useEffect, useState } from "react";

import { ModalsProvider } from "@mantine/modals";

function MyApp({ Component, pageProps }) {
  // Temp fix for React 18 hydration error
  const [showChild, setShowChild] = useState(false);
  useEffect(() => setShowChild(true), []);
  if (!showChild) return null;

  return (
    <ModalsProvider>
      <ColorSchemeProvider colorScheme="dark" toggleColorScheme={() => {}}>
        <MantineProvider
          theme={{
            colorScheme: "dark",
            fontFamily: "Inter, sans-serif",
            spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </ModalsProvider>
  );
}

export default MyApp;
