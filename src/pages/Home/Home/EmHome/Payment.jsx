/* eslint-disable no-unused-vars */


import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../../../Admin/CheckoutForm";
import useAuth from "../../../../hooks/useAuth";
import { useEffect } from "react";
import { useState } from "react";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_API);
const Payment = () => {

const [isOpen, setIsOpen] = useState(true);  
const closeModal = () => {
        setIsOpen(false);
      };

  
const [paymentEmail, setPaymentEmail]=useState([])
const {user} =useAuth();
console.log(user);

useEffect(()=>{
    fetch(`https://asset-management-system-server-lime.vercel.app/user/${user?.email}`)
    .then(res => res.json())
    .then(data => setPaymentEmail(data));

},[user?.email])

    return (
        <div>
           <h1 className="text-2xl font-bold text-center">Payment page</h1>
            <div>
                <Elements stripe={stripePromise}>
                    
               <CheckoutForm 
               handleClose={closeModal}
               packageInfo={paymentEmail?.selectedPackage}
               />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;

