import {
  Container,
  Icon,
  Name,
  Separator,
  NavLink,
  ThemeSwitch,
  Sun,
  Moon,
} from "./styled";
import icon from "./../../common/icon.png";
import {
  toBrowse,
  toExchanges,
  toNFTs,
  toNews,
  toTrade,
} from "../../core/routes";
import { useAppDispatch, useAppSelector } from "../../core/store";
import { selectTheme, switchTheme } from "../../common/themeSlice";

const Navigation = () => {
  const { theme } = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

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
      <ThemeSwitch
        onClick={() => {
          dispatch(switchTheme());
        }}
      >
        {theme === "dark" ? <Sun /> : <Moon />}
      </ThemeSwitch>
    </Container>
  );
};

export default Navigation;
