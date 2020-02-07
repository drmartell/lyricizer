import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route } from 'react-router-dom';
import Home from '../containers/Home';
import Artist from './Artist/Artist.js';
import Header from '../components/Header';

export default function App() {
  return (  
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/artist/:id' component={Artist} />
      </Switch>
    </Router>
  );
}
