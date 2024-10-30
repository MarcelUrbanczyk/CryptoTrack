import { options } from "../../options";

export const getCoin = async (id: string) => {
  const URL = `https://api.coingecko.com/api/v3/coins/${id}`;

  const response = await fetch(URL, options);

  if (response.status !== 200) {
    return "error";
  }

  return await response.json();
};

export const getCoinChartData = async (id: string) => {
  const URL = `https://api.coingecko.com/api/v3/coins/${id}/ohlc?vs_currency=usd&days=1`;

  const response = await fetch(URL, options);

  if (response.status !== 200) {
    return "error";
  }

  return await response.json();
};
