import React from "react";
import login_image from "../assets/login_image.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-[100vh] flex ">
      <div className="w-[45%] h-[100%] flex justify-center items-center">
        <div className="w-[50%]">
          <div>
            <h1 className="font-medium text-2xl text-gray-900">
              Sign in to your account
            </h1>
            <p className="text-sm mt-4">
              Don't have a account? <Link>Register</Link>
            </p>
          </div>
          <div className="mt-8 w-[100%]">
            <form action="#" className="">
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email address</label>
                <input
                  className="border rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  name="email"
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-apssword"
                  className="border rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-0.9 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
          <div>
            <p className="text-sm mt-6">
              Forgot password?
            </p>
          </div>
        </div>
      </div>
      <div className="w-[55%] h-[100%] bg-gray-700">
        <img className="h-[100%]" src={login_image} alt="login image" />
      </div>
    </div>
  );
};

export default Login;
