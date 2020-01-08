import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";



export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link to={"/"}>
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </Link>
      </li>
     
    </ul>
    <form class="form-inline ">

      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      <Link to={"/SignIn"}>
      <button type="button" class="btn btn-success">Signe in </button>
      
      </Link>
      <Link to={"/SignUp"}>
<button type="button" class="btn btn-danger">Signe up</button>
</Link>
    </form>
  </div>
</nav>
    
        </div>
    )
        
    
    }
