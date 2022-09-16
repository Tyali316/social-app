import React from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
   url("https://content.r9cdn.net/rimg/dimg/d2/08/ab044011-city-17741-1643cb4c34d.jpg?width=1366&height=768&xhint=1527&yhint=1111&crop=true") 
    center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #99badd;
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  display: block;
  margin: auto;
  margin-top: 15px;
`;

const Login = () => {
  
  const navigate = useNavigate();

  return <Container>
    <Wrapper>
      <Title>Welcome to SocialEating!</Title>
      <Button onClick={()=>navigate("/favorites")}>Get Started</Button>
    </Wrapper>
  </Container>
    
}
export default Login;