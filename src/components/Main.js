import React from 'react';
import styled from 'styled-components';
import Middle from './Middle';
import Top from './Top';
import Donate from './Donate';
import Events from './Events';
import FundRaise from './FundRaise';

const Main = () => {
  return (
    <Container>
      <Top />
      <Middle />
      <Donate />
      <Events />
      <FundRaise />
    </Container>
  );
}

export default Main;

const Container = styled.div`
   display: flex;
   flex-direction: column;
`