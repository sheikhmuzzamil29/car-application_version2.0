import { useEffect } from 'react'
import editstyle from '../css/carstyle.module.css'
function Editautopart(){

    useEffect(()=>{

    },[])
    return(
        <>
        <h1>Edit</h1>
       <form action='/api/admin/addpart' method='post'>
                    <div className={editstyle.input}>
                               <label>Edit Image</label>
                               <input type="file" name="partimg" className={editstyle.inputtext}/>
                               </div>
                           <div  className={editstyle.input}>
                               <label>Edit price:</label><br/>
                           <input type="number" name="partprice" className={editstyle.inputtext}/>
                           </div>
                           <div  className={editstyle.input}>
                               <label>Edit year</label><br/>
                           <input type="text" name="partyear" className={editstyle.inputtext}/>
                           </div>
                           <div  className={editstyle.input}>
                               <label>Edit modal</label><br/>
                           <input type="text" name="partmodal" className={editstyle.inputtext}/>
                           </div>
                           <div  className={editstyle.input}>
                               <label>Edit varient</label><br/>
                               <input type="text" name="partvarient" className={editstyle.inputtext}/>
                           </div>
                           
                          
                           
                           <div  className={editstyle.input}>
                               <button  className={editstyle.btnstyle} >Update autopart</button>
                           </div>
               </form>
        </>
        
    )
}
export default Editautopart