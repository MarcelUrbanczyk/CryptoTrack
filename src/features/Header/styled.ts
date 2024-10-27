import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.nav`
  padding: 18px 24px;
  display: flex;
  align-content: center;
  gap: 48px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent};
  box-shadow: ${({ theme }) => theme.shadow};
  max-height: 140px;

  @media (max-width: ${({ theme }) => theme.breakpoints.first}) {
    gap: 36px;
  }
`;

export const Icon = styled.img`
  width: 86px;
  height: 86px;
  @media (max-width: ${({ theme }) => theme.breakpoints.first}) {
    width: 64px;
    height: 64px;
  }
`;

export const Name = styled.h1`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.text};
  margin: auto 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.first}) {
    font-size: 28px;
  }
`;

export const Separator = styled.hr`
  height: 84px;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.accent};
  margin: auto 0;
  border: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.first}) {
    height: 64px;
  }
`;

export const NavLink = styled(Link)`
  margin: auto 0;
  font-weight: 600;
  font-size: 26px;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: ${({ theme }) => theme.breakpoints.first}) {
    font-size: 20px;
  }
`;
