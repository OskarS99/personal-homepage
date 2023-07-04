import styled from "styled-components";
import { ReactComponent as ToggleLight } from "../SVG/ToggleLight .svg";

export const Button = styled.button`
  border: none;
  background: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 12px;
  position: absolute;
  right: 0;
  top: 0;
  height: 26px;
`;

export const Caption = styled.p`
  width: 99px;
  color: #6e7e91;
  height: 16px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
`;

export const Toggle = styled(ToggleLight)`
  cursor: pointer;
  #Vector {
    position: relative;
  }

  &:hover {
    #slider {
      position: absolute;
      overflow: hidden;
      transform-box: fill-box;
      animation: go 0.5s forwards;
      @keyframes go {
        to {
          translate: 100%;
        }
      }
    }
  }
`;
