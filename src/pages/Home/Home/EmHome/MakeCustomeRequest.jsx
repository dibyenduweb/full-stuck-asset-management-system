/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const MakeCustomeRequest = () => {
  const axiosSecure = useAxiosSecure();
  const [formData, setFormData] = useState({
    assetName: "",
    price: "",
    assetType: '',
    image: '',
    whyneed:'',
    addInformation:'',
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const assetRes = await axiosSecure.post("/makerequest", formData);
      console.log(assetRes.data);

      if (assetRes.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `${formData.assetName} is added to the database`,
          showConfirmButton: false,
          timer: 1500,
        });
      }

      console.log("with addInformation url", assetRes.data);
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
          <div className=" card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={onSubmit}>
             
              <div  className="form-control">
                <label className="label">
                  <span className="label-text">Asset Name</span>
                </label>
                <input
                  type="text"
                  name="assetName"
                  value={formData.assetName}
                  onChange={handleChange}
                  placeholder=""
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder=""
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Asset Type</span>
                </label>
                <input
                  type="text"
                  name="assetType"
                  value={formData.assetType}
                  onChange={handleChange}
                  placeholder=""
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Asset Image</span>
                </label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder=""
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Why you need this</span>
                </label>
                <input
                  type="text"
                  name="whyneed"
                  value={formData.whyneed}
                  onChange={handleChange}
                  placeholder=""
                  className="input input-bordered"
                  required
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Additional information</span>
                </label>
                <input
                  type="text"
                  name="addInformation"
                  value={formData.addInformation}
                  onChange={handleChange}
                  placeholder=""
                  className="input input-bordered"
                  required
                />
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

export default MakeCustomeRequest;
