"use client"
import React, { useEffect, useState } from "react";
import styles from "../../../styles/right.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";


const Rightpart = ({ counter, section1, section2, section3, section4, section5, section6, section7, section8, section9, section10 }: any) => {
  
  const [mql, setMql] = useState(false)
  const router = useRouter();
  const dispatch = useDispatch()

  
  useEffect(() => {
    var data:any = window.matchMedia("(max-width: 640px)")
    setMql(data.matches)
  },[counter])
  const Getimage = (e: any) => {
    const parentElement = e.target.id;    
    if(parentElement){
      localStorage.setItem("img", JSON.stringify(parentElement))
      router.push(`/detail`)
    }
  }
  

  return (
    <div className="w-1/2 overflow-hidden relative h-screen bg-transparent">
      <div
        className={`absolute h-[100vh] mts w-full bg-red-300 ${
          counter === 1 || counter === 2
            ? "right-0"
            : counter === 3
            ? "right-[100%]"
            : "right-[-100%]"
        } `}
      > 
        <div className={`h-[50vh] relative w-full`}>
          <div 
            className={`bg-[${section1 && section1.color}] w-full flex justify-center items-center 2xl:text-5xl sm:text-3xl text-md font-bold  text-white h-full p-5 text-center`}
            style={{backgroundColor:`${section1 && section1.color}`}}
          >
            <h1 className={`${counter === 1 ? "textAnimation" : ""}`}>
              {section1&&section1.text}
            </h1>
          </div>
          <div
            style={{backgroundColor:`${section2 && section2.color}`}}
            className={`bg-[${section2 && section2.color}] sm:px-10 px-5 text-center mts absolute top-0 w-full h-full ${
              counter === 2
                ? "right-0"
                : counter === 3
                ? "right-0"
                : "right-[-100%]"
            } flex justify-center items-center 2xl:text-5xl sm:text-3xl text-md font-bold text-white`}
          >
            <p
              className={`sm:w-[450px] w-full ${
                counter === 2 ? "textAnimation" : ""
              } `}
            >
              {section2&&section2.text}
            </p>
          </div>
          <div
            className={`bg-blue-600 mts absolute top-0 w-full h-full ${
              counter === 3 ? "right-0" : "right-[-100%]"
            } flex justify-center items-center  font-bold text-white 2xl:text-5xl sm:text-3xl text-md text-center ${
              counter === 1 ? "textAnimation" : ""
            } px-8`}
          >
            Social Media Marketing
          </div>
        </div>
        <div id="https://res.cloudinary.com/dmqug1qzr/image/upload/v1692187850/NOMADZ/Rich_Media_Right_a8gct0.png" onClick={Getimage}
      style={{backgroundImage: `${mql ? `url(${section1&&section1.respimg2})` : `url(${section1&&section1.image2})` }`,  backgroundSize: 'cover', backgroundPosition: 'center'}}
      className={`h-[50vh] image-container w-full bg-gray-500 relative`}
        >
          <div id="https://res.cloudinary.com/dmqug1qzr/image/upload/v1692187850/NOMADZ/Rich_Media_Right_a8gct0.png" className="overlay">
                 <AiOutlinePlusCircle id="https://res.cloudinary.com/dmqug1qzr/image/upload/v1692187850/NOMADZ/Rich_Media_Right_a8gct0.png" className="plus-sign" />
          </div>
          <div id="https://res.cloudinary.com/dmqug1qzr/image/upload/v1692187850/NOMADZ/Rich_Media_Right_a8gct0.png"
      style={{backgroundImage: `${mql ? `url(${section1&&section1.respimg2})` : `url(${section1&&section1.image2})` }`,  backgroundSize: 'cover', backgroundPosition: 'center'}}
      // style={{backgroundImage: `url(https://res.cloudinary.com/dmqug1qzr/image/upload/v1692187850/NOMADZ/Rich_Media_Right_a8gct0.png)`,  backgroundSize: 'cover', backgroundPosition: 'center'}}
      className={`bg-blue-300 mts ${
              styles.section2Left
            } absolute top-0 w-full h-full ${
              counter === 3 ? "right-0" : "right-[-100%]"
            } image-container`}
          ></div>
        </div>
      </div>

      <div onClick={Getimage}
      style={{backgroundImage: `${mql ? `url(${section3&&section3.respimg1})` : `url(${section3&&section3.image1})` }`,  backgroundSize: 'cover', backgroundPosition: 'center'}}
      // style={{backgroundImage: `url(https://res.cloudinary.com/dmqug1qzr/image/upload/v1692190267/NOMADZ/Social_Media_right_nnomke.png)`,  backgroundSize: 'cover', backgroundPosition: 'center'}}
      className={`absolute h-[100vh] mts w-full image-container  bg-black ${
          counter === 3
            ? "right-0"
            : counter === 4
            ? "right-[100%]"
            : "right-[-100%]"
        } `}
      >
        <div className="overlay">
                 <AiOutlinePlusCircle className="plus-sign" />
          </div>
      </div>

      <div
        className={`absolute h-[100vh] mts w-full ${
          counter === 4
            ? "right-0"
            : counter === 5
            ? "right-[100%]"
            : "right-[-100%]"
        } `}
      >
        <div onClick={Getimage} 
      style={{backgroundImage: `${mql ? `url(${section4&&section4.respimg1})` : `url(${section4&&section4.image1})` }`,  backgroundSize: 'cover', backgroundPosition: 'center'}}
      // style={{backgroundImage: `url(https://res.cloudinary.com/dmqug1qzr/image/upload/v1692190305/NOMADZ/Social_Media_right_Page2_dwdabc.png)`,  backgroundSize: 'cover', backgroundPosition: 'center'}}
      className={`w-full h-[50vh] image-container`}>
        <div className="overlay">
                 <AiOutlinePlusCircle className="plus-sign" />
          </div>
        </div>
        <div
        style={{backgroundColor:`${section4 && section4.color}`}}
          className={`w-full h-[50vh] bg-[${section4 && section4.color}] flex justify-center items-center 2xl:text-5xl sm:text-3xl text-md font-bold text-white text-center ${
            counter === 1 ? "textAnimation" : ""
          }`}
        >
          <p
            className={`sm:w-[350px] w-full ${
              counter === 4 ? "textAnimation" : ""
            }`}
          >
            {section4&&section4.text}
          </p>
        </div>
      </div>

      <div
      style={{backgroundColor:`${section5 && section5.color}`}}
        className={`absolute h-[100vh] mts w-full bg-[${section5 && section5.color}] ${
          counter === 5
            ? "right-0"
            : counter === 6
            ? "right-0"
            : "right-[-100%]"
        } flex justify-center items-center text-white 2xl:text-5xl sm:text-3xl text-md font-bold sm:px-20 px-5 text-center`}
      >
        <h1 className={`${counter === 5 ? "textAnimation" : ""}`}>
          {section5&&section5.text}
        </h1>
      </div>

      <div onClick={Getimage}
      style={{backgroundImage: `${mql ? `url(${section6&&section6.respimg1})` : `url(${section6&&section6.image1})` }`,  backgroundSize: 'cover', backgroundPosition: 'center'}}
      // style={{backgroundImage: `url(https://res.cloudinary.com/dmqug1qzr/image/upload/v1692190446/NOMADZ/Influencer_ayobvq.jpg)`,  backgroundSize: 'cover', backgroundPosition: 'center'}}
      className={`absolute h-[100vh] mts w-full ${
          counter === 6 ? "top-0" : counter === 7 ? "top-0" : "top-full"
        }  image-container `}
      >
        <div className="overlay">
                 <AiOutlinePlusCircle className="plus-sign" />
          </div>
      </div>

      <div
      style={{backgroundColor:`${section7 && section7.color}`}}
        className={`absolute h-[100vh] mts w-full bg-[${section7 && section7.color}] ${
          counter === 7
            ? "right-0"
            : counter === 8
            ? "right-0"
            : "right-[-100%]"
        } flex justify-center items-center font-bold text-white 2xl:text-5xl sm:text-3xl text-md sm:px-20 px-5 text-center`}
      >
        <h1 className={`${counter === 7 ? "textAnimation" : ""}`}>
          {section7&&section7.text}
        </h1>
      </div>

      <div
      style={{backgroundColor:`${section8 && section8.color}`}}
        className={`absolute h-[100vh] mts w-full bg-[${section8 && section8.color}] ${
          counter === 8 ? "top-0" : counter === 9 ? "top-0" : "top-[-100%]"
        } flex justify-center items-center font-bold text-white 2xl:text-5xl sm:text-3xl text-md sm:px-20 px-5 text-center`}
      >
        <h1 className={`${counter === 8 ? "textAnimation" : ""}`}>
        {section8&&section8.text}
        </h1>
      </div>

      <div
      style={{backgroundColor:`${section9 && section9.color}`}}
        className={`absolute h-[100vh] mts w-full bg-[${section9 && section9.color}] ${
          counter === 9
            ? "right-0"
            : counter === 10
            ? "right-[100%]"
            : "right-[-100%]"
        } `}
      >
        <div
          className={`w-full h-[50vh] flex justify-center items-center font-bold text-white 2xl:text-5xl sm:text-3xl text-md sm:px-20 px-5 text-center`}
        >
          <h1 className={`${counter === 9 ? "textAnimation" : ""}`}>
          {section9&&section9.text}
          </h1>
        </div>
        <div onClick={Getimage} 
      style={{backgroundImage: `${mql ? `url(${section9&&section9.respimg2})` : `url(${section9&&section9.image2})` }`,  backgroundSize: 'cover', backgroundPosition: 'center'}}
      // style={{backgroundImage: `url(https://res.cloudinary.com/dmqug1qzr/image/upload/v1692190221/NOMADZ/RetargetingRight_v9qahr.png)`,  backgroundSize: 'cover', backgroundPosition: 'center'}}
      className={`w-full h-[50vh] image-container`}>
        <div className="overlay">
                 <AiOutlinePlusCircle className="plus-sign" />
          </div>
        </div>
      </div>

      <div
        style={{backgroundColor:`${section10 && section10.color}`}}
        className={`absolute h-[100vh] mts w-full ${
          counter === 10 || counter === 11
            ? "right-0"
            : counter === 11
            ? "right-[100%]"
            : "right-[-100%]"
        } `}
      >
        <div
          className={`w-full h-[50vh] bg-[${section10 && section10.color}] flex justify-center items-center font-bold text-white 2xl:text-5xl sm:text-3xl text-md sm:px-20 px-5 text-center ${
            counter === 1 ? "textAnimation" : ""
          }`}
        >
          <h1 className={`${counter === 10 ? "textAnimation" : ""}`}>
          {section10&&section10.text}
          </h1>
        </div>
        <div onClick={Getimage} 
      style={{backgroundImage: `${mql ? `url(${section10&&section10.respimg3})` : `url(${section10&&section10.image3})` }`,  backgroundSize: 'cover', backgroundPosition: 'center'}}
      // style={{backgroundImage: `url(https://res.cloudinary.com/dmqug1qzr/image/upload/v1692190360/NOMADZ/Technologyrightdown_ese4fb.png)`,  backgroundSize: 'cover', backgroundPosition: 'center'}}
      className={`w-full h-[50vh] image-container`}>
        <div className="overlay">
                 <AiOutlinePlusCircle className="plus-sign" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightpart;
