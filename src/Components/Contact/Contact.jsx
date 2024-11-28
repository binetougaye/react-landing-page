import React from "react";

export default function Contact() {
    return (
        <div className="bg-[#6415ff] mt-80 h-[30vh] flex gap-32 justify-center items-center rounded-md">
            <h1 className="text-[#f7fafc] text-[30px]">
                Developers all over the world are <br /> happily using Treact.
            </h1>
            <div className="flex gap-8">
                <button className="bg-[#f56565] hover:ease-in-out duration-300  hover:bg-[#e63f3f] px-10 py-4 rounded-full text-[16px] text-[#f7fafc]">
                    Get started
                </button>
                <button className="border border-white px-10  hover:ease-in-out duration-300 hover:bg-[#f7fafc] hover:text-[#6415ff] py-4 rounded-full text-[16px] text-[#f7fafc]">
                    Contact Us
                </button>
            </div>
        </div>
    );
}
