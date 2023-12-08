"use client";
import React, { useEffect, useState } from "react";
import Mainlayout from "../layout/Mainlayout";
import { Loader } from "../component";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AssignFalse, AssignTrue } from "@/lib/store/slices/Authslice";
import { useDispatch, useSelector } from "react-redux";
import { BiArrowBack } from "react-icons/bi";
import MySVG from "../component/svgcomponent";
import { BsArrowDown } from "react-icons/bs";
import { RootState } from "@/lib/store";
import serverLink from "../link";
const OurValue = () => {
  let scrollTimeout: NodeJS.Timeout | undefined;
  const Val = useSelector((state: RootState) => state.auth.value);
  const circle = useSelector((state: RootState) => state.auth.circle);
  const circle2 = useSelector((state: RootState) => state.auth.circle2);
  const [count, setCount] = useState(0);
  const [Checkloader, setCheckloader] = useState(true);
  const [hrAnimation, setHrAnimation] = useState("hrAnimation");
  const dispatch = useDispatch();


  


  useEffect(() => {
    setTimeout(() => {
      setCheckloader(false);
    }, 1000);
  }, []);
  useEffect(() => {
    setHrAnimation("");
    setTimeout(() => {
      setHrAnimation("hrAnimation");
    }, 100);
  }, [count]);

  useEffect(() => {
    dispatch(AssignFalse());
  }, []);

  useEffect(() => {
    if (count === 5) {
      setCount(0);
    }
  }, [count]);
  const handleScroll = () => {
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos == 0) {
        setCount(0);
      }

      const prevScrollPos = (handleScroll as any).prevScrollPos || 0;

      if (currentScrollPos > prevScrollPos) {
        setCount((prevCount) => Math.min(prevCount + 1, 5));
      } else {
        setCount((prevCount) => Math.max(prevCount - 1, 0));
      }

      (handleScroll as any).prevScrollPos = currentScrollPos;
    }, 100);
  };

  if (!(handleScroll as any).prevScrollPos) {
    (handleScroll as any).prevScrollPos = 0;
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // handleArrowclick()
  }, [count]);

  const handleArrowclick = () => {
    if (count == 5) {
      setCount(0);
    } else {
      setCount((prevCount) => Math.min(prevCount + 1, 5));
    }
  };


  const [value1, setValue1] = useState({
    heading: '',
    para: '',
    color: ''
  })
  const [value2, setValue2] = useState({
    heading: '',
    para: '',
    color: ''
  })
  const [value3, setValue3] = useState({
    heading: '',
    para: '',
    color: ''
  })
  const [value4, setValue4] = useState({
    heading: '',
    para: '',
    color: ''
  })
  const [value5, setValue5] = useState({
    heading: '',
    para: '',
    color: ''
  })

  useEffect(() => {
            fetch(`${serverLink}value/part/1/`).then((res) => res.json()).then((data) => {setValue1(data)})    
            fetch(`${serverLink}value/part/2/`).then((res) => res.json()).then((data) => {setValue2(data)})    
            fetch(`${serverLink}value/part/3/`).then((res) => res.json()).then((data) => {setValue3(data)})    
            fetch(`${serverLink}value/part/4/`).then((res) => res.json()).then((data) => {setValue4(data)})    
            fetch(`${serverLink}value/part/5/`).then((res) => res.json()).then((data) => {setValue5(data)})    
  },[])


  return (
    <>
      <Mainlayout>
        {Checkloader && <Loader />}
        <div className=" h-[2000000vh] bg-black">
          <div
            className={`fixed flex duration-300 justify-center items-center h-[100vh] w-full`}
            style={{
              background: `
                ${
                  count === 0
                ? `${value1 && value1.color}`
                : count === 1
                ? `${value2 && value2.color}`
                : count === 2
                ? `${value3 && value3.color}`
                : count === 3
                ? `${value4 && value4.color}`
                : count === 4
                ? `${value5 && value5.color}`
                : ""
                }
              `
            }}
          >



            <div
              className={`serviceCard absolute ${count===0 ? "flex" : "hidden" } md:w-[650px] w-[90vw] h-max flex flex-col col-end-1 items-center text-center`}
            >
              <div className="relative md:w-[650px] w-[90vw] md:py-10 py-[5vw] ">
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                  <h1
                    className={`${
                      count === 0 ? "textShowAnim" : "textHideAnim"
                    } whitespace-nowrap text-white md:text-3xl text-[4vw] font-bold my-2`}
                  >
                    {value1&&value1.heading}
                  </h1>
                </div>
              </div>

              <hr
                className={`${hrAnimation} bg-white h-[1px] w-full border-none my-2`}
              />

              
              <div
                className={`relative md:w-[650px] serviceCardInner1 w-[85vw]  
                `}
              >
                {/* md:h-[300px] sm:h-[35vw] h-[55vw] */}
                <div className="serviceCardInner w-full   ">
                  <p
                    className={`${
                      count === 0 ? "textShowAnim" : "textHideAnim"
                    } text-white text-center h-max sm:text-[16px] text-[12px] my-5`}
                  >
                    {value1&&value1.para}
                  </p>
                </div>
              </div>

              <hr
                className={`${hrAnimation} bg-white h-[1px] w-full border-none my-2`}
              />

            </div>

            <div
              className={`serviceCard absolute ${count===1 ? "flex" : "hidden" } md:w-[650px] w-[90vw] h-max flex flex-col col-end-1 items-center text-center`}
            >
              <div className="relative md:w-[650px] w-[90vw] md:py-10 py-[5vw] ">
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                  <h1
                    className={`${
                      count === 1 ? "textShowAnim" : "textHideAnim"
                    } whitespace-nowrap text-white md:text-3xl text-[4vw] font-bold my-2`}
                  >
                    {value2&&value2.heading}
                  </h1>
                </div>
              </div>

              <hr
                className={`${hrAnimation} bg-white h-[1px] w-full border-none my-2`}
              />

              
              <div
                className={`relative md:w-[650px] serviceCardInner1 w-[85vw]  
                `}
              >
                {/* md:h-[300px] sm:h-[35vw] h-[55vw] */}
                <div className="serviceCardInner w-full   ">
                  <p
                    className={`${
                      count === 1 ? "textShowAnim" : "textHideAnim"
                    } text-white text-center h-max sm:text-[16px] text-[12px] my-5`}
                  >
                    {value2&&value2.para}
                  </p>
                </div>
              </div>

              <hr
                className={`${hrAnimation} bg-white h-[1px] w-full border-none my-2`}
              />

            </div>

            <div
              className={`serviceCard absolute ${count===2 ? "flex" : "hidden" } md:w-[650px] w-[90vw] h-max flex flex-col col-end-1 items-center text-center`}
            >
              <div className="relative md:w-[650px] w-[90vw] md:py-10 py-[5vw] ">
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                  <h1
                    className={`${
                      count === 2 ? "textShowAnim" : "textHideAnim"
                    } whitespace-nowrap text-white md:text-3xl text-[4vw] font-bold my-2`}
                  >
                    {value3&&value3.heading}
                  </h1>
                </div>
              </div>

              <hr
                className={`${hrAnimation} bg-white h-[1px] w-full border-none my-2`}
              />

              
              <div
                className={`relative md:w-[650px] serviceCardInner1 w-[85vw]  
                `}
              >
                {/* md:h-[300px] sm:h-[35vw] h-[55vw] */}
                <div className="serviceCardInner w-full   ">
                  <p
                    className={`${
                      count === 2 ? "textShowAnim" : "textHideAnim"
                    } text-white text-center h-max sm:text-[16px] text-[12px] my-5`}
                  >
                    {value3&&value3.para}
                  </p>
                </div>
              </div>

              <hr
                className={`${hrAnimation} bg-white h-[1px] w-full border-none my-2`}
              />

            </div>

            <div
              className={`serviceCard absolute ${count===3 ? "flex" : "hidden" } md:w-[650px] w-[90vw] h-max flex flex-col col-end-1 items-center text-center`}
            >
              <div className="relative md:w-[650px] w-[90vw] md:py-10 py-[5vw] ">
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                  <h1
                    className={`${
                      count === 3 ? "textShowAnim" : "textHideAnim"
                    } whitespace-nowrap text-white md:text-3xl text-[4vw] font-bold my-2`}
                  >
                    {value4&&value4.heading}
                  </h1>
                </div>
              </div>

              <hr
                className={`${hrAnimation} bg-white h-[1px] w-full border-none my-2`}
              />

              
              <div
                className={`relative md:w-[650px] serviceCardInner1 w-[85vw]  
                `}
              >
                {/* md:h-[300px] sm:h-[35vw] h-[55vw] */}
                <div className="serviceCardInner w-full   ">
                  <p
                    className={`${
                      count === 3 ? "textShowAnim" : "textHideAnim"
                    } text-white text-center h-max sm:text-[16px] text-[12px] my-5`}
                  >
                    {value4&&value4.para}
                  </p>
                </div>
              </div>

              <hr
                className={`${hrAnimation} bg-white h-[1px] w-full border-none my-2`}
              />

            </div>

            <div
              className={`serviceCard absolute ${count===4 ? "flex" : "hidden" } md:w-[650px] w-[90vw] h-max flex flex-col col-end-1 items-center text-center`}
            >
              <div className="relative md:w-[650px] w-[90vw] md:py-10 py-[5vw] ">
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                  <h1
                    className={`${
                      count === 4 ? "textShowAnim" : "textHideAnim"
                    } whitespace-nowrap text-white md:text-3xl text-[4vw] font-bold my-2`}
                  >
                    {value5&&value5.heading}
                  </h1>
                </div>
              </div>

              <hr
                className={`${hrAnimation} bg-white h-[1px] w-full border-none my-2`}
              />

              
              <div
                className={`relative md:w-[650px] serviceCardInner1 w-[85vw]  
                `}
              >
                {/* md:h-[300px] sm:h-[35vw] h-[55vw] */}
                <div className="serviceCardInner w-full   ">
                  <p
                    className={`${
                      count === 4 ? "textShowAnim" : "textHideAnim"
                    } text-white text-center h-max sm:text-[16px] text-[12px] my-5`}
                  >
                    {value5&&value5.para}
                  </p>
                </div>
              </div>

              <hr
                className={`${hrAnimation} bg-white h-[1px] w-full border-none my-2`}
              />

            </div>




              <div className="absolute bottom-[18%]  md:w-[650px] w-[90vw] h-[50px]">
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                  <h1
                    className={`${
                      count === 0 ? "opacity-100" : "opacity-0"
                    } whitespace-nowrap text-white md:text-2xl text-[4vw] font-bold my-2`}
                  >
                    01/05
                  </h1>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                  <h1
                    className={`${
                      count === 1 ? "opacity-100" : "opacity-0"
                    } whitespace-nowrap text-white md:text-2xl text-[4vw] font-bold my-2`}
                  >
                    02/05
                  </h1>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                  <h1
                    className={`${
                      count === 2 ? "opacity-100" : "opacity-0"
                    } whitespace-nowrap text-white md:text-2xl text-[4vw] font-bold my-2`}
                  >
                    03/05
                  </h1>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                  <h1
                    className={`${
                      count === 3 ? "opacity-100" : "opacity-0"
                    } whitespace-nowrap text-white md:text-2xl text-[4vw] font-bold my-2`}
                  >
                    04/05
                  </h1>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                  <h1
                    className={`${
                      count === 4 ? "opacity-100" : "opacity-0"
                    } whitespace-nowrap text-white md:text-2xl text-[4vw] font-bold my-2`}
                  >
                    05/05
                  </h1>
                </div>
              </div>
            
          </div>
        </div>

        <div
          className={`fixed ${
            count == 11 && Val ? "z-[10000]" : ""
          } bottom-6 w-full`}
        >
          <div
            onClick={handleArrowclick}
            className={`sm:h-12 h-10 mainbutton ${
              Val ? "rotate-180" : ""
            } sm:w-12 w-10 transition-all duration-150 sm:border-2 border-2 hover:scale-95 ${
              circle2 ? "border-white" : "border-transparent"
            } 
          cursor-pointer text-white relative sm:text-3xl opacity-80 text-2xl  m-auto
          rounded-full arrowParent`}
          >
            <MySVG />
            <div
              className={`h-full arrowIcon font-extralight arrowmain w-full flex items-center justify-center hover:h-max transition-all duration-300`}
            >
              <BsArrowDown
                className={`${circle ? "arrowdownAnimation" : ""}`}
              />
            </div>
          </div>
        </div>
      </Mainlayout>
    </>
  );
};

export default OurValue;
