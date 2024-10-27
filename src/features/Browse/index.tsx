import { getCoins } from "./getCoins";
import {
  Main,
  Header,
  Container,
  Wrapper,
  Icon,
  Name,
  PriceChange,
  Price,
  Arrow,
} from "./styled";
import { useQuery } from "@tanstack/react-query";
import { Coin } from "./type";

const Browse = () => {
  const coins = useQuery({
    queryKey: ["coins"],
    queryFn: getCoins,
  });

  const { data, error, isLoading } = coins;

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>Error</>;
  }

  console.log(data);

  return (
    <Main>
      <Header>Browse Cryptocurrencies</Header>
      <Wrapper>
        {data.map((coin: Coin) => (
          <Container key={coin.id}>
            <Icon src={coin.image} />
            <Name>{coin.name}</Name>
            <Price>{coin.current_price.toFixed(2)}$</Price>
            <PriceChange $isUp={coin.price_change_percentage_24h >= 0}>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </PriceChange>
            <Arrow />
          </Container>
        ))}
      </Wrapper>
    </Main>
  );
};

export default Browse;
