import React, { useState } from "react";
import logo from "../../assets/images/logo192.png";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center p-4 bg-white ">
            {/* Logo Section */}
            <div className="flex items-center gap-5">
                <img className="w-10" src={logo} alt="Logo" />
                <p className="text-[#243e63] text-[24px] font-bold hover:text-[#6415ff] cursor-pointer">
                    Treact
                </p>
            </div>

            {/* Menu Button (visible on small screens) */}
            <button
                className="text-[#243e63] md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6h16.5M3.75 12h16.5M3.75 18h16.5"
                    />
                </svg>
            </button>

            {/* Main Menu */}
            <div
                className={`flex-col md:flex-row md:flex md:items-center md:gap-20 absolute md:static top-16 right-0 ${
                    isMenuOpen ? "flex bg-white shadow-lg" : "hidden"
                } w-full md:w-auto transition-transform z-10`}
            >
                <div className="flex flex-col md:flex-row items-center gap-5 p-5 md:p-0">
                    <p className="text-[#243e63] hover:underline hover:text-[#6415ff] cursor-pointer">
                        Login
                    </p>
                    <button className="bg-[#6415ff] text-[#f7fafc] px-8 py-2 rounded-full">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
}
