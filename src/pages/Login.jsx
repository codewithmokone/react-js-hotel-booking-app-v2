import React, { useState } from "react";
import login_image from "../assets/login_image.jpg";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore/lite";
// import { Navigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const navigate = useNavigate()

  const signInUser = async (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error: ", errorCode);

        // Error for existing email
        if (errorMessage.includes("auth/email-already-in-use")) {
          setErrorEmail("Email already exist");
          // setUserData('');
        }

        // Handles an error for empty email
        if (errorMessage.includes("auth/invalid-email")) {
          setErrorEmail("email is required");
          // setUserData('');
        }

        // Handles an error for empty password
        if (errorMessage.includes("auth/missing-password")) {
          setErrorPassword("password is required");
          // setUserData('');
        }
      });

      // setEmail('');
      // setPassword('');

    // Fetching user data from database
    if (user) {
      const docRef = doc(db, "users", user.email);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        let userInfo = docSnap.data();
        console.log("Document data:", docSnap.data());
        navigate("/profile", {state: userInfo});
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }
  };

  return (
    <div className="h-[100vh] flex ">
      <div className="w-[45%] h-[100%] flex justify-center items-center">
        <div className="w-[50%]">
          <div>
            <h1 className="font-medium text-2xl text-gray-900">
              Sign in to your account
            </h1>
            <p className="text-sm mt-4">
              Don't have a account? <Link to="/register">Register</Link>
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
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-apssword"
                  className="border rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  onClick={signInUser}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-0.9 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
          <div>
            <p className="text-sm mt-6">Forgot password?</p>
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
