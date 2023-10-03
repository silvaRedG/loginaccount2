import React from "react";
import People from "./assets/people.svg";
import Arrow from "./assets/arrow.svg"

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from "./styles";

function App() {
  return (
    <Container>

      <Image alt="logo-imagem" src={People} />

      {/* Criando os itens do forms da applicação*/}
      <ContainerItens>
        <H1>Olá!!!</H1>

        <InputLabel>Name</InputLabel>
        <Input placeholder="Name" autoFocus />

        <InputLabel>Age</InputLabel>
        <Input placeholder="Age" />

        <InputLabel>Email</InputLabel>
        <Input placeholder="Email" />

        <Button>Register <img alt="arrow" src={Arrow}/></Button>
      </ContainerItens>
      {/* Fim dos Itens */}
    </Container>
  );
}

export default App;
