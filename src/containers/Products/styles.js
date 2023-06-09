import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 72px);
  background: #e5e5e5;
`;

export const ProductImg = styled.img`
  width: 100%;
`;

export const CategoriesMenu = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin-top: 20px;
`;

export const CategoryButton = styled.button`
  border: none;
  padding-bottom: 5px;
  border-bottom: ${(props) => props.isActiveCategory && "2px solid #9758A6"};
  cursor: pointer;
  background: none;

  font-weight: 400;
  font-size: 17px;
  color: ${(props) => (props.isActiveCategory ? "#9758A6" : "#9a9a9d")};
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, auto));
  gap: 20px;
  padding: 60px;
  justify-items: center;
  margin-top: 20px;
`;
