'use client'
import React, { useEffect, useState } from "react";
import styles from "../../../styles/Home.module.css";

import { useRouter } from 'next/navigation';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";

const Leftpart = ({ counter, section1, section2, section3, section4, section5, section6, section7, section8, section9, section10 }: any) => {
  const [mql, setMql] = useState(false)
  const dispatch = useDispatch()


  const router = useRouter();

  const Getimage = (e: any) => {
    const parentElement = e.target.id;
    console.log(parentElement);
    if(parentElement){
      localStorage.setItem("img", JSON.stringify(parentElement))
      router.push(`/detail`)
    }
  }
  useEffect(() => {
    var data:any = window.matchMedia("(max-width: 640px)")
    setMql(data.matches)
  },[counter])

  
  const getpop = ()=>{
    console.log("Runing");
    
      // dispatch(AssignpopTrue())
  }

  return (
    <div className="w-1/2 relative h-screen overflow-hidden">
      <div id="https://res.cloudinary.com/dmqug1qzr/image/upload/v1692254301/NOMADZ/Rich_Media_Marketing_pvx6xp.png" onClick={Getimage}
        style={{backgroundImage: `${mql ? `url(${section1&&section1.respimg1})` : `url(${section1&&section1.image1})` }`, backgroundSize: 'cover', backgroundPosition: 'center',}} 
        className={`absolute w-full image-container  h-screen mts  bg-white ${counter === 1 ? "left-0" : "-left-full"}`}
      >
        <div id="https://res.cloudinary.com/dmqug1qzr/image/upload/v1692254301/NOMADZ/Rich_Media_Marketing_pvx6xp.png" className="overlay">
          <AiOutlinePlusCircle id="https://res.cloudinary.com/dmqug1qzr/image/upload/v1692254301/NOMADZ/Rich_Media_Marketing_pvx6xp.png" className="plus-sign" />
        </div>
      </div>
      <div onClick={getpop} 
      style={{backgroundImage: `${mql ? `url(${section2&&section2.respimg1})` : `url(${section2&&section2.image1})` }`,  backgroundSize: 'cover', backgroundPosition: 'center',}}
        className={`absolute w-full image-container  h-screen mts  bg-green-700 ${counter === 2 || counter === 3 ? "right-0" : "-right-full"
          }`}
      >
        <div className="overlay">
          <AiOutlinePlusCircle className="plus-sign" />
        </div>
      </div>

      <div onClick={Getimage}
        className={`absolute w-full h-screen mts   ${counter === 3 || counter === 4 ? "right-0" : "-right-full"
          }`}
      >
        <div className={`h-1/2 flex text-center font-bold text-white justify-center items-center bg-[${ section1 && section1.color}] w-full 2xl:text-5xl sm:text-3xl text-md px-8`}
          style={{backgroundColor:`${section3 && section3.color}`}}
        >
          <h1 className={`${counter === 3 || counter == 4 ? "textAnimation" : ""}`}>
            {section3 && section3.text}
          </h1>
        </div>
        <div
          className={` relative h-1/2 bg-black w-full`}
        >
          <video
            muted
            autoPlay
            loop
            className="sm:h-full h-[50vh] object-cover w-full"
            src={`${mql ? `${section3&&section3.videosresp}` : `${section3&&section3.videos}` }`}
            // src="https://res.cloudinary.com/dmqug1qzr/video/upload/v1692192477/NOMADZ/Socialmedialeft_psfubi.mp4"
          ></video>
        </div>
      </div>
      <div onClick={Getimage}
        style={{backgroundImage: `${mql ? `url(${section5&&section5.respimg1})` : `url(${section5&&section5.image1})` }`, backgroundSize: 'cover', backgroundPosition: 'center',}} 
        // style={{backgroundImage: `url(https://res.cloudinary.com/dmqug1qzr/image/upload/v1692190381/NOMADZ/Affiliate_Performance_r4qajk.png)`,  backgroundSize: 'cover', backgroundPosition: 'center',}}
        className={`absolute w-full h-screen mts image-container  ${counter === 5 || counter === 6 ? "left-0" : "-left-full"
          }`}
      >
        <div className="overlay">
          <AiOutlinePlusCircle className="plus-sign" />
        </div>
      </div>
      <div onClick={Getimage}
        className={`absolute w-full font-bold text-white flex justify-center items-center 2xl:text-5xl sm:text-3xl text-md px-8 text-center  h-screen mts  bg-[${section6&& section6.color}] ${counter === 6 || counter === 7 ? "top-0" : "-top-full"
          }`}
          style={{backgroundColor:`${section6 && section6.color}`}}
      >
        <h1 className={`${counter === 6 ? "textAnimation" : ""}`}>
          {section6&&section6.text}
        </h1>
      </div>
      <div onClick={Getimage}
        style={{backgroundImage: `${mql ? `url(${section7&&section7.respimg1})` : `url(${section7&&section7.image1})` }`, backgroundSize: 'cover', backgroundPosition: 'center',}} 
        // style={{backgroundImage: `url(https://res.cloudinary.com/dmqug1qzr/image/upload/v1692190459/NOMADZ/Media_Buying_hsyc7k.jpg)`,  backgroundSize: 'cover', backgroundPosition: 'center',}}
        className={`absolute w-full h-screen mts image-container ${counter === 7 || counter === 8 ? "left-0" : "-left-full"
          }`}
      >
        <div className="overlay">

          <AiOutlinePlusCircle className="plus-sign" />
        </div>
      </div>
      <div onClick={Getimage}
        style={{backgroundImage: `${mql ? `url(${section8&&section8.respimg1})` : `url(${section8&&section8.image1})` }`, backgroundSize: 'cover', backgroundPosition: 'center',}} 
        // style={{backgroundImage: `url(https://res.cloudinary.com/dmqug1qzr/image/upload/v1692254670/NOMADZ/email-_-Sms_tox7mx.png)`,  backgroundSize: 'cover', backgroundPosition: 'center',}}
      className={`absolute w-full h-screen mts image-container   ${counter === 8 || counter === 9 ? "bottom-0" : "-bottom-full"
          }`}
      >
        <div className="overlay">

          <AiOutlinePlusCircle className="plus-sign" />
        </div>
      </div>
      <div onClick={Getimage}
        className={`absolute w-full h-screen mtsslow   ${counter === 9 ? "left-0" : "-left-full"
          }`}
      >
        <div className={` h-1/2 bg-black relative w-full`}>

          <video
            muted
            autoPlay
            loop
            className="sm:h-full h-[50vh] object-cover w-full"
            src={`${mql ? `${section9&&section9.videosresp}` : `${section9&&section9.videos}` }`}
          ></video>

        </div>
        <div 
        style={{backgroundImage: `${mql ? `url(${section9&&section9.respimg1})` : `url(${section9&&section9.image1})` }`, backgroundSize: 'cover', backgroundPosition: 'center',}} 
        // style={{backgroundImage: `url(https://res.cloudinary.com/dmqug1qzr/image/upload/v1692190075/NOMADZ/RetargetingLeft_yotsh7.png)`,  backgroundSize: 'cover', backgroundPosition: 'center',}}
      className={`h-1/2 image-container  relative w-full`}>
          <div className="overlay">

            <AiOutlinePlusCircle className="plus-sign" />
          </div>
        </div>
      </div>
      <div onClick={Getimage}
        className={`absolute w-full h-screen mtsslow ${counter === 10 || counter === 11 ? "right-0" : "-right-full"}`}
      >
        <div className="w-full h-1/2 flex">
          <div 
        style={{backgroundImage: `${mql ? `url(${section10&&section10.respimg1})` : `url(${section10&&section10.image1})` }`, backgroundSize: 'cover', backgroundPosition: 'center',}} 
        // style={{backgroundImage: `url(https://res.cloudinary.com/dmqug1qzr/image/upload/v1692190343/NOMADZ/Technologyleftup_rdrqwt.png)`,  backgroundSize: 'cover', backgroundPosition: 'center',}}
      className={`w-full image-container  relative`}>
            <div className="overlay">

              <AiOutlinePlusCircle className="plus-sign" />
            </div>
          </div>
        </div>
        <div className="w-full h-1/2 flex">
          <div 
        style={{backgroundImage: `${mql ? `url(${section10&&section10.respimg2})` : `url(${section10&&section10.image2})` }`, backgroundSize: 'cover', backgroundPosition: 'center',}} 
        // style={{backgroundImage: `url(https://res.cloudinary.com/dmqug1qzr/image/upload/v1692190327/NOMADZ/Technologyleftdown_h61bpa.png)`,  backgroundSize: 'cover', backgroundPosition: 'center',}}
      className={`w-full relative image-container  `}>
            <div className="overlay">

              <AiOutlinePlusCircle className="plus-sign" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftpart;
