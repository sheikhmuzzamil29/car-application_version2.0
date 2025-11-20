import axios from 'axios'
import registerstyle from '../css/carstyle.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';
function Register()
{

    const [email,setemail]=useState();
    const [pass,setpass]=useState();
    const [cpass,setcpass]=useState();
    function getregister(){

        axios.post('/api/admin/getregister',{
            email:email,
            password:pass,
            cpassword:cpass
        }).then((response)=>{
            console.log(response)
        })
    }
    return(
        <>

        <form action='/api/admin/getregister' method='post'>
        <div className={registerstyle.logindashboard}>
        <div className={registerstyle.input}><label><h1>Register</h1></label></div>
            <div className={registerstyle.input}><label>Email:</label></div>
            <div className={registerstyle.input}><input type='email' className={registerstyle.inputtext} value={email} name='email' onChange={(e)=>setemail(e.target.value)}/></div>
            <div className={registerstyle.input}><label>Password:</label></div>
            <div className={registerstyle.input}><input type='password' className={registerstyle.inputtext} name='password' value={pass} onChange={(e)=>setpass(e.target.value)}/></div>
            <div className={registerstyle.input}><label>Confirm password:</label></div>
            <div className={registerstyle.input}><input type='password' className={registerstyle.inputtext} name='cpassword' value={cpass}onChange={(e)=>setcpass(e.target.value)}/></div>
            <div className={registerstyle.input}><input type='radio' name='account' value='user'/>  <lable>user</lable> <input type='radio' name='account' value='admin'/>  <lable>admin</lable></div>
            <div className={registerstyle.input}><button className={registerstyle.btnstyle}>Register</button></div>
        </div>
        </form>
        </>
    )
}
export default Register