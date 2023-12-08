"use client"
import React, { useEffect, useState } from 'react';
import Mainlayout from '../layout/Mainlayout';
import { BsArrowDown } from 'react-icons/bs';
import MySVG from '../component/svgcomponent';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

const Details = () => {
  const Val = useSelector((state: RootState) => state.auth.value);
  const circle = useSelector((state: RootState) => state.auth.circle);
  const circle2 = useSelector((state: RootState) => state.auth.circle2);

  const [imageURL, setImageurl] = useState("")

  useEffect(() => {
    let url = localStorage.getItem("img") || ""
    setImageurl(url)
  }, [imageURL])

  return (
    <Mainlayout>

      <div>
        <div
          style={{
            height: "100vh",
            width: "100%",
            backgroundImage: `url(${imageURL})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className={`fixed bottom-6 w-full`}
        >
          <div
            className={`sm:h-12 h-10 mainbutton ${Val ? "rotate-180" : ""
              } sm:w-12 w-10 transition-all duration-150 sm:border-2 border-2 hover:scale-95 ${circle2 ? "border-white" : "border-transparent"
              } 
          cursor-pointer text-white relative sm:text-3xl opacity-80 text-2xl  m-auto
          rounded-full arrowParent`}
          >
            <MySVG />
            <div className={`h-full arrowIcon font-extralight arrowmain w-full flex items-center justify-center hover:h-max transition-all duration-300`}>
              <BsArrowDown className={`${circle ? "arrowdownAnimation" : ""
                }`} />
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
};

export default Details;
