import usersnewcarstyle from '../css/carstyle.module.css'
import carimage from '../images/whitecar.jpg'
import carimage1 from '../images/s-class-exterior-right-front-three-quarter-9.jpeg'
import carimage2 from '../images/logomercedes.jpg'
import { useEffect, useState } from 'react'
import axios from 'axios'

function User_car(){
    const [gettxt,setgettxt]=useState()
    const [showcar,setshowcar]=useState([])
    useEffect(()=>{
        console.log('hello user cars')

    },[])
    function search(){
        axios.post('/api/users/searchcar',{
            method:'post',
            searchname:gettxt
        }).then((response)=>{
            console.log(response)
            setshowcar(response.data.result)

        })
    }
    return(
        <>
        <h1>Cars</h1>
        <div className={usersnewcarstyle.newstartpanal}>
            <div className={usersnewcarstyle.imagesty} >
                <img src={carimage} width={500} height={100}/>
                <img src={carimage1} width={500} height={300}/>
                <img src={carimage2} width={500} height={200}/>
            </div>
        </div>
        <div> 
            
            <label><b>New Cars </b></label>
        <input type="text" name="searchname" onChange={(e)=>setgettxt(e.target.value)} />
        <button onClick={search}>SEARCH</button>
        
        </div>
        <div>
        <form action='/api/users/getpurchase' method='post'>
            <table className={usersnewcarstyle.usertablesty}>
            <tr>
                            <th>Make</th>
                            <th>varient</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Modal</th>
                            <th>Engine</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                        {showcar.map((val,key)=>{
                          return(<tr key={key}>
                                                           
                            <td>{val.make}</td>
                             <td>{val.varient}</td>
                              <td><img src={` ../../images/${val.img}`} alt='img' width={200}/></td>
                              <td>{val.price}</td>
                              <td>{val.modal}</td>
                                <td>{val.engine}</td>
                                <td>{val.type}</td>
                                <td><button className={usersnewcarstyle.btnstyle} >Purchase</button></td>
                                </tr>)
                                                    })}
            </table>
            </form>
        </div>
       
        </>
    )
}
export default User_car