import Header from "../features/Header";
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import { toExchanges, toBrowse } from "./routes";
import Browse from "../features/Browse";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Switch>
          <Route path={toBrowse()}>
            <Browse />
          </Route>
          <Route path={toExchanges()}>
            <>Exchanges</>
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
