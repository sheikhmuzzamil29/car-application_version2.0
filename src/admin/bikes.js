import { useEffect, useState } from 'react'
import bikestyle from '../css/carstyle.module.css'
import axios from 'axios'
import bikeimage from '../images/bikeimage.png'
import Modal from 'react-bootstrap/Modal';
function Bikes(){

    const [fetchdata,setfetchdata]=useState([])
    const [lgShow, setLgShow] = useState(false);
    const [editdata,seteditdata]=useState([])
    useEffect(()=>{
        axios.get('/api/admin/getallbikes').then((response)=>{
            console.log(response)
            setfetchdata(response.data.result)
        })
    },[])
    function openmodal(items){
        setLgShow(true)
        axios.post('/api/admin/checkbikedata',{
           
            getid:items
        }).then((response)=>{
            console.log(response)
            seteditdata(response.data.result)
        })
    }
    return(
        <>
        
         <h1><img  src={bikeimage} alt='img' width={100} />Bike</h1>
        <div className={bikestyle.btnspace}>
            <form action='/api/admin/addbike' method='post'>
            <button className={bikestyle.rightbtnstyle}>Add bike</button>
            </form>
            </div>
         
         <div>
                
                   
                    <label>Modal</label>
                    <input type="text"  className={bikestyle.newfiltertext1}/>
                    <label>make</label>
                    <input type="text" className={bikestyle.newfiltertext1} />
                    <label>varient</label>
                    <input type="text" className={bikestyle.newfiltertext1}/>
                    <label>Engine</label>
                    <input type="text" className={bikestyle.newfiltertext1} />
                    <span><button className={bikestyle.btnstyle} >Find</button></span>
                    
                    
                
                </div>
                <div>
                     <table  className={bikestyle.tablesty} cellSpacing={0} cellPadding={20} >
                                            <tr>
                                                <th>Name</th>
                                                <th>varient</th>
                                                <th>Image</th>
                                                <th>Price</th>
                                                <th>Modal</th>
                                                <th>Engine</th>
                                                
                                                <th>Action</th>
                                            </tr>
                                            {fetchdata.map((val)=>{
                                                return (<tr>
                                                    <td>{val.bike_make}</td>
                                                    <td>{val.bike_varient}</td>
                                                    <td>{val.bike_img}</td>
                                                    <td>{val.bike_price}</td>
                                                    <td>{val.bike_modal}</td>
                                                    <td>{val.bike_engine}</td>
                                                    <td><button className={bikestyle.btnstyle} onClick={()=>openmodal(val._id)}>edit</button></td>

                                                </tr>)
                                            })
                                            }
                                                
                    
                                            
                                        </table>
                </div>
                <div>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Edit
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                                           {editdata.map((edit,key)=>{
                                            return(
                                            <>
                                         <form method='post' action='/api/admin/editbikes'>
                                            <div className={bikestyle.input}>
                                                <input type='hidden' name='hid' value={edit._id}/>
                                                    <label>Edit name</label><br/>
                                                    <input type="text" name="bikename"  className={bikestyle.inputtext}/>
                                                    </div>
                                                    <div className={bikestyle.input}>
                                                    <label>Edit varient</label><br/>
                                                    <input type="text" name="bikevarient"  className={bikestyle.inputtext}/>
                                                    </div>
                                                    <div className={bikestyle.input}>
                                                    <label>Edit Image</label><br/>
                                                    <input type="file" name="bikeimg"  className={bikestyle.inputtext}/>
                                                    </div>
                                                    <div className={bikestyle.input}>
                                                    <label>Edit price</label><br/>
                                                    <input type="text" name="bikeprice"  className={bikestyle.inputtext}/>
                                                    </div>
                                                    <div className={bikestyle.input}>
                                                    <label>Edit modal</label><br/>
                                                    <input type="text" name="bikemodal"  className={bikestyle.inputtext}/>
                                                    </div>
                                                    <div className={bikestyle.input}>
                                                    <label>Edit engine</label><br/>
                                                    <input type="text" name="bike_engine"  className={bikestyle.inputtext}/>
                                                    </div>
                                                     <div  className={bikestyle.input}>
                                                        <button  className={bikestyle.btnstyle} >Update bike</button>
                                                    </div>
                                         </form>

                                            </>
                                            )
                                            

                                           })}
                                            
                            
                                       
                                       </Modal.Body>
      </Modal>
      </div>

        </>
    )
}
export default Bikes