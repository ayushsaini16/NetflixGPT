import React from "react";
import Header from "./Header";
import { useState } from "react";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BACKGROUND_IMAGE } from "../utils/constants";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
  });
  const [error, setErrors] = useState(null);
  const handleToggle = () => {
    setIsSignUp((prev) => !prev);
    setErrors(null);
    setFormInput({
      name: "",
      email: "",
      password: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validationCheck = () => {
    const newError = {};
    if (isSignUp && formInput.name === "") {
      newError.name = "Name is required";
    }

    if (formInput.email === "") {
      newError.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formInput.email)
    ) {
      newError.email = "Email is not Valid";
    }

    if (formInput.password === "") {
      newError.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=(.*[A-Z]))(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        formInput.password,
      )
    ) {
      newError.password = "Password is not Valid";
    }

    setErrors(newError);

    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validationCheck();

    if (isValid) {
      if (isSignUp) {
        createUserWithEmailAndPassword(
          auth,
          formInput.email,
          formInput.password,
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            updateProfile(user, {
              displayName: formInput.name,
            })
              .then(() => {
                // Profile updated!
                // ...
              })
              .catch((error) => {
                // An error occurred
                // ...
              });
            handleToggle();
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + " " + errorMessage);
            setErrors((prev) => ({ ...prev, message: "User not created" }));
          });
      } else {
        signInWithEmailAndPassword(auth, formInput.email, formInput.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);

            const { uid, displayName, email } = user;
            localStorage.setItem(
              "user",
              JSON.stringify({ uid, displayName, email }),
            );
            dispatch(addUser({ uid: uid, name: displayName, email: email }));
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + "" + errorMessage);
            setErrors((prev) => ({ ...prev, message: "User not exist" }));
          });
      }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-black md:bg-transparent">
      <Header />

      {/* Background Image - hidden on mobile for better visibility, standard on desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src={BACKGROUND_IMAGE}
          alt="background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay to match Netflix design */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Responsive Form Card Container */}
      <div className="relative z-10 w-full sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 p-6 sm:p-12 bg-black md:bg-black/70 text-white rounded-md mt-24 md:mt-0">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl mb-2">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h1>
          {isSignUp && (
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formInput.name}
              onChange={handleChange}
              className="p-3 border border-gray-600 rounded bg-zinc-800/80 focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
            />
          )}
          {error?.name && <span className="text-red-800">{error.name}</span>}
          <input
            type="text"
            placeholder="Email"
            name="email"
            autoComplete=""
            value={formInput.email}
            onChange={handleChange}
            className="p-3 border border-gray-600 rounded bg-zinc-800/80 focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
          />
          {error?.email && <span className="text-red-800">{error.email}</span>}
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formInput.password}
            onChange={handleChange}
            className="p-3 border border-gray-600 rounded bg-zinc-800/80 focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
          />
          {error?.password && (
            <span className="text-red-800">{error.password}</span>
          )}

          {error?.message && (
            <span className="text-red-800">{error.message}</span>
          )}

          <button
            type="submit"
            className="p-3 font-semibold rounded cursor-pointer bg-red-600 hover:bg-red-700 transition duration-200 w-full mt-2"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>

          <div className="flex justify-between items-center text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="accent-red-600 cursor-pointer size-4"
              />
              <label htmlFor="remember" className="cursor-pointer">
                Remember me
              </label>
            </div>
            <button type="button" className="hover:underline cursor-pointer">
              Need help?
            </button>
          </div>

          <div className="text-gray-400 mt-8 mb-12">
            <span> {isSignUp ? "Already Registered?" : "New to Netflix?"}</span>
            <button
              type="button"
              className="text-white font-medium hover:underline cursor-pointer"
              onClick={handleToggle}
            >
              {isSignUp ? "Sign In Now" : " Sign Up Now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
