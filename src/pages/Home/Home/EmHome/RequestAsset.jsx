/* eslint-disable no-unused-vars */

// import useAuth from "../../../../hooks/useAuth";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const RequestAsset = () => {
//   const [requestData, setRequestData] = useState([]);
//   const user  = useAuth();
//   console.log(user);

//   const userEmail = user.email;

//   useEffect(() => {
//     // Fetch request data when the component mounts
//     axios.get('https://asset-management-system-server-lime.vercel.app/assetdata')
//       .then((response) => {
//         setRequestData(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []); // Empty dependency array ensures the effect runs only once on mount

//   const handleSendAdmin = (assets) => {
//     const { productName, assettype, stockstatus } = assets;
//     axios.post('https://asset-management-system-server-lime.vercel.app/request', {
//       productName,
//       assettype,
//       stockstatus,
//       userEmail,
  
//     })
//       .then((response) => {
//         console.log(response.data);
//         alert('Your data added successfully');
//       })
//       .catch((error) => {
//         console.error(error);
//         alert('Failed to add data');
//       });
//   };

//   if (!requestData || requestData.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div className="overflow-x-auto">
//         <table className="table">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Asset Name</th>
//               <th>Asset Type</th>
//               <th>Availability</th>
//               <th>Request</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* rows */}
//             {requestData.map((request, index) => (
//               <tr key={request._id}>
//                 <th>{index + 1}</th>
//                 <th>{request.productName}</th>
//                 <td>{request.assettype}</td>
//                 <td>{request.stockstatus}</td>
//                 <td>

//                   {/* Open the modal using document.getElementById('ID').showModal() method */}
// <button 
// className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
// <dialog id="my_modal_1" className="modal">
//   <div className="modal-box">
//     <h3 className="font-bold text-lg">Additional Notes</h3>

//     <textarea 
//     name="note" type='note'
//     className="textarea textarea-primary" placeholder="Additional Notes"></textarea>
//     <div className="modal-action">
//       <form method="dialog">
//         <button className="btn btn-sm bg-green-500 text-black">Close</button>
//         <button
//                     onClick={() => handleSendAdmin(request)}
//                     className="btn btn-sm btn-primary ml-4"
//                   >
//                     Request Asset
//                   </button>
//       </form>
//     </div>
//   </div>
// </dialog>
                 
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default RequestAsset;


// import React, { useState, useEffect } from "react";
// import useAuth from "../../../../hooks/useAuth";
// import axios from "axios";

// const RequestAsset = () => {
//   const [requestData, setRequestData] = useState([]);
//   const [note, setNote] = useState(""); // State to manage the note value
//   const user = useAuth();
//   console.log(user);
//   const userEmail = user.email;

//   useEffect(() => {
//     // Fetch request data when the component mounts
//     axios
//       .get("https://asset-management-system-server-lime.vercel.app/assetdata")
//       .then((response) => {
//         setRequestData(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []); // Empty dependency array ensures the effect runs only once on mount

//   const handleSendAdmin = (assets) => {
//     const { productName, assettype, stockstatus } = assets;

//     axios
//       .post("https://asset-management-system-server-lime.vercel.app/request", {
//         productName,
//         assettype,
//         stockstatus,
//         userEmail: user.email,
//         displayName: user.displayName,
//         note,
//       })
//       .then((response) => {
//         console.log(response.data);
//         alert("Your data added successfully");
//       })
//       .catch((error) => {
//         console.error(error);
//         alert("Failed to add data");
//       });
//   };

//   if (!requestData || requestData.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div className="overflow-x-auto">
//         <table className="table">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Asset Name</th>
//               <th>Asset Type</th>
//               <th>Availability</th>
//               <th>Request</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* rows */}
//             {requestData.map((request, index) => (
//               <tr key={request._id}>
//                 <th>{index + 1}</th>
//                 <th>{request.productName}</th>
//                 <td>{request.assettype}</td>
//                 <td>{request.stockstatus}</td>
//                 <td>
//                   {/* Open the modal using document.getElementById('ID').showModal() method */}
//                   <button
//                     className="btn"
//                     onClick={() => document.getElementById("my_modal_1").showModal()}
//                   >
//                   Request Asset
//                   </button>
//                   <dialog id="my_modal_1" className="modal">
//                     <div className="modal-box">
//                       <h3 className="font-bold text-lg">Additional Notes</h3>

//                       <textarea
//                         name="note"
//                         type="note"
//                         className="textarea textarea-primary"
//                         placeholder="Additional Notes"
//                         value={note} // Set value from state
//                         onChange={(e) => setNote(e.target.value)} // Update state on change
//                       ></textarea>
//                       <div className="modal-action">
//                         <form method="dialog">
//                           {/* if there is a button in the form, it will close the modal */}
//                           <button className="btn btn-sm bg-green-500 text-black">
//                             Close
//                           </button>
//                           <button
//                             onClick={() => handleSendAdmin(request)}
//                             className="btn btn-sm btn-primary ml-4"
//                           >
//                             Submit Requast
//                           </button>
//                         </form>
//                       </div>
//                     </div>
//                   </dialog>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default RequestAsset;



// import React, { useState, useEffect } from "react";
// import useAuth from "../../../../hooks/useAuth";
// import axios from "axios";

// const RequestAsset = () => {
//   const [requestData, setRequestData] = useState([]);
//   const [note, setNote] = useState(""); 
//   const {user} = useAuth();
//   console.log(user);

//   useEffect(() => {
//     // Fetch request data when the component mounts
//     axios
//       .get("https://asset-management-system-server-lime.vercel.app/assetdata")
//       .then((response) => {
//         setRequestData(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []); // Empty dependency array ensures the effect runs only once on mount

//   const handleSendAdmin = (assets) => {
//     const { productName, assettype, stockstatus } = assets;
//     const requastDate = new Date();
//     axios
//       .post("https://asset-management-system-server-lime.vercel.app/request", {
//         productName,
//         assettype,
//         stockstatus,
//         userEmail: user.email,
//         displayName: user.displayName,
//         note,
//         requastDate: requastDate.toISOString(),
//       })
//       .then((response) => {
//         console.log(response.data);
//         alert("Your data added successfully");
//       })
//       .catch((error) => {
//         console.error(error);
//         alert("Failed to add data");
//       });
//   };

//   if (!requestData || requestData.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div className="overflow-x-auto">
//         <table className="table">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Asset Name</th>
//               <th>Asset Type</th>
//               <th>Availability</th>
//               <th>Status</th>
//               <th>Request</th>
             
//             </tr>
//           </thead>
//           <tbody>
//             {/* rows */}
//             {requestData.map((request, index) => (
//               <tr key={request._id}>
//                 <th>{index + 1}</th>
//                 <th>{request.productName}</th>
//                 <td>{request.assettype}</td>
//                 <td>{request.stockstatus}</td>
//                 <td>
//                 <select className="select select-bordered w-full max-w-xs">
//   <option disabled selected>Pending</option>
//   <option>Pending</option>
//   <option>Appruve</option>
//   <option>Reject</option>
// </select>
//                 </td>
//                 <td>
//                   {/* Open the modal using document.getElementById('ID').showModal() method */}
//                   <button
//                     className="btn"
//                     onClick={() => document.getElementById("my_modal_1").showModal()}
//                   >
//                     Request Asset
//                   </button>
//                   <dialog id="my_modal_1" className="modal">
//                     <div className="modal-box">
//                       <h3 className="font-bold text-lg">Additional Notes</h3>

//                       <textarea
//                         name="note"
//                         type="note"
//                         className="textarea textarea-primary"
//                         placeholder="Additional Notes"
//                         value={note} // Set value from state
//                         onChange={(e) => setNote(e.target.value)} // Update state on change
//                       ></textarea>
//                       <div className="modal-action">
//                         <form method="dialog">
//                           {/* if there is a button in the form, it will close the modal */}
//                           <button className="btn btn-sm bg-green-500 text-black">
//                             Close
//                           </button>
//                           <button
//                             onClick={() => handleSendAdmin(request)}
//                             className="btn btn-sm btn-primary ml-4"
//                           >
//                             Submit Request
//                           </button>
//                         </form>
//                       </div>
//                     </div>
//                   </dialog>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default RequestAsset;


//main code 

import React, { useState, useEffect } from "react";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const RequestAsset = () => {
  const [requestData, setRequestData] = useState([]);
  const [note, setNote] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Pending");
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get("https://asset-management-system-server-lime.vercel.app/assetdata")
      .then((response) => {
        setRequestData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSendAdmin = (request) => {
    const { productName, assettype, stockstatus } = request;
    const requestDate = new Date();

    axios
      .post("https://asset-management-system-server-lime.vercel.app/request", {
        productName,
        assettype,
        stockstatus,
        userEmail: user.email,
        displayName: user.displayName,
        note,
        status: selectedStatus,
        requestDate: requestDate.toISOString(),
      })
      .then((response) => {
        console.log(response.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your data added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        document.getElementById(`my_modal_${request._id}`).close();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to add data");
      });
  };

  if (!requestData || requestData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Asset Name</th>
              <th>Asset Type</th>
              <th>Availability</th>
               <th>Request</th>

            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {requestData.map((request, index) => (
              <tr key={request._id}>
                <th>{index + 1}</th>
                <th>{request.productName}</th>
                <td>{request.assettype}</td>
                 <td>{request.stockstatus}</td>
                <td>
                  <button
                    className="btn"
                    onClick={() =>
                      document.getElementById(`my_modal_${request._id}`).showModal()
                    }
                  >
                    Request Asset
                  </button>
                  <dialog id={`my_modal_${request._id}`} className="modal">
                    <div className="modal-box">
                      <th>{request.productName}</th>
                      <h3 className="font-bold text-lg">Additional Notes</h3>

                      <textarea
                        name="note"
                        type="note"
                        className="textarea textarea-primary"
                        placeholder="Additional Notes"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                      ></textarea>
                      <div className="modal-action">
                        <form method="dialog">
                          <button
                            className="btn btn-sm bg-green-500 text-black"
                            onClick={() =>
                              document.getElementById(`my_modal_${request._id}`).close()
                            }
                          >
                            Close
                          </button>
                          <button
                            onClick={() => handleSendAdmin(request)}
                            className="btn btn-sm btn-primary ml-4"
                          >
                            Submit Request
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RequestAsset;
