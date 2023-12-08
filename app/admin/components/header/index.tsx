import Link from "next/link";
import React from "react";
import { BiUserCircle } from "react-icons/bi";

const Header = () => {
  return (
    <div className="w-full h-20 shadow-md bg-white px-4 flex items-center justify-between z-10 sticky top-0 right-0">
      <Link href={"/admin/dashboard"}>
        <h1 className="text-3xl font-bold text-orange-500 cursor-pointer">
          nomADZ
        </h1>
      </Link>
      <BiUserCircle className="text-5xl text-blue-500 cursor-pointer" />
    </div>
  );
};

export default Header;
