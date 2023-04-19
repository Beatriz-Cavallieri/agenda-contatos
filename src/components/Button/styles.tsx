import styled from "styled-components";

export const SubmitButtonSC = styled.button`
  background-color: #345782;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  margin: 20px 0;
`;

export const Button = styled.button`
  background-color: #345782;
  color: white;
  border: none;
  border-radius: 2rem;
  height: 2rem;
  align-items: center;
  margin: 1rem 0;
`;
export const RoundButtonSC = styled.button`
  width: 26px;
  height: 26px;
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 0.5rem;
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


export const ViewMoreButton = styled.button`
  background-color: #345782;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  cursor: pointer;
`;





