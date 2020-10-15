import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.section`
  max-width: 992px;
  margin: 0 auto;
  width: 95%;
  padding: 40px 0;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;

  a {
    color: #a8a8b3;
    display: flex;
    align-items: center;
    font-weight: bold;

    &:hover {
      svg {
        transform: translateX(-5px);
      }
    }

    svg {
      margin-right: 8px;
      transition: all 0.3s ease-in;
    }
  }
`;

const Hero = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 25px;
  }

  strong {
    font-size: 32px;
    color: #3d3d4d;
  }

  span {
    display: block;
    color: #737380;
  }
`;

const Numbers = styled.div`
  display: flex;
  margin: 40px 0;

  div + div {
    padding-left: 80px;
  }

  h4 {
    font-size: 36px;
    color: #3d3d4d;
  }

  span {
    font-size: 20px;
    color: #737380;
  }
`;

const Issue = styled.a`
  background: #ffffff;
  border-radius: 5px;
  padding: 24px 28px;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  color: #3d3d4d;
  align-items: center;

  transition: all 0.3s ease-in;

  &:hover {
    transform: translateX(20px);
  }

  strong {
    font-size: 24px;
  }

  span {
    display: block;
    color: #a8a8b3;
    font-size: 18px;
  }
`;

export { Container, Navbar, Hero, Numbers, Issue };
