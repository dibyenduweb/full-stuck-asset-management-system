/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

import "./CheckoutForm.css"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
  const CheckoutForm = ({ packageInfo, handleClose }) => {
    console.log(packageInfo);
  const axiosSecure = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  const nav = useNavigate();
  

  // Create Payment Intent

  useEffect(() => {
    if (packageInfo?.price > 0)
      axiosSecure
        .post("create-payment-intent", { price: packageInfo?.price })
        .then((res) => {
          console.log(res.data);
          setClientSecret(res.data);
        });
  }, [axiosSecure, packageInfo]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("payment method", paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
    }

    console.log("payment intent", paymentIntent);

    if (paymentIntent.status === "succeeded") {
      const limit = 10;
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Payment was sucsesfull",
        showConfirmButton: false,
        timer: 1500
      });
      // axiosSecure
      //   .patch(`/admin/extend-employee-limit/${user.email}`, { limit })
      //   .then((res) => console.log(res.data));
      nav("/")

      setProcessing(false);
    }
  };

  return (
    
    <div className="h-44 w-96  mx-auto ">
      <form className="my-2 w-96 bg-green-500 py-10 px-6 rounded-lg" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex mt-2 justify-center gap-4">
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!stripe || !clientSecret || processing}
            className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          >
            {processing ? (
              <ImSpinner9 className="m-auto animate-spin" size={24} />
            ) : (
              `Pay ${packageInfo?.price}$`
            )}
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
    </div>
  );
};

export default CheckoutForm;




// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useEffect, useState } from "react";
// import { ImSpinner9 } from "react-icons/im";
// import useAuth from "../hooks/useAuth";
// import useAxiosSecure from "../hooks/useAxiosSecure";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

// import "./CheckoutForm.css";

// const CheckoutForm = ({ packageInfo, handleClose }) => {
//   const axiosSecure = useAxiosSecure();
//   const stripe = useStripe();
//   const elements = useElements();
//   const { user } = useAuth();
//   const [cardError, setCardError] = useState("");
//   const [clientSecret, setClientSecret] = useState("");
//   const [processing, setProcessing] = useState(false);

//   const nav = useNavigate();

//   useEffect(() => {
//     if (packageInfo?.price > 0)
//       axiosSecure
//         .post("https://asset-management-system-server-lime.vercel.app/create-payment-intent", { price: packageInfo?.price })
//         .then((res) => {
//           setClientSecret(res.data);
//         });
//   }, [axiosSecure, packageInfo]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const card = elements.getElement(CardElement);
//     if (card === null) {
//       return;
//     }

//     const { paymentMethod, error } = await stripe.createPaymentMethod({
//       type: "card",
//       card,
//     });

//     if (error) {
//       setCardError(error.message);
//     } else {
//       setCardError("");
//     }

//     setProcessing(true);

//     const { paymentIntent, error: confirmError } =
//       await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: card,
//           billing_details: {
//             email: user?.email,
//             name: user?.displayName,
//           },
//         },
//       });

//     if (confirmError) {
//       setCardError(confirmError.message);
//     }

//     if (paymentIntent.status === "succeeded") {
//       const limit = 10;

//       // Update email and payment amount in the database
//       axiosSecure
//         .post("/update-payment-details", {
//           email: user?.email,
//           paymentAmount: packageInfo?.price,
//         })
//         .then((updateRes) => {
//           console.log(updateRes.data);
//         });

//       Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: "Payment was successful",
//         showConfirmButton: false,
//         timer: 1500,
//       });

//      //nav("/");
//       setProcessing(false);
//     }
//   };

//   return (
//     <div className="h-44 w-96 mx-auto">
//       <form className="my-2 w-96 bg-green-500 py-10 px-6 rounded-lg" onSubmit={handleSubmit}>
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: "16px",
//                 color: "#424770",
//                 "::placeholder": {
//                   color: "#aab7c4",
//                 },
//               },
//               invalid: {
//                 color: "#9e2146",
//               },
//             },
//           }}
//         />
//         <div className="flex mt-2 justify-center gap-4">
//           <button
//             type="button"
//             className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
//             onClick={handleClose}
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             disabled={!stripe || !clientSecret || processing}
//             className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
//           >
//             {processing ? (
//               <ImSpinner9 className="m-auto animate-spin" size={24} />
//             ) : (
//               `Pay ${packageInfo?.price}$`
//             )}
//           </button>
//         </div>
//       </form>
//       {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
//     </div>
//   );
// };

// export default CheckoutForm;
