/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddAsset = () => {
  const axiosSecure = useAxiosSecure();
  const [formData, setFormData] = useState({
    productName: "",
    productType: "",
    productQuantity: 0,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const assetRes = await axiosSecure.post("/assetdata", formData);
      console.log(assetRes.data);

      if (assetRes.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${formData.productName} is added to the database`,
          showConfirmButton: false,
          timer: 1500,
        });
      }

      console.log("with image url", assetRes.data);
    } catch (error) {
      console.error("Error adding asset:", error.message);
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add Assets</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={onSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  placeholder=""
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Type</span>
                </label>
                <input
                  type="text"
                  name="productType"
                  value={formData.productType}
                  onChange={handleChange}
                  placeholder=""
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Quantity</span>
                </label>
                <input
                  type="number"
                  name="productQuantity"
                  value={formData.productQuantity}
                  onChange={handleChange}
                  placeholder=""
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder=""
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Stock Status</span>
                </label>
                <select
                  className="select select-bordered"
                  type="text"
                  name="stockstatus"
                  value={formData.stockstatus}
                  onChange={handleChange}
                  placeholder=""
                  required
                >
                  <option disabled selected>
                    Select one
                  </option>
                  <option>Available</option>
                  <option>Out of Stock</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Asset Type </span>
                </label>
                <select
                  className="select select-bordered"
                  type="text"
                  name="assettype"
                  value={formData.assetType}
                  onChange={handleChange}
                  placeholder=""
                  required
                >
                  <option disabled selected>
                    Select one
                  </option>
                  <option>Returnable</option>
                  <option>Non-Returnable</option>
                </select>
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Add Items
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAsset;
