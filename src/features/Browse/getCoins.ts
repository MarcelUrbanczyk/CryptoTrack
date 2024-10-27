import { options } from "../../options";

export const getCoins = async (page: number) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=8&page=${page}`,
    options
  );

  if (response.status !== 200) {
    return "error";
  }

  return await response.json();
};
