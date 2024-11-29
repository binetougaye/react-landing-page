import React from "react";
import SwiperComponent from "../SwiperComponent";

export default function RightPart() {
    return (
        <div className="max-w-[600px]">
            <h5 className="uppercase md:text-start text-center text-[16px] text-[#6415ff] font-bold">
                Testimonials
            </h5>
            <h1 className="md:text-[48px] text-[24px] md:text-start text-center font-bold mt-3 ">
                <span className="text-[#243e63] font-bold">Our Clients</span>
                <span className="text-[#6415ff] ms-2">Love Us.</span>
            </h1>
            <p className="md:text-start text-center md:text-[18px] text-[12px] mt-4 text-[#7c8ba1]">
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua enim ad minim
                veniam.
            </p>
            <SwiperComponent />
        </div>
    );
}
