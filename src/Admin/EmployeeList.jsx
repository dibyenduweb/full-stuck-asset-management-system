/* eslint-disable no-unused-vars */

import { useLoaderData } from "react-router-dom";

const EmployeeList = () => {
  const assetList = useLoaderData([]);

  console.log("Employee List:", assetList);

  const handleAddToTeam = async (_id) => {
    try {
      const employeeToAdd = assetList.find(
        (employee) => employee._id === _id
      );

      if (!employeeToAdd) {
        console.error("Employee not found");
        return;
      }

      // Exclude the _id field from the data sent to MongoDB
      const { _id: omitId, ...employeeData } = employeeToAdd;

      const response = await fetch("https://asset-management-system-server-lime.vercel.app/adduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeData),
      });

      if (response.ok) {
       alert("Employee added successfully");
      } else {
        const errorData = await response.json();
        alert("Failed to add employee", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-center text-4xl text-red-700">Add Employee</h1>
        <div>
          <div className="overflow-x-auto">
          <table className="table">
              <thead>
                <tr>
                  <th>Sl no</th>
                  <th>Image of the member</th>
                  <th>Name of the member</th>
                  <th>Member Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {assetList.map((list, index) => (
                  <tr key={list._id}>
                    <th>{index + 1}</th>
                    <td>
                      <img className="w-20 rounded-full" src={list.profileurl} alt="" />
                    </td>
                    <td>{list.name}</td>
                    <td>{list.role}</td>
                    <th>
                      <button
                        className="btn btn-sm bg-emerald-600 text-white"
                        onClick={() => handleAddToTeam(list._id)}
                      >
                        Add to team
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
