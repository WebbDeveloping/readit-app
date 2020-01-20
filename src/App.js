import React from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import HomeTwo from './components/Home/HomeTwo';

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route path='/2' component={HomeTwo} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
};

export default App;
