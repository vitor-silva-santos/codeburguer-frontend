/* eslint-disable prettier/prettier */
import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;

  display: flex;
  gap: 12px;
  padding: 15px;
  width: max-content;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Image = styled.img`
  border-radius: 15px;
  width: 150px;
`;

export const ProductName = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #000000;
`;

export const ProductPrice = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #000000;

  margin-top: 40px;
`;
