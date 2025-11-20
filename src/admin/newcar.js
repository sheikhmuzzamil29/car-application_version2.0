import axios from 'axios'
import newcarstyle from '../css/carstyle.module.css'
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import carimage from '../images/caricon.jpg'
function Newcar(){
    const [filterdata,setfilterdata]=useState()
    const [data,setdata]=useState([])
    const [lgShow, setLgShow] = useState(false);
    const [getitems,setgetitems]=useState([])
    function addcars(){
        axios.get('/api/admin/insertcar').then((response)=>{
            console.log(response);
            setdata(response.data)
        })
    }
    useEffect(()=>{
        axios.get('/api/admin/getnewcars').then((response)=>{
            console.log(response);
            setdata(response.data.result)
        })
    },[])
    function filtercar()
    {
        alert('filter')
        axios.post('/api/admin/getfilternewcar',{
            filterdata:filterdata
        }).then((response)=>{
            console.log(response)
            setdata(response.data.result)

        })
    }
    function openedit(item){
    
        setLgShow(true)
        axios.post('/api/admin/fetchnewcar',{
            hid:item
        }).then((response)=>{
            console.log(response)
            setgetitems(response.data.result)
        })
    }
    return(
        <>
        
            
                <h1><img  src={carimage} alt='img' width={100} />New Car</h1>
                <form action='/api/admin/insertcar' method='get'>
                <button  className={newcarstyle.rightbtnstyle}>Add New car</button>
                </form>     
                <div>
               
                <label><h3>Find</h3></label><br/>
            <label><b>Make/model</b></label>
            <select className={newcarstyle.newfiltertext1} onChange={(e)=>setfilterdata(e.target.value)}>
            <option>select</option>
                <option value='honda'>Honda 2024</option>
                <option value='suzuki'>Suzuki 2024</option>
                <option value='toyota'>toyota 2024</option>
                <option value='mercedes'>mercedes 2024</option>
            </select>
                
                
                <label><b>From</b></label>
                <select className={newcarstyle.newfiltertext1}>
                <option>select</option>
                <option>1000000</option>
                <option>2000000</option>
                <option>3000000</option>
            </select>
               
                
                <label><b>To</b></label>
                <select className={newcarstyle.newfiltertext1}>
                <option>select</option>
                <option>1000000</option>
                <option>2000000</option>
                <option>3000000</option>
            </select>
               
                
                <button onClick={filtercar} className={newcarstyle.btnstyle} >Filter</button>
                
                
                </div>
              
                
              
               <div><h1>List</h1></div>
                <div>
                    <table  className={newcarstyle.tablesty} cellSpacing={0} cellPadding={20} >
                        <tr>
                            <th>Name</th>
                            <th>varient</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Modal</th>
                            <th>Engine</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                        
                            {data.map((val,key)=>{
                                return(<tr key={key}>
                                   
                                    <td>{val.make}</td>
                                   <td>{val.varient}</td>
                                    <td><img src={` ../../images/${val.img}`} alt='img' width={200}/></td>
                                <td>{val.price}</td>
                                <td>{val.modal}</td>
                                <td>{val.engine}</td>
                                <td>{val.type}</td>
                                <td><button className={newcarstyle.btnstyle} onClick={()=>openedit(val._id)}>edit</button></td>
                                </tr>)
                            })}

                        
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
                          {getitems.map((val)=>{
                            return(
                                <>
                                <form action='/api/admin/savenwcaredit' method='post'>
                                <input type='hidden' name='hid' value={val._id}/>
                                <div  className={newcarstyle.input}>
                                <label><b>price</b>:</label><br/>
                            <input type="number"  name="editcarprice" className={newcarstyle.inputtext}/>
                            </div> 
                             <div  className={newcarstyle.input}>
                                        <label><b>make</b></label><br/>
                                    <input type="text" name="editcarmake"  className={newcarstyle.inputtext}/>
                                    </div>
                                     <div  className={newcarstyle.input}>
                                                <label><b>modal</b></label><br/>
                                            <input type="text" name="editcarmodal"   className={newcarstyle.inputtext}/>
                                            </div>
                                     <div  className={newcarstyle.input}>
                                                <label><b>varient</b></label><br/>
                                                <input type="text" name="editcarvarient"   className={newcarstyle.inputtext}/>
                                            </div>
                                      <div  className={newcarstyle.input}>
                                                  <label><b>engine:</b></label><br/>
                                                  <input type="text" name='editcarengine'  className={newcarstyle.inputtext}/>
                                              </div>
                                          <div  className={newcarstyle.input}>
                                          <label><b>Type:</b></label><br/>
                                                     <label>sedan</label>
                                                     <input type="radio" name="cartype" value="sedan"/><br/>
                                                     <label>SUV</label>
                                                     <input type="radio" name="cartype" value='SUV' /><br/>
                                                     <label>crossover</label>
                                                     <input type="radio" name="cartype" value='crossover'/><br/>
                                                     <label>hashbag</label>
                                                     <input type="radio" name="cartype" value='hashbag' /><br/>
                                                 </div>

                                      

                                      
                                                <div  className={newcarstyle.input}>
                                                    <button  className={newcarstyle.btnstyle} >Update</button>
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
export default Newcar