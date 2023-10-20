import styled from "styled-components";



/*para inserir a imagem devo declarar o import primeiro
  em seguida atribuir a imagem dentro de uma url
  no formato parecido com template string*/

export const Container = styled.div`

  
background-image: linear-gradient(to top, #30c3d0 0%, #330867 100%);


display: flex;
flex-direction: column;
align-items: center;
gap: 40px;

min-height: 100vh;




`;

export const Image = styled.img`

margin-top: 30px;
`

export const ContainerItens = styled.div`

border-radius: 61px 61px 0px 0px;
background: linear-gradient(157deg, 
    rgba(255, 255, 255, 0.60) 0.84%,
    rgba(255, 255, 255, 0.60) 0.85%,
    rgba(255, 255, 255, 0.15) 100%);


    backdrop-filter: blur(45px);

    padding: 50px 36px;

    display: flex;
    flex-direction: column;
    
    min-height: 100vh;

`


export const H1 = styled.h1`

color: #1C1C1C;
text-align: center;
font-size: 34px;
font-style: normal;
font-weight: 700;
line-height: normal;

margin-bottom: 80px;

`;


export const Button = styled.button`

border-radius: 14px;
background: transparent;

width: 342px;
height: 74px;
margin-top: 20px;

cursor: pointer;

color: #FFF;
font-style: normal;
font-size: 17px;
font-weight: 700;
line-height: 28px; /* 164.706% */

border: 1px solid #FFF;

/* Aplicando display flex pra ajustar o button e img dentro dele */
display: flex;
justify-content: center;
align-items: center;
gap:20px;

margin-top: 120px;



/* Aplicando efeito hover dentro do react, sempre utilizar o "&"*/

&:hover{
  opacity: 0.5;
}

&:active{
  opacity: 0.9;
}


img{
  transform: rotateY(180deg);
}

`

export const Users = styled.li`

display: flex;
justify-content: space-around;
align-items: center;

border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

width: 342px;
height: auto;

outline: none;
border: none;

margin-top: 20px;


p{
  color: #fff;
  font-size: 20px;
  text-align: left;
}

button{
  background: none;
  border: none;
  cursor: pointer;
}


`


