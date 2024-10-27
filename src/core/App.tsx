import Navigation from "../features/Header";
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import { toExchanges, toBrowse, toNFTs, toTrade, toNews } from "./routes";
import Browse from "../features/Browse";

function App() {
  return (
    <>
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
            <>trade</>
          </Route>
          <Route path={toNews()}>
            <>News</>
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
