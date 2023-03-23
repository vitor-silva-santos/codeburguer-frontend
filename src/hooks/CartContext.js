/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const updateLocalStorage = async (products) => {
    await localStorage.setItem(
      "codeBurguer:cartInfo",
      JSON.stringify(products)
    );
  };

  const putProductInCart = async (product) => {
    const cartIndex = cartProducts.findIndex((prod) => prod.id === product.id);

    let newCartProducts = [];
    if (cartIndex >= 0) {
      newCartProducts = cartProducts;
      newCartProducts[cartIndex].quantity++;

      setCartProducts(newCartProducts);
    } else {
      product.quantity = 1;
      newCartProducts = [...cartProducts, product];
      setCartProducts(newCartProducts);
    }

    await updateLocalStorage(newCartProducts);
  };

  const deleteProduct = async (productId) => {
    const newCart = cartProducts.filter((pd) => pd.id !== productId);

    setCartProducts(newCart);
    await updateLocalStorage(newCart);
  };

  const increaseProducts = async (productId) => {
    const newCart = cartProducts.map((product) => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product;
    });

    setCartProducts(newCart);

    await updateLocalStorage(newCart);
  };

  const decreaseProducts = async (productId) => {
    const cartIndex = cartProducts.findIndex((pd) => pd.id === productId);

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((product) => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product;
      });
      setCartProducts(newCart);
      await updateLocalStorage(newCart);
    }
  };

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem("codeBurguer:cartInfo");

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData));
      }
    };

    loadUserData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        putProductInCart,
        cartProducts,
        increaseProducts,
        decreaseProducts,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used UserContext");
  }

  return context;
};

CartProvider.propTypes = {
  children: PropTypes.node,
};
