import { Container, Logo, Message, Section } from "./styled";
import logo from "./../../common/logo.png";

const Construction = () => {
  return (
    <Section>
      <Container>
        <Logo src={logo} />
        <Message>
          Currently, we are under construction.
          <br />
          Visit us soon!
        </Message>
      </Container>
    </Section>
  );
};

export default Construction;
