import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";

import LoginImg from "../../assets/login-image.svg";
import Logo from "../../assets/logo-codeburguer.svg";
import { Button } from "../../components";
import { useUser } from "../../hooks/UserContext";
import api from "../../services/api";
import {
  Container,
  LoginImage,
  ContainerItens,
  LabelInput,
  Input,
  ErrorMessage,
  SignInLink,
} from "./styles";

export function Login() {
  const history = useHistory();

  const { putUserData } = useUser();
  const schema = yup.object({
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("O e-mail é obrigatório"),
    password: yup
      .string()
      .min(6, "A senha tem que ter no mínimo 6 digítos")
      .required("A senha é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) => {
    const { data } = await toast.promise(
      api.post("sessions", {
        email: clientData.email,
        password: clientData.password,
      }),
      {
        pending: "Verificando seus dados",
        success: "Login efetuado com sucesso!",
        error: "Verifique seu e-mail e senha 🤯",
      }
    );

    putUserData(data);

    setTimeout(() => {
      history.push("/");
    }, 1000);
  };

  return (
    <Container>
      <LoginImage src={LoginImg} alt="Imagem de um hambuguer" />
      <ContainerItens>
        <img src={Logo} alt="logo-codeburguer" />
        <h1>Entrar</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <LabelInput>E-mail</LabelInput>
          <Input
            {...register("email")}
            type="email"
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <LabelInput>Senha</LabelInput>
          <Input
            {...register("password")}
            type="password"
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{ margin: "auto", marginTop: "5vh" }}>
            Entrar
          </Button>
        </form>
        <SignInLink>
          Não possui conta?{" "}
          <Link to={"/register"} style={{ color: "white" }}>
            Criar Conta
          </Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  );
}
