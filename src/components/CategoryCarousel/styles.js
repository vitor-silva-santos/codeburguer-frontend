import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #e5e5e5;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background-color: #9758a6;
    color: #e5e5e5;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #e5e5e5;
    color: #9758a6;
  }

  .rec.rec-arrow:active {
    opacity: 0.5;
  }

  .rec.rec-arrow:disabled {
    background-color: #bebebf;
    color: #e5e5e5;
    border: none;
  }
`;

export const CategoryImg = styled.img``;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 20px;
`;

export const Image = styled.img`
  border-radius: 15px;
  width: 200px;
`;
export const Button = styled(Link)`
  background: #9758a6;
  box-shadow: 0px 5px 5px rgba(151, 88, 166, 0.22);
  border-radius: 8px;
  border: none;
  height: 50px;
  text-decoration: none;
  display: grid;
  place-items: center;

  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
    transition: 0.1s;
    transform: scale(0.98);
  }
`;
