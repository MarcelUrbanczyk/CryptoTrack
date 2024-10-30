import { styled } from "styled-components";
import { ContainerStyles } from "../../../common/container";

export const Icon = styled.img`
  width: 64px;
  height: 64px;
  margin: 0 8px 0 0;
`;

export const Info = styled.dt`
  color: ${({ theme }) => theme.colors.text};
  font-size: 28px;
  font-weight: 600;
  margin: 0 8px;
`;

export const Ticker = styled(Info).attrs({ as: "p" })`
  color: ${({ theme }) => theme.colors.secondary};
  margin: auto 0;
`;

export const Data = styled(Info).attrs({ as: "dd" })`
  font-weight: 500;
  font-size: 26px;
`;

export const Change = styled(Data).attrs({ as: "p" })<{ $isUp: boolean }>`
  color: ${({ $isUp }) => ($isUp ? "green" : "red")};
`;

export const Wrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const Aside = styled(ContainerStyles).attrs({ as: "aside" })`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
