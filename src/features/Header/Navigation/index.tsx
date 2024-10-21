import { toExchanges } from "../../../core/routes";
import { Nav, NavLink } from "./styled";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Nav>
      <NavLink>Trending</NavLink>
      <NavLink>News</NavLink>
      <NavLink>
        <Link to={toExchanges()}>Exchanges</Link>
      </NavLink>
    </Nav>
  );
};

export default Navigation;
