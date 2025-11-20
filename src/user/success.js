import { useEffect } from "react"
import { PayPalButtons } from "@paypal/react-paypal-js";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
function Success(){

    useEffect(()=>{
        <PayPalButtons
        onApprove={(data, actions) => {
            return fetch(`/api/users/execute-payment?paymentId=${data.paymentID}&PayerID=${data.payerID}`)
              .then(response => response.json())
              .then(details => {
                alert("Transaction completed by " + details.payment.payer.payer_info.first_name);
              })
          }}
        />
    },[])
}
export default Success