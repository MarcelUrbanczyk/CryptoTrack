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
import Pagination from "../Pagination";
import { useLocation, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const Browse = () => {
  const location = useLocation();
  const history = useHistory();
  const pageParams = new URLSearchParams();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const initialPage = new URLSearchParams(location.search).get("page");
    if (initialPage) {
      setPage(parseInt(initialPage));
    }
  }, [location.search]);

  useEffect(() => {
    pageParams.set("page", page.toString());
    history.push(`${location.pathname}?${pageParams}`);
  }, [page]);

  const coins = useQuery({
    queryKey: ["coins", page],
    queryFn: () => getCoins(page),
  });
  const { data, error, isLoading } = coins;

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>Error</>;
  }

  return (
    <>
      <Main>
        <Header>Browse Cryptocurrencies</Header>
        <Wrapper>
          {data &&
            data.map((coin: Coin) => (
              <Container
                $isUp={coin.price_change_percentage_24h >= 0}
                key={coin.id}
              >
                <Icon src={coin.image} alt="coin icon" />
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
      <Pagination page={page} setPage={setPage} />
    </>
  );
};

export default Browse;
