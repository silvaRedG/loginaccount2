import React, { useState} from "react";
import People from "../../assets/america-1861417.svg";
import Arrow from "../../assets/arrow.svg";
import axios from "axios";

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
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const { name, age, email } = formData;


  async function addUser() {
    try {
      const response = await axios.post("http://localhost:3011/users", formData);
      setUsers([...users, response.data]);
      setFormData({ name: "", age: "", email: "" });
    } catch (error) {
      console.error("Erro ao adicionar usuário:", error);
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }


  return (
    <Container>
      <Image alt="logo-img" src={People} />
      <ContainerItens>
        <H1>Welcome - React Forms</H1>
        <InputLabel>Name</InputLabel>
        <Input
          name="name"
          value={name}
          onChange={handleInputChange}
          placeholder="Name"
          autoFocus
        />
        <InputLabel>Age</InputLabel>
        <Input
          name="age"
          value={age}
          onChange={handleInputChange}
          placeholder="Age"
        />
        <InputLabel>Email</InputLabel>
        <Input
          name="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <Button onClick={addUser} type="submit">
          Register <img alt="seta" src={Arrow} />
        </Button>
        
      </ContainerItens>
    </Container>
  );
}

export default App;
