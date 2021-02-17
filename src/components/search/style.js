import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  span {
    margin-top: 20px;
  }

  @media (min-width: 700px) {
    width: 60%;
    justify-content: space-evenly;

    span {
      margin-right: 40px;
    }
  }

  @media (min-width: 1000px) {
    width: 40%;
  }
`;

export { Form };
