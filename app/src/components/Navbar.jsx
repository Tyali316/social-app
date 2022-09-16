import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Search } from "@mui/icons-material";
import PersonPinIcon from '@mui/icons-material/PersonPin';

const Container = styled.div`
  width: 100%;
  height: 65px;
  background-color: black;
`;
const Wrapper = styled.div`
   padding: 3px 10px;
   display: flex;
   justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.section`
   flex: 2;
   display: flex;
   align-items: center;
   justify-content: flex-end;
`;
const SearchContainer = styled.div`
   border: none;
   display: flex;
   align-items: center;
   margin-left: 55px;
   padding: 3px;
   background-color: white;
`;


const Input = styled.input`
    border: none;
    height: 20px;
`;


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <PersonPinIcon style={{color: "white", fontSize: "54px", padding: "10px"}} />
            </Left>
            <Right>
              <ul style={{display: "flex"}}>
                <li style={{display: "flex"}}>
                  <Link style={{textDecoration: 'none', color: "white", fontSize: "20px", marginRight: "20px"}} to="/">Home</Link>
                </li>
                <li>
                  <Link style={{textDecoration: 'none', color: "white", fontSize: "20px", marginRight: "20px"}} to="/friends">Friends</Link>
                </li>
                <li>
                  <Link style={{textDecoration: 'none', color: "white", fontSize: "20px", marginRight: "20px"}} to="/favorites">Favorites</Link>
                </li>
             </ul>          
                  <SearchContainer>
                    <Input />
                    <Search placeholder="Search" style={{color:"black", fontSize: 16}}/>
                  </SearchContainer>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar;