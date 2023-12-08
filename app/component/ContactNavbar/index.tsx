import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Sidenav } from "..";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { AssignCir2False, AssignCir2True, AssignCirFalse, AssignCirTrue, AssignFalse, AssignTrue, setCounter } from "@/lib/store/slices/Authslice";
import Link from "next/link";
import serverLink from "@/app/link";
import axios from "axios";

const ContactNav = () => {
  const Mainrefer = useRef<HTMLDivElement | null>(null);
  const refer = useRef<HTMLDivElement | null>(null);
  const refer1 = useRef<HTMLDivElement | null>(null);
  const refer2 = useRef<HTMLDivElement | null>(null);
  const refercenter1 = useRef<HTMLDivElement | null>(null);
  const refercenter2 = useRef<HTMLDivElement | null>(null);

  const Val = useSelector((state: RootState) => state.auth.value);
  const dispatch = useDispatch();
  const [check, setcheck] = useState(true)

  const [sectionData, setSectionData]: any = useState([]);

  const handleBar = () => {

    if (check) {
      console.log('if from bars');
      dispatch(AssignCir2False())
      dispatch(AssignCirTrue())
      setTimeout(() => {
        dispatch(AssignCir2True())
        dispatch(AssignCirFalse())
      }, 1000)




      dispatch(AssignTrue())

      if (refer.current) {
        refer.current.classList.add("barclose")
        refer.current.classList.remove("barAnime")
      }
      if (refer1.current) {
        refer1.current.classList.remove("barAnime2")
        refer1.current.classList.add("barclose")
      }
      if (refer2.current) {
        refer2.current.classList.remove("barAnime1")
        refer2.current.classList.add("bg-transparent")
      }
      setTimeout(() => {
        if (refercenter1.current) {
          refercenter1.current.classList.add("rotate-45")
        }
      }, 600);
      setTimeout(() => {
        if (refercenter2.current) {
          refercenter2.current.classList.add("-rotate-45")
        }
        if (Mainrefer.current) {
          Mainrefer.current.classList.add("bar")
        }
      }, 600)
      setcheck(false)
    }
    else {
      dispatch(AssignFalse())
      setTimeout(() => {
        if (refer.current) {
          refer.current.classList.remove("barclose")
          refer.current.classList.add("barAnime")
        }
      }, 200)
      setTimeout(() => {
        if (refer1.current) {
          refer1.current.classList.add("barAnime2")
          refer1.current.classList.remove("barclose")
        }
      }, 200)
      if (refer2.current) {
        refer2.current.classList.add("barAnime1")
        refer2.current.classList.remove("bg-transparent")
      }
      if (refercenter1.current) {
        refercenter1.current.classList.remove("rotate-45")
      }
      if (refercenter2.current) {
        refercenter2.current.classList.remove("-rotate-45")
      }
      if (Mainrefer.current) {
        Mainrefer.current.classList.remove("bar")
      }

      setcheck(true)
    }
  }

  useEffect(() => {
    axios
      .get(`${serverLink}logo/get`)
      .then((response) => {
        setSectionData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching contact data:", error);
      });
  }, []);

  return (
    <>
      <div
        className="bg-black sm:pt-12 pt-10 top-0 left-0 sm:h-max h-28 w-full fixed flex
    justify-between z-[9999]"
      >
        <div className="logo sm:h-3/4 h-2/5 sm:ml-10 ml-6 sm:mt-[-10px] -mt-2">
          <Link href="/">
            <Image width={100} height={50} priority={true} src={sectionData.logoImage || './logo.png'} alt="Logo.jpg" />
          </Link>
        </div>
        <div>
          <div
            onClick={handleBar}
            ref={Mainrefer}
            className={`h-max w-[40px] sm:mr-14 mr-6 cursor-pointer Bars`}
          >
            <div ref={refer} className="2xl:h-1 h-[2px] transition-all duration-200 barAnime bg-white xl:w-[40px] w-[30px]"></div>
            <div ref={refer2} className="2xl:h-1 relative  h-[2px] line transition-all duration-200 barAnime1 xl:w-[40px] w-[30px] mt-[6px]">
              <div ref={refercenter1} className="absolute h-full lnshow w-full transition-all duration-200 bg-white "></div>
              <div ref={refercenter2} className="absolute h-full lnshow w-full transition-all duration-200 bg-white "></div>
            </div>
            <div ref={refer1} className="2xl:h-1  h-[2px] transition-all duration-200 barAnime2 bg-white xl:w-[40px] w-[30px] mt-[6px]"></div>
          </div>
        </div>
      </div>
      <Sidenav />
    </>
  );
};

export default ContactNav;
