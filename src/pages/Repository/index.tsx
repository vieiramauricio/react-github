import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { useRouteMatch, Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { FiChevronRight } from "react-icons/fi";
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
      <div>
        <img src={Logo} alt="Logo Github Explorer" />
        <Link to="/">Voltar</Link>
      </div>

      {repository && (
        <>
          <div>
            <div>
              <img src={repository.owner.avatar_url} alt="Github avatar" />
              <div>
                <strong>{params.repository}</strong>
                <span>Pretty website for a garden school</span>
              </div>
            </div>
            {/* Informações do owner */}
            <div></div>
            {/* Detalhes  */}
          </div>

          {issues.map((issue) => (
            <div>
              <div>
                <div>
                  <strong>{issue.title}</strong>
                  <span>{issue.user.login}</span>
                </div>
                <FiChevronRight size={20} />
              </div>
            </div>
          ))}
        </>
      )}
    </Container>
  );
};

export default Repository;
