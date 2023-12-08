"use client";
import React, { useState, useEffect } from "react";
import DashboardLayout from "../../layouts/dashboardlayout";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Image from "next/image";
import axios from "axios";
import serverLink from "@/app/link";
import cloudName from "@/app/cloudName";
import { HexColorPicker,HexColorInput } from "react-colorful";

const Section10 = () => {
  const [sectionData, setSectionData]: any = useState([]);

  const [obj, setObj]: any = useState({});
  const [check, setcheck]: any = useState(false);

  const [selectedFile1, setSelectedFile1] = useState("");
  const [previewImage1, setPreviewImage1] = useState("");

  const [selectedFile2, setSelectedFile2]: any = useState("");
  const [previewImage2, setPreviewImage2] = useState("");

  const [selectedFile3, setSelectedFile3] = useState("");
  const [previewImage3, setPreviewImage3] = useState("");

  const [selectedFile1resp, setSelectedFile1resp] = useState("");
  const [previewImage1resp, setPreviewImage1resp] = useState("");

  const [selectedFile2resp, setSelectedFile2resp]: any = useState("");
  const [previewImage2resp, setPreviewImage2resp] = useState("");

  const [selectedFile3resp, setSelectedFile3resp] = useState("");
  const [previewImage3resp, setPreviewImage3resp] = useState("");

  const [text, setText] = useState("");
  const [color, setColor] = useState("#aabbcc");
  const [Alert, setAlert] = useState("");

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

  const handleFileChange1resp = (event: any) => {
    const file = event.target.files[0];

    if (file && file.type.includes("image")) {
      setSelectedFile1resp(file);

      const reader: any = new FileReader();
      reader.onload = () => {
        setPreviewImage1resp(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange2 = (event: any) => {
    const file = event.target.files[0];

    if (file && file.type.includes("image")) {
      setSelectedFile2(file);

      const reader: any = new FileReader();
      reader.onload = () => {
        setPreviewImage2(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange2resp = (event: any) => {
    const file = event.target.files[0];

    if (file && file.type.includes("image")) {
      setSelectedFile2resp(file);

      const reader: any = new FileReader();
      reader.onload = () => {
        setPreviewImage2resp(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange3 = (event: any) => {
    const file = event.target.files[0];

    if (file && file.type.includes("image")) {
      setSelectedFile3(file);

      const reader: any = new FileReader();
      reader.onload = () => {
        setPreviewImage3(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange3resp = (event: any) => {
    const file = event.target.files[0];

    if (file && file.type.includes("image")) {
      setSelectedFile3resp(file);

      const reader: any = new FileReader();
      reader.onload = () => {
        setPreviewImage3resp(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleTextChange = (event: any) => {
    setText(event.target.value);
  };

  const handleUpdate = () => {
    if (selectedFile1 !== "") {
      const formData1 = new FormData();
      formData1.append("file", selectedFile1);
      formData1.append("upload_preset", "nomADZ");
      axios
        .post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData1
        )
        .then((response1) => {
          const imageUrl1 = response1.data.secure_url;

          sectionData[0].image1 = imageUrl1;
          setSectionData([...sectionData]);
          setcheck(true);
        })
        .catch((error) => {
          console.error("Error uploading image 2:", error);
        });
    }

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

          sectionData[0].image2 = imageUrl1;
          setSectionData([...sectionData]);
          setcheck(true);
        })
        .catch((error) => {
          console.error("Error uploading image 2:", error);
        });
    }
    if (selectedFile3 !== "") {
      const formData1 = new FormData();
      formData1.append("file", selectedFile3);
      formData1.append("upload_preset", "nomADZ");
      axios
        .post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData1
        )
        .then((response1) => {
          const imageUrl1 = response1.data.secure_url;

          sectionData[0].image3 = imageUrl1;
          setSectionData([...sectionData]);
          setcheck(true);
        })
        .catch((error) => {
          console.error("Error uploading image 2:", error);
        });
    }

    if (selectedFile1resp !== "") {
      const formData1 = new FormData();
      formData1.append("file", selectedFile1resp);
      formData1.append("upload_preset", "nomADZ");
      axios
        .post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData1
        )
        .then((response1) => {
          const imageUrl1 = response1.data.secure_url;

          sectionData[0].respimg1 = imageUrl1;
          setSectionData([...sectionData]);
          setcheck(true);
        })
        .catch((error) => {
          console.error("Error uploading image 2:", error);
        });
    }

    if (selectedFile2resp !== "") {
      const formData1 = new FormData();
      formData1.append("file", selectedFile2resp);
      formData1.append("upload_preset", "nomADZ");
      axios
        .post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData1
        )
        .then((response1) => {
          const imageUrl1 = response1.data.secure_url;

          sectionData[0].respimg2 = imageUrl1;
          setSectionData([...sectionData]);
          setcheck(true);
        })
        .catch((error) => {
          console.error("Error uploading image 2:", error);
        });
    }

    if (selectedFile3resp !== "") {
      const formData1 = new FormData();
      formData1.append("file", selectedFile3resp);
      formData1.append("upload_preset", "nomADZ");
      axios
        .post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData1
        )
        .then((response1) => {
          const imageUrl1 = response1.data.secure_url;

          sectionData[0].respimg3 = imageUrl1;
          setSectionData([...sectionData]);
          setcheck(true);
        })
        .catch((error) => {
          console.error("Error uploading image 2:", error);
        });
    }

    if (text !== "") {
      sectionData[0].text = text;
      setSectionData([...sectionData]);
      setcheck(true);
    }
    
    if (color !== "") {
      sectionData[0].color = color;
      setSectionData([...sectionData]);
      setcheck(true);
    }
  };

  useEffect(() => {
    if (check) {
      axios
        .post(`${serverLink}update/10`, obj)
        .then((res) => {
          setAlert("Data updated successfully!");
          setTimeout(() => {
            setAlert("");
          }, 2000);
          setcheck(false);
          // Clear input fields after successful update
          setSelectedFile1("");
          setSelectedFile2("");
          setSelectedFile3("");
          setPreviewImage1("");
          setPreviewImage2("");
          setPreviewImage3("");
          setSelectedFile1resp("");
          setSelectedFile2resp("");
          setSelectedFile3resp("");
          setPreviewImage1resp("");
          setPreviewImage2resp("");
          setPreviewImage3resp("");
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
      .get(`${serverLink}section/10`) // Change the URL accordingly
      .then((response) => {
        setSectionData([response.data]);
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
      <div className="p-10 relative h-[80vh] w-full flex">
        <div className="w-1/3 border-r-[1px]">
          <h1 className="text-2xl pb-4 font-bold">Section10</h1>
          <p className="pb-3 text-xl font-medium">Image1</p>
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
          <p className="pb-3 text-xl font-medium">Image2</p>
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
                onChange={handleFileChange3}
                type="file"
                id="file1"
                className="hidden"
                accept="image/*"
              />
            </label>
            {previewImage3 && (
              <Image
                width={100}
                height={100}
                src={previewImage3}
                alt="previewimg2.png"
              />
            )}
          </div>
          <p className="pb-3 text-xl font-medium mt-4">Image</p>
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
                onChange={handleFileChange2}
                type="file"
                id="file2"
                className="hidden"
                accept="image/*"
              />
            </label>
            {previewImage2 && (
              <Image
                width={100}
                height={100}
                src={previewImage2}
                alt="previewimg2.png"
              />
            )}
          </div>
          <br />
          <label className="mb-2 block text-xl font-medium" htmlFor="">
            Enter Text
          </label>
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="Enter text"
            className="border rounded-md p-2"
          />
          <br />
          
          <label className="mb-2 block text-xl font-medium" htmlFor="">
            Color
          </label>
          <HexColorPicker color={color} onChange={setColor} />
          <br />
          <HexColorInput color={color} onChange={setColor} />
          <br />
          <button
            onClick={handleUpdate}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 absolute bottom-0 right-10"
          >
            Update Data
          </button>
        </div>
        <div className="w-1/3 px-10 border-r-[1px]">
          <h1 className="text-2xl pb-4 font-bold">Responsive</h1>
          <p className="pb-3 text-xl font-medium">Image1</p>
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
                onChange={handleFileChange1resp}
                type="file"
                id="file1"
                className="hidden"
                accept="image/*"
              />
            </label>
            {previewImage1resp && (
              <Image
                width={100}
                height={100}
                src={previewImage1resp}
                alt="previewimg1.png"
              />
            )}
          </div>
          <p className="pb-3 text-xl font-medium">Image2</p>
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
                onChange={handleFileChange3resp}
                type="file"
                id="file1"
                className="hidden"
                accept="image/*"
              />
            </label>
            {previewImage3resp && (
              <Image
                width={100}
                height={100}
                src={previewImage3resp}
                alt="previewimg2.png"
              />
            )}
          </div>
          <p className="pb-3 text-xl font-medium mt-4">Image</p>
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
                onChange={handleFileChange2resp}
                type="file"
                id="file2"
                className="hidden"
                accept="image/*"
              />
            </label>
            {previewImage2resp && (
              <Image
                width={100}
                height={100}
                src={previewImage2resp}
                alt="previewimg2.png"
              />
            )}
          </div>
        </div>
        <div className="CurrentSection w-1/3 px-10 h-screen">
          <h1 className="text-2xl pb-4 font-bold">Current Section Data</h1>
          {sectionData &&
            sectionData.map((item: any, index: number) => {
              return (
                <div key={index} className="flex flex-wrap overflow-y-scroll">
                  <div className="flex flex-wrap">
                    <div className="">
                      <p className="pb-3 text-xl font-medium">Image1</p>
                      <Image
                        height={200}
                        width={200}
                        src={item.image1}
                        alt="iemimage1.png"
                      />
                    </div>
                    <div className="">
                      <p className="pb-3 text-xl font-medium">Image2</p>
                      <Image
                        height={200}
                        width={200}
                        src={item.image2}
                        alt="iemimage2.png"
                      />
                    </div>
                    <div className="">
                      <p className="pb-3 text-xl font-medium">Image3</p>
                      <Image
                        height={200}
                        width={200}
                        src={item.image3}
                        alt="iemimage2.png"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-10">
                    <div className="">
                      <p className="pb-3 text-xl font-medium">Resp Image1</p>
                      <Image
                        height={200}
                        width={200}
                        src={item.respimg1}
                        alt="iemimage1.png"
                      />
                    </div>
                    <div className="">
                      <p className="pb-3 text-xl font-medium">Resp Image2</p>
                      <Image
                        height={200}
                        width={200}
                        src={item.respimg3}
                        alt="iemimage2.png"
                      />
                    </div>
                  </div>
                  <div className="">
                    <p className="pb-3 text-xl font-medium">Resp Image3</p>
                    <Image
                      height={200}
                      width={200}
                      src={item.respimg2}
                      alt="iemimage2.png"
                    />
                  </div>
                  <div className=" ml-10">
                    <p className="py-3 text-xl font-medium mt-10">Text Data</p>
                    <h1>{item.text}</h1>
                    
                  <h1 className="text-ubuntu-bold font-bold text-lg mt-3">Background</h1>
                  <div className={` w-[200px] h-[100px] flex justify-center items-center`} style={{background: item.color}}>{item.color}</div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Section10;
