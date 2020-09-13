import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Skills from './pages/Skills';
import ShoutOuts from './pages/ShoutOuts';
import Experiences from './pages/Experiences';
import MyNavbar from './Components/MyNavbar';

function App() {
  return (
    <div className="App">
      <div>
        <MyNavbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/skills' component={Skills}/>
          <Route path='/experiences/:experienceId' component={Experiences}/>
          <Route path='/shout-outs' component={ShoutOuts}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
