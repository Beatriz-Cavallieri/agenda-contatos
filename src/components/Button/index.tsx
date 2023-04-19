import styled from "styled-components";

export const TextButton = styled.button`
  align-items: center;
  justify-content: center;
    background-color: transparent;
    color: #345782;
    text-decoration: underline;
    border: none;
    border-radius: 5px;
    margin: 0 1rem;
    cursor: pointer;

    &:hover {
    background-color: #345782;
    color: white;
  }
  `;

export const ColorButton = styled.button`
    background-color: #345782;
    color: white;
    border: none;
    border-radius: 10px;
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    cursor: pointer;

      &:hover {
    background-color: white;
    color: #345782;
    border: 1px solid #345782;
  }
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






