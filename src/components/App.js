import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route } from 'react-router-dom';
import Home from '../containers/Home';
import Artist from './Artist/Artist.js';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/artist' component={Artist} />
      </Switch>
    </Router>
  );
}
