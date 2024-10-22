import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  padding: 0 24px;
  display: flex;
  gap: 48px;
  width: 100%;
`;

export const NavLink = styled(Link)`
  margin: auto 0;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`;
