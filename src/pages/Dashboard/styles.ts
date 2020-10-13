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

export { Title, Container, Form };
