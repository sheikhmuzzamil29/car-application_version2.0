import { Link, Outlet } from 'react-router-dom'
import admindashboard from '../css/carstyle.module.css'
import image from '../images/homeicon5.png'
import carimage from '../images/caricon2.png'
import autopartimage from '../images/particon2.png'
import bikeimage from '../images/bikeimage.png'
import adimage from '../images/adimg.png'
import logoutimage from '../images/logout.jpg'
import { useState,useEffect } from 'react'
import axios from 'axios'
function Dashboard(){

    const [profiledata,setprofiledata]=useState()
    const [acctype,setacctype]=useState()
    useEffect(()=>{
        console.log('dashboard data')
        
        axios.get('/api/admin/profile').then((result)=>{
          if(result)
          {
            console.log(result)
            setprofiledata(result.data.profile.username)
            setacctype(result.data.profile.accounttype)
          }
        })
      },[])
    return(
        <>
        <div >
        
        
            <ul className={admindashboard.admin_ul}>
            <li>{profiledata}</li>
                <li><Link to='home'><img  src={image} alt='img' width={30} className={admindashboard.btnspace}/>Home</Link></li>
                <li><Link to='newcars'><img  src={carimage} alt='img' width={30} />New cars</Link></li>
                <li><Link to='used_car'><img  src={carimage} alt='img' width={30} />used cars</Link></li>
                <li><Link to='autostore'><img  src={autopartimage} alt='img' width={30} />Autostore</Link></li>
                <li><Link to='bikes'><img  src={bikeimage} alt='img' width={30} />Bikes</Link></li>
                <li><Link to='ad'><img  src={adimage} alt='img' width={30} />Post an ad</Link></li>
                <li>
                  <form action='/api/admin/logout' method='post'>
                 <button><img  src={logoutimage} alt='img' width={30} />Logout</button> 
                  </form>
                  </li>
            </ul>
        
        <div  className={admindashboard.admin_nav}><div className={admindashboard.linkstyle}>{acctype}</div>  <Outlet/></div>
        </div>
        </>
    )
}
export default Dashboard