import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const LoginContainer = styled.div`
  max-width: 600px;
  min-width: 400px;
  padding: 25px;
  animation: pop 0.5s ease-out 1;
  border-radius: 10px;

  @keyframes pop {
    0% {
      transform: scale(0.9);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const Login = () => {
  return (
    <LoginContainer className="bg-white shadow">
      <form className="form" method="POST" onSubmit={false}>
        <h3 className="text-imp text-center my-3">Login to Continue</h3>

        <div className="form-group">
          <label htmlFor="" className="form-label text-muted">
            Email
          </label>
          <input type="email" className="form-control rounded-0" />
        </div>

        <div className="form-group">
          <label htmlFor="" className="form-label text-muted">
            Password
          </label>
          <input type="password" className="form-control rounded-0" />
        </div>

        <Button color="success" type="button" className="w-50 mx-auto d-block">
          Login
        </Button>
      </form>
    </LoginContainer>
  );
};
