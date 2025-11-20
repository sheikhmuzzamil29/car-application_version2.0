import newbikestyle from '../css/carstyle.module.css'
function newbike(){

    return(
        <>
         <h1>New bikes</h1>
         <form action='/api/admin/newbikereg' method='post'>
                 <div className={newbikestyle.input}>
                     <label>Image</label>
                     <input type="file" name="bikeimg" className={newbikestyle.inputtext}/>
                     </div>
                 <div  className={newbikestyle.input}>
                     <label>price:</label><br/>
                 <input type="number" name="bikeprice" className={newbikestyle.inputtext}/>
                 </div>
                 <div  className={newbikestyle.input}>
                     <label>make</label><br/>
                 <input type="text" name="bikemake" className={newbikestyle.inputtext}/>
                 </div>
                 <div  className={newbikestyle.input}>
                     <label>modal</label><br/>
                 <input type="text" name="bikemodal" className={newbikestyle.inputtext}/>
                 </div>
                 <div  className={newbikestyle.input}>
                     <label>varient</label><br/>
                     <input type="text" name="bikevarient" className={newbikestyle.inputtext}/>
                 </div>
                 <div  className={newbikestyle.input}>
                     <label>engine:</label><br/>
                     <input type="text" name='bike_engine' className={newbikestyle.inputtext}/>
                 </div>
                 
                 <div  className={newbikestyle.input}>
                     <label>color:</label><br/>
                 <input type="text" name='bikecolor' className={newbikestyle.inputtext}/>
                 </div>
                 <div  className={newbikestyle.input}>
                     <button  className={newbikestyle.btnstyle} >NEW bike</button>
                 </div>
                 </form>
        </>
       
        
    )
}
export default newbike