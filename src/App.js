import React from "react" 
import Hero from './components/Hero'; 
import Tech from './components/Tech';
import Science  from './components/Science';
import Health from './components/Health';
import Sports from './components/Sports';
import Arts from './components/Arts';
import Business from './components/Business';
import RealEstate from './components/RealEstate';

import "./index.css"
import { BrowserRouter as Router, Switch, Route } from  "react-router-dom"
import Navbar from "./components/Navbar";

const App = () => {
  return(
    <>   
  <Router>
  <Navbar/>
  <Switch> 
  <Route exact path="/" component={Hero}/>   
  <Route exact path="/tech" component={Tech}/>
  <Route exact path="/science" component={Science}/>  
  <Route exact path="/health" component={Health}/>  
  <Route exact path="/sports" component={Sports}/>  
  <Route exact path="/arts" component={Arts}/>  
  <Route exact path="/business" component={Business}/>  
  <Route exact path="/realestate" component={RealEstate}/>  

  
  </Switch>  
  </Router>
    </>
  )
}  

export default App;