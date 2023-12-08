"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../../layouts/dashboardlayout";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { Updatelength } from "@/lib/store/slices/Authslice";
import serverLink from "@/app/link";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Image from "next/image";
import cloudName from "@/app/cloudName";

const Logo = () => {
  const [sectionData, setSectionData]: any = useState([]);
  const [text, setText] = useState({
    width: "",
    height: "",
  });
  // Image 1
  const [selectedFile1, setSelectedFile1] = useState("");
  const [previewImage1, setPreviewImage1] = useState("");

  const handleFileChange1 = (event: any) => {
    const file = event.target.files[0];

    if (file && file.type.includes("image")) {
      setSelectedFile1(file);

      const reader: any = new FileReader();
      reader.onload = () => {
        setPreviewImage1(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [Alert, setAlert] = useState("");

  const handleUpdate = () => {
    // Send image data to Cloudinary

    const formData1 = new FormData();
    formData1.append("file", selectedFile1);
    formData1.append("upload_preset", "nomADZ");

    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData1
      )
      .then((item) => {
        const imageUrl1 = item.data.secure_url;
        console.log(imageUrl1, "imageUrl1");

        // Now you can send all the image URLs to the backend
        if (text.width !== "" && text.height !== "") {
          axios
            .post(`${serverLink}logo/update`, { ...text, logoImage: imageUrl1 })
            .then(() => {
              console.log("Data updated successfully!");
              setAlert("Data updated successfully!");
              setTimeout(() => {
                setAlert("");
              }, 2000);
              // Clear input fields after successful update
              setSelectedFile1("");
            })
            .catch((error) => {
              console.error("Error updating data:", error);
            });
        } else {
          alert("please fill all Fields");
        }
      })
      .catch((error) => {
        console.error("Error uploading image 2 resp:", error);
      });
    // axios
    //   .post(`${serverLink}contact/update`, obj)
    //   .then((response1) => {
    //     // setAlert("service Part Updated");
    //     // setobj({
    //     //   heading: "",
    //     // });
    //   })
    //   .catch((error) => {
    //     console.error("Error uploading image 1:", error);
    //   });
  };

  useEffect(() => {
    axios
      .get(`${serverLink}logo/get`)
      .then((response) => {
        setSectionData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching contact data:", error);
      });
  }, [Alert]);

  const handleTextChange = (event: any) => {
    setText({ ...text, [event.target.name]: event.target.value });
  };

  return (
    <DashboardLayout>
      <div className="p-10 h-[80vh] overflow-auto w-full flex">
        <div className="w-2/3 border-r-[1px]">
          <h1 className="text-3xl pb-4 font-bold">Logo</h1>
          <div className="flex space-x-6">
            <label className="custom-file-upload flex w-max flex-col items-center justify-center cursor-pointer border-2 border-dashed border-gray-300 bg-white p-6 rounded-md shadow-md">
              <div className="icon flex items-center justify-center">
                <AiOutlineCloudUpload className="text-4xl" />
              </div>
              <div className="text flex items-center justify-center">
                <span className="font-normal text-gray-700">
                  Click to upload image
                </span>
              </div>
              <input
                onChange={handleFileChange1}
                type="file"
                id="file1"
                className="hidden"
                accept="image/*"
              />
            </label>
            {previewImage1 && (
              <Image
                width={100}
                height={100}
                src={previewImage1}
                alt="previewimg1.png"
              />
            )}
          </div>

          <div className="grid grid-cols-2">
            <div>
              <label className="mb-2 block text-xl font-medium" htmlFor="">
                Enter Width
              </label>
              <input
                type="number"
                value={text.width}
                name="width"
                onChange={handleTextChange}
                placeholder="Enter text"
                className="w-[90%] border rounded-md p-2"
              />
            </div>

            <div>
              <label className="mb-2 block text-xl font-medium" htmlFor="">
                Enter Height
              </label>
              <input
                type="number"
                value={text.height}
                name="height"
                onChange={handleTextChange}
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
          <div>
            <p className="pb-3 text-xl font-medium">Logo Image</p>
            <Image
              height={200}
              width={200}
              src={sectionData.logoImage}
              alt="iemimage1.png"
            />

            <p className="pb-3 text-xl font-medium">Width</p>
            <p className="pb-3 text-md font-light">{sectionData.width}</p>
            <p className="pb-3 text-xl font-medium">Height</p>
            <p className="pb-3 text-md font-light">{sectionData.height}</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Logo;
