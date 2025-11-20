import { useState } from 'react'
import loginstyle from '../css/carstyle.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Login(){
    const [username,setusername]=useState();
    const [password,setpassword]=useState();
    function getlogin(){

        console.log('get login')
        axios.get('/api/admin/getlogin').then((response)=>{
            console.log(response)
        })
        
    }
    return (
        <>
        <div><Link className={loginstyle.linkstyle} to='../adminregister'>Register</Link></div>
       <form action='/api/admin/getlogin' method='post'>
        <div className={loginstyle.logindashboard}>
        <div className={loginstyle.input}><label><h1>Sign in</h1></label></div>
            <div className={loginstyle.input}><label>Email:</label></div>
            <div className={loginstyle.input}><input type='email' className={loginstyle.inputtext} name='uname'/></div>
            <div className={loginstyle.input}><label>Password:</label></div>
            <div className={loginstyle.input}><input type='password' className={loginstyle.inputtext} name='upass'/></div>
             <div className={loginstyle.input}><input type='radio' name='account' value='user'/>  <lable>user</lable> <input type='radio' name='account' value='admin'/>  <lable>admin</lable></div>
            <div className={loginstyle.input}><button className={loginstyle.btnstyle}>Sign in</button></div>
        </div>
        </form>
        </>
    )
}