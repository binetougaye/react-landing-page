import React from "react";
import header from "../../assets/images/header.svg";
export default function Header() {
    return (
        <div className="flex md:flex-row flex-col md:justify-center items-center  mt-20">
            <div>
                <h1 className="text-[48px] md:text-left text-center font-bold mt-10">
                    <span className="text-[#1a202c]">
                        Beautiful React <br /> Templates
                    </span>
                    <span className="text-[#6415ff] ms-2">for you.</span>
                </h1>
                <p className="text-[#243e63] md:text-left text-center text-[18px] mt-5">
                    Our templates are easy to setup, understand and customize.
                    Fully modular components with a variety of pages and
                    components.
                </p>
                <div className="mt-10 flex md:flex-row flex-col gap-3 items-center ">
                    <input
                        type="text"
                        placeholder="Your E-mail Address"
                        className="border-2 p-5 rounded-full md:w-[60%] w-[100%] placeholder:font-semibold  "
                    />
                    <button className="bg-[#6415ff] py-5 px-10 md:w-[200px] w-[100%] md:mt-0 mt-4 rounded-full border-none text-[#f7fafc]">
                        Get Started
                    </button>
                </div>
            </div>
            <div className="md:mt-0 mt-20">
                <img className="w-full" src={header} alt="" />
            </div>
        </div>
    );
}
