import React from "react";
import Formule from "./Formule";

export default function Card() {
    return (
        <div className="mt-80 relative ">
            <h5 className="uppercase text-center text-[16px] text-[#6415ff] font-bold">
                Pricing
            </h5>
            <h1 className="text-[48px] text-center font-bold mt-3 ">
                <span className="text-[#243e63] font-bold">
                    Reasonable & Flexible
                </span>
                <span className="text-[#6415ff] ms-2">Plans.</span>
            </h1>
            <p className="text-center text-[18px] mt-4 text-[#7c8ba1]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Formule />
        </div>
    );
}
