import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage.component.jsx';
import {Switch, Route} from 'react-router-dom';
function CameraPage(){
  return(
  <div>
  <h1>Cameras</h1>
  </div>
)}


function App(){
  return(
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/cameras' component={CameraPage} />
      </Switch>
    </div>
  )
}
export default App;
