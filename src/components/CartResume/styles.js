/* eslint-disable prettier/prettier */
import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 15px;
  display: flex;
  gap: 60px;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 24px;

  .container-top {
    display: grid;
    grid-template-areas:
      "title title"
      "items items-price"
      "delivery-tax delivery-tax-price";

    grid-gap: 14px 65px;

    .title {
      grid-area: title;
      margin-bottom: 10px;
    }

    .items {
      grid-area: items;
    }

    .items-price {
      grid-area: items-price;
    }

    .delivery-tax {
      grid-area: delivery-tax;
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
    }
  }

  .container-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 24px;
  }
`;
