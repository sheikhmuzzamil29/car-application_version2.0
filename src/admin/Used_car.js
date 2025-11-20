import { useEffect, useState } from 'react'
import usedcarstyle from '../css/carstyle.module.css'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import carimage from '../images/caricon.jpg'
function Usedcar(){

    const [editprice,seteditprice]=useState(0)
    const [editmake,seteditmake]=useState(0)
    const [editmodal,seteditmodal]=useState()
    const [editvarient,seteditvarient]=useState(0)
    const [editengine,seteditengine]=useState(0)
    const [edittype,setedittype]=useState(0)
    const [getitems,setgetitems]=useState([])
    const [lgShow, setLgShow] = useState(false);
    const [data,setdata]=useState([]);
    const[findmodal,setfindmodal]=useState()
    useEffect(()=>{
        axios.get('/api/admin/getusedcar').then((response)=>{
            console.log(response)
            setdata(response.data.result)
        })

    },[])
    function findcar(){
        //alert('find car')
        axios.post('/api/admin/findcars',{
            carmodal:findmodal
        }).then((response)=>{
            console.log(response)
            setdata(response.data.result)
        })

    }
    function handle(item){
        console.log(item)
        setLgShow(true)
        axios.post('/api/admin/getusedcar',
            {
                info:item
            }
        ).then((response)=>{
            console.log(response)
            setgetitems(response.data.result)
        })
    }
    function handleedit(){
       
        data.map((val)=>{

            seteditprice(val.price)
            seteditengine(val.engine)
            seteditmake(val.name)
            seteditmodal(val.modal)
            seteditvarient(val.varient)
        })

    }
    return(
        <>
        
       
        <div >
            
        <h1><img  src={carimage} alt='img' width={100} />Used Car</h1>
        <form method='post' action='/api/admin/addusedcar'>
        <button className={usedcarstyle.rightbtnstyle}>Add used car</button>
        </form>
            <label>Modal</label>
            <input type="text" value={findmodal} onChange={(e)=>setfindmodal(e.target.value)} className={usedcarstyle.newfiltertext1}/>
            <label>make</label>
            <input type="text" className={usedcarstyle.newfiltertext1} />
            <label>varient</label>
            <input type="text" className={usedcarstyle.newfiltertext1}/>
            <label>Engine</label>
            <input type="text" className={usedcarstyle.newfiltertext1} />
            <span><button className={usedcarstyle.btnstyle} onClick={findcar}>Find</button></span>
            
            
        
        </div>
        
       
        <div>
            <h1>LIST</h1>
            <table  className={usedcarstyle.tablesty}   cellSpacing={0} cellPadding={20}>
            <tr>
                            <th>Name</th>
                            <th>varient</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Modal</th>
                            <th>Engine</th>
                            <th>Type</th>
                            <th>car miliage</th>
                            <th>body condition</th>
                            <th>engine condition</th>
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
                                <td>{val.milliage}</td>
                                <td>{val.bodycondition}</td>
                                <td>{val.enginecondition}</td>
                                <td><button  className={usedcarstyle.btnstyle} onClick={()=>handle(val._id)}>edit</button></td>
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
                                <form action='/api/admin/saveedit' method='post'>
                                <input type='hidden' name='hid' value={val._id}/>
                                <div  className={usedcarstyle.input}>
                                <label>price:</label><br/>
                            <input type="number"  name="editcarprice" className={usedcarstyle.inputtext}/>
                            </div> 
                             <div  className={usedcarstyle.input}>
                                        <label>make</label><br/>
                                    <input type="text" name="editcarmake"  className={usedcarstyle.inputtext}/>
                                    </div>
                                     <div  className={usedcarstyle.input}>
                                                <label>modal</label><br/>
                                            <input type="text" name="editcarmodal"   className={usedcarstyle.inputtext}/>
                                            </div>
                                     <div  className={usedcarstyle.input}>
                                                <label>varient</label><br/>
                                                <input type="text" name="editcarvarient"   className={usedcarstyle.inputtext}/>
                                            </div>
                                      <div  className={usedcarstyle.input}>
                                                  <label>engine:</label><br/>
                                                  <input type="text" name='editcarengine'  className={usedcarstyle.inputtext}/>
                                              </div>
                                          <div  className={usedcarstyle.input}>
                                                    
                                                     <label>sedan</label>
                                                     <input type="radio" name="cartype" value="sedan"/><br/>
                                                     <label>SUV</label>
                                                     <input type="radio" name="cartype" value='SUV' /><br/>
                                                     <label>crossover</label>
                                                     <input type="radio" name="cartype" value='crossover'/><br/>
                                                     <label>hashbag</label>
                                                     <input type="radio" name="cartype" value='hashbag' /><br/>
                                                 </div>

                                         <div  className={usedcarstyle.input}>
                                                    <label>used milliage:</label><br/>
                                                <input type="text" name='editcarmilliage' className={usedcarstyle.inputtext}/>
                                                </div>

                                        <div  className={usedcarstyle.input}>
                                                    <label>body condition:</label><br/>
                                                    <select className={usedcarstyle.newfiltertext} name='editbodycondition'>
                                                            <option>select</option>
                                                                <option value='fair'>Fair</option>
                                                                <option value='good'>Good</option>
                                                                <option value='excellent'>Excellent</option>
                                                            </select>
                                                </div>
                                        <div  className={usedcarstyle.input}>
                                                    <label>engine condition:</label><br/>
                                                <select className={usedcarstyle.newfiltertext} name='editenginecondition'>
                                                            <option >select</option>
                                                                <option value='fair'>Fair</option>
                                                                <option value='good'>Good</option>
                                                                <option value='excellent'>Excellent</option>
                                                            </select>
                                                </div>
                                                <div  className={usedcarstyle.input}>
                                                    <button  className={usedcarstyle.btnstyle} >Update</button>
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
export default Usedcar