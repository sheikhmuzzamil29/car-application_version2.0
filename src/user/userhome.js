import axios from "axios"
import { useEffect } from "react"
import carimage from '../images/whitecar.jpg'
import carimage1 from '../images/s-class-exterior-right-front-three-quarter-9.jpeg'
import carimage2 from '../images/logomercedes.jpg'
import userhomestyle from '../css/carstyle.module.css'
import carimage3 from '../images/autoparticon.png'
import carimage4 from '../images/car-parts.png'
import carimage5 from '../images/particon2.png'
function Userhome()
{

    useEffect(()=>{

        axios.get('/api/users/').then((response)=>{
            console.log(response)
            
        })
    },[])
    return(
        <>
        <h1>welcome user</h1>
        <div className={userhomestyle.newstartpanal}>
                            <div className={userhomestyle.imagesty} >
                                <img src={carimage3} width={500} height={200}/>
                                <img src={carimage1} width={500} height={300}/>
                                <img src={carimage5} width={500} height={200}/>
                            </div>
                        </div>
                        <div className={userhomestyle.newstartpanal}>
                           <div className={userhomestyle.imagesty} >
                                                   <img src={carimage} width={200} height={100}/>
                                                   <img src={carimage4} width={200} height={200}  className={userhomestyle.imgspace}/>
                                                   <img src={carimage2} width={500} height={200} className={userhomestyle.imgspace}/>
                                               </div>
                        </div>
        </>
    )
}
export default Userhome