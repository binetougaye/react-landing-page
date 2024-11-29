import React from "react";

export default function LeftPart() {
    return (
        <div className="md:mt-0 mt-10">
            <h5 className="uppercase md:text-start text-center text-[16px] text-[#6415ff] font-bold">
                Quality Work
            </h5>
            <h1 className="md:text-[48px] sm:text-[32px]  md:text-start text-center font-bold mt-3 ">
                <span className="text-[#243e63] font-bold">
                    Designed & Developed by
                </span>
                <span className="text-[#6415ff] ms-2">Professionals.</span>
            </h1>
            <p className="md:text-start text-center md:text-[18px] text-[14px] mt-4 text-[#7c8ba1]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
            <div className="md:flex md:justify-start md:items-start flex justify-center items-center">
                <button className="bg-[#6415ff]  mt-8 text-[#f7fafc] px-6 py-2 rounded-full">
                    Learn More
                </button>
            </div>
        </div>
    );
}
