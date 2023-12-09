// import { useContext } from "react";
// import { Helmet } from "react-helmet-async";
// import { useForm } from "react-hook-form";
// import { AuthContext } from "../../providers/AuthProvider";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import useAxiosPublic from "../../hooks/useAxiosPublic";

// const image_hosting_kye = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_kye}`

// const HrSignUp = () => {
//   const axiosPublic = useAxiosPublic();

//   const allPackage = [
//     { price: 5, details: "5 members for $5", type: "Basic" },
//     { price: 10, details: "10 members for $8", type: "Premium" },
//     { price: 20, details: "20 members for $10", type: "Professional" },
//   ];

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();
//   const { createUser, updateUserProfile } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const onSubmit = async(data) => {
//     //send imagebb and get link and resend database
//     const imageFile ={image:data.image[0]}
//     const res =await axiosPublic.post(image_hosting_api,imageFile,{
//         headers:{
//             'content-type': 'multipart/form-data'
//         }
//     });
//     console.log(res.data);

//     createUser(data.email, data.password).then((result) => {
//       const loggedUser = result.user;
//       console.log(loggedUser);
//       updateUserProfile(data.name, data.photoURL)
//         .then(() => {
//           //console.log('user profile info updated')
//           //create user entry in the database
//           const userInfo = {

//             name: data.name,
//             profileurl:data.profileurl,
//             email: data.email,
//             dateOfBirth:data.dateOfBirth,
//             companyname:data.companyname,
//             image:res.data.data.display_url,
//             role: "admin",
//             allPackage: data.allPackage,
          
//           };
//           console.log('adminrole', userInfo);
//           axiosPublic.post("/users", userInfo).then((res) => {
//             if (res.data.insertedId) {
//               console.log("user add in database");
//               reset();
//               Swal.fire({
//                 position: "top-end",
//                 icon: "success",
//                 title: "User created successfully.",
//                 showConfirmButton: false,
//                 timer: 1500,
//               });
//               navigate("/");
//             }
//           });
//         })
//         .catch((error) => console.log(error));
//     });
//   };


import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const image_hosting_kye = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_kye}`;

const HrSignUp = () => {
  const axiosPublic = useAxiosPublic();

  const allPackage = [
    { price: 5, details: "5 members for $5", type: "Basic" },
    { price: 10, details: "10 members for $8", type: "Premium" },
    { price: 20, details: "20 members for $10", type: "Professional" },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // send imagebb and get link and resend database
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
    console.log(res.data);

    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          // create user entry in the database
          const userInfo = {
            name: data.name,
            profileurl: data.profileurl,
            email: data.email,
            dateOfBirth: data.dateOfBirth,
            companyname: data.companyname,
            image: res.data.data.display_url,
            role: "admin",
            packageLimit:null,
            selectedPackage: allPackage[data.selectmember],
          };

          console.log('adminrole', userInfo);
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user add in database");
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/payment");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };
    
  return (
    <>
      <Helmet>
        <title>Employee Sign Up</title>
      </Helmet>
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="py-8 top-96 text-5xl font-bold text-center my-6 text-red-600">HR/Admin Sign up .</h1>
            <img className="lg:w-[400px] w-36 ml-28 rounded-3xl" src="https://i.ibb.co/F3MQLk6/3.png" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Full Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Company Name</span>
                </label>
                <input
                  type="text"
                  {...register("companyname", { required: true })}
                  name="companyname"
                  placeholder="Company Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile url</span>
                </label>
                <input
                  type="text"
                  {...register("profileurl", { required: true })}
                  name="profileurl"
                  placeholder="Profile url"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Company logo</span>
                </label>
                <input
                  type="file"
                  {...register("image", { required: true })}
                  name="image"
                  placeholder="Upload image"
                  className="file-input file-input-bordered w-full max-w-xs"
                />
                {errors.name && (
                  <span className="text-red-600">image is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date of Birth</span>
                </label>
                <input
                  type="date"
                  {...register("dateOfBirth", { required: true })}
                  placeholder="Date of Birth"
                  className="input input-bordered"
                />
                {errors.dateOfBirth && (
                  <span className="text-red-600">
                    Date of Birth is required
                  </span>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
  <select 
    {...register("selectmember", { required: true })}
    name="selectmember"
  className="select select-bordered">
    <option disabled selected>Select Members</option>
    <option value='0'> 5 Members</option>
    <option value='1'>10 Members</option>
    <option value='2'>20 Members </option>
  </select>
</div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="px-6">
              <small>
                Already have an account{" "}
                <Link to="/login">
                  <span className="border-0 btn btn-sm bg bg-emerald-600">
                    Login
                  </span>
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default HrSignUp;
