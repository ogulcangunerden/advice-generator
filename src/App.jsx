import Advice from "./components/Advice";
import { useState } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ActionIcon,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

function App() {
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const dark = colorScheme === "dark";
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <ActionIcon
          style={{ position: "absolute", right: 60, top: 40 }}
          variant="outline"
          size="xl"
          color={dark ? "yellow" : "blue"}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
        </ActionIcon>
        <Advice />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
