import styled from "styled-components";

export const ContainerButton = styled.button`
  width: ${(props) => props.width || "182.81px"};
  height: 36.13px;
  background: #9758a6;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: 0.3s;
  }

  &:active {
    opacity: 0.6;
    transition: 0.3s;
  }

  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #eeeeee;
`;
