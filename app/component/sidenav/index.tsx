"use client";
import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import Link from "next/link";
import {
  AssignCir2True,
  AssignCirTrue,
  AssignFalse,
  AssignTrue,
} from "@/lib/store/slices/Authslice";
import { BsArrowDown } from "react-icons/bs";

const Sidenav = () => {
  const Val = useSelector((state: RootState) => state.auth.value);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [op, setOp] = useState("");

  const handleArrowclick = () => {
    if (count === 11) {
      setCount(0);
      dispatch(AssignFalse());
    } else {
      setCount((prevCount) => Math.min(prevCount + 1, 11));
    }
  };

  const handleNavClick = () => {
    dispatch(AssignFalse());
    console.log("Aaaaaaaaaaa");
  };

  useEffect(() => {
    if (count === 11) {
      dispatch(AssignTrue());
    } else if (Val === true && count === 11) {
      setCount(10);
    } else {
      dispatch(AssignFalse());
    }
  }, [count, dispatch]);
  useEffect(() => {
    dispatch(AssignFalse());
  }, []);

  const circle = useSelector((state: RootState) => state.auth.circle);
  const circle2 = useSelector((state: RootState) => state.auth.circle2);
  const indcircle = useSelector((state: RootState) => state.auth.indcircle);

  useEffect(() => {
    setTimeout(() => {
      dispatch(AssignCirTrue());
    }, 4000);
    setTimeout(() => {
      dispatch(AssignCir2True());
    }, 4600);
  }, []);

  useEffect(() => {
    if (circle2) {
      setOp("opacity-0");
    } else {
      setOp("");
    }
  }, [circle]);

  return (
    <div className="relative bg-red-300">
      {Val ? (
        <div
          className={`h-screen fixed z-[9998] flex items-center justify-center ${Val ? "left-0 opacity-100" : "-left-full opacity-0"
            }  w-full bg-black duration-1000 top-0`}
        >
          <div className=" lg:w-2/5 w-[90%]">
            <div className="2xl:py-6 py-4 sm:border-b-2 flex justify-center border-b-[1px] borderanime  cursor-pointer w-0 whitespace-nowrap">
              <h1 className="2xl:text-5xl w-max transition-all duration-200 hover:scale-105 hover:text-[#ffffff88] sm:text-3xl text-xl txts1 opacity-0 font-bold text-white">
                <a href="/ourvalue">Our Values</a>
              </h1>
            </div>
            <div className="2xl:py-6 py-4 sm:border-b-2 flex justify-center border-b-[1px] borderanime2 cursor-pointer  whitespace-nowrap w-0">
              <h1 className="2xl:text-5xl transition-all duration-200 hover:scale-105 w-max hover:text-[#ffffff88] sm:text-3xl text-xl txts2 opacity-0 font-bold text-white">
                <a href="/service">Our Services</a>
              </h1>
            </div>
            <div className="2xl:py-6 py-4 sm:border-b-2 flex justify-center border-b-[1px] borderanime3 cursor-pointer  whitespace-nowrap w-0">
              <h1 className="2xl:text-5xl transition-all duration-200 hover:scale-105 w-max hover:text-[#ffffff88] sm:text-3xl text-xl txts3 opacity-0 font-bold text-white">
                <Link href="https://nomadzdigital.com/blog" target="_blank">Blog</Link>
              </h1>
            </div>
            {/* <div className="2xl:py-6 py-4 sm:border-b-2 flex justify-center border-b-[1px] borderanime3 cursor-pointer  whitespace-nowrap w-0">
              <h1 className="2xl:text-5xl transition-all duration-200 hover:scale-105 w-max hover:text-[#ffffff88] sm:text-3xl text-xl txts3 opacity-0 font-bold text-white">
                <Link href="#">Case Studies</Link>
              </h1>
            </div> */}
            <div className="2xl:py-6 py-4 flex justify-center borderanime5 w-0 whitespace-nowrap">
              <h1 className="2xl:text-5xl transition-all duration-200 hover:scale-105 w-max hover:text-[#ffffff88] sm:text-3xl text-xl txts5 opacity-0 font-bold text-white">
                <a href="/contact">Contact Us</a>
              </h1>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div
        className={`${Val ? "block opacity-0" : "hidden opacity-75"} absolute ${indcircle ? "z-[100000] opacity-100" : "z-[9000] opacity-0"
          }  duration-500 h-max top-[92vh] left-0 w-full`}
      >
        <div
          onClick={handleArrowclick}
          className={`sm:h-12 h-10 mainbutton  sm:w-12 w-10 transition-all duration-150 sm:border-2 border-2 hover:scale-95 border-transparent cursor-pointer text-white relative sm:text-3xl opacity-80 text-2xl  m-auto
          rounded-full arrowParent`}
        >
          <svg
            id="m_h"
            className={` w-[48px] h-[48px] absolute top-[-2px] left-[-2px] duration-300 ${circle2 ? "opacity-0" : "opacity-80"
              } `}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 165.6 165.6"
            width="165.6"
            height="165.6"
          >
            <defs>
              <style>{`.cls-1{fill:none;stroke:white;stroke-miterlimit:10;stroke-width:9px;}`}</style>
            </defs>
            <path
              id="m_a"
              className={`cls-1 ${circle ? "svg-elem-2" : ""}`}
              d="M84,5.7A78.3,78.3,0,1,1,5.7,84,78.3,78.3,0,0,1,84,5.7"
              data-svg-origin="0 0"
              style={{
                transform:
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -1.2, -1.2, 0, 1)",
                transformOrigin: "0px 0px 0px",
              }}
            ></path>
          </svg>

          <div
            className={`h-full arrowIcon font-extralight arrowmain w-full flex items-center justify-center hover:h-max transition-all duration-300`}
          >
            <BsArrowDown className={`${circle ? "arrowdownAnimation" : ""}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
