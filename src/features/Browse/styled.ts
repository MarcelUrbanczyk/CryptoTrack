import { styled } from "styled-components";
import { ReactComponent as ArrowIcon } from "../../common/arrow.svg";

export const Main = styled.main`
  max-width: 70vw;
  margin: 20px auto;
`;

export const Header = styled.h2`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
`;

export const Container = styled.article`
  padding: 26px;
  background-color: ${({ theme }) => theme.colors.container};
  display: flex;
  border-radius: 12px;
  align-items: center;
  gap: 32px;
  cursor: pointer;
  transition: 0.2s linear;
  &:hover {
    transform: scale(1.02);
  }
`;

export const Wrapper = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

export const Icon = styled.img`
  width: 48px;
  height: 48px;
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Price = styled(Name)`
  word-break: keep-all;
`;

export const PriceChange = styled(Price)<{ $isUp: boolean }>`
  color: ${({ $isUp }) => ($isUp ? "green" : "red")};
`;

export const Arrow = styled(ArrowIcon)`
  color: ${({ theme }) => theme.colors.accent};
  width: 32px;
  margin: 0 0 0 auto;
`;
