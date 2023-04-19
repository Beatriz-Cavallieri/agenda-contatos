import styled from "styled-components";

export const Button = styled.button`
  background-color: white;
  border: 1px solid black;
  padding:0 2rem;
  border-radius: 2rem;
  height: 2rem;
  color: black;
  align-items: center;
  margin: 1rem 0;
`;

export const RoundButtonSC = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-color: #3cba54;
  color: white;
  font-weight: bold;
  border-radius: 50%;
  cursor: pointer;
`;

export const RemoveButtonSC = styled(RoundButtonSC)`
  background-color: #ff595e;

    &:hover {
    background-color: #d82228;
  }
`;

export const AddButtonSC = styled(RoundButtonSC)`
  background-color: #3cba54;

  &:hover {
    background-color: #2c974b;
  }
`;
