import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useGlobal } from 'reactn';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { HomeScreen } from './screens/Home/HomeScreen';

const StyledTest = styled.h1`
  color: #f0f;
`

function App() {
  const [test] = useGlobal('test')
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
