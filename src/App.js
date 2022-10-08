import Home from "./page/Home";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`