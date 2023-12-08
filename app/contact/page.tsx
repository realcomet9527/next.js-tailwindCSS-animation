"use client";
import React, { useEffect, useState } from "react";
import Mainlayout from "../layout/Mainlayout";
import { useDispatch } from "react-redux";
import { AssignFalse } from "@/lib/store/slices/Authslice";
import { ContactNav, Loader } from "../component";
import { ImLocation2 } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";

import Link from "next/link";
import axios from "axios";
import { log } from "console";
import serverLink from "../link";

const Contact = () => {


  const dispatch = useDispatch();
  const [data, setData]:any = useState([])
  useEffect(() => {
    dispatch(AssignFalse());
  }, []);


  

  const [Checkloader, setCheckloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setCheckloader(false);
    }, 1000);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handlesubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response: any = await axios.post(
        `${serverLink}send-email`,
        formData
      );

      if (response.data.message) {
        alert(response.data.message);
        setFormData({
          name: "",
          number: "",
          email: "",
          message: "",
        });
      } else {
        alert("Server Error Please Check your connection and try again");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    console.log(formData);
  };



  useEffect(() => {
    fetch(`${serverLink}contactInfo`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);



  return (
    <>
      <ContactNav />
      {Checkloader && <Loader />}
      <div className="min-h-screen w-full bg-black flex justify-center items-center">

        {data && data.map((e:any, i:any) => {
          console.log(e);
          
          return (<>
<div className="lg:w-[80%] w-[90%] lg:h-[95%] 2xl:mt-24 mb-4 mt-32 h-max">
          <h1 style={{color: e.heading1color}} className={`text-center 2xl:text-4xl lg:text-xl text-3xl font-bold`}>
            {e.heading}
          </h1>
          <p className="text-center text-white opacity-80 py-2 2xl:text-base text-xs">
          {e.desp}
          </p>
          <div className="mt-4">
            <h2 style={{color: e.heading2color}} className="font-bold 2xl:text-xl lg:text-base text-2xl pb-4">
              Global Centers
            </h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
              <div>
                <div>
                  <h1 className="text-white flex lg:text-sm font-bold items-center">
                    <Image
                      height={10}
                      width={20}
                      src={
                        "https://viver-myexlusive-server.s3.ap-south-1.amazonaws.com/place.png"
                      }
                      alt="Location.png"
                    />
                    <span className="px-4 2xl:text-lg lg:text-sm text-xl ">
                      {e.headOfficeName}
                    </span>
                  </h1>
                  <p className="text-white pl-8 leading-[1.3] text-xs 2xl:text-sm opacity-80 py-2">
                  {e.headOfficeAddress}{" "}
                  </p>

                  <p className="text-white flex text-xs 2xl:text-sm  items-center ">
                    <Image
                          className="cursor-pointer"
                          height={10}
                          width={20}
                          src={
                            "https://viver-myexlusive-server.s3.ap-south-1.amazonaws.com/Mail.png"
                          }
                          alt="mail.png"
                        />
                    
                    <span className="px-4  opacity-80">
                    {e.headOfficeEmail}
                    </span>
                  </p>
                  <p className="text-white flex items-start py-2 text-xs 2xl:text-sm">
                    <Image
                          className="cursor-pointer"
                          height={10}
                          width={20}
                          src={
                            "https://viver-myexlusive-server.s3.ap-south-1.amazonaws.com/call.png"
                          }
                          alt="call.png"
                        />
                    <span className="px-4 opacity-80">
                    {e.headOfficeNumber1} <br className="sm:block hidden" />
                    {e.headOfficeNumber2}
                    </span>
                  </p>

                  <div className="pl-8 flex space-x-3 md:mt-0  md:py-0 sm:py-10 py-2 ">
                    <div>
                      <Link
                        target="_blank"
                        href={
                          "https://www.linkedin.com/company/nomadz-digital-innovation/"
                        }
                      >
                        <Image
                          className="cursor-pointer"
                          height={30}
                          width={30}
                          src={
                            "https://viver-myexlusive-server.s3.ap-south-1.amazonaws.com/Linkedin.png"
                          }
                          alt="Linkdin.png"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link
                        target="_blank"
                        href={
                          "https://www.facebook.com/profile.php?id=100091863835475"
                        }
                      >
                        <Image
                          className="cursor-pointer"
                          height={30}
                          width={30}
                          src={
                            "https://viver-myexlusive-server.s3.ap-south-1.amazonaws.com/facebook.png"
                          }
                          alt="Facebook.png"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link
                        target="_blank"
                        href={"https://www.instagram.com/nomadz_dgtl/"}
                      >
                        <Image
                          className="cursor-pointer"
                          height={30}
                          width={30}
                          src={
                            "https://viver-myexlusive-server.s3.ap-south-1.amazonaws.com/instagram.png"
                          }
                          alt="Instagram.png"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link
                        target="_blank"
                        href={"https://www.youtube.com/@Digitalhustle2"}
                      >
                        <Image
                          className="cursor-pointer"
                          height={30}
                          width={30}
                          src={
                            "https://viver-myexlusive-server.s3.ap-south-1.amazonaws.com/youtube.png"
                          }
                          alt="Youtube.png"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link
                        target="_blank"
                        href={"https://twitter.com/nomADZ_Dgtl/"}
                      >
                        <Image
                          className="cursor-pointer"
                          height={30}
                          width={30}
                          src={
                            "https://viver-myexlusive-server.s3.ap-south-1.amazonaws.com/twitter.png"
                          }
                          alt="Twitter.png"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div>
                  <div>
                    <h1 className="text-white flex font-bold items-center">
                      <Image
                        height={10}
                        width={20}
                        src={
                          "https://viver-myexlusive-server.s3.ap-south-1.amazonaws.com/place.png"
                        }
                        alt="Location.png"
                      />
                      <span className="px-4  2xl:text-lg lg:text-sm text-lg">
                        {e.location1Name}
                      </span>
                    </h1>
                    <p className="text-white pl-8 leading-[1.3] text-xs 2xl:text-sm opacity-80 py-2">
                      {e.location1Address}
                    </p>
                  </div>
                  <div>
                    <h1 className="text-white flex font-bold items-center">
                      <Image
                        height={10}
                        width={20}
                        src={
                          "https://viver-myexlusive-server.s3.ap-south-1.amazonaws.com/place.png"
                        }
                        alt="Location.png"
                      />
                      <span className="px-4  2xl:text-lg lg:text-sm text-lg">
                      {e.location2Name}
                      </span>
                    </h1>
                    <p className="text-white pl-8 leading-[1.3] text-xs 2xl:text-sm opacity-80 py-2">
                    {e.location2Address}
                    </p>
                  </div>
                  <div>
                    <h1 className="text-white flex font-bold items-center">
                      <Image
                        height={10}
                        width={20}
                        src={
                          "https://viver-myexlusive-server.s3.ap-south-1.amazonaws.com/place.png"
                        }
                        alt="Location.png"
                      />
                      <span className="px-4  2xl:text-lg lg:text-sm text-lg">
                      {e.location3Name}
                      </span>
                    </h1>
                    <p className="text-white pl-8 leading-[1.3] text-xs 2xl:text-sm opacity-80 py-2">
                    {e.location3Address}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col md:items-end sm:flex-row flex-col md:col-span-1 sm:col-span-2 md:mt-0 sm:mt-5">
                <div>
                  <div>
                    <h1 className="text-white flex font-bold items-center">
                      <Image
                        height={10}
                        width={20}
                        src={
                          "https://viver-myexlusive-server.s3.ap-south-1.amazonaws.com/place.png"
                        }
                        alt="Location.png"
                      />
                      <span className="px-4  2xl:text-lg lg:text-sm text-lg">
                      {e.location4Name}
                      </span>
                    </h1>
                    <p className="text-white pl-8 leading-[1.3] text-xs 2xl:text-sm opacity-80 py-2">
                    {e.location4Address}
                    </p>
                  </div>
                  <div>
                    <h1 className="text-white flex font-bold items-center">
                      <Image
                        height={10}
                        width={20}
                        src={
                          "https://viver-myexlusive-server.s3.ap-south-1.amazonaws.com/place.png"
                        }
                        alt="Location.png"
                      />
                      <span className="px-4  2xl:text-lg lg:text-sm text-lg">
                      {e.location5Name}
                      </span>
                    </h1>
                    <p className="text-white pl-8 leading-[1.3] text-xs 2xl:text-sm opacity-80 py-2">
                    {e.location5Address}
                    </p>
                  </div>
                  <div>
                    <h1 className="text-white flex font-bold items-center">
                      <Image
                        height={10}
                        width={20}
                        src={
                          "https://viver-myexlusive-server.s3.ap-south-1.amazonaws.com/place.png"
                        }
                        alt="Location.png"
                      />
                      <span className="px-4  2xl:text-lg lg:text-sm text-lg">
                      {e.location6Name}
                      </span>
                    </h1>
                    <p className="text-white pl-8 leading-[1.3] text-xs 2xl:text-sm opacity-80 py-2">
                    {e.location6Address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:mt-0 mt-7 ">
            <h2 style={{color: e.heading3color}} className=" font-bold lg:text-base 2xl:text-xl text-3xl pb-4">
              Say hello
            </h2>
            <form
              action=""
              onSubmit={handlesubmit}
              className="flex sm:space-x-16 sm:flex-row flex-col "
            >
              <div className="flex flex-col space-y-3 lg:w-1/4 sm:w-1/2 w-full">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Your name"
                  onChange={handleInputChange}
                  className="rounded-md outline-none p-2 bg-[rgb(77,77,77)] text-[rgba(255,255,255,0.54)] w-full text-sm"
                />
                <input
                  type="number"
                  name="number"
                  placeholder="Mobile number"
                  value={formData.number}
                  onChange={handleInputChange}
                  className="rounded-md p-2 outline-none bg-[rgb(77,77,77)] text-[rgba(255,255,255,0.54)] w-full text-sm"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="rounded-md p-2 bg-[rgb(77,77,77)] outline-none text-[rgba(255,255,255,0.54)] w-full text-sm"
                />
              </div>
              <div className="lg:w-1/4 sm:w-1/2 w-full sm:mt-0 mt-3 flex flex-col items-end space-y-2">
                <textarea
                  name="message"
                  id=""
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="rounded-md max-h-24 outline-none w-full bg-[rgb(77,77,77)] p-2 text-[rgba(255,255,255,0.54)] text-sm"
                ></textarea>
                <button className="bg-white text-black py-2 px-4 rounded-md font-bold">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
          </>)
        })}

        
      </div>
    </>
  );
};

export default Contact;
