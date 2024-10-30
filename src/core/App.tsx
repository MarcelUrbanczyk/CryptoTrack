import Navigation from "../features/Navigation";
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import { toExchanges, toBrowse, toNFTs, toTrade, toNews } from "./routes";
import Browse from "../features/Browse";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "./store";
import { selectTheme } from "../common/themeSlice";
import { darkTheme, lightTheme } from "../common/theme";
import GlobalStyle from "./GlobalStyles";
import Trade from "../features/Trade";

function App() {
  const { theme } = useAppSelector(selectTheme);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path={toBrowse()}>
            <Browse />
          </Route>
          <Route path={toExchanges()}>
            <>Exchanges</>
          </Route>
          <Route path={toNFTs()}>
            <>NFTs</>
          </Route>
          <Route path={toTrade()}>
            <Trade />
          </Route>
          <Route path={toNews()}>
            <>News</>
          </Route>
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
