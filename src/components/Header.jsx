import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
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
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix logo"
      />
      {user && (
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
