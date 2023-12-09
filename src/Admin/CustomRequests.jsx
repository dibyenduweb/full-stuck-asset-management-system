/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomRequests = () => {
  const [allData, setAllData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://asset-management-system-server-lime.vercel.app/makerequest');
      console.log('Response:', response.data);
      setAllData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setError('Error fetching data. Please try again.');
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('Fetching data...');
    fetchData();
  }, []);

  const handleUpdateStatus = async (_id, newStatus) => {
    try {
      let updateData = { status: newStatus };

      if (newStatus === 'Approve') {
        updateData = { ...updateData, approvedDate: new Date().toISOString() };
      }

      console.log('Update Data:', updateData);

      const response = await axios.put(`https://asset-management-system-server-lime.vercel.app/makerequest/${_id}`, updateData);

      if (!response.data) {
        throw new Error(`Error updating status. Request not found`);
      }

      setAllData((prevData) =>
        prevData.map((request) =>
          request._id === _id ? { ...request, ...updateData } : request
        )
      );
    } catch (error) {
      console.error('Error updating status:', error.message);
    }
  };

  const handleApprove = (_id) => {
    handleUpdateStatus(_id, 'Approve');
  };

  const handleReject = (_id) => {
    handleUpdateStatus(_id, 'Reject');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}. Please try again.</p>}

      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Asset Name</th>
                <th>Price</th>
                <th>Asset Type</th>
                <th>Asset Image</th>
                <th>Why you need this</th>
                <th>Additional information</th>
                <th>Activity</th>
                <th>Approve Button</th>
                <th>Reject Button</th>
              </tr>
            </thead>
            <tbody>
              {allData.map((request, index) => (
                <tr key={request._id}>
                  <th>{index + 1}</th>
                  <td>{request.assetName}</td>
                  <td>${request.price}</td>
                  <td>{request.assetType}</td>
                  <td>{request.image}</td>
                  <td>{request.whyneed}</td>
                  <td>{request.addInformation}</td>
                  <td>
                    {request.status}
                  </td>

                  <td>
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => handleApprove(request._id)}
                    >
                      Approve
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleReject(request._id)}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CustomRequests;
