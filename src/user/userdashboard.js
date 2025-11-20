import userdashboardstyle from '../css/carstyle.module.css'
import { Link,Outlet } from 'react-router-dom'
import image from '../images/homeicon5.png'
import carimage from '../images/caricon2.png'
import autopartimage from '../images/particon2.png'
import bikeimage from '../images/bikeimage.png'
import adimage from '../images/adimg.png'
import logoutimage from '../images/logout.jpg'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Userdashboard(){

    const [profiledata,setprofiledata]=useState()
    useEffect(()=>{

        axios.get('/api/users/profile').then((response)=>{
            console.log(response)
            if(response)
                {
                  console.log(response)
                  setprofiledata(response.data.profile.accounttype)
                  //setacctype(response.data.profile.accounttype)
                }
        })
    },[])
    return(
        <>
      
         <div >
                
                
                    <ul className={userdashboardstyle.admin_ul}>
                    <li></li>
                        <li><Link to='home'><img  src={image} alt='img' width={30} className={userdashboardstyle.btnspace}/>Home</Link></li>
                        <li><Link to='carusers'><img  src={carimage} alt='img' width={30} />New cars</Link></li>
                        <li><Link to='oldcars'><img  src={carimage} alt='img' width={30} />used cars</Link></li>
                        <li><Link to='userautopart'><img  src={autopartimage} alt='img' width={30} />Autostore</Link></li>
                        <li><Link to='userbike'><img  src={bikeimage} alt='img' width={30} />Bikes</Link></li>
                        <li><Link to='ad'><img  src={adimage} alt='img' width={30} />Post an ad</Link></li>
                        <li>
                          <form action='/api/admin/logout' method='post'>
                         <button><img  src={logoutimage} alt='img' width={30} />Logout</button> 
                          </form>
                          </li>
                    </ul>
                 <div  className={userdashboardstyle.admin_nav}>
                    <div className={userdashboardstyle.linkstyle}>{profiledata}</div>
                    <Outlet/></div>
                 
                </div>
                </>
    )
    
}
export default Userdashboard