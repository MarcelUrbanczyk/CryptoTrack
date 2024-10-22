import { styled } from "styled-components";

export const Main = styled.main`
  max-width: 70vw;
  margin: 20px auto;
`;

export const Header = styled.h2``;

export const Container = styled.article`
  padding: 8px;
  background-color: white;
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.bonus};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  align-items: center;
  gap: 24px;
  cursor: pointer;
  transition: 0.2s linear;
  &:hover {
    transform: scale(1.02);
  }
`;

export const Wrapper = styled.span`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Rank = styled.p`
  font-weight: 500;
`;

export const Icon = styled.img`
  max-width: 24px;
  height: 100%;
`;

export const Name = styled.p`
  font-weight: 500;
`;

export const Price = styled.p``;

export const PriceChange = styled.p<{ $isUp: boolean }>`
  color: ${({ $isUp }) => ($isUp ? "green" : "red")};
`;

export const AdnotationWrapper = styled.span`
  display: flex;
  gap: 48px;
`;

export const Adnotation = styled.p`
  color: ${({ theme }) => theme.colors.bonus};
  margin: auto 0 0;
  font-size: 12px;
`;
