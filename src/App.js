import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage.component.jsx';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/homepage/shop/shop.component.jsx';

function App(){
  return(
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  )
}
export default App;
