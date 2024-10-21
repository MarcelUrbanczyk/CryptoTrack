import { styled } from "styled-components";

export const Logo = styled.img`
  @media (max-width: 1000px) {
    width: 200px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Message = styled.p`
  font-family: "Montserrat";
  font-size: 32px;
  font-weight: 600;
  @media (max-width: 1000px) {
    text-align: center;
  }
  @media (max-width: 700px) {
    font-size: 24px;
  }
`;
