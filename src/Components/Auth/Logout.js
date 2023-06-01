import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const auth = getAuth();

  function handleLogout() {
    auth.signOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // Handle logout error
      });
  }

  return (
    <div>
      <button className="btn rounded-none glass w-36 font-thin font-roboto text-lg" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
