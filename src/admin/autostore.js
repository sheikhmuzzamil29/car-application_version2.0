import { useEffect, useState } from 'react'
import autostorestyle from '../css/carstyle.module.css'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import autopartimage from '../images/particon2.png'
import Modal from 'react-bootstrap/Modal';

function Autostore(){

    const [textprice,settextprice]=useState()
    const [textyear,settextyear]=useState()
    const [textmodal,settextmodal]=useState()
    const [textvarient,settextvarient]=useState()
    const [editdata,seteditdata]=useState([])
    const [lgShow, setLgShow] = useState(false);
    const [data,setdata]=useState([]);
    const [filterdata,setfilterdata]=useState();
    useEffect(()=>{
        axios.get('/api/admin/getautoparts').then((response)=>{

            console.log(response);
            setdata(response.data.result)
        })
    },[])
    function filter(){
        
        axios.post('/api/admin/filterautopart',{
            filterdata:filterdata,
            
        }).then((response)=>{

            console.log(response);
            setdata(response.data.result)
        })
    }
    function edit(data){
        //console.log(data)
        alert(data)
       
        /*axios.post('/api/admin/editpart').then((response)=>{
            console.log(response)
        })*/
    }
    function checkdata(items){
        //alert('hello checkdata')
        setLgShow(true)
        //var a=document.getElementById('hid').value
       // alert(items)
        axios.post('/api/admin/getcheckdata',{
           
            getid:items
        }).then((response)=>{
            console.log(response)
            seteditdata(response.data.result)
        })
    }
    const handleclick =(event)=>{
        event.preventDefault()
        //settextprice(event.target.value)
        editdata.map((val)=>{
            settextprice(val.price)
            
            
            
        })
    }
    const handleyear=()=>{
     
        editdata.map((val)=>{
            settextyear(val.year)
            
        })
    }
    const handlemodal=()=>{
     
        editdata.map((val)=>{
            settextmodal(val.modal)
            
        })
    }
    const handlevarient=()=>{
     
        editdata.map((val)=>{
            settextvarient(val.varient)
            
        })
    }
    return(
        <>
        
        <span><h1><img  src={autopartimage} alt='img' width={100} />Autostore</h1></span>
        <form action='/api/admin/addautopart' method='post'>

       <button className={autostorestyle.rightbtnstyle}>Add autopart</button>
       </form>
        <label>modal<input type="text" className={autostorestyle.newfiltertext} value={filterdata} onChange={(e)=>setfilterdata(e.target.value)} name="automodal"/></label>
        <label>make<input type="text" className={autostorestyle.newfiltertext}  name="automake"/></label>
        <label>autopart<input type="text" className={autostorestyle.newfiltertext}  name="autopart"/></label>
        <button className={autostorestyle.btnstyle} onClick={filter}>Find</button>
       
        
        <h1>List</h1>

<div>
    
        <table   className={autostorestyle.tablesty} cellSpacing={0} cellPadding={10}  >
                                <tr>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Varient</th>
                                    <th>Modal</th>
                                    <th>Action</th>
                                </tr>
                                {data.map((val,key)=>{
                                    return (<tr key={key}>
                                        
                                        <td align='center'>{val.varient}</td>
                                        <td align='center'><img src={` ../../images/${val.img}`} alt='img' width={200}/></td>
                                        <td align='center'>{val.price}</td>
                                        <td align='center'>{val.modal}</td>
                                        <td align='center'>{val.year}</td>
                                        <td align='center'> <button className={autostorestyle.btnstyle} onClick={() => checkdata(val._id)} value={val._id} id='bid' >Edit</button></td>
                                        
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
                                           {editdata.map((edit,key)=>{
                                            return(
                                            <>
                                            <form method='post' action='/api/admin/updateautostore'>
                                            <input type='hidden' name='hid' value={edit._id} />
                                             <div className={autostorestyle.input}>
                                                                           <label>Edit Image</label>
                                                                           <input type="file" name="partimg"  className={autostorestyle.inputtext}/>
                                                                           </div>
                                            <div  className={autostorestyle.input}>
                                            <label>Edit price:</label><br/>
                                                <input type="text" name="partprice" value={textprice} onChange={(e)=>settextprice(e.target.value)} onClick={handleclick}  className={autostorestyle.inputtext}/>
                                            </div>
                                            <div  className={autostorestyle.input}>
                                                                           <label>Edit year</label><br/>
                                                                       <input type="text" name="partyear" value={textyear} onClick={handleyear} onChange={(e)=>settextyear(e.target.value)} className={autostorestyle.inputtext}/>
                                                                       </div>
                                             <div  className={autostorestyle.input}>
                                                                           <label>Edit modal</label><br/>
                                                                       <input type="text" name="partmodal" value={textmodal} onChange={(e)=>settextmodal(e.target.value)} onClick={handlemodal}  className={autostorestyle.inputtext}/>
                                                                       </div>
                                                                       <div  className={autostorestyle.input}>
                                                                           <label>Edit varient</label><br/>
                                                                           <input type="text" name="partvarient" value={textvarient} onChange={(e)=>settextvarient(e.target.value)} onClick={handlevarient} className={autostorestyle.inputtext}/>
                                                                       </div>
                                                                       
                                                                      
                                                                       
                                                                       <div  className={autostorestyle.input}>
                                                                           <button  className={autostorestyle.btnstyle} >Update autopart</button>
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
export default Autostore