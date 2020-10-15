import React, { useEffect, useState } from "react";
import { Container, Navbar, Hero, Numbers, Issue } from "./styles";
import { useRouteMatch, Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import api from "../../services/api";
import axios from "axios";

interface RouteParams {
  repository: string;
}

interface Owner {
  avatar_url: string;
}

interface Repository {
  full_name: string;
  description: string;
  forks: number;
  stargazers_count: number;
  owner: Owner;
}

interface User {
  login: string;
}
interface Issue {
  id: number;
  title: string;
  user: User;
  html_url: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RouteParams>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    const getDetails = async () => {
      const [responseRepository, responseIssues] = await axios.all([
        api.get(`/repos/${params.repository}`),
        api.get(`/repos/${params.repository}/issues`),
      ]);

      setRepository(responseRepository.data);
      setIssues(responseIssues.data);
    };

    getDetails();
  }, [params.repository]);

  return (
    <Container>
      <Navbar>
        <img src={Logo} alt="Logo Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </Navbar>

      {repository && (
        <>
          <div>
            <Hero>
              <img src={repository.owner.avatar_url} alt="Github avatar" />
              <div>
                <strong>{repository.full_name}</strong>
                <span>{repository.description}</span>
              </div>
            </Hero>
            <Numbers>
              <div>
                <h4>{repository.stargazers_count}</h4>
                <span>Stars</span>
              </div>
              <div>
                <h4>{repository.forks}</h4>
                <span>Forks</span>
              </div>
              <div>
                <h4>{issues.length}</h4>
                <span>Issues</span>
              </div>
            </Numbers>
          </div>

          {issues.map((issue) => (
            <Issue key={issue.id} href={issue.html_url} target="_blank">
              <div>
                <strong>{issue.title}</strong>
                <span>{issue.user.login}</span>
              </div>
              <FiChevronRight size={20} />
            </Issue>
          ))}
        </>
      )}
    </Container>
  );
};

export default Repository;
