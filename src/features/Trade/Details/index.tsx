import { Aside, Icon, Info, Ticker, Wrapper, Data, Change } from "./styled";
import { formatAmount } from "../../../common/formatAmount";

interface CoinDetails {
  coin: {
    image: string;
    ticker: string;
    name: string;
    price: number;
    change: number;
    ath: number;
    athChange: number;
    volume: number;
    marketCap: number;
    marketCapChange: number;
  };
}

const Details = ({ coin }: CoinDetails) => (
  <Aside>
    <Wrapper>
      <Icon src={coin.image} />
      <Ticker>{coin.ticker}/USD</Ticker>
    </Wrapper>
    <Info>{coin.name}</Info>
    <Wrapper>
      <Data>{coin.price}$</Data>
      <Change $isUp={coin.change! > 0}>{coin.change!.toFixed(2)}%</Change>
    </Wrapper>
    <Info>All time high:</Info>
    <Wrapper>
      <Data>{coin.ath}$</Data>
      <Change $isUp={coin.athChange! > 0}>{coin.athChange?.toFixed(2)}%</Change>
    </Wrapper>
    <Info>Volume: </Info>
    <Data>{formatAmount(coin.volume!)}$</Data>
    <Info>Market Cap: </Info>
    <Wrapper>
      <Data>{formatAmount(coin.marketCap!)}$</Data>
      <Change $isUp={coin.marketCapChange! > 0}>
        {coin.marketCapChange?.toFixed(2)}%
      </Change>
    </Wrapper>
  </Aside>
);

export default Details;
