import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const AppContainer = styled.div`
  margin-top: 60px;
  text-align: center;
  > img {
    width: 200px;
    animation: ${rotate} 6s linear infinite;
  }
`;

function App() {
  return (
    <AppContainer>
      <img src="/logo.svg" />
      <h1>Vue Application</h1>
    </AppContainer>
  )
}

export default App;
