import React from "react";
import styled from "styled-components";

const h = window.innerHeight;
const w = window.innerWidth;
const width = Math.sqrt(h * h + w * w);

export const MenuOverlay = styled.div`
  position: fixed;
  z-index: 1099;
  top: 0;
  right: 0;
  background-color: rgb(74, 0, 103);

  &.open {
    width: ${2 * width}px;
    height: ${2 * width}px;

    animation: coverscreen 0.6s ease-in-out 1;

    @keyframes coverscreen {
      0% {
        width: 0%;
        height: 0%;
        border-radius: ${width}px;
        right: 0;
        top: 0;
        transform: translate(50%, -50%);
      }

      100% {
        right: 0;
        top: 0;
        width: ${2 * width}px;
        height: ${2 * width}px;
        border-radius: 0%;
        transform: translate(0%, 0%);
      }
    }
  }

  &.closed {
    width: 0;
    height: 0;
    animation: uncoverscreen 0.6s ease-in-out 1;

    @keyframes uncoverscreen {
      0% {
        width: ${2 * width}px;
        height: ${2 * width}px;
        border-radius: 0%;
        transform: translate(0%, 0%);
        right: 0;
        top: 0;
      }

      100% {
        right: 0;
        top: 0;
        width: 0%;
        height: 0%;
        border-radius: ${width}px;
        transform: translate(50%, -50%);
      }
    }
  }
`;
