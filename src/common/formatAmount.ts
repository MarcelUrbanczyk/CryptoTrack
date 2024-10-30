export const formatAmount = (amount: number) => {
  let formattedAmount;

  if (amount > 100 * 1000 * 1000000) {
    return (formattedAmount =
      (amount / 1000 / 1000000).toFixed(2).toString() + "B ");
  }

  if (amount > 1000000) {
    return (formattedAmount = (amount / 1000000).toFixed(2).toString() + "M ");
  }
};
