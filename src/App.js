import React from 'react';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import Home from './pages/Home/index.js'
import CityList from './pages/CityList/index.js'

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
        <Link to='/home'>首页</Link>
        </li>
        <li>
      <Link to='/citylist'>城市选择</Link>
        </li>
      </ul>
      <Route path='/home' component={Home}></Route>
      <Route path='/citylist' component={CityList}></Route>
    </div>
    </Router>
  );
}

export default App;
