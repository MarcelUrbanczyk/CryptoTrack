import Header from "../features/Header";
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import { toExchanges } from "./routes";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Switch>
          <Route path={toExchanges()}>
            <>Exchanges</>
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
