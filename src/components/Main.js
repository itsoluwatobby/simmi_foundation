import React from 'react';
import styled from 'styled-components';
import Middle from './Middle';
import Top from './Top';
import Base from './Base';
import Cards from './Cards';
import FundRaise from './FundRaise';

const Main = () => {
  return (
    <Container>
      <Top />
      <Middle />
      <Base />
      <Cards />
      <FundRaise />
    </Container>
  );
}

export default Main;

const Container = styled.div`
   display: flex;
   flex-direction: column;
`