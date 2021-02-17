import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 200px;
  width: 300px;
  margin: 50px auto;
  background-color: #d3e0dc;
  box-shadow: 3px 5px 11px -1px rgba(82, 82, 82, 0.75);
`;

const Text = styled.div`
  font-weight: 600;
  text-align: center;
  padding: 10px;
`;

const Button = styled.button`
  border: none;
  background-color: #a1cae2;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  outline: none;
  :hover {
    cursor: pointer;
    transition: all 0.4s;
    background-color: #62959c;
  }
`;

export { Container, Text, Button };
