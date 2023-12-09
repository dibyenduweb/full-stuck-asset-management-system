/* eslint-disable no-unused-vars */
// import { useLoaderData } from "react-router-dom";

// const Myasset = () => {
//   const requastsdata = useLoaderData();
//   console.log(requastsdata);

// const handledelete = () => {

// }

//     return (
//         <>
//        <div className="overflow-x-auto">
//   <table className="table">
//     {/* head */}
//     <thead>
//       <tr>
//         <th>#</th>
//         <th>Asset Name</th>
//         <th>Asset Type</th>
//         <th>Request Date</th>
//         <th>Approval Date</th>
//         <th>Request Status</th>
//         <th>Action</th>
//       </tr>
//     </thead>
//     <tbody>
//       {/* row 1 */}
//       {
//         requastsdata.map((requasts, index) => 
//           <tr key={requasts._id}>
//         <th>{index +1}</th>
//         <td>{requasts.productName}</td>
//         <td>{requasts.assettype}</td>
//         <td>{requasts.requastDate}</td>
//         <td>{requasts.approvedDate}</td>
//         <td>{requasts.status}</td>
//         <td>
//           <button 
//           onClick={()=> handledelete(_id)}
//           className="btn btn-sm bg-red-900 text-white">Cancel Requast</button>
//         </td>
//       </tr>
//           )
//       }
//     </tbody>
//   </table>
// </div>
//         </>
//     );
// };

// export default Myasset;


import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Myasset = () => {
  const initialData = useLoaderData();
  console.log(initialData);

  const [updateData, setUpdateData] = useState([]);

  useEffect(() => {
    // Set initial data to updateData
    setUpdateData(initialData);
  }, [initialData]);

  const handleDelete = (_id) => {
    const URL = `https://asset-management-system-server-lime.vercel.app/request/${_id}`;
    fetch(URL, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Data deleted successfully",
            showConfirmButton: false,
            timer: 1500,
          });

         
          const filteredData = updateData.filter((item) => item._id !== _id);
          setUpdateData(filteredData);
        }
      });
  };

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
              <th>Request Date</th>
              <th>Approval Date</th>
              <th>Request Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {updateData.map((requasts, index) => (
              <tr key={requasts._id}>
                <th>{index + 1}</th>
                <td>{requasts.productName}</td>
                <td>{requasts.assettype}</td>
                <td>{requasts.requastDate}</td>
                <td>{requasts.approvedDate}</td>
                <td>{requasts.status}</td>
                <td>
                  <button
                    onClick={() => handleDelete(requasts._id)}
                    className={`btn btn-sm ${
                      requasts.status === "Approved"
                        ? "bg-red-900 text-white"
                        : "bg-gray-300 text-gray-500"
                    }`}
                    disabled={requasts.status !== "Pending"}
                  >
                    Cancel Request
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Myasset;
