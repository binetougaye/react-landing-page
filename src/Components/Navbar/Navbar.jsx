import React from "react";
import logo from "../../assets/images/logo192.png";
export default function Navbar() {
    return (
        <nav className="flex justify-between items-center ">
            <div className="flex items-center gap-5">
                <img className="w-10" src={logo} alt="" />
                <p className="text-[#243e63] text-[24px] font-bold hover:text-[#6415ff] cursor-pointer">
                    Treact
                </p>
            </div>
            <div className="flex justify-between items-center gap-20">
                <div className="flex  text-[16px] font-medium gap-10">
                    <div className="text-[#243e63] hover:text-[#6415ff] cursor-pointer">
                        About
                    </div>
                    <div className="text-[#243e63] hover:text-[#6415ff] cursor-pointer">
                        Blog
                    </div>
                    <div className="text-[#243e63] hover:text-[#6415ff] cursor-pointer">
                        Pricing
                    </div>
                    <div className="text-[#243e63] hover:text-[#6415ff] cursor-pointer">
                        Contact Us
                    </div>
                </div>
                <div className="flex items-center gap-10">
                    <p className="text-[#243e63] hover:text-[#6415ff] cursor-pointer">
                        Login
                    </p>
                    <div>
                        <button className="bg-[#6415ff] text-[#f7fafc] px-8 py-2 rounded-full">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
