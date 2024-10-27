export const colors = {
  federalBlue: "#0E0E52",
  royalBlue: "#5d62e3",
  dullLavender: "#9193e2",
  whiteLilac: "#f6f6fb",
  blackPearl: "#040520",
  perano: "#acacf1",
  luckyPoint: "#1d1e6d",
  jacksonsPurple: "#1b20a1",
  cinder: "#05050a",
  selago: "#dfe0fb",
  transparentRoyalBlue: "rgba(93, 98, 227, 0.2)",
};

export const lightTheme = {
  colors: {
    primary: colors.federalBlue,
    secondary: colors.dullLavender,
    background: colors.whiteLilac,
    accent: colors.royalBlue,
    text: colors.blackPearl,
    container: colors.transparentRoyalBlue,
  },
  shadow: `0px 4px 4px 0px ${colors.transparentRoyalBlue}`,
};

export const darkTheme = {
  colors: {
    primary: colors.perano,
    secondary: colors.luckyPoint,
    accent: colors.jacksonsPurple,
    background: colors.cinder,
    text: colors.selago,
  },
};
