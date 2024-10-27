import { Container, Icon, Name, Separator, NavLink } from "./styled";
import icon from "./../../common/icon.png";
import {
  toBrowse,
  toExchanges,
  toNFTs,
  toNews,
  toTrade,
} from "../../core/routes";

const Navigation = () => {
  return (
    <Container>
      <Icon src={icon} />
      <Name>CryptoTrack</Name>
      <Separator />
      <NavLink to={toBrowse()}>Browse</NavLink>
      <NavLink to={toTrade()}>Trade</NavLink>
      <NavLink to={toNFTs()}>NFTs</NavLink>
      <NavLink to={toExchanges()}>Exchanges</NavLink>
      <NavLink to={toNews()}>News</NavLink>
    </Container>
  );
};

export default Navigation;
