import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 7px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing:border-box;
  outline: none;
`;

export default function Input(props) {
  return <StyledInput {...props} />
}