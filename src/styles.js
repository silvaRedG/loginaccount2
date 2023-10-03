import styled from "styled-components";
import Background from "./assets/background1.svg";

export const Container = styled.div`
   {
    /*para inserir a imagem devo declarar o import primeiro
  em seguida atribuir a imagem dentro de uma url
  no formato parecido com template string*/
  }

  background: url("${Background}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;

  min-height:100vh;

  gap: 40px;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const ContainerItens = styled.div`
  border-radius: 61px 61px 0px 0px;
  background: linear-gradient(
    157deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );

  min-height:100vh;

  padding: 50px 36px;

  display: flex;
  flex-direction: column;

  
`;

export const H1 = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-bottom: 80px;
`;

export const InputLabel = styled.p`
  color: #eeeeee;
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  line-height: 22px; /* 122.222% */
  letter-spacing: -0.408px;
`;

export const Input = styled.input`
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  width: 342px;
  height: 58px;
  padding-left: 25px;
  margin-bottom: 35px;

  border: none;
  outline: none;

  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
`;

export const Button = styled.button`
  border-radius: 14px;
  background: var(--templates-5-color-1, rgba(0, 0, 0, 0.8));

  width: 342px;
  height: 74px;
  color: #eee;

  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 28px;

  border: none;
  background: rgba(0,0,0,0.8)
  border-radius: 14px;
  outline: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &:hover{
    opacity: 0.8;
  }
`;
