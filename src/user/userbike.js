import { useState } from 'react'
import userbikestyle from '../css/carstyle.module.css'
import bikeimg from '../images/bikeimage.png'
import axios from 'axios'
function Userbike(){

    const [searchdata,setsearchdata]=useState()
    const [store,setstore]=useState([])
    function searchbike(){
        alert('search process')
        axios.post('/api/users/getsearch',{
            method:'post',
            getdata:searchdata
        }).then((response)=>{
          //  console.log(response)
            setstore(response.data.result)
        })
    }
    return(
        <>
        <h1>Bike</h1>
         <div className={userbikestyle.newstartpanal}>
                            <div className={userbikestyle.imagesty} >
                                <img src={bikeimg} width={400} height={200} className={userbikestyle.imgspace}/>
                                
                            </div>
                        </div>
                         <div> 
                    
                    <label><b><h4>Bikes Search: </h4></b></label>
                <br/>
                <input type="text" name="search" onChange={(e)=>setsearchdata(e.target.value)}/>
                <button onClick={searchbike} >SEARCH</button>
                
                </div>
                 <div>
                                     <form action='/api/users/getpurchase' method='post'>
                                                   <table className={userbikestyle.usertablesty}>
                                                               <tr>
                                                                               <th>Make</th>
                                                                               <th>Modal</th>
                                                                               <th>Varient</th>
                                                                               <th>Image</th>
                                                                               <th>Price</th>
                                                                               <th>color</th>
                                                                               <th>engine</th>
                                                                               <th>Action</th>
                                                                           </tr>
                                                                           {store.map((val,key)=>{
                                                                             return(<>
                                                                             
                                                                             <tr key={key}>
                                                                               
                                                                               <td>{val.bike_make}</td>
                                                                                <td>{val.bike_modal}</td>
                                                                                <td>{val.bike_varient}</td>
                                                                                 <td><img src={` ../../images/${val.img}`} alt='img' width={200}/></td>
                                                                                 <td>{val.bike_price}</td>
                                                                                 <td>{val.bike_color}</td>
                                                                                  <td>{val.bike_engine}</td>
                                                                                   <td><button className={userbikestyle.btnstyle}  >Purchase</button></td>
                                                                                  
                                                                                   </tr>
                                                                               
                                                                                   </>)
                                                                                                       })}
                                                               </table>     
                                                               </form>
                                </div>
        </>
    )
}
export default Userbike