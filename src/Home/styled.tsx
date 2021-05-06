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
  height: 90%;
  width: 60%;
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
  margin-top: 20px;
  padding: 10px;
  outline: none;
`;

export const Button = styled.button`
  height: 50px;
  width: 340px;
  border: 1 solid #384952;
  border-radius: 5px;
  margin-top: 20px;
`;
