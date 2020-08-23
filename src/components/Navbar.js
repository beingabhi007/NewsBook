import React from "react" 


const Navbar = () => {
    return(
        <> 
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/">NewsBook</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/">Tech</a>
      </li> <li class="nav-item active">
        <a class="nav-link" href="/">Science</a>
      </li> <li class="nav-item active">
        <a class="nav-link" href="/">Health</a>
      </li> <li class="nav-item active">
        <a class="nav-link" href="/">Sports</a>
      </li> <li class="nav-item active">
        <a class="nav-link" href="/">Arts</a>
      </li> <li class="nav-item active">
        <a class="nav-link" href="/">Book</a>
      </li> <li class="nav-item active">
        <a class="nav-link" href="/">Real Estate</a>
      </li>
    
    </ul>
  
  </div>
</nav>
        </>
    )
} 

export default Navbar;