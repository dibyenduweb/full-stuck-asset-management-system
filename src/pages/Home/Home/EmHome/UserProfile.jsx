

import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";


const UserProfile = () => {
    const {user} =useAuth();
    console.log("usrdata", user);

    const [profile, setProfile] = useState();
    useEffect(() => {
      fetch(`https://asset-management-system-server-lime.vercel.app/user/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setProfile(data));
    }, [user?.email]);
  
    console.log('see data',profile);


    return (
      <>
<div className="card w-96 mx-auto bg-base-100 shadow-xl">
  <img className="w-44  mx-auto rounded-full" src={profile?.profileurl} alt="profile photo" />
  <div className="card-body">
    <h2 className="card-title">Name : {profile?.name}</h2>
    <p>email : {profile?.email}</p>
    <h2>Role : {profile?.role}</h2>
    <h2>Membership : {profile?.selectmember}</h2>
    <h2>Date of Birth : {profile?.dateOfBirth}</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">update</button>
    </div>
  </div>
</div>


      </>
    );
};

export default UserProfile;