import axios from 'axios'
import insertcarstyle from '../css/carstyle.module.css'
function Insertcar(){

    function submit(){
        axios.post('/api/admin/addcar').then((response)=>{
            console.log(response);
        })
    }
    return(
        <>
        <h1>Insertcar</h1>
        <form action='/api/admin/addcar' method='post'>
        <div className={insertcarstyle.input}>
            <label>Image</label>
            <input type="file" name="carimg" className={insertcarstyle.inputtext}/>
            </div>
        <div  className={insertcarstyle.input}>
            <label>price:</label><br/>
        <input type="number" name="carprice" className={insertcarstyle.inputtext}/>
        </div>
        <div  className={insertcarstyle.input}>
            <label>make</label><br/>
        <input type="text" name="carmake" className={insertcarstyle.inputtext}/>
        </div>
        <div  className={insertcarstyle.input}>
            <label>modal</label><br/>
        <input type="text" name="carmodal" className={insertcarstyle.inputtext}/>
        </div>
        <div  className={insertcarstyle.input}>
            <label>varient</label><br/>
            <input type="text" name="carvarient" className={insertcarstyle.inputtext}/>
        </div>
        <div  className={insertcarstyle.input}>
            <label>engine:</label><br/>
            <input type="text" name='carengine' className={insertcarstyle.inputtext}/>
        </div>
        <div  className={insertcarstyle.input}>
           
            <label>sedan</label>
            <input type="radio" name="cartype" value="sedan"/><br/>
            <label>SUV</label>
            <input type="radio" name="cartype" value='SUV' /><br/>
            <label>crossover</label>
            <input type="radio" name="cartype" value='crossover'/><br/>
            <label>hashbag</label>
            <input type="radio" name="cartype" value='hashbag' /><br/>
        </div>
        <div  className={insertcarstyle.input}>
            <label>color:</label><br/>
        <input type="text" name='carcolor' className={insertcarstyle.inputtext}/>
        </div>
        <div  className={insertcarstyle.input}>
            <button  className={insertcarstyle.btnstyle} >NEW CAR</button>
        </div>
        </form>
        </>
    )
}
export default Insertcar