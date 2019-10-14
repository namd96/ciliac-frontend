import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import Chat from './pages/chat'
import Toolbar from './layout/toolbar'
import {
  BrowserRouter as Router,
  Link,
  withRouter,
  Route,
  Switch,
} from 'react-router-dom';
function App() {
  return (
      <div>
        <Toolbar />
        <Switch>
          < Route path="/chat" component={Chat} />
          < Route path="/" component={Home} />
        </Switch>
      </div>


  );
}

export default App;
