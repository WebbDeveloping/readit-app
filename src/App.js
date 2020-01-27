import React from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

import TopNav from './components/TopNav/TopNav';
import SinglePost from './components/Posts/SinglePost';
import SubHome from './components/Subs/SubHome';
import AddPost from './components/Posts/AddPost';

const App = () => {
  return (
    <div className='App'>
      <TopNav />

      <Switch>
        <Route path='/PostPage/:id' component={SinglePost} />
        <Route path='/SubHome/:id' component={SubHome} />
        <Route path='/AddPost/:id' component={AddPost} />

        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
};

export default App;
