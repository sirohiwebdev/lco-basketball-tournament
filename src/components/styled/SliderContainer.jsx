import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 90vw;
  height: 420px;
  margin: 0 auto;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  padding: 10px;
  -ms-overflow-style: none; // IE 10+
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SliderInner = styled.div`
  min-width: 290px;
  margin: 10px 40px;
  padding: 20px 10px;
  height: 380px;
  background-color: #ffffff;
  display: inline-block;
  border-radius: 5px;
  transition: all 0.5s ease-out;
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 768px) {
    margin: 10px 20px;
  }
  &:hover {
    box-shadow: 0px 0px 30px -5px rgba(0, 0, 0, 0.2);
  }

  .image {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    border-radius: 50%;
  }
  .image img {
    width: 100%;
    border-radius: 50%;
  }
`;
