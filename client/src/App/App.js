import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import List from './pages/List';
import MyNavbar from './Components/MyNavbar';

function App() {
  return (
    <div className="App">
      <div>
        <MyNavbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
