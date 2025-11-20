import { PayPalButtons } from "@paypal/react-paypal-js";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function PurchaseOrder(){

    const initialOptions = {
        "client-id": "AaRPOVImQn_w2xH9lNgSX8ECGA2w4swAbZLsfgy60YXsaQIOSPhOUki6-cAXhDKVKVm7GpaIe3v1529I",
        currency: "USD",
        intent: "capture",
      };
    return(
        <>
        <h1>Purchase Order</h1>
        <PayPalScriptProvider options={initialOptions}>
          {/* Your components */}
          <PaymentButton />
        </PayPalScriptProvider>
        
        </>
    )
}
const PaymentButton=()=>{

    return(
    <PayPalButtons
          createOrder={(data, actions) => {
            return fetch("/api/users/create-payment", {
              method: "post",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                 cart: [
                    {
                       id: "123",
                       quantity: 1
                    }
                 ]
              })
            })
            .then((response) => response.json())
            .then((order) => order.approvalUrl)
            .then((url) => {
               window.location.href = url
            });
          }}
          
          onApprove={(data, actions) => {
            return fetch(`/users/execute-payment?paymentId=${data.paymentID}&PayerID=${data.payerID}`)
              .then(response => response.json())
              .then(details => {
                alert("Transaction completed by " + details.payment.payer.payer_info.first_name);
              })
          }}
        />
    )
}
export default PurchaseOrder