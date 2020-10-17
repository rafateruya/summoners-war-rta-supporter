import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useGlobal } from 'reactn';
import styled from 'styled-components';

const StyledTest = styled.h1`
  color: #f0f;
`

function App() {
  const [test] = useGlobal('test')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          {test}
        </p>
        <StyledTest>
          Styled Text Test
        </StyledTest>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
