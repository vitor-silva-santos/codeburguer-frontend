import styled from "styled-components";

export const Container = styled.div`
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
  padding-bottom: 20px;

  p {
    font-weight: 700;
    font-size: 17px;
    color: #424242;

    &:nth-child(3) {
      color: #212121;
      margin-top: 8px;
    }
  }
`;

export const Image = styled.img`
  margin-bottom: 15px;
  border-radius: 15px;
  width: 200px;
`;
export const Button = styled.button`
  background: #9758a6;
  box-shadow: 0px 5px 5px rgba(151, 88, 166, 0.22);
  border-radius: 8px;
  border: none;
  height: 50px;
  margin-top: 15px;

  font-weight: 700;
  font-size: 14px;
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
