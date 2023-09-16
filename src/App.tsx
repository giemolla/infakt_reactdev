import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import CardsView from "./components/CardsView/CardsView";
import HomeView from "./components/HomeView/HomeView";
import Header from "./components/Header/Header";
import { routes } from "./routes";
import Container from "./components/Container/Container";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Header />
          <Switch>
            <Route exact path={routes.home}>
              <HomeView />
            </Route>
            <Route path={routes.accountants}>
              <CardsView />
            </Route>
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
