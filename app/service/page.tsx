"use client";
import React, { useEffect, useState } from "react";
import Mainlayout from "../layout/Mainlayout";
import { Loader } from "../component";
import Image from 'next/image'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AssignFalse, AssignTrue } from "@/lib/store/slices/Authslice";
import { useDispatch, useSelector } from "react-redux";
import { BiArrowBack } from "react-icons/bi";
import { RootState } from "@/lib/store";
import MySVG from "../component/svgcomponent";
import { BsArrowDown } from "react-icons/bs";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import "./service.css"

import serverLink from "../link";
import Carousel from "../component/Carousel";
import TextCarousel from "../component/TextCarousel";
import VerticalTabs from "../component/VerticalTab";
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

  const data = [
    {
      image: "/research.png",
      title: "Research",
      content: "We dive deep into understanding your audience's interests and expectations, ensuring your message resonates perfectly."
    },
    {
      image: "/plan.png",
      title: "Plan",
      content: "Our experience with top brands equips us to craft bespoke strategies and solutions for every aspect of your social media presence."
    },
    {
      image: "/execute.png",
      title: "Execute",
      content: "We weave compelling brand stories that captivate both loyal and new customers, maximizing engagement and reach."
    },
    {
      image: "/optimize.png",
      title: "Optimize",
      content: "Continuously monitoring campaign performance across platforms, we gather insights and refine strategies for optimal results."
    }
  ]

  const texts = [
    "Social media marketing is the art of crafting your brand's narrative and spreading it across the globe, creating a magnetic presence that attracts and captivates your audience.",
    "At nomADZ Digital, India's premier social media marketing agency, we're experts in making your brand shine online.",
    "Our mastery in audience segmentation, social advertising, and staying ahead of social algorithm updates is your gateway to success."
  ]

  const tabsData = [
    {
      title: <div style={{ padding: '6.67px 0 6.67px 0' }}><Image src="/images/meta.png" width={40} height={40} alt={"meta"} /></div>,
      id: 'Tab 1',
      titleText: 'Meta Marketing',
      content: <div className="flex justify-between tab-body">
        <Image src="/images/meta-body.png" width={600} height={500} alt="meta-body" style={{ width: '50%', height: 'auto', maxHeight: '100%' }} />
        <div className="tab-body-wrapper flex flex-col justify-center align-center">
          <div className="tab-body-title">
            Meta Marketing
          </div>
          <div className="tab-body-text">
            Leverage the power of Meta's vast virtual marketplace to target and engage with the right audience, expanding your brand's reach across various social networks.
          </div>
        </div>
      </div>
    },
    {
      title: <Image src="/images/facebook.png" width={40} height={40} alt={"facebook"} />,
      id: 'Tab 2',
      titleText: 'Facebook Marketing',
      content: <div className="flex justify-between tab-body">
        <Image src="/facebook.png" width={600} height={500} alt="meta-body" style={{ width: '50%', height: 'auto', maxHeight: '100%' }} />
        <div className="tab-body-wrapper flex flex-col justify-center align-center">
          <div className="tab-body-title">
            Facebook Marketing
          </div>
          <div className="tab-body-text">
            Benefit from cost-effective marketing solutions with our specialized Facebook strategies, including budget management, profile optimization, ad optimization, and regular content updates.
          </div>
        </div>
      </div>
    },
    {
      title: <Image src="/images/instagram.png" width={40} height={40} alt={"instagram"} />,
      id: 'Tab 3',
      titleText: 'Instagram Marketing',
      content: <div className="flex justify-between tab-body">
        <Image src="/instagram.png" width={600} height={500} alt="meta-body" style={{ width: '50%', height: 'auto', maxHeight: '100%' }} />
        <div className="tab-body-wrapper flex flex-col justify-center align-center">
          <div className="tab-body-title">
            Instagram Marketing
          </div>
          <div className="tab-body-text">
            Enhance your brand's community presence on Instagram. Our experts amplify your profile with targeted ads, shareable content, and engaging stories and reels.
          </div>
        </div>
      </div>
    },
    {
      title: <Image src="/images/linkedin.png" width={40} height={40} alt={"linkedin"} />,
      id: 'Tab 4',
      titleText: 'Linkedin Marketing',
      content: <div className="flex justify-between tab-body">
        <Image src="/linkedin.png" width={600} height={500} alt="meta-body" style={{ width: '50%', height: 'auto', maxHeight: '100%' }} />
        <div className="tab-body-wrapper flex flex-col justify-center align-center">
          <div className="tab-body-title">
            Linkedin Marketing
          </div>
          <div className="tab-body-text">
            Establish your brand's professional reputation with our dedicated LinkedIn marketing strategies. We manage your company page, create impactful posts, connect with industry leaders, and implement best practices for LinkedIn success.
          </div>
        </div>
      </div>
    },
  ];

  return (
    <>
      <Mainlayout>
        {Checkloader && <Loader />}
        <div className="bg-black">
          <div className="h-[25vh]"></div>
          <div className="flex flex-row" style={{ paddingLeft: '20vh', paddingRight: '20vh' }}>
            <div style={{ paddingTop: '10vh' }} className="basis-1/2">
              <Image
                src="/images/social-media-marketing.png"
                width={713}
                height={208}
                alt="Picture of the author"
                style={{ marginBottom: '20px', width: '80%', height: 'auto' }}
              />
              <TextCarousel data={texts} />
            </div>
            <div className="basis-1/2">
              <div className="flex justify-end">
                <div className="image-border">
                  <Image
                    src="/images/yesdanny.png"
                    width={573}
                    height={573}
                    alt="Picture of the author"
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <Image
                    src="/images/line-1.png"
                    width={100}
                    height={100}
                    alt="Picture of the author"
                    style={{ width: '15%', height: 'auto', position: 'absolute', right: 0, top: -10 }}
                  />
                  <Image
                    src="/images/line-2.png"
                    width={100}
                    height={100}
                    alt="Picture of the author"
                    style={{ width: '10%', height: 'auto', position: 'absolute', right: -50, top: -50 }}
                  />
                  <Image
                    src="/images/line-3.png"
                    width={100}
                    height={100}
                    alt="Picture of the author"
                    style={{ width: '12%', height: 'auto', position: 'absolute', left: -10, bottom: -10 }}
                  />
                  <Image
                    src="/images/line-4.png"
                    width={100}
                    height={100}
                    alt="Picture of the author"
                    style={{ width: '15%', height: 'auto', position: 'absolute', left: 20, bottom: -60 }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex" style={{ marginTop: '30vh' }}>
            <div className="w-2/3" style={{ paddingLeft: '10vh' }}>
              <div className="engage-text">
                <p>Connect and</p>
                <p><span style={{ color: '#DE2461' }}>Engage</span> Your Audience</p>
                <p>with Precision</p>
              </div>
            </div>
            <div className="w-1/3">
              <Carousel data={data} />
            </div>
          </div>
          <div style={{ padding: '30vh 10vh' }}>
            <VerticalTabs tabs={tabsData} />
          </div>
        </div>
      </Mainlayout>
    </>
  );
};

export default Service;
