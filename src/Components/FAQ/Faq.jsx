import React from "react";
import Questions from "./Questions";
export default function Faq() {
    return (
        <div className="mt-80">
            <h5 className="uppercase text-center text-[16px] text-[#6415ff] font-bold">
                Faqs
            </h5>
            <h1 className="text-[48px] text-center font-bold mt-3 ">
                <span className="text-[#243e63] font-bold">You have</span>
                <span className="text-[#6415ff] ms-2">Questions ?</span>
            </h1>
            <p className="text-center text-[18px] mt-4 text-[#7c8ba1]">
                And we have got answers to all of them. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
            </p>
            <Questions />
        </div>
    );
}
