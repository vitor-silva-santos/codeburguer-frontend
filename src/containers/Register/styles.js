import styled from "styled-components";

import BackgroundLogin from "../../assets/background-login.svg";

export const Container = styled.div`
  min-height: 100vh;
  height: 100vh;
  width: 100vw;
  min-width: 100%;
  background-image: url("${BackgroundLogin}");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow-x: hidden;
`;

export const RegisterImage = styled.img`
  height: 90%;
  border-radius: 10px 0 0 10px;
`;

export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 90%;
  padding: 30px 60px;
  /* overflow-y: auto; */

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;

    margin-top: 3vh;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const LabelInput = styled.label`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;

  /* margin: 13px 0 5px 10px; */
  margin: ${(props) => (props.error ? "10px 0 5px 10px" : "15px 0 5px 10px")};
`;

export const Input = styled.input`
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${(props) => (props.error ? "2px solid #CC1717" : "none")};
  padding: 10px 10px;
`;

export const SignInLink = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  margin-top: 3vh;
  font-weight: 300;

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #cc1717;
  margin-top: 3px;
`;
