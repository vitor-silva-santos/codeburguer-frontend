import React from "react";

import ImgCarrinhoVazio from "../../assets/carrinho-vazio.png";
import LixeiraImg from "../../assets/lixeira.png";
import { useCart } from "../../hooks/CartContext";
import formatCurrency from "../../utils/formatCurrency";
import {
  Container,
  Header,
  Body,
  EmptyCart,
  ContainerCarrinhoVazio,
  ImgLixeira,
} from "./styles";

export function CartItems() {
  const { cartProducts, increaseProducts, decreaseProducts, deleteProduct } =
    useCart();

  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p style={{ paddingRight: 30 }}>Quantidade</p>
        <p>Total</p>
        <p></p>
      </Header>

      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map((product) => (
          <Body key={product.id}>
            <img src={product.url} alt={`Imagem do produto: ${product.name}`} />
            <p>{product.name}</p>
            <p>{product.formatedPrice}</p>

            <div className="quantity-container">
              <button
                className="quantity-button"
                onClick={() => decreaseProducts(product.id)}
              >
                &#9866;
              </button>
              <p>{product.quantity}</p>
              <button
                className="quantity-button"
                onClick={() => increaseProducts(product.id)}
              >
                &#10010;
              </button>
            </div>

            <div className="total-container">
              <p>{formatCurrency(product.quantity * product.price)}</p>
              <button onClick={() => deleteProduct(product.id)}>
                <ImgLixeira src={LixeiraImg} style={{ width: "30px" }} />
              </button>
            </div>
          </Body>
        ))
      ) : (
        <ContainerCarrinhoVazio>
          <EmptyCart>Carrinho Vazio</EmptyCart>
          <img src={ImgCarrinhoVazio} alt="Carrinho vazio" />
        </ContainerCarrinhoVazio>
      )}

      {/* {cartProducts &&
        cartProducts.map((product) => (
          <Body key={product.id}>
            <img src={product.url} alt={`Imagem do produto: ${product.name}`} />
            <p>{product.name}</p>
            <p>{product.formatedPrice}</p>
            <p>{product.quantity}</p>
            <p>{formatCurrency(product.quantity * product.price)}</p>
          </Body>
        ))} */}
    </Container>
  );
}
