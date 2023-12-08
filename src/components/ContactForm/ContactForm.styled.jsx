import styled from 'styled-components';
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400 px;
  padding: 20px;
  /* border: 1px solid black; */
  justify-content: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
export const Label = styled.label`
  font-size: 20px;
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  padding: 8px 12px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #f6f0d0;
  margin-top: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const Button = styled.button`
  padding: 8px 12px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  border-radius: 4px;
  border: none;
  font: inherit;
  background-color: #f4df7f;
  color: inherit;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &:hover,
  &:focus {
    background-color: #1976d2;
    color: #fff;
  }
`;
