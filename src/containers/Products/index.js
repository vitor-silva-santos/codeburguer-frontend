import React, { useEffect, useState } from "react";

import ProductsLogo from "../../assets/products-logo.svg";
import { CardProduct } from "../../components";
import api from "../../services/api";
import formatCurrency from "../../utils/formatCurrency";
import {
  Container,
  ProductImg,
  CategoryButton,
  CategoriesMenu,
  ProductsContainer,
} from "./styles";

export function Products() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    async function loadCategory() {
      const { data } = await api.get("categories");

      const newCategories = [{ name: "Todas", id: 0 }, ...data];

      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data: allProducts } = await api.get("products");

      const newProduct = allProducts.map((product) => {
        return {
          ...product,
          formatedPrice: formatCurrency(product.price),
        };
      });

      setProducts(newProduct);
    }

    loadCategory();
    loadProducts();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products);
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === activeCategory
      );

      setFilteredProducts(newFilteredProducts);
    }
  }, [activeCategory, products]);

  return (
    <Container>
      <ProductImg src={ProductsLogo} alt="logo dos products" />

      <CategoriesMenu>
        {categories &&
          categories.map((category) => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id);
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>

      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  );
}
