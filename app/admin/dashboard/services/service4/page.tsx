"use client";
import React, { useState, useEffect } from "react";
import DashboardLayout from "../../../layouts/dashboardlayout";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Image from "next/image";
import axios from "axios";
import serverLink from "@/app/link";

const Service4 = () => {
  const [sectionData, setSectionData]: any = useState([]);

  ///////////////////////////////////////////// Colors
  const [color, setColor] = useState('black')
 
  useEffect(() => {
    if(sectionData.length>0){
      setColor(sectionData[0].color)
    }
  },[sectionData])


  const [text, setText] = useState({
    heading: "",
    para: "",
    color: ""
  });
  const [Alert, setAlert] = useState("");

  const handleTextChange = (event: any) => {
    if(event.target.name === "color"){
      setColor(event.target.value)
    }
    setText({ ...text, [event.target.name]: event.target.value });
  };

  const handleUpdate = () => {
    // Send image data to Cloudinary
    if(text.heading!==""&&text.para!==""&&text.color!==""){
      axios
      .post(`${serverLink}service/update/4`, text)
      .then((response1) => {
        setAlert("service Part Updated");
        setTimeout(() => {setAlert("")}, 2000)

      })
      .catch((error) => {
        console.error("Error uploading image 1:", error);
      });
    }
    else{
      alert('fill All fields')
    }
  };

  useEffect(() => {
    // Fetch Section 1 data based on section number
    axios
      .get(`${serverLink}service/part/4`) // Change the URL accordingly
      .then((response) => {
        setSectionData([response.data]);
        setText(response.data)
      })
      .catch((error) => {
        console.error("Error fetching Section 1 data:", error);
      });
  }, [Alert]);

  return (
    <DashboardLayout>
      <div className="p-10 relative h-[80vh] w-full flex">
        <div className="w-1/3 border-r-[1px]">
          <h1 className="text-2xl pb-4 font-bold">Service Part 4</h1>

          <label className="mb-2 block text-xl font-medium" htmlFor="">
            Enter Heading
          </label>
          <input
            type="text"
            value={text.heading}
            name="heading"
            onChange={handleTextChange}
            placeholder="Enter text"
            className="w-[90%] border rounded-md p-2"
          />
          <br />
          <br />
          <label className="mb-2 block text-xl font-medium" htmlFor="">
            Enter Paragraph
          </label>
          <textarea
            value={text.para}
            name="para"
            onChange={handleTextChange}
            placeholder="Enter text"
            className="w-[90%] border rounded-md p-2"
          ></textarea>
          <label className="mb-2 block text-xl font-medium" htmlFor="">
            Select Color
          </label>
          <input className="w-[100px] h-[50px]" id="nativeColorPicker1" name='color' onChange={handleTextChange} type="color" value={color} />

          <br />
          <button
            onClick={handleUpdate}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 absolute bottom-0 right-10"
          >
            Update Data
          </button>
        </div>

        <div className="CurrentSection w-1/3 px-10">
          <h1 className="text-2xl pb-4 font-bold">Current Section Data</h1>
          {sectionData &&
            sectionData.map((item: any, index: number) => {
              return (
                <div key={index}>
                  <h1 className="text-3xl my-2 text-ubuntu-bold">
                    {item.heading}
                  </h1>
                  <p className="my-2 text-ubuntu-regular">{item.para}</p>
                  <h1 className="text-ubuntu-bold font-bold text-lg mt-3">Background</h1>
                  <div className={` w-[200px] h-[100px] flex justify-center items-center`} style={{background: item.color}}>{item.color}</div>


                </div>
              );
            })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Service4;
