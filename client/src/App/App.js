import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Info from './pages/Info';
import Experiences from './pages/Experiences';
import MyNavbar from './Components/MyNavbar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <MyNavbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/experiences/:experienceId' component={Experiences}/>
          <Route path='/info' component={Info}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
