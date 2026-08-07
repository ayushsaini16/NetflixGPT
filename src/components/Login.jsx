import React from "react";
import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => {
    setIsSignUp((prev) => !prev);
  };
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-black md:bg-transparent">
      <Header />

      {/* Background Image - hidden on mobile for better visibility, standard on desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0ce6c17e-e188-4f13-aaf2-6366e12ba739/web/IN-en-20260803-TRIFECTA-perspective_7730cca2-6324-4104-bf66-1a1f6e1a3e61_large.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay to match Netflix design */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Responsive Form Card Container */}
      <div className="relative z-10 w-full sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 p-6 sm:p-12 bg-black md:bg-black/70 text-white rounded-md mt-24 md:mt-0">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          <h1 className="font-bold text-3xl mb-2">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h1>
          {isSignUp && (
            <input
              type="text"
              placeholder="Name"
              className="p-3 border border-gray-600 rounded bg-zinc-800/80 focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
            />
          )}
          <input
            type="text"
            placeholder="Email or phone number"
            className="p-3 border border-gray-600 rounded bg-zinc-800/80 focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border border-gray-600 rounded bg-zinc-800/80 focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
          />

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
