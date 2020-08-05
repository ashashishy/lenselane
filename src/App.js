import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/homepage/shop/shop.component';
import Header from './components/home/home.component';
import SignInAndSignUp from './pages/homepage/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App(){
  return(
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  )
}
export default App;
