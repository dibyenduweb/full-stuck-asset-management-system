/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const AssetList = () => {
  const initialAssetList = useLoaderData();
  const [assetList, setAssetList] = useState(initialAssetList);
  const [searchTerm, setSearchTerm] = useState("");
  const [stockStatusFilter, setStockStatusFilter] = useState("all");
  const [assetTypeFilter, setAssetTypeFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");


  const filteredList = assetList
    .filter((asset) =>
      asset.productName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (asset) =>
        stockStatusFilter === "all" ||
        asset.stockstatus.toLowerCase() === stockStatusFilter.toLowerCase()
    )
    .filter(
      (asset) =>
        assetTypeFilter === "all" ||
        asset.assettype.toLowerCase() === assetTypeFilter.toLowerCase()
    );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleStockStatusFilter = (e) => {
    setStockStatusFilter(e.target.value);
  };

  const handleAssetTypeFilter = (e) => {
    setAssetTypeFilter(e.target.value);
  };

  const handleSortByQuantity = () => {
    const sortedList = [...assetList].sort((a, b) => {
      const orderMultiplier = sortOrder === "asc" ? 1 : -1;
      return (
        orderMultiplier *
        (parseInt(a.productQuantity) - parseInt(b.productQuantity))
      );
    });

    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setAssetList([...sortedList]);
  };

  const handleDelete = (_id) => {
    const URL = `https://asset-management-system-server-lime.vercel.app/assetdata/${_id}`;
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
          const filteredData = assetList.filter((item) => item._id !== _id);
          setAssetList(filteredData);
        }
      });
  };

  return (
    <>
      <div>
        <h1 className="text-center text-4xl text-red-700">Assets List</h1>

        {/* Search Section */}
        <div>
          <label>Search by Product Name:</label>
<input type="text"
 value={searchTerm}
 onChange={handleSearch}
placeholder="search by name" className=" input input-bordered input-primary w-96 mx-auto" />
        </div>

       <div className="lg:flex my-6 gap-6">
       <div>
          <label>Stock Status:</label>
          <select
            value={stockStatusFilter}
            onChange={handleStockStatusFilter}
            className="select select-info"
          >
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="out of stock">Out of Stock</option>
          </select>

          <label>Asset Type:</label>
          <select
          className="select select-info"
            value={assetTypeFilter}
            onChange={handleAssetTypeFilter}
          >
            <option value="all">All</option>
            <option value="returnable">Returnable</option>
            <option value="non-returnable">Non-Returnable</option>
          </select>
        </div>

        <div>
          <label>Sort by Quantity:</label>
          <select
          className="select select-info"
            value={sortOrder}
            onChange={() => handleSortByQuantity()}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

       </div>

        <div className="overflow-x-auto">
          {/* Table */}
          <table className="table">
            {/* Table Headers */}
            <thead>
              <tr>
                <th>Sl no</th>
                <th>Product Name</th>
                <th>Product Type </th>
                <th>Product Quantity</th>
                <th>Date</th>
                <th>Stock Status</th>
                <th>Asset Type</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {filteredList.map((list, index) => (
                <tr key={list._id}>
                  <th>{index + 1}</th>
                  <td>{list.productName}</td>
                  <td>{list.productType}</td>
                  <td>{list.productQuantity}</td>
                  <td>{list.date}</td>
                  <td>{list.stockstatus}</td>
                  <td>{list.assettype}</td>
                  <th>
                    <Link to={`/assetupdate/${list._id}`}>
                      <button className="btn btn-sm bg-emerald-600 text-white">
                        Update
                      </button>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(list._id)}
                      className="btn btn-sm bg-red-700 text-white"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AssetList;
