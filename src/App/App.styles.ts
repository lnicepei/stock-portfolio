import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1;
  margin: 5px;
  padding: 5px;
  border: 1px solid #e7ecef;
  box-shadow: 0 2px 4px rgba(33, 36, 41, 0.05);
  box-sizing: border-box;
  border-radius: 10px;
  transition: all 0.1s ease-in-out;
  user-select: none;
  color: #fff;

  &:hover {
    box-shadow: 0 10px 16px rgba(0, 0, 0, 0.05);
  }
`;

export const Button = styled.button`
  background-color: black;
  border-radius: 8px;
  border-width: 0;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  margin: 0 10px;
  padding: 10px 12px;
  text-align: center;
  transition: all 200ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
`;
