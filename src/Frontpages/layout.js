import React from "react"
import { Link, Outlet } from "react-router-dom"
import layoutstyle from '../css/carstyle.module.css'
function Layout(){

    return(
        <>
        <nav >
          <ul className={layoutstyle.navheader}>
            <li>
            <Link to='/'>Home</Link>
            </li>
         <li>
         <Link to='login'>Login</Link>
         </li>
            <li> <Link to='about'>About</Link>
            </li>
           

          </ul>
            
        </nav>
        <Outlet/>
        </>
    )

}
export default Layout