import { getCoins } from "./getCoins";
import {
  Main,
  Header,
  Container,
  Wrapper,
  Rank,
  Icon,
  Name,
  PriceChange,
  Price,
  AdnotationWrapper,
  Adnotation,
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
      <Header>Cryptocurrencies</Header>
      <Wrapper>
        <AdnotationWrapper>
          <Adnotation>
            MC
            <br /> Rank
          </Adnotation>
          <Adnotation>Name</Adnotation>
          <Adnotation>Price</Adnotation>
          <Adnotation>24h Change</Adnotation>
        </AdnotationWrapper>
        {data.map((coin: Coin) => (
          <Container key={coin.id}>
            <Rank>{coin.market_cap_rank}.</Rank>
            <Icon src={coin.image} />
            <Name>{coin.name}</Name>
            <Price>{coin.current_price.toFixed(2)}$</Price>
            <PriceChange $isUp={coin.price_change_percentage_24h >= 0}>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </PriceChange>
          </Container>
        ))}
      </Wrapper>
    </Main>
  );
};

export default Browse;
