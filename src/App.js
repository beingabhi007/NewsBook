import React from "react" 
import "./index.css"
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import Tech from './components/Tech'
import { BrowserRouter as Router, Switch, Route } from  "react-router-dom"

const App = () => {
  return(
    <>   
  <Navbar/>
  <Router>
  <Switch> 
  <Route exact path="/" component={Hero} />   
  <Route exact path="/tech" component={Tech} />  
  
  </Switch>  
  </Router>
    </>
  )
}  

export default App;