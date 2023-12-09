

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paichart from './Paichart';
const AdminHome = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://asset-management-system-server-lime.vercel.app/request');
        setAllData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const pendingRequests = allData.filter((request) => request.status === 'Pending').slice(0, 5);

  const productFrequency = {};
  allData.forEach((request) => {
    const { productName } = request;
    productFrequency[productName] = (productFrequency[productName] || 0) + 1;
  });

  const topRequestedItems = Object.keys(productFrequency).sort(
    (a, b) => productFrequency[b] - productFrequency[a]
  ).slice(0, 4); 

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div>
          
          <div className="overflow-x-auto">
            <h2 className='text-4xl text-center font-bold text-red-600'>Pending Requests</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Asset Type</th>
                  <th>Email of Requester</th>
                  <th>Name of Requester</th>
                  <th>Request Date</th>
                  <th>Additional Note</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {pendingRequests.map((request, index) => (
                  <tr key={request._id}>
                    <th>{index + 1}</th>
                    <td>{request.productName}</td>
                    <td>{request.assettype}</td>
                    <td>{request.userEmail}</td>
                    <td>{request.displayName}</td>
                    <td>{request.requastDate}</td>
                    <td>{request.note}</td>
                    <td>{request.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

         
          <div className="w-[500px]">
            <h2 className='text-4xl text-center font-bold text-red-600'>Top Most Requested Items</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Request Count</th>
                </tr>
              </thead>
              <tbody>
                {topRequestedItems.map((productName, index) => (
                  <tr key={index}>
                    <td>{productName}</td>
                    <td>{productFrequency[productName]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHome;
