import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route } from 'react-router-dom';
import Home from '../containers/Home';
import Artist from '../components/artist/Artist';
import Header from '../components/Header';
import Recording from './recording/Recording';
import Lyrics from './lyrics/Lyrics';

export default function App() {
  return (  
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/artist/:id' component={Artist} />
        <Route path='/recording/:id' component={Recording} />
        <Route path='/lyrics' component={Lyrics}/>
      </Switch>
    </Router>
  );
}
