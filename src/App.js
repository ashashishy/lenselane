import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage.component.jsx';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/homepage/shop/shop.component.jsx';
import Header from './components/home/home.component';
function App(){
  return(
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  )
}
export default App;
