import React from "react";
import { Container, Title, Form } from "./styles";
import Logo from "../../assets/Logo.svg";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="Logo Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input type="text" placeholder="Digite aqui" />
        <button type="submit">Pesquisar</button>
      </Form>
    </Container>
  );
};

export default Dashboard;
