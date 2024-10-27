import { styled } from "styled-components";
import { ReactComponent as ArrowIcon } from "../../common/arrow.svg";

export const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  margin: 64px auto;
  gap: 10px;
  align-items: center;
`;

export const Arrow = styled(ArrowIcon)<{ $rotated?: boolean }>`
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.colors.accent};
  transform: ${({ $rotated }) => ($rotated ? "rotate(180deg)" : "")};
  @media (max-width: ${({ theme }) => theme.breakpoints.first}) {
    width: 24px;
    height: 24px;
  }
`;

export const Button = styled.button`
  max-height: 64px;
  background-color: ${({ theme }) => theme.colors.container};
  border-radius: 12px;
  padding: 8px;
  display: flex;
  cursor: pointer;
  transition: 0.3s;
  border: none;
  &:hover {
    transform: scale(1.01);
  }
`;

export const Pages = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: ${({ theme }) => theme.breakpoints.first}) {
    font-size: 16px;
  }
`;