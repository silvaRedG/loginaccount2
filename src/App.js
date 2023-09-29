import React from "react";
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
     <Image/>
      {/* Criando os itens do forms da applicação*/}
      <ContainerItens>

        <H1>Olá!!!</H1>

        <InputLabel>Name</InputLabel>
        <Input placeholder="Name"/>

        <InputLabel>Age</InputLabel>
        <Input placeholder="Age"/>

        <InputLabel>Email</InputLabel>
        <Input placeholder="Email"/>

        <Button>Register</Button>

      </ContainerItens>
      {/* Fim dos Itens */}
    </Container>
  )
}

export default App