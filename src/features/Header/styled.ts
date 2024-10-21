import { styled } from "styled-components";

export const Container = styled.header`
  padding: 10px;
  display: flex;
  align-content: center;
  gap: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bonus};
`;

export const Icon = styled.img`
  width: 48px;
  height: 48px;
`;

export const Name = styled.h1`
  font-size: 18px;
  margin: auto 0;
`;

export const Separator = styled.hr`
  height: 20px;
  width: 2px;
  background-color: ${({ theme }) => theme.colors.bonus};
  margin: auto 0;
  border: none;
`;
