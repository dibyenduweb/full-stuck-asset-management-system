/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const profile = useLoaderData();
  const [name, setName] = useState(profile.name);
  const [profileurl, setProfileUrl] = useState(profile.profileurl);
  const [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth);

  const handleUpdate = (e) => {
    e.preventDefault();

    fetch(`https://asset-management-system-server-lime.vercel.app/users/${profile._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, profileurl, dateOfBirth }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount > 0){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Data sucsesfully updated",
                showConfirmButton: false,
                timer: 1500
              });
        }
      });
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Update Profile</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleUpdate}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  value={profileurl}
                  onChange={(e) => setProfileUrl(e.target.value)}
                  type="text"
                  placeholder="Image URL"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  value={profile.email}
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  readOnly
                  disabled
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date of Birth</span>
                </label>
                <input
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  type="date"
                  placeholder="Date of Birth"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
