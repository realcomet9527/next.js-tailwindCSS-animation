"use client";
import React, { useState, useEffect, useRef } from "react";
import DashboardLayout from "../../layouts/dashboardlayout";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Image from "next/image";
import axios from "axios";
import serverLink from "@/app/link";
import cloudName from "@/app/cloudName";

const Section0 = () => {
  // const [finalObj, setFinalObj] = useState({})

  const [Alert, setAlert] = useState("");
  const [sectionData, setSectionData]  =  useState<Array<any>>([]);

  const [obj, setObj]: any = useState({});
  const [check, setcheck]: any = useState(false);
  
  const [selectedFile2, setSelectedFile2]: any = useState("");
  const [previewImage2, setPreviewImage2] = useState("");


  const [selectedFile2resp, setSelectedFile2resp]: any = useState("");

  const [text, setText] = useState("");
  // const componentRef = useRef(null);

  const handleFileChange2 = (event: any) => {
    const file = event.target.files[0];

    if (file && file.type.includes("video")) {
      setSelectedFile2(file);

      const reader: any = new FileReader();
      reader.onload = () => {
        setPreviewImage2(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };





  const handleUpdate = () => {

    if (selectedFile2 !== "") {
      const formData1 = new FormData();
      formData1.append("file", selectedFile2);
      formData1.append("upload_preset", "nomADZ");
      axios
        .post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData1
        )
        .then((response1) => {
          const imageUrl1 = response1.data.secure_url;

          sectionData[0].videos = imageUrl1;
          setSectionData([...sectionData]);
          setcheck(true);
        })
        .catch((error) => {
          console.error("Error uploading image 2:", error);
        });
    }


  };




  useEffect(() => {
    if (check) {
      axios
        .post(`${serverLink}update/0`, obj)
        .then((res) => {
          setAlert("Data updated successfully!");
          setTimeout(() => {
            setAlert("");
          }, 2000);
          setcheck(false);
          // Clear input fields after successful update
          setSelectedFile2("");
          setSelectedFile2resp("");
          setPreviewImage2("");
          setText("");
        })
        .catch((error) => {
          console.error("Error updating data:", error);
        });
    }
  }, [check, obj]);


  useEffect(() => {
    
    // Fetch Section 1 data based on section number
    axios
    .get(`${serverLink}section/0`) // Change the URL accordingly
    .then((response) => {
        setSectionData([...[response.data]]);
      })
      .catch((error) => {
        console.error("Error fetching Section 1 data:", error);
      });
  }, [Alert]);

  useEffect(() => {
    setObj(sectionData[0]);
  }, [sectionData]);


  return (
    <DashboardLayout>
      <div  className="p-10 relative h-[80vh] overflow-auto w-full flex">
        <div className="w-1/3 border-r-[1px]">
          <h1 className="text-2xl pb-4 font-bold">Home Video Section</h1>
          <p className="pb-3 text-xl font-medium mt-4">Video</p>
          <div className="flex space-x-6">
            <label className="custom-file-upload flex w-max flex-col items-center justify-center cursor-pointer border-2 border-dashed border-gray-300 bg-white p-6 rounded-md shadow-md">
              <div className="icon flex items-center justify-center">
                <AiOutlineCloudUpload className="text-4xl" />
              </div>
              <div className="text flex items-center justify-center">
                <span className="font-normal text-gray-700">
                  Click to upload video
                </span>
              </div>
              <input
                onChange={handleFileChange2}
                type="file"
                id="file2"
                className="hidden"
                accept="video/*"
              />
            </label>
            {previewImage2 && (
              <video controls width={200} height={200}>
                <source src={previewImage2} type={selectedFile2.type} />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
         
        </div>
        <div className="CurrentSection w-1/3 px-10">
          <h1 className="text-2xl pb-4 font-bold">Current video Section Data</h1>
          {sectionData &&
            sectionData.map((item: any, index: number) => {
              return (
                <div key={index} className="flex flex-col ">
                  <div className="flex space-x-10">
                    <div>
                      <div>
                        <p className="pb-3 text-xl font-medium">Video</p>
                        <video controls width={200} height={200}>
                          <source src={item.videos} type={selectedFile2resp.type} />
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        
      </div>
        <button
            onClick={handleUpdate}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 absolute bottom-10 right-10"
          >
            Update Data
          </button>
    </DashboardLayout>
  );
};

export default Section0;
