import React, { useState, FormEvent } from "react";
import { Container, Title, Form, Repositories, Repository } from "./styles";
import Logo from "../../assets/Logo.svg";
import { FiChevronRight } from "react-icons/fi";
import api from "../../services/api";

interface Owner {
  avatar_url: string;
}
interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  owner: Owner;
}

const Dashboard: React.FC = () => {
  const [login, setLogin] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const handleForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (login) {
      getRepositories(login);
    }
  };

  const getRepositories = async (login: string) => {
    try {
      const response = await api.get<Repository[]>(`/${login}/repos`);
      setRepositories(response.data);
      setLogin("");
      // console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <img src={Logo} alt="Logo Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Digite o usuário aqui"
          onChange={(e) => setLogin(e.target.value)}
          value={login}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map((repository) => (
          <Repository
            key={repository.id}
            href={repository.html_url}
            target="_blank"
          >
            <img src={repository.owner.avatar_url} alt="Github avatar" />
            <div>
              <strong>{repository.name}</strong>
              <span>{repository.description}</span>
              <p>{repository.language}</p>
            </div>
            <FiChevronRight size={20} />
          </Repository>
        ))}
      </Repositories>
    </Container>
  );
};

export default Dashboard;
