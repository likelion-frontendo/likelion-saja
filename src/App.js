import { Test } from "@components";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <h1>이건 h1 입니다</h1>
      <Container>
        <Test></Test>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100px;
  height: 50px;
  background: green;
  color: white;
`;
