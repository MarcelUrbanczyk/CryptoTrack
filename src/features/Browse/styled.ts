import { styled } from "styled-components";
import { ReactComponent as ArrowIcon } from "../../common/arrow.svg";
import { ContainerStyles } from "../../common/container";
import { Link } from "react-router-dom";

export const Main = styled.main`
  max-width: 70vw;
  margin: 20px auto;
`;

export const Header = styled.h2`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  @media (max-width: ${({ theme }) => theme.breakpoints.first}) {
    font-size: 30px;
  }
`;

export const Container = styled(ContainerStyles).attrs({ as: Link })<{
  $isUp: boolean;
}>`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 0px 8px -2px ${({ $isUp }) => ($isUp ? "green" : "red")};
  }
`;

export const Wrapper = styled.span`
  display: grid;
  grid-template-columns: auto auto;
  gap: 24px;
`;

export const Icon = styled.img`
  width: 48px;
  height: 48px;
  @media (max-width: ${({ theme }) => theme.breakpoints.first}) {
    width: 32px;
    height: 32px;
  }
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: ${({ theme }) => theme.breakpoints.first}) {
    font-size: 22px;
  }
`;

export const Price = styled(Name)``;

export const PriceChange = styled(Price)<{ $isUp: boolean }>`
  color: ${({ $isUp }) => ($isUp ? "green" : "red")};
`;

export const Arrow = styled(ArrowIcon)`
  color: ${({ theme }) => theme.colors.accent};
  width: 32px;
  height: 32px;
  margin: 0 0 0 auto;
`;
