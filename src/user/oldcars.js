import carimage from '../images/whitecar.jpg'
import carimage1 from '../images/s-class-exterior-right-front-three-quarter-9.jpeg'
import carimage2 from '../images/logomercedes.jpg'
import { useEffect, useState } from 'react'
import Oldcarstyle from '../css/carstyle.module.css'
import axios from 'axios'

function Oldcars()
{
    const [getdata,setgetdata]=useState()
    const [showdata,setshowdata]=useState([])
    function searchcars()
    {
        axios.post('/api/users/getoldcars',{
            method:'post',
            searchdata:getdata
        }).then((response)=>{
            console.log(response)
            setshowdata(response.data.result)

        })
    }
    
    return(
        <>
        <h1>Used cars</h1>
        <div className={Oldcarstyle.newstartpanal}>
                    <div className={Oldcarstyle.imagesty} >
                        <img src={carimage} width={500} height={100}/>
                        <img src={carimage1} width={500} height={300}/>
                        <img src={carimage2} width={500} height={200}/>
                    </div>
                </div>
                <div>
                   
                        <label><b>Search Make</b></label><br/>
                        <input type='text' name='searchtxt'  onChange={(e)=>setgetdata(e.target.value)}/>
                        <button onClick={searchcars}>Search</button>
                    
                </div>
                <div>
                    <form action='/api/users/getpurchase' method='post'>
               <table className={Oldcarstyle.usertablesty}>
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
                                       {showdata.map((val,key)=>{
                                         return(<>
                                         
                                         <tr key={key}>
                                           
                                           <td>{val.make}</td>
                                            <td>{val.varient}</td>
                                             <td><img src={` ../../images/${val.img}`} alt='img' width={200}/></td>
                                             <td>{val.price}</td>
                                             <td>{val.modal}</td>
                                               <td>{val.engine}</td>
                                               <td>{val.type}</td>
                                               <td><button className={Oldcarstyle.btnstyle}  >Purchase</button></td>
                                              
                                               </tr>
                                           
                                               </>)
                                                                   })}
                           </table>     
                           </form>
                </div>
        </>
    )
    
}
export default Oldcars