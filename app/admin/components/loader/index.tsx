"use client";
import React from "react";
import "../../../globals.css";

const Loader = () => {
  return (
    <div className="h-screen w-full bg-black flex justify-center items-center">
      <div className="loader">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
      </div>
    </div>
  );
};

export default Loader;
