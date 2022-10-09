import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <Header />
      <Navbar />
      <Main />
      <Contact />
    </Container>
  );
}

export default Home;

const Container = styled.div`
   width: 100vw;
   display: flex;
   flex-direction: column;
   min-height: 100vh;
   width: 100vw;
`