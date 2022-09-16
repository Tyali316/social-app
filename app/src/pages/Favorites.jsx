import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const Container = styled.div`
  padding: 30px;
  background-color: #99badd;
`;
const Wrapper = styled.div`


`;

function Favorites() {
  return (
    <div>
      <Navbar />
      <Container>
      <Wrapper>
      <p style={{textAlign: "center", fontSize: "20px", padding: "20px"}}><b>Check out some of the nearby areas!</b></p>
      <iframe title='myFrame' style={{border:"0", margin: "auto", paddingLeft: "85px", alignContent: "center", width: "150vh", height: "100vh"}} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/search?q=restaurants%20near%20Charlotte%2C%20NC%2C%20USA&key=AIzaSyD4UsaXGbJeyqsxS-T7jq_bXZIUu_DT6aQ"></iframe>
      </Wrapper> 
      </Container> 
   </div>
  )
}

export default Favorites;