import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 10px;
  width: max-content;
`;
export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding-bottom: 15px;
  border-bottom: 1px solid #b5b5b5;

  p {
    font-weight: 400;
    font-size: 17px;
    color: #9a9a9d;
  }
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px 15px;
  padding: 10px;
  img {
    border-radius: 10px;
    width: 120px;
  }

  .quantity-container {
    display: flex;
    gap: 20px;
    align-items: flex-start;

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }

  .quantity-button:active {
    background-color: #252525;
  }

  .total-container {
    display: flex;
    gap: 30px;
    align-items: flex-start;

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    button:hover {
      opacity: 0.6;
      transition: 0.3s;
    }
  }

  p {
    color: #000;
    font-weight: 500;
    font-size: 18px;
  }

  p:first-of-type {
    font-weight: 400;
    font-size: 16px;
  }
`;

export const ContainerCarrinhoVazio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100px;
  }
`;

export const ImgLixeira = styled.img`
  /* width: 30px; */
`;

export const EmptyCart = styled.p`
  padding: 20px;
  font-weight: 500;
`;
