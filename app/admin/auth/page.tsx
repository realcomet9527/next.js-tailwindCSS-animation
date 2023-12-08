"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { AssignauthTrue } from "@/lib/store/slices/Authslice";
import serverLink from "@/app/link";

const Auth = () => {
  const Router = useRouter();
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Alert, SetAlert] = useState("");
  const [successStatus, SetSuccessStatus] = useState(false);
  


  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (email === "" || password === "") {
      SetAlert("Please fill in both email and password.");
      SetSuccessStatus(false)
      
      setTimeout(() => {
        SetAlert("");
      }, 2000);
      return;
    }

    try {
      const response = await axios.post(`${serverLink}login`, {
        email: email,
        password: password,
      });
      SetAlert(response.data.message);
      SetSuccessStatus(true)
      dispatch(AssignauthTrue())
      setTimeout(() => {
        SetAlert("");
        Router.push("/admin/dashboard");
      }, 2000);
      
    } catch (error: any) {
      SetAlert(error.response.data.message);
      SetSuccessStatus(error.response.data.success)
      setTimeout(() => {
        SetAlert("");
      }, 2000);
    }
  };

  return (
    <div className="bg-[rgb(232,232,232)] relative ">
      <h1 className="absolute text-4xl text-center mt-10 font-bold text-orange-500 w-full">
        nomADZ Admin
      </h1>
      <div className="h-[100vh] w-full flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white px-4 py-10 max-w-sm mx-auto rounded-md shadow-md"
        >
          <p className={`text-center pb-4 ${successStatus? "text-green-600" : "text-red-600"}`}>{Alert && `${Alert}`}</p>
          <p className="text-xl font-semibold text-center text-black">
            Sign in to your account
          </p>
          <div className="relative mt-4">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 border rounded-md shadow-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-md shadow-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md font-semibold"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
