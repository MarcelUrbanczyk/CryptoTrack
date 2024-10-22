import { toBrowse, toExchanges, toNews } from "../../../core/routes";
import { Nav, NavLink } from "./styled";

const Navigation = () => {
  return (
    <Nav>
      <NavLink to={toBrowse()}>Browse</NavLink>
      <NavLink to={toNews()}>News</NavLink>
      <NavLink to={toExchanges()}>Exchanges</NavLink>
    </Nav>
  );
};

export default Navigation;
