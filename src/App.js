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

const user = [
  {id: Math.random, name:"Matheus", age:28},
  {id: Math.random, name:"Matheus", age:28},
]





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

    <ul>
      <li>
        {user[0].name} - {user[0].age}
      </li>
    </ul>

      </ContainerItens>
      {/* Fim dos Itens */}
    </Container>
  );
}

export default App;
