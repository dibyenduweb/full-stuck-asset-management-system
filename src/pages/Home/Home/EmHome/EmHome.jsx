/* eslint-disable no-unused-vars */
// import { useState } from "react";
// import { useEffect } from "react";

// const EmHome = () => {
// const [requastData, setRequastData] =useState([]);

// useEffect(()=>{
//   fetch('https://asset-management-system-server-lime.vercel.app/makerequest')
//   .then(res => res.json())
//   .then(data => setRequastData(data))

// },[])

// console.log(requastData);

//   return (
//  <>
//  <div className="overflow-x-auto">
//   <h2 className="text-3xl text-center font-semibold py-4 ">My Custom Requests</h2>
//   <table className="table table-zebra">
//     {/* head */}
//     <thead>
//       <tr>
//         <th>#</th>
//         <th>Asset name</th>
//         <th>Price</th>
//         <th>Type</th>
//         <th>Status</th>
//       </tr>
//     </thead>
//     <tbody>
//       {/* row 1 */}
//       {
//         requastData.map((requasts, index) =>

//         <tr key={requasts._id}>
//         <th>{index+ 1}</th>
//         <td>{requasts.assetName}</td>
//         <td>{requasts.price}</td>
//         <td>{requasts.assetType}</td>
//         <td className="text-yellow-500 font-bold">{requasts.status}</td>

//       </tr>

//         )
//       }
//     </tbody>
//   </table>
// </div>
//  </>
//   );
// };

// export default EmHome;

// import React, { useState, useEffect } from "react";

// const EmHome = () => {
//   const [requastData, setRequastData] = useState([]);
//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const [editMode, setEditMode] = useState(false);

//   useEffect(() => {
//     fetch('https://asset-management-system-server-lime.vercel.app/makerequest')
//       .then(res => res.json())
//       .then(data => setRequastData(data));
//   }, []);

//   const openDetailView = (request) => {
//     setSelectedRequest(request);
//     setEditMode(false);
//   };

//   const openEditMode = () => {
//     setEditMode(true);
//   };

//   const closeDetails = () => {
//     setSelectedRequest(null);
//     setEditMode(false);
//   };

//   const saveChanges = () => {
//     // Implement logic to save changes
//     // Update the state or make an API call to update the request
//     setEditMode(false);
//   };

//   return (
//     <>
//       <div className="overflow-x-auto">
//         <h2 className="text-3xl text-center font-semibold py-4 ">My Custom Requests</h2>
//         <table className="table table-zebra">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Asset name</th>
//               <th>Price</th>
//               <th>Type</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requastData.map((requasts, index) => (
//               <tr key={requasts._id}>
//                 <th>{index + 1}</th>
//                 <td>{requasts.assetName}</td>
//                 <td>$ {requasts.price}</td>
//                 <td>{requasts.assetType}</td>
//                 <td className="text-yellow-500 font-bold">{requasts.status}</td>
//                 <td>
//                         <button className="btn btn-sm bg-emerald-700" onClick={()=>document.getElementById('my_modal_5').showModal()}>View Details</button>
//                         <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
//                           <div className="modal-box">
//                             <h2> Asset name: {requasts.assetName}</h2>
//                             <h2> Price: {requasts.price}</h2>
//                             <h2> Type: {requasts.assetName}</h2>
//                             <h2>
//                               <img className="w-24 py-4 mx-auto" src={requasts.image} alt="" />
//                             </h2>
//                             <h2> Why needed:
//                                      {requasts.whyneed}</h2>
//                             <h2> Additional information: {requasts.addInformation}</h2>
//                             <h2> Request date: {requasts.approvedDate}</h2>
//                             <h2> Status:
//                          {requasts.status}</h2>
//                          <button className="btn btn-warning btn-sm">Update</button>
//                             <div className="modal-action">
//                               <form method="dialog">
//         {/* if there is a button in form, it will close the modal */}
//         <button className="btn">Close</button>
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

// export default EmHome;

// import React, { useState, useEffect } from "react";

// const EmHome = () => {
//   const [requastData, setRequastData] = useState([]);
//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const [editMode, setEditMode] = useState(false);

//   useEffect(() => {
//     fetch('https://asset-management-system-server-lime.vercel.app/makerequest')
//       .then(res => res.json())
//       .then(data => setRequastData(data));
//   }, []);

//   const openDetailView = (request) => {
//     setSelectedRequest(request);
//     setEditMode(false);
//     document.getElementById('my_modal_5').showModal();
//   };

//   const openEditMode = () => {
//     setEditMode(true);
//   };

//   const closeDetails = () => {
//     setSelectedRequest(null);
//     setEditMode(false);
//     document.getElementById('my_modal_5').close();
//   };

//   const saveChanges = () => {
//     // Implement logic to save changes
//     // Update the state or make an API call to update the request
//     setEditMode(false);
//   };

//   return (
//     <>
//       <div className="overflow-x-auto">
//         <h2 className="text-3xl text-center font-semibold py-4 ">My Custom Requests</h2>
//         <table className="table table-zebra">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Asset name</th>
//               <th>Price</th>
//               <th>Type</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requastData.map((requasts, index) => (
//               <tr key={requasts._id}>
//                 <th>{index + 1}</th>
//                 <td>{requasts.assetName}</td>
//                 <td>$ {requasts.price}</td>
//                 <td>{requasts.assetType}</td>
//                 <td className="text-yellow-500 font-bold">{requasts.status}</td>
//                 <td>
//                   <button className="btn btn-sm bg-emerald-700" onClick={() => openDetailView(requasts)}>
//                     View Details
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {selectedRequest && (
//         <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
//           <div className="modal-box">
//             <h2>Asset name: {selectedRequest.assetName}</h2>
//             <h2>Price: $ {selectedRequest.price}</h2>
//             <h2>Type: {selectedRequest.assetType}</h2>
//             <img className="w-28 mx-auto py-2" src={selectedRequest.image} alt="" />
//             <h2>Why needed: {selectedRequest.whyneed}</h2>
//             <h2>Additional information: {selectedRequest.addInformation}</h2>
//             <h2>Request date: {selectedRequest.approvedDate}</h2>
//             <h2>Status: {selectedRequest.status}</h2>
//             <button className="btn btn-warning btn-sm" onClick={openEditMode}>
//               Update
//             </button>
//             <div className="modal-action">
//               <form method="dialog">
//                 <button className="btn" onClick={closeDetails}>
//                   Close
//                 </button>
//               </form>
//             </div>
//           </div>
//         </dialog>
//       )}
//     </>
//   );
// };

// export default EmHome;

// import React, { useState, useEffect, useRef } from "react";

// const EmHome = () => {
//   const [requastData, setRequastData] = useState([]);
//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const modalRef = useRef(null);

//   useEffect(() => {
//     fetch("https://asset-management-system-server-lime.vercel.app/makerequest")
//       .then((res) => res.json())
//       .then((data) => setRequastData(data));
//   }, []);

//   const openDetailView = (request) => {
//     setSelectedRequest(request);
//     setEditMode(false);

//     // Check if the modal is not already open
//     if (modalRef.current && !modalRef.current.open) {
//       modalRef.current.showModal();
//     }
//   };

//   const openEditMode = () => {
//     setEditMode(true);
//   };
//   const closeDetails = () => {
//     setSelectedRequest(null);
//     setEditMode(false);
//     if (modalRef.current) {
//       modalRef.current.close();
//     }
//   };

//   const saveChanges = () => {
//     setEditMode(false);
//   };

//   return (
//     <>
//       <div className="overflow-x-auto">
//         <h2 className="text-3xl text-center font-semibold py-4 ">
//           My Custom Requests
//         </h2>
//         <table className="table table-zebra">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Asset name</th>
//               <th>Price</th>
//               <th>Type</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requastData.map((requasts, index) => (
//               <tr key={requasts._id}>
//                 <th>{index + 1}</th>
//                 <td>{requasts.assetName}</td>
//                 <td>$ {requasts.price}</td>
//                 <td>{requasts.assetType}</td>
//                 <td className="text-yellow-500 font-bold">{requasts.status}</td>
//                 <td>
//                   <button
//                     className="btn btn-sm bg-emerald-700"
//                     onClick={() => openDetailView(requasts)}
//                   >
//                     View Details
//                   </button>
//                   {selectedRequest && (
//                     <dialog
//                       ref={modalRef}
//                       id="my_modal_5"
//                       className="modal modal-bottom sm:modal-middle"
//                     >
//                       <div className="modal-box">
//                         <h2>Asset name: {selectedRequest.assetName}</h2>
//                         <h2>Price: $ {selectedRequest.price}</h2>
//                         <h2>Type: {selectedRequest.assetType}</h2>
//                         <img
//                           className="w-28 mx-auto py-2"
//                           src={selectedRequest.image}
//                           alt=""
//                         />
//                         <h2>Why needed: {selectedRequest.whyneed}</h2>
//                         <h2>
//                           Additional information:{" "}
//                           {selectedRequest.addInformation}
//                         </h2>
//                         <h2>Request date: {selectedRequest.approvedDate}</h2>
//                         <h2>Status: {selectedRequest.status}</h2>
//                         <button
//                           className="btn btn-warning btn-sm"
//                           onClick={openEditMode}
//                         >
//                           Update
//                         </button>
//                         <div className="modal-action">
//                           <form method="dialog">
//                             <button className="btn" onClick={closeDetails}>
//                               Close
//                             </button>
//                           </form>
//                         </div>
//                       </div>
//                     </dialog>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default EmHome;



import React, { useState, useEffect, useRef } from "react";

const EmHome = () => {
  const [requastData, setRequastData] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    fetch("https://asset-management-system-server-lime.vercel.app/makerequest")
      .then((res) => res.json())
      .then((data) => setRequastData(data));
  }, []);

  const openDetailView = (request) => {
    setSelectedRequest(request);
    setEditMode(false);
    if (modalRef.current && !modalRef.current.open) {
      modalRef.current.showModal();
    }
  };

  const openEditMode = () => {
    setEditMode(true);
  };

  const closeDetails = () => {
    setSelectedRequest(null);
    setEditMode(false);
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const saveChanges = () => {
    // Implement logic to save changes to the server if needed
    setEditMode(false);
  };

  const renderActionButton = () => {
    if (editMode) {
      return (
        <>
          <button className="btn btn-success btn-sm" onClick={saveChanges}>
            Save
          </button>
          <button className="btn btn-danger btn-sm" onClick={closeDetails}>
            Cancel
          </button>
        </>
      );
    } else {
      return (
        <button className="btn btn-emerald-700 btn-sm" onClick={openEditMode}>
          Update
        </button>
      );
    }
  };

  return (
    <>
      <div className="overflow-x-auto">
        <h2 className="text-3xl text-center font-semibold py-4 ">
          My Custom Requests
        </h2>
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Asset name</th>
              <th>Price</th>
              <th>Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requastData.map((requasts, index) => (
              <tr key={requasts._id}>
                <th>{index + 1}</th>
                <td>{requasts.assetName}</td>
                <td>$ {requasts.price}</td>
                <td>{requasts.assetType}</td>
                <td className="text-yellow-500 font-bold">{requasts.status}</td>
                <td>
                  <button
                    className="btn btn-sm bg-emerald-700"
                    onClick={() => openDetailView(requasts)}
                  >
                    View Details
                  </button>
                  {selectedRequest && (
                    <dialog
                      ref={modalRef}
                      id="my_modal_5"
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box">
                        <h2>Asset name: {selectedRequest.assetName}</h2>
                        <h2>Price: $ {selectedRequest.price}</h2>
                        <h2>Type: {selectedRequest.assetType}</h2>
                        <img
                          className="w-28 mx-auto py-2"
                          src={selectedRequest.image}
                          alt=""
                        />
                        <h2>Why needed: {selectedRequest.whyneed}</h2>
                        <h2>
                          Additional information:{" "}
                          {selectedRequest.addInformation}
                        </h2>
                        <h2>Request date: {selectedRequest.approvedDate}</h2>
                        <h2>Status: {selectedRequest.status}</h2>
                        {renderActionButton()}
                      </div>
                    </dialog>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmHome;
