import styled from "styled-components";
import { ButtonLink } from "../ButtonLink";

export const Wrapper = styled.header`
  margin-top: -26px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 66px;

  @media (max-width: 767px) {
    grid-gap: 16px;
    grid-template-columns: 1fr;
    margin-inline: 16px;
  }
`;

export const Photo = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 50%;
  border-color: #c4c4c4;

  @media (max-width: 767px) {
    width: 132.67px;
    height: 132.67px;
  }
`;
export const ContentWrapper = styled.div`
  max-width: 633px;
`;

export const Caption = styled.div`
  margin-top: 64px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  transition: color 0.3s;
  color: ${(props) => props.theme.color.text};

  @media (max-width: 767px) {
    margin-top: 0;
  }
`;

export const Name = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-size: 38px;
  line-height: 46px;
  letter-spacing: 0.05em;
  transition: color 0.3s;
  color: ${(props) => props.theme.color.header};

  @media (max-width: 767px) {
    font-size: 22px;
    line-height: 26.63px;
  }
`;

export const Summary = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  transition: color 0.3s;
  color: ${(props) => props.theme.color.text};

  @media (max-width: 767px) {
    word-break: break-word;
    font-size: 17px;
    line-height: 23.8px;
  }
`;

export const StyledButtonLink = styled(ButtonLink)`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  width: 154px;
`;
