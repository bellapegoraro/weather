import styled from "styled-components";

const Container = styled.div`
  background-color: #f8dc86;
  height: 50px;
  position: absolute;
  bottom: 0;
  width: 100%;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 700px) {
    height: 60px;
  }
`;

export { Container };
