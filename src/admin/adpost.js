import { useEffect,useState } from 'react'
import adpostcss from '../css/carstyle.module.css'
import ADimage from '../images/adimg.png'

import axio from 'axios'
function Adpost()
{
    const [items,setitems]=useState([])

    useEffect(()=>{

        axio.get('/api/admin/getadpost').then((response)=>{
            console.log('getadpost')
            console.log(response.data.result)
            setitems(response.data.result)
        })
    },[])
    function postad(){
        axio.post('/api/admin/postad').then((response)=>{
            console.log(response)
        })
    }
    return(
        <>
        <h1><img  src={ADimage} alt='img' width={100} />Advertisement</h1>
            <p>Welcome to advertisment for our latest cars upload your post so that everyone can buy your cars this platform is all about of buy and purchasing of cars</p>
        <div>
            <form method='post' action='/api/admin/postad'>
            <label><b>Post title</b></label><br/>
            <input type="text" name="pt" className={adpostcss.inputtext}/><br/>
            <label><b>Post description</b></label><br/>
            <input type="text" name="post_desc" className={adpostcss.inputtext}/><br/>
            <label><b>Post image</b></label><br/>
            <input type="file" name="postimg" className={adpostcss.inputtext}/><br/>
            <label><b>Post price</b></label><br/>
            <input type="number" name="postprice" className={adpostcss.inputtext}/><br/>
            <label><b>Post date</b></label><br/>
            <input type="date" name="postdt" className={adpostcss.inputtext}/><br/>
            <button className={adpostcss.btnstyle} >Post an AD</button>
            </form>
        </div>
         <div>
                            <table  className={adpostcss.tablesty} cellSpacing={0} cellPadding={20} >
                                                   <tr>
                                                       <th>Post title</th>
                                                       <th>Post description</th>
                                                       <th>Post Image</th>
                                                       <th>Post Price</th>
                                                       <th>Post date</th>
                                                       <th>Action</th>
                                                   </tr>
                                              
                                                    {
                                                        items.map((c)=>{
                                                           return(
                                                            <tr>
                                                                <td>{c.post_title}</td>
                                                                <td>{c.post_desc}</td>
                                                                <td>{c.post_img}</td>
                                                                <td>{c.post_price}</td>
                                                                <td>{c.post_date}</td>
                                                                <td><button className={adpostcss.btnstyle}>Edit</button></td>
                                                            </tr>
                                                            
                                                           ) 
                                                        })
                                                    }
                                                  
                                                       
                           
                                                   
                                               </table>
                       </div>
        </>
    )
}
export default Adpost