import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { HomeScreen } from './screens/Home/HomeScreen';
import { BattleDraftingSupportScreen } from './screens/BattleDraftingSupport/BattleDraftingSupportScreen';
import styled from 'styled-components';

const AppScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`

function App() {
  return (
    <Router>
      <AppScreenContainer>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/drafting">Drafting Support</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/drafting">
            <BattleDraftingSupportScreen />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </AppScreenContainer>
    </Router>
  );
}

export default App;
