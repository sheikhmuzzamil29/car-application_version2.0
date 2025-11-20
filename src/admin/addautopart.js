import insertpartstyle from '../css/carstyle.module.css'
function Addpart(){

    return(
        <><h1>Add Autopart</h1>
        <form action='/api/admin/addpart' method='post'>
             <div className={insertpartstyle.input}>
                        <label>Image</label>
                        <input type="file" name="partimg" className={insertpartstyle.inputtext}/>
                        </div>
                    <div  className={insertpartstyle.input}>
                        <label>price:</label><br/>
                    <input type="number" name="partprice" className={insertpartstyle.inputtext}/>
                    </div>
                    <div  className={insertpartstyle.input}>
                        <label>year</label><br/>
                    <input type="text" name="partyear" className={insertpartstyle.inputtext}/>
                    </div>
                    <div  className={insertpartstyle.input}>
                        <label>modal</label><br/>
                    <input type="text" name="partmodal" className={insertpartstyle.inputtext}/>
                    </div>
                    <div  className={insertpartstyle.input}>
                        <label>varient</label><br/>
                        <input type="text" name="partvarient" className={insertpartstyle.inputtext}/>
                    </div>
                    
                   
                    
                    <div  className={insertpartstyle.input}>
                        <button  className={insertpartstyle.btnstyle} >ADD PART</button>
                    </div>
        </form>
        
        </>
    )
}
export default Addpart