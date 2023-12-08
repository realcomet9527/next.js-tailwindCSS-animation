import { RootState } from '@/lib/store';
import React from 'react';
import { useSelector } from 'react-redux';
    
const MySVG: React.FC<React.SVGProps<SVGSVGElement>> = () => {
    
  const circle = useSelector((state: RootState) => state.auth.circle);
  const circle2 = useSelector((state: RootState) => state.auth.circle2);


    return(

        <svg
        id="m_h"
        className={` w-[48px] h-[48px] absolute top-[-2px] left-[-2px] duration-300 
        ${
        circle2 ? "opacity-0" : "opacity-80"
    } 
        `}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 165.6 165.6"
        width="165.6"
        height="165.6"
        >
    <defs>
      <style>{`.cls-1{fill:none;stroke:white;stroke-miterlimit:10;stroke-width:9px;}`}</style>
    </defs>
    <path
      id="m_a"
      className={`cls-1 ${circle ? "svg-elem-1" : ""}`}
      d="M84,5.7A78.3,78.3,0,1,1,5.7,84,78.3,78.3,0,0,1,84,5.7"
      data-svg-origin="0 0"
      style={{
        transform:
        "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -1.2, -1.2, 0, 1)",
        transformOrigin: "0px 0px 0px",
    }}
    ></path>
  </svg>
)
};

export default MySVG;
