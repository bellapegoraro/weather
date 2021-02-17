import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c7cfb7;
  width: 100%;
  padding: 10px 0;
  box-shadow: 0px 3px 3px 1px rgba(148, 148, 148, 0.75);

  @media (min-width: 700px) {
    padding: 5px 0;
  }
`;

export { Container };
