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
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    box-shadow: 0 10px 16px rgba(0, 0, 0, 0.05);
  }
`;

export const Button = styled.button`
  background-color: rgba(51, 51, 51, 0.05);
  border-radius: 8px;
  border-width: 0;
  color: #333333;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  margin: 0;
  padding: 10px 12px;
  text-align: center;
  transition: all 200ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
`;
