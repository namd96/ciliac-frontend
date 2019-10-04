import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import Chat from './pages/chat'
import {
  BrowserRouter as Router,
  Link,
  withRouter,
  Route,
  Switch,
} from 'react-router-dom';
function App() {
  return (
    <Switch>      
        < Route path="/chat" component={Chat}/>
        < Route path="/" component={Home}/>
    </Switch>
   
   
  );
}

export default App;
