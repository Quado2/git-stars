
import styled from "styled-components";


import GitStars from "./pages/git-stars";

const AppWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  
`

function App() {

  return (
    <AppWrapper>
      <GitStars />
    </AppWrapper>
  );
}

export default App;
