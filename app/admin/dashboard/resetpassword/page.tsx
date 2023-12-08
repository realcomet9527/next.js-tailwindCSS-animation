"use client";
import React, { useState, useEffect, useRef } from "react";
import DashboardLayout from "../../layouts/dashboardlayout";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Image from "next/image";
import axios from "axios";
import serverLink from "@/app/link";
import cloudName from "@/app/cloudName";
import { useRouter } from "next/navigation";

const ResetPassword = () => {
  const router = useRouter()
  const [text, settext] = useState({
    prevPassword: "",
    newPassword: "",
  });
  const handleUpdate = () => {
    axios
      .post(`${serverLink}password/reset`, text)
      .then((res:any) => {
        console.log(res, "Data updated successfully!");
        alert(res.data.message)
        if(res.data.message === "Password Update successful"){

          router.push('/admin/auth/')
        }
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  const handleTextChange = (event: any) => {
    settext({ ...text, [event.target.name]: event.target.value });
  };

  return (
    <DashboardLayout>
      <div className="p-10 relative h-[80vh] overflow-auto w-full flex">
        <div className="w-1/3 ">
          <h1 className="text-2xl pb-4 font-bold">Reset Your Password</h1>
          <label className="mb-2 block text-xl font-medium" htmlFor="">
            Current Password
          </label>
          <input
            type="text"
            value={text.prevPassword}
            name="prevPassword"
            onChange={handleTextChange}
            placeholder="..."
            className="w-[90%] border rounded-md p-2"
          />

          <label className="mb-2 block text-xl font-medium" htmlFor="">
            New Password
          </label>
          <input
            type="text"
            value={text.newPassword}
            name="newPassword"
            onChange={handleTextChange}
            placeholder="..."
            className="w-[90%] border rounded-md p-2"
          />
        </div>
      </div>
      <button
        onClick={handleUpdate}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 absolute bottom-10 right-10"
      >
        Update Data
      </button>
    </DashboardLayout>
  );
};

export default ResetPassword;
