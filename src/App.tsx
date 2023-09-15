import CardsView from "./components/CardsView/CardsView";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CardsView />
    </ThemeProvider>
  );
}

export default App;
