import React from "react";
import Card from "./Card";

export default function SectionTitle() {
    return (
        <div className="mt-40 md:px-32 px-16 flex flex-col items-center">
            <h5 className="uppercase text-center text-[16px] text-[#6415ff] font-bold">
                Features
            </h5>
            <h1 className="md:text-[48px] text-[32px] text-center font-bold mt-3 ">
                <span className="text-[#243e63] font-bold">
                    We have amazing
                </span>
                <span className="text-[#6415ff] ms-2">Service.</span>
            </h1>
            <p className="text-center md:text-[18px] text-[14px] mt-4 text-[#7c8ba1]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
            </p>
            <div className="mt-8 w-full flex justify-center">
                <Card />
            </div>
        </div>
    );
}
