import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Principal = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px 0 70px 0;

  @media (min-width: 700px) {
    margin: 0 auto;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 1000px) {
    width: 60%;
  }
`;

export { Container, Principal };
