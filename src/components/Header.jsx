import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { LOGO } from "../utils/constants";
const Header = () => {
  const user = useSelector((store) => store.user); //Not user the user of redux as it makes problem in routing
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userexist = JSON.parse(localStorage.getItem("user")); //Instead use localStorage for it
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user");
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    // Fixed width constraint, centered container, and smart padding adjustments per screen size
    <div className="absolute top-0 left-0 right-0 px-4 py-4 md:px-12 md:py-6 bg-gradient-to-b from-black/80 to-transparent z-50 flex justify-between items-center w-full mx-auto">
      <img
        className="w-28 sm:w-36 md:w-44 object-contain"
        src={LOGO}
        alt="Netflix logo"
      />
      {userexist && (
        <div>
          <button className="cursor-pointer" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
