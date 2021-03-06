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

export const Signup = () => {
  return (
    <LoginContainer className="bg-white shadow">
      <form className="form" method="POST" onSubmit={() => false}>
        <h3 className="text-imp text-center my-3">Register Now</h3>

        <div className="form-group">
          <label htmlFor="" className="form-label text-muted">
            Name
          </label>
          <input type="name" className="form-control rounded-0" />
        </div>

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
          <input type="email" className="form-control rounded-0" />
        </div>

        <Button color="primary" type="button" className="w-50 mx-auto d-block">
          Register
        </Button>
      </form>
    </LoginContainer>
  );
};
