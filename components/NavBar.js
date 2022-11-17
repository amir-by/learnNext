import React from 'react'
import  Link  from "next/link";
import { useRouter } from 'next/router';
import Image from 'next/image';

const NavBar = () => {
  const router = useRouter()
   console.log(router)
   return (
    <header>
      <nav className="navbar navbar-expand-md bg-light">
  <div className="container">
    {/* brand part */}
    <Link className="navbar-brand d-flex align-items-center" href="/">
      <Image src="/logo.png" alt="logo-img" width="50" height="50" />
      <span className='ms-2'>Sweety</span>
      </Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto ">

        <li className="nav-item">
          <Link className={"nav-link" + `${router.pathname ==='/'? 'active' : ""}`} aria-current="page" href="/"> 
             Home 
          </Link> 
        </li>
       
        <li className="nav-item">
          <Link className={"nav-link" + `${router.pathname ==='/about'? 'active' : ""}`}
            href="/about">
             About 
          </Link>
        </li>

        <li className="nav-item">
          <Link className={"nav-link" + `${router.pathname ==='/blog'? 'active' : ""}`}
           href='/blog'>
            Blog
          </Link>
        </li>

         
         
      </ul>
    </div>
  </div>
      </nav>
    </header>
  )
}

export default NavBar
