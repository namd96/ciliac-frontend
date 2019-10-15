import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import Chat from './pages/chat'
import Toolbar from './layout/toolbar'
import GlobalContext from './context/globatState'
import {
  BrowserRouter as Router,
  Link,
  withRouter,
  Route,
  Switch,
} from 'react-router-dom';
function App() {
  return (
    <GlobalContext>

        <Toolbar />
      <div className="app-container">

        <Switch>
          < Route path="/chat" component={Chat} />
          < Route path="/" component={Home} />
        </Switch>
      </div>
    </GlobalContext>


  );
}

export default App;
