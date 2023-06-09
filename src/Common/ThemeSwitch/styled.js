import styled, { css } from "styled-components";
import { ReactComponent as Light } from "../ThemeSwitch/LightButton.svg";

export const Wrapper = styled.div`
  margin-top: 119px;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 767px) {
    margin-top: 22px;
    margin-right: 16px;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border: none;
  background: none;
  padding: 0px;
`;

export const Text = styled.span`
  width: 99px;
  color: #6e7e91;
  height: 16px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ThemeButton = styled(Light)`
  #bg {
    path {
      fill: ${(props) => props.theme.themeButton.background};
      stroke: ${(props) => props.theme.themeButton.stroke};
      ${({ move }) =>
        move &&
        css`
          filter: drop-shadow(
            0px 16px 58px 0px rgba(9, 10, 51, 0.03),
            0px -2px 50px 0px rgba(9, 10, 51, 0.02)
          );
        `}
    }
  }

  #toggle {
    fill: ${(props) => props.theme.themeButton.toggle};
  }

  #sun {
    path {
      fill: ${(props) => props.theme.themeButton.sun};
    }
  }

  #slider {
    ${({ move }) =>
      move
        ? css`
            animation: go 0.5s forwards;
          `
        : css`
            animation: back 0.5s forwards;
          `}
  }
  @keyframes go {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(20px);
    }
  }
  @keyframes back {
    from {
      transform: translateX(20px);
    }
    to {
      transform: translateX(0px);
    }
  }
`;
