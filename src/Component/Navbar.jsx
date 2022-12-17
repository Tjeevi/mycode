import React from 'react'
import img1 from "./Assets/logoo.jfif"
import "./Style.css";
import {NavLink,} from "react-router-dom"

function Navbar() {
  return (
    <div className='nav'>
     <img src={img1} className="image" width={150} height="150px" />
 
    <div className='navbar'>
     <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button id="toggle" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
   <div  class="navbar-nav">
       <NavLink id="tanvi" to="/" exact><a class="nav-link" id="design">Home</a></NavLink>
       <NavLink id="tanvi" to="aboutpage" exact><a  class="nav-link"  id="design">About</a></NavLink>
       <NavLink id="tanvi" to="productpage" exact><a class="nav-link"  id="design">Product</a></NavLink>
       <NavLink id="tanvi" to="contactpage" exact><a class="nav-link"  id="design">Contact</a></NavLink>
      </div>
    </div>
  </div>
</nav>
</div> 
    
</div>
  )
}

export default Navbar











