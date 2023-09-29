import styled from "styled-components";
import Background from "./assets/background1.svg"

export const Container = styled.div`

  {/*para inserir a imagem devo declarar o import primeiro
  em seguida atribuir a imagem dentro de uma url
  no formato parecido com template string*/}

background: url("${Background}");
background-size: cover;


`;

export const Image = styled.img``

export const ContainerItens = styled.div``


export const H1 = styled.h1`
`;

export const InputLabel = styled.p`
  
`;

export const Input = styled.input``

export const Button = styled.button``