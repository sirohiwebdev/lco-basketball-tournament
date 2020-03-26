import React from "react";
import styled from "styled-components";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  background: rgba(0,0,0,0.2);
  display: flex;
  justify-content: center;
  flex-wrap: no-wrap;
  align-items:center;
  transition display 0.4s ease-out;


  span{
      position: absolute;
      right: 30px;
      top: 20px;
      cursor: pointer;
  font-size: 1.5rem;
  
    
  }
`;

export const Modal = props => {
  return (
    <>
      <ModalContainer>
        <span
          onClick={() => {
            props.cancel(true);
          }}
          className="text-white"
        >
          <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
        </span>
        {props.modal == "login" ? (
          <Login />
        ) : props.modal == "signup" ? (
          <Signup />
        ) : null}
      </ModalContainer>
    </>
  );
};
