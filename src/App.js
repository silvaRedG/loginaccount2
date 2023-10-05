import React, { useState } from "react";
import People from "./assets/america-1861417.svg";
import Arrow from "./assets/arrow.svg";
import Trash from "./assets/trash.svg";

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
  Users,
} from "./styles";

function App() {
  /*
  
  -> nome variavel
 -> nome da função que vai atualizar a variavel
-> dentro do usestate valor inicial da aplicação 

2-> trecho dois vou criar um estado pra ser chamado,
evento onchange dos inputs pra cada campo
  
  */

  const [users, setUsers] = useState([]);
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();

  /*função onde clico no botão ele criar usuario e joga
  usuarios criado pra dentro do array
  
  estado no react é imutavel*/

  /*
      react hook = ferramenta auxiliar a criar estado no react

      exemplo abaixo de um comando react hook

      add dentro do user um array com objeto dentro
*/

  /* no js não preciso repetir os valores
propriedades mesmo nome da variavel se coloca uma vez só */

/*speed operator

 


*/

  function addUser() {
    setUsers([...users,{ id: Math.random(), name, age, email }]);
  }

  /*
     Funções OnChange para alterar campos na aplicação
*/
  function nameInput(event) {
    setName(event.target.value);
  }

  function ageInput(event) {
    setAge(event.target.value);
  }

  function emailInput(event) {
    setEmail(event.target.value);
  }

  /*
     Fim
*/

  // Estado => Variável

  return (
    <Container>
      <Image alt="logo-img" src={People} />
      {/* Criando os itens do forms da applicação*/}
      <ContainerItens>
        <H1>Welcome - React Forms</H1>

        <InputLabel>Name</InputLabel>
        <Input onChange={nameInput} placeholder="Name" autoFocus />

        <InputLabel>Age</InputLabel>
        <Input onChange={ageInput} placeholder="Age" />

        <InputLabel>Email</InputLabel>
        <Input onChange={emailInput} placeholder="Email" />

        <Button onClick={addUser} type="submit">
          Register <img alt="seta" src={Arrow} />
        </Button>

        {/*Loop intera array - > no react utilizao o map pra mapear
 item por item, inserido a função js map dentro da ul para retornar os users
 obs: no retorno da função estou inserindo HTML*/}

        {/*Sempre que for interar um item no react,
necessario ter um função key pra armazenar o id, 
para quando for deletar ele saber qual foi o item

*no campo abaixo foi criado um html onde inserimos uma UL
dentro dela utilizamos o metodo map para mapear o array e da função id*/}

        <ul>
          {users.map((users) => (
            <Users key={users.id}>
              <p>{users.name}</p>
              <p>{users.age}</p>
              <p>{users.email}</p>
              <button>
                <img alt="trash" src={Trash} />
              </button>
            </Users>
          ))}
        </ul>
      </ContainerItens>
      {/* Fim dos Itens */}
    </Container>
  );
}

export default App;
