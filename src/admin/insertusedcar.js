import insertusedcarstyle from '../css/carstyle.module.css'
function insertusedcar(){

    return(
        <>
        <h1>Insert used car</h1>
        <form action='/api/admin/usedcarinsert' method='post'>
        <div className={insertusedcarstyle.input}>
            <label>Image</label>
            <input type="file" name="carimg" className={insertusedcarstyle.inputtext}/>
            </div>
        <div  className={insertusedcarstyle.input}>
            <label>price:</label><br/>
        <input type="number" name="carprice" className={insertusedcarstyle.inputtext}/>
        </div>
        <div  className={insertusedcarstyle.input}>
            <label>make</label><br/>
        <input type="text" name="carmake" className={insertusedcarstyle.inputtext}/>
        </div>
        <div  className={insertusedcarstyle.input}>
            <label>modal</label><br/>
        <input type="text" name="carmodal" className={insertusedcarstyle.inputtext}/>
        </div>
        <div  className={insertusedcarstyle.input}>
            <label>varient</label><br/>
            <input type="text" name="carvarient" className={insertusedcarstyle.inputtext}/>
        </div>
        <div  className={insertusedcarstyle.input}>
            <label>engine:</label><br/>
            <input type="text" name='carengine' className={insertusedcarstyle.inputtext}/>
        </div>
        <div  className={insertusedcarstyle.input}>
           
            <label>sedan</label>
            <input type="radio" name="cartype" value="sedan"/><br/>
            <label>SUV</label>
            <input type="radio" name="cartype" value='SUV' /><br/>
            <label>crossover</label>
            <input type="radio" name="cartype" value='crossover'/><br/>
            <label>hashbag</label>
            <input type="radio" name="cartype" value='hashbag' /><br/>
        </div>
        <div  className={insertusedcarstyle.input}>
            <label>color:</label><br/>
        <input type="text" name='carcolor' className={insertusedcarstyle.inputtext}/>
        </div>
        <div  className={insertusedcarstyle.input}>
            <label>used milliage:</label><br/>
        <input type="text" name='carmilliage' className={insertusedcarstyle.inputtext}/>
        </div>
        <div  className={insertusedcarstyle.input}>
            <label>body condition:</label><br/>
            <select className={insertusedcarstyle.newfiltertext} name='carbodycondition'>
                    <option>select</option>
                        <option value='fair'>Fair</option>
                        <option value='good'>Good</option>
                        <option value='excellent'>Excellent</option>
                    </select>
        </div>
        <div  className={insertusedcarstyle.input}>
            <label>engine condition:</label><br/>
        <select className={insertusedcarstyle.newfiltertext} name='carenginecondition'>
                    <option >select</option>
                        <option value='fair'>Fair</option>
                        <option value='good'>Good</option>
                        <option value='excellent'>Excellent</option>
                    </select>
        </div>
        <div  className={insertusedcarstyle.input}>
            <button  className={insertusedcarstyle.btnstyle} >NEW CAR</button>
        </div>
        </form>
        </>
    )
}
export default insertusedcar