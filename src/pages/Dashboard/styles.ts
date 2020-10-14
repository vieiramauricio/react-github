import styled from "styled-components";
import { shade } from "polished";

const Title = styled.h1`
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  max-width: 450px;
  margin-top: 100px;
`;

const Container = styled.section`
  max-width: 992px;
  margin: 0 auto;
  width: 95%;
  padding: 40px 0;
`;

const Form = styled.form`
  max-width: 700px;
  display: flex;
  margin-top: 40px;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    color: #ffffff;
    border-radius: 0px 5px 5px 0px;
    transition: all 0.3s ease-in;

    &:hover {
      background: ${shade(0.2, "#04d361")};
    }
  }
`;

const Users = styled.div`
  margin-top: 80px;
`;

const User = styled.a`
  max-width: 700px;
  display: flex;
  align-items: center;
  padding: 14px;
  background: #ffffff;
  border-radius: 5px;
  transition: all 0.3s ease-in;

  &:hover {
    transform: translateX(20px);
  }

  & + a {
    margin-top: 16px;
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  div {
    margin-left: 16px;

    strong {
      color: #3d3d4d;
    }

    span {
      display: block;
      color: #a8a8b3;
    }
  }

  svg {
    margin-left: auto;
    color: #c9c9d4;
  }
`;

export { Title, Container, Form, User, Users };
