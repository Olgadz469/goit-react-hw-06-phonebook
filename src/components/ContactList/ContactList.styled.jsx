import styled from 'styled-components';
export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  padding: 0;
  gap: 5px;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  padding: 4px;
  border-bottom: 1px solid #2f2f37;
`;
export const Button = styled.button`
  display: inline-flex;
  border-radius: 4px;
  border: none;
  /* font: inherit; */
  background-color: #f4df7f;
  color: inherit;
  padding: 4px 8px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &:hover,
  &:focus {
    background-color: #1976d2;
    color: #fff;
  }
`;
