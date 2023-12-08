"use client";
import React, { useEffect, useState } from "react";
import Mainlayout from "./layout/Mainlayout";
import { Loader } from "./component";
import Image from 'next/image'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AssignFalse, AssignTrue } from "@/lib/store/slices/Authslice";
import { useDispatch, useSelector } from "react-redux";
import { BiArrowBack } from "react-icons/bi";
import { RootState } from "@/lib/store";
import MySVG from "./component/svgcomponent";
import { BsArrowDown } from "react-icons/bs";
import { TECarousel, TECarouselItem } from "tw-elements-react";

import serverLink from "./link";
import Carousel from "./component/Carousel";
const Service = () => {
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
    dispatch(AssignFalse());
  }, []);
  useEffect(() => {
    setHrAnimation("");
    setTimeout(() => {
      setHrAnimation("hrAnimation");
    }, 100);
  }, [count]);

  useEffect(() => {
    if (count === 8) {
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
        setCount((prevCount) => Math.min(prevCount + 1, 8));
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
    if (count == 8) {
      setCount(0);
    } else {
      setCount((prevCount) => Math.min(prevCount + 1, 8));
    }
  };

  const [service1, setService1] = useState({
    heading: "",
    para: "",
    color: ""
  });
  const [service2, setService2] = useState({
    heading: "",
    para: "",
    color: ""
  });
  const [service3, setService3] = useState({
    heading: "",
    para: "",
    color: ""
  });
  const [service4, setService4] = useState({
    heading: "",
    para: "",
    color: ""
  });
  const [service5, setService5] = useState({
    heading: "",
    para: "",
    color: ""
  });
  const [service6, setService6] = useState({
    heading: "",
    para: "",
    color: ""
  });
  const [service7, setService7] = useState({
    heading: "",
    para: "",
    color: ""
  });
  const [service8, setService8] = useState({
    heading: "",
    para: "",
    color: ""
  });

  // useEffect(() => {
  //   fetch(`${serverLink}service/part/1/`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setService1(data);
  //     });
  //   fetch(`${serverLink}service/part/2/`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setService2(data);
  //     });
  //   fetch(`${serverLink}service/part/3/`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setService3(data);
  //     });
  //   fetch(`${serverLink}service/part/4/`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setService4(data);
  //     });
  //   fetch(`${serverLink}service/part/5/`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setService5(data);
  //     });
  //   fetch(`${serverLink}service/part/6/`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setService6(data);
  //     });
  //   fetch(`${serverLink}service/part/7/`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setService7(data);
  //     });
  //   fetch(`${serverLink}service/part/8/`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setService8(data);
  //     });
  // }, []);

  const imageUrls = [
    "https://mdbcdn.b-cdn.net/img/new/slides/041.webp",
    "https://mdbcdn.b-cdn.net/img/new/slides/042.webp",
    "https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
  ]

  return (
    <>
      <Mainlayout>
        {Checkloader && <Loader />}
        <div className=" h-[500vh] bg-black">
          <div className="h-[20vh]"></div>
          <div className="grid grid-cols-2 gap-2">
            <div style={{ paddingTop: '10vh', paddingLeft: '15vh' }}>
              <Image
                src="images/social-media-marketing.png"
                width={513}
                height={208}
                alt="Picture of the author"
              />
              <div style={{ width: '600px', height: '105px', color: 'white', paddingTop: '50px' }}>Cocial media marketing is the are of crafting your brand's narrative and spreading it across globe, creating a magnetic presence that attracts and captivates your audience.</div>
            </div>
            <div><Image
              src="images/yesdanny.png"
              width={700}
              height={667}
              alt="Picture of the author"
            /></div>
          </div>
          <div className="flex" style={{ color: 'white' }}>
            <div className="w-2/3">
              <div className="engage-text">
                <p>Connect and</p>
                <p><span style={{ color: '#DE2461' }}>Engage</span> Your Audience</p>
                <p>with Precision</p>
              </div>
            </div>
            <div className="w-1/3" style={{ paddingTop: '200px' }}>
              <TECarousel ride="carousel">
                <div
                  className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                  <TECarouselItem
                    itemID={1}
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                      className="block w-full"
                      alt="Wild Landscape" />
                  </TECarouselItem>
                  <TECarouselItem
                    itemID={2}
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                      className="block w-full"
                      alt="Camera" />
                  </TECarouselItem>
                  <TECarouselItem
                    itemID={3}
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                      className="block w-full"
                      alt="Exotic Fruits" />
                  </TECarouselItem>
                </div>
              </TECarousel>
              {/* <Carousel images={imageUrls} /> */}
            </div>
          </div>
        </div>
      </Mainlayout>
    </>
  );
};

export default Service;
