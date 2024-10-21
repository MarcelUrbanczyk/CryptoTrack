import { Container, Icon, Name, Separator } from "./styled";
import icon from "./../../common/icon.png";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <Container>
      <Icon src={icon} />
      <Name>Crypto Track</Name>
      <Separator />
      <Navigation />
    </Container>
  );
};

export default Header;
