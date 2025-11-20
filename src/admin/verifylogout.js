import axios from "axios"
import { useEffect } from "react"

function Verifylogout(){

    useEffect(()=>{

        axios.get('/api/admin/logout').then((response)=>{
            console.log(response)
        })
    },[])
    return(
        <>
        <h1>hello logout</h1>
        </>
    )
}
export default Verifylogout