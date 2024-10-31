import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import login_image from "../assets/login_image.jpg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore/lite";

const Register = () => {
  const [userData, setUserData] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName] = useState('');
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const createUser = async (e) => {
    e.preventDefault();

    let userInfo = [];

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setUserData(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

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
        console.log(errorMessage);
      });  

      let userId = userData.uid;
      let userEmail = userData.email;
      
    try {
      const docRef = await setDoc(doc(db, "users", userEmail), {
        Id: userId,
        Email: userEmail,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="h-[100vh] flex ">
      <div className="w-[45%] h-[100%] flex justify-center items-center">
        <div className="w-[50%]">
          <div>
            <h1 className="font-medium text-2xl text-gray-900">
              Register your account
            </h1>
            <p className="text-sm mt-4">
              Already have a account? <Link to="/login">Login</Link>
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
                <p className="text-red-500">{errorEmail}</p>
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
              <p className="text-red-500">{errorPassword}</p>
              <div className="mt-6">
                <button
                  type="submit"
                  onClick={createUser}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-0.9 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
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

export default Register;
