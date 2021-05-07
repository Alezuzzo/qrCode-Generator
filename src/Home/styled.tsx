import styled from "styled-components";
import { color } from "../../constants/color";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${color.primary};
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  height: 80%;
  width: 40%;
  background: ${color.second};
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Image = styled.img`
  height: 340px;
  width: 340px;
`;

export const Input = styled.input`
  height: 50px;
  width: 340px;
  border: 1px solid #384952;
  border-radius: 5px;
  margin-top: 40px;
  padding: 10px;
  outline: none;
`;

export const Button = styled.button`
  height: 50px;
  width: 340px;
  background-color: ${color.third};
  border-style: none;
  border-radius: 10px;
  box-shadow: -1px 3px 5px #726e6e;
  margin-top: 40px;
  cursor: pointer;
  color: #ffff;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    background-color: #F3909F;
    color: #2E2E30;
  }
`;
