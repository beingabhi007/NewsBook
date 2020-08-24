import React from "react" 
import { useHistory } from 'react-router-dom';

const Navbar = () => { 

  const history = useHistory();
    return(
        <> 
  <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
  <span className="navbar-brand">NewsBook</span>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
       <span className="nav-link" onClick={ ()=> { history.push("/tech"); }} >Home</span>
      </li>
      <li className="nav-item active">
        <span className="nav-link">Tech</span>
     </li>
      <li className="nav-item active">
        <span className="nav-link" >Science</span>
      </li> 
      <li className="nav-item active">
        <span className="nav-link" >Health</span>
      </li> 
      <li className="nav-item active">
        <span className="nav-link" >Sports</span>
      </li>
       <li className="nav-item active">
        <span className="nav-link" >Arts</span>
      </li>
       <li className="nav-item active">
        <span className="nav-link" >Business</span>
      </li> 
      <li className="nav-item active">
        <span className="nav-link" >Real Estate</span>
      </li>
    
    </ul>
  
  </div>
</nav>
        </>
    )
} 

export default Navbar;