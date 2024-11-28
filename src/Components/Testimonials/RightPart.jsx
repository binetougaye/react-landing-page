import React from "react";
import SwiperComponent from "../SwiperComponent";

export default function RightPart() {
    return (
        <div className="max-w-[600px]">
            <h5 className="uppercase text-start text-[16px] text-[#6415ff] font-bold">
                Testimonials
            </h5>
            <h1 className="text-[48px] text-start font-bold mt-3 ">
                <span className="text-[#243e63] font-bold">Our Clients</span>
                <span className="text-[#6415ff] ms-2">Love Us.</span>
            </h1>
            <p className="text-start text-[18px] mt-4 text-[#7c8ba1]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua enim
                ad minim veniam.
            </p>
            <SwiperComponent />
        </div>
    );
}
