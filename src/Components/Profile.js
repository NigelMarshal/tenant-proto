import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        Profile
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <img src={user.picture} />
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
