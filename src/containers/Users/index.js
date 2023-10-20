import React, { useState, useEffect } from "react";
import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";
import axios from "axios";

import {
  Container,
  Image,
  ContainerItens,
  H1,
  Button,
  Users,
} from "./styles";

function NewUsers() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const { name, age, email } = formData;

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("http://localhost:3011/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    }

    fetchUsers();
  }, []);




  async function deleteUser(userId) {
    try {
      await axios.delete(`http://localhost:3011/users/${userId}`);
      const newUsers = users.filter((user) => user.id !== userId);
      setUsers(newUsers);
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  }

  return (
    <Container>
      <Image alt="logo-img" src={Avatar} />
      <ContainerItens>
        <H1>Usuarios</H1>
        
        
        <ul>
          {users.map((user) => (
            <Users key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <p>{user.email}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="trash" src={Trash} />
              </button>
            </Users>
          ))}
        </ul>

        <Button>
        <img alt="seta" src={Arrow} />  Voltar 
        </Button>


      </ContainerItens>
    </Container>
  );
}

export default NewUsers;
