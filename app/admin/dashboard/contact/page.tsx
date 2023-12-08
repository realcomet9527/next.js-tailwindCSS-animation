"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../../layouts/dashboardlayout";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { Updatelength } from "@/lib/store/slices/Authslice";
import serverLink from "@/app/link";

const Contact = () => {
  const dispatch = useDispatch();
  // const [contactInfo, setcontactInfo] = useState({});
  // dispatch(Updatelength(messages.length));
  const [color1, setColor1] = useState("#F1830F");
  const [color2, setColor2] = useState("#F1830F");
  const [color3, setColor3] = useState("#F1830F");

  const [obj, setobj] = useState({
    heading: "",
    desp: "",
    headOfficeName: "",
    headOfficeAddress: "",
    headOfficeEmail: "",
    headOfficeNumber1: "",
    headOfficeNumber2: "",
    location1Name: "",
    location1Address: "",
    location2Name: "",
    location2Address: "",
    location3Name: "",
    location3Address: "",
    location4Name: "",
    location4Address: "",
    location5Name: "",
    location5Address: "",
    location6Name: "",
    location6Address: "",
    heading1color: "",
    heading2color: "",
    heading3color: "",
  });

  const [render, setRender] = useState({
    heading: "",
    desp: "",
    headOfficeName: "",
    headOfficeAddress: "",
    headOfficeEmail: "",
    headOfficeNumber1: "",
    headOfficeNumber2: "",
    location1Name: "",
    location1Address: "",
    location2Name: "",
    location2Address: "",
    location3Name: "",
    location3Address: "",
    location4Name: "",
    location4Address: "",
    location5Name: "",
    location5Address: "",
    location6Name: "",
    location6Address: "",
    heading1color: "",
    heading2color: "",
    heading3color: "",
  });
  const [Alert, setAlert] = useState("");

  const changeValue = (e: any) => {
    setobj({
      ...obj,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (obj.heading1color !== "") {
      setColor1(obj.heading1color);
    }
    if (obj.heading2color !== "") {
      setColor2(obj.heading2color);
    }
    if (obj.heading3color !== "") {
      setColor3(obj.heading3color);
    }
  }, [obj]);

  const handleUpdate = () => {
    // Send image data to Cloudinary
    axios
      .post(`${serverLink}contact/update`, obj)
      .then((response1) => {
        setAlert("service Part Updated");
        setTimeout(() => {
          setAlert("")
        },2000)
        // setobj({
        //   heading: "",
        //   desp: "",
        //   headOfficeName: "",
        //   headOfficeAddress: "",
        //   headOfficeEmail: "",
        //   headOfficeNumber1: "",
        //   headOfficeNumber2: "",
        //   location1Name: "",
        //   location1Address: "",
        //   location2Name: "",
        //   location2Address: "",
        //   location3Name: "",
        //   location3Address: "",
        //   location4Name: "",
        //   location4Address: "",
        //   location5Name: "",
        //   location5Address: "",
        //   location6Name: "",
        //   location6Address: "",
        //   heading1color: "",
        //   heading2color: "",
        //   heading3color: "",
        // });
      })
      .catch((error) => {
        console.error("Error uploading image 1:", error);
      });
  };

  useEffect(() => {
    axios
      .get(`${serverLink}contactInfo`)
      .then((response) => {
        setobj(response.data[0]);
        setRender(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
      });
  }, [Alert]);

  return (
    <DashboardLayout>
      <div className="p-10 h-[80vh] overflow-auto w-full flex">
        <div className="w-2/3 border-r-[1px]">
          <h1 className="text-3xl pb-4 font-bold">Contact</h1>

          <div className="grid my-5 gap-y-5 md:grid-cols-3 grid-cols-1">
            <div>
              <label className="mb-2 block text-xl font-medium" htmlFor="">
                Main Heading Text Color
              </label>
              <input
                className="w-[100px] h-[50px]"
                id="nativeColorPicker1"
                name="heading1color"
                onChange={changeValue}
                type="color"
                value={color1}
              />
            </div>
            <div>
              <label className="mb-2 block text-xl font-medium" htmlFor="">
                location Heading Text Color
              </label>
              <input
                className="w-[100px] h-[50px]"
                id="nativeColorPicker1"
                name="heading2color"
                onChange={changeValue}
                type="color"
                value={color2}
              />
            </div>

            <div>
              <label className="mb-2 block text-xl font-medium" htmlFor="">
                form Heading Text Color
              </label>
              <input
                className="w-[100px] h-[50px]"
                id="nativeColorPicker1"
                name="heading3color"
                onChange={changeValue}
                type="color"
                value={color3}
              />
            </div>
          </div>

          <div className="grid gap-y-5 md:grid-cols-3 grid-cols-1">
            <div>
              <label className="mb-2 block text-xl font-medium" htmlFor="">
                Enter Main Heading
              </label>
              <input
                type="text"
                value={obj.heading}
                name="heading"
                onChange={changeValue}
                placeholder="Enter text"
                className="w-[90%] border rounded-md p-2"
              />
            </div>
            <div>
              <label className="mb-2 block text-xl font-medium" htmlFor="">
                Enter main descrition
              </label>
              <input
                type="text"
                value={obj.desp}
                name="desp"
                onChange={changeValue}
                placeholder="Enter text"
                className="w-[90%] border rounded-md p-2"
              />
            </div>
            <div>
              <label className="mb-2 block text-xl font-medium" htmlFor="">
                Head Office Name
              </label>
              <input
                type="text"
                value={obj.headOfficeName}
                name="headOfficeName"
                onChange={changeValue}
                placeholder="Enter text"
                className="w-[90%] border rounded-md p-2"
              />
            </div>
            <div>
              <label className="mb-2 block text-xl font-medium" htmlFor="">
                Head Office Address
              </label>
              <textarea
                value={obj.headOfficeAddress}
                name="headOfficeAddress"
                onChange={changeValue}
                placeholder="Enter text"
                className="w-[90%] border rounded-md p-2"
              />
            </div>
            <div>
              <label className="mb-2 block text-xl font-medium" htmlFor="">
                Head Office Email
              </label>
              <input
                type="text"
                value={obj.headOfficeEmail}
                name="headOfficeEmail"
                onChange={changeValue}
                placeholder="Enter text"
                className="w-[90%] border rounded-md p-2"
              />
            </div>
            <div>
              <label className="mb-2 block text-xl font-medium" htmlFor="">
                Head Office Number 1
              </label>
              <input
                type="text"
                value={obj.headOfficeNumber1}
                name="headOfficeNumber1"
                onChange={changeValue}
                placeholder="Enter text"
                className="w-[90%] border rounded-md p-2"
              />
            </div>
            <div>
              <label className="mb-2 block text-xl font-medium" htmlFor="">
                Head Office Number 2
              </label>
              <input
                type="text"
                value={obj.headOfficeNumber2}
                name="headOfficeNumber2"
                onChange={changeValue}
                placeholder="Enter text"
                className="w-[90%] border rounded-md p-2"
              />
            </div>
          </div>

          <h1 className="text-2xl mt-5 pb-4 font-bold">Country 1</h1>
          <div className="grid gap-y-5 sm:grid-cols-2 grid-cols-1">
            <div>
              <label className="mb-2 block text-xl font-medium" htmlFor="">
                Enter Country Name
              </label>
              <input
                type="text"
                value={obj.location1Name}
                name="location1Name"
                onChange={changeValue}
                placeholder="Enter text"
                className="w-[90%] border rounded-md p-2"
              />
            </div>
            <div>
              <label className="mb-2 block text-xl font-medium" htmlFor="">
                Enter Country Address
              </label>
              <textarea
                value={obj.location1Address}
                name="location1Address"
                onChange={changeValue}
                placeholder="Enter text"
                className="w-[90%] border rounded-md p-2"
              />
            </div>
          </div>

          <h1 className="text-2xl mt-5 pb-4 font-bold">Country 2</h1>
          <div className="grid gap-y-5 sm:grid-cols-2 grid-cols-1">
            <div>
              <label className="mb-2 block text-xl font-medium" htmlFor="">
                Enter Country Name
              </label>
              <input
                type="text"
                value={obj.location2Name}
                name="location2Name"
                onChange={changeValue}
                placeholder="Enter text"
                className="w-[90%] border rounded-md p-2"
              />
            </div>
            <div>
              <label className="mb-2 block text-xl font-medium" htmlFor="">
                Enter Country Address
              </label>
              <textarea
                value={obj.location2Address}
                name="location2Address"
                onChange={changeValue}
                placeholder="Enter text"
                className="w-[90%] border rounded-md p-2"
              />
            </div>
          </div>

          <h1 className="text-2xl mt-5 pb-4 font-bold">Country 3</h1>
          <div className="grid gap-y-5 sm:grid-cols-2 grid-cols-1">
            <div>
              <label className="mb-2 block text-xl font-medium" htmlFor="">
                Enter Country Name
              </label>
              <input
                type="text"
                value={obj.location3Name}
                name="location3Name"
                onChange={changeValue}
                placeholder="Enter text"
                className="w-[90%] border rounded-md p-2"
              />
            </div>
            <div>
              <label className="mb-2 block text-xl font-medium" htmlFor="">
                Enter Country Address
              </label>
              <textarea
                value={obj.location3Address}
                name="location3Address"
                onChange={changeValue}
                placeholder="Enter text"
                className="w-[90%] border rounded-md p-2"
              />
            </div>
          </div>

          <h1 className="text-2xl mt-5 pb-4 font-bold">Country 4</h1>
          <div className="grid gap-y-5 sm:grid-cols-2 grid-cols-1">
            <div>
              <label className="mb-2 block text-xl font-medium" htmlFor="">
                Enter Country Name
              </label>
              <input
                type="text"
                value={obj.location4Name}
                name="location4Name"
                onChange={changeValue}
                placeholder="Enter text"
                className="w-[90%] border rounded-md p-2"
              />
            </div>
            <div>
              <label className="mb-2 block text-xl font-medium" htmlFor="">
                Enter Country Address
              </label>
              <textarea
                value={obj.location4Address}
                name="location4Address"
                onChange={changeValue}
                placeholder="Enter text"
                className="w-[90%] border rounded-md p-2"
              />
            </div>
          </div>

          <h1 className="text-2xl mt-5 pb-4 font-bold">Country 5</h1>
          <div className="grid gap-y-5 sm:grid-cols-2 grid-cols-1">
            <div>
              <label className="mb-2 block text-xl font-medium" htmlFor="">
                Enter Country Name
              </label>
              <input
                type="text"
                value={obj.location5Name}
                name="location5Name"
                onChange={changeValue}
                placeholder="Enter text"
                className="w-[90%] border rounded-md p-2"
              />
            </div>
            <div>
              <label className="mb-2 block text-xl font-medium" htmlFor="">
                Enter Country Address
              </label>
              <textarea
                value={obj.location5Address}
                name="location5Address"
                onChange={changeValue}
                placeholder="Enter text"
                className="w-[90%] border rounded-md p-2"
              />
            </div>
          </div>

          <h1 className="text-2xl mt-5 pb-4 font-bold">Country 6</h1>
          <div className="grid gap-y-5 sm:grid-cols-2 grid-cols-1">
            <div>
              <label className="mb-2 block text-xl font-medium" htmlFor="">
                Enter Country Name
              </label>
              <input
                type="text"
                value={obj.location6Name}
                name="location6Name"
                onChange={changeValue}
                placeholder="Enter text"
                className="w-[90%] border rounded-md p-2"
              />
            </div>
            <div>
              <label className="mb-2 block text-xl font-medium" htmlFor="">
                Enter Country Address
              </label>
              <textarea
                value={obj.location6Address}
                name="location6Address"
                onChange={changeValue}
                placeholder="Enter text"
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
        </div>

        <div className="CurrentSection w-1/3 px-10">
          {render &&
            [render].map((item: any, index: number) => {
              return (
                <div key={index}>
                  <div>
                    <label
                      className="mb-2 block text-xl font-medium"
                      htmlFor=""
                    >
                      Main Heading Text Color
                    </label>
                    <div
                      className={` w-[200px] h-[100px] flex justify-center items-center`}
                      style={{ background: item.heading1color }}
                    >
                      {item.heading1color}
                    </div>
                  </div>

                  <div>
                    <label
                      className="mb-2 block text-xl font-medium"
                      htmlFor=""
                    >
                      Location Heading Text Color
                    </label>
                    <div
                      className={` w-[200px] h-[100px] flex justify-center items-center`}
                      style={{ background: item.heading2color }}
                    >
                      {item.heading2color}
                    </div>
                  </div>

                  <div>
                    <label
                      className="mb-2 block text-xl font-medium"
                      htmlFor=""
                    >
                      Form Heading Text Color
                    </label>
                    <div
                      className={` w-[200px] h-[100px] flex justify-center items-center`}
                      style={{ background: item.heading3color }}
                    >
                      {item.heading3color}
                    </div>
                  </div>
                  <div className="mb-3">
                    <h1 className="text-2xl  my-2 text-ubuntu-bold">
                      Main Heading
                    </h1>
                    <p className="my-2 text-ubuntu-regular">{item.heading}</p>
                    <p className="my-2 text-ubuntu-regular">{item.desp}</p>
                  </div>

                  <div className="mb-3">
                    <h1 className="text-2xl  my-2 text-ubuntu-bold">
                      Head Office Info
                    </h1>
                    <p className="my-2 text-ubuntu-regular">
                      {item.headOfficeName}
                    </p>
                    <p className="my-2 text-ubuntu-regular">
                      {item.headOfficeAddress}
                    </p>
                    <p className="my-2 text-ubuntu-regular">
                      {item.headOfficeEmail}
                    </p>
                    <p className="my-2 text-ubuntu-regular">
                      {item.headOfficeNumber1}
                    </p>
                    <p className="my-2 text-ubuntu-regular">
                      {item.headOfficeNumber2}
                    </p>
                  </div>

                  <div className="mb-3">
                    <h1 className="text-2xl  my-2 text-ubuntu-bold">City 1</h1>
                    <p className="my-2 text-ubuntu-regular">
                      {item.location1Name}
                    </p>
                    <p className="my-2 text-ubuntu-regular">
                      {item.location1Address}
                    </p>
                  </div>

                  <div className="mb-3">
                    <h1 className="text-2xl  my-2 text-ubuntu-bold">City 2</h1>
                    <p className="my-2 text-ubuntu-regular">
                      {item.location2Name}
                    </p>
                    <p className="my-2 text-ubuntu-regular">
                      {item.location2Address}
                    </p>
                  </div>

                  <div className="mb-3">
                    <h1 className="text-2xl  my-2 text-ubuntu-bold">City 3</h1>
                    <p className="my-2 text-ubuntu-regular">
                      {item.location3Name}
                    </p>
                    <p className="my-2 text-ubuntu-regular">
                      {item.location3Address}
                    </p>
                  </div>

                  <div className="mb-3">
                    <h1 className="text-2xl  my-2 text-ubuntu-bold">City 4</h1>
                    <p className="my-2 text-ubuntu-regular">
                      {item.location4Name}
                    </p>
                    <p className="my-2 text-ubuntu-regular">
                      {item.location4Address}
                    </p>
                  </div>

                  <div className="mb-3">
                    <h1 className="text-2xl  my-2 text-ubuntu-bold">City 5</h1>
                    <p className="my-2 text-ubuntu-regular">
                      {item.location5Name}
                    </p>
                    <p className="my-2 text-ubuntu-regular">
                      {item.location5Address}
                    </p>
                  </div>

                  <div className="mb-3">
                    <h1 className="text-2xl  my-2 text-ubuntu-bold">City 6</h1>
                    <p className="my-2 text-ubuntu-regular">
                      {item.location6Name}
                    </p>
                    <p className="my-2 text-ubuntu-regular">
                      {item.location6Address}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Contact;
