import React from 'react'
import { Nav } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { search } from '../redux/foodslice'

function Header() {
  const dispatch=useDispatch()
  return (
    <div><nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div class="container">
        <Link to={"/"}  style={{textDecoration:"none"}}>
          <div className="d-flex">
          <img src="http://www.clipartbest.com/cliparts/aiq/Ldb/aiqLdbbqT.png" style={{width:"55px"}} alt="" />
  <h1 className='text-dark ms-2'>FoooodBae</h1> </div>
        </Link>     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        {/* <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" href="#">Home
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </li>
        </ul> */}
        <form class="d-flex ms-auto">
          <input onChange={(e)=>dispatch(search(e.target.value))} class="form-control me-sm-2" type="search" placeholder="Search"/>
          <button class="btn btn-secondary my-2 my-sm-0" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
      </div>
    </div>
  </nav></div>
  )
}

export default Header