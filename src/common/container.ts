import { styled } from "styled-components";

export const ContainerStyles = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.container};
  border-radius: 12px;
  @media (max-width: ${({ theme }) => theme.breakpoints.first}) {
    padding: 10px 18px;
    gap: 28px;
  }
`;
