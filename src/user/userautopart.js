import { useState } from 'react'
import userpartstyle from '../css/carstyle.module.css'
import carimage from '../images/autoparticon.png'
import carimage1 from '../images/car-parts.png'
import carimage2 from '../images/particon2.png'
import axios from 'axios'
function UserAutopart()
{

    const [searchdata,setsearchdata]=useState()
    const [showdata,setshowdata]=useState([])
    function partsearch(){
        
        axios.post('/api/users/getuserpart',{
            method:'post',
            searchinfo:searchdata
        }).then((response)=>{
            console.log(response)
            setshowdata(response.data.result)
        })
    }
    return(
        <>
        <h1>Autoparts</h1>
        <div className={userpartstyle.newstartpanal}>
                    <div className={userpartstyle.imagesty} >
                        <img src={carimage} width={200} height={200} className={userpartstyle.imgspace}/>
                        <img src={carimage1} width={200} height={200}  className={userpartstyle.imgspace}/>
                        <img src={carimage2} width={200} height={200} className={userpartstyle.imgspace}/>
                    </div>
                </div>
                <div> 
                    
                    <label><b><h4>Parts Research: </h4></b></label>
                <br/>
                <input type="text" name="search" onChange={(e)=>setsearchdata(e.target.value)}/>
                <button onClick={partsearch}>SEARCH</button>
                
                </div>
                <div>
                     <form action='/api/users/getpurchase' method='post'>
                                   <table className={userpartstyle.usertablesty}>
                                               <tr>
                                                               <th>Year</th>
                                                               <th>varient</th>
                                                               <th>Image</th>
                                                               <th>Price</th>
                                                               <th>Modal</th>
                                                               
                                                               <th>Action</th>
                                                           </tr>
                                                           {showdata.map((val,key)=>{
                                                             return(<>
                                                             
                                                             <tr key={key}>
                                                               
                                                               <td>{val.year}</td>
                                                                <td>{val.varient}</td>
                                                                 <td><img src={` ../../images/${val.img}`} alt='img' width={200}/></td>
                                                                 <td>{val.price}</td>
                                                                 <td>{val.modal}</td>
                                                                  
                                                                   <td><button className={userpartstyle.btnstyle}  >Purchase</button></td>
                                                                  
                                                                   </tr>
                                                               
                                                                   </>)
                                                                                       })}
                                               </table>     
                                               </form>
                </div>
        </>
    )
}
export default UserAutopart