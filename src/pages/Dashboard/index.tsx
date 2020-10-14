import React, { useState, useEffect } from "react";
import { Container, Title, Form, Users, User } from "./styles";
import Logo from "../../assets/Logo.svg";
import { FiChevronRight } from "react-icons/fi";
import api from "../../services/api";

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState([]);

  return (
    <Container>
      <img src={Logo} alt="Logo Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input type="text" placeholder="Digite aqui" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Users>
        <User href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/37835413?s=460&u=3bf7f84ccac1d1f878fa6bab8e93963ea42bddf0&v=4"
            alt="Github avatar"
          />
          <div>
            <strong>vieiramauricio</strong>
            <span>I turn coffee into code</span>
          </div>
          <FiChevronRight size={20} />
        </User>

        <User href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/37835413?s=460&u=3bf7f84ccac1d1f878fa6bab8e93963ea42bddf0&v=4"
            alt="Github avatar"
          />
          <div>
            <strong>vieiramauricio</strong>
            <span>I turn coffee into code</span>
          </div>
          <FiChevronRight size={20} />
        </User>

        <User href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/37835413?s=460&u=3bf7f84ccac1d1f878fa6bab8e93963ea42bddf0&v=4"
            alt="Github avatar"
          />
          <div>
            <strong>vieiramauricio</strong>
            <span>I turn coffee into code</span>
          </div>
          <FiChevronRight size={20} />
        </User>

        <User href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/37835413?s=460&u=3bf7f84ccac1d1f878fa6bab8e93963ea42bddf0&v=4"
            alt="Github avatar"
          />
          <div>
            <strong>vieiramauricio</strong>
            <span>I turn coffee into code</span>
          </div>
          <FiChevronRight size={20} />
        </User>

        <User href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/37835413?s=460&u=3bf7f84ccac1d1f878fa6bab8e93963ea42bddf0&v=4"
            alt="Github avatar"
          />
          <div>
            <strong>vieiramauricio</strong>
            <span>I turn coffee into code</span>
          </div>
          <FiChevronRight size={20} />
        </User>

        <User href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/37835413?s=460&u=3bf7f84ccac1d1f878fa6bab8e93963ea42bddf0&v=4"
            alt="Github avatar"
          />
          <div>
            <strong>vieiramauricio</strong>
            <span>I turn coffee into code</span>
          </div>
          <FiChevronRight size={20} />
        </User>
      </Users>
    </Container>
  );
};

export default Dashboard;
