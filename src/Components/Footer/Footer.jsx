import React from "react";
import { footerData } from "../../utils/data";
import logo from "../../assets/images/logoFooter.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export default function Footer() {
    return (
        <div className="bg-[#6415ff] text-[#f7fafc]  mt-60 px-10 py-14">
            <div className="flex flex-col md:flex-row md:justify-around justify-center items-center gap-8 md:gap-0">
                {footerData &&
                    footerData.map((item, index) => (
                        <div key={index} className="text-center md:text-left">
                            <h1 className="uppercase font-bold text-lg mb-4">
                                {item.title}
                            </h1>
                            <div>
                                {Array.isArray(item.text) ? (
                                    <ul className="space-y-2">
                                        {item.text.map((textItem, idx) => (
                                            <li key={idx} className="text-sm">
                                                {textItem}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-sm">{item.text}</p>
                                )}
                            </div>
                        </div>
                    ))}
            </div>

            <hr className="my-12 border-t border-[#f7fafc]" />
            <div className="flex md:flex-row flex-col md:gap-0 gap-5 justify-between items-center text-sm">
                <div className="flex gap-3 items-center">
                    <img src={logo} className="w-10" alt="" />
                    <p className="text-[#f7fafc] text-[20px] font-bold">
                        Treact Inc.
                    </p>
                </div>
                <div>© 2024 Your Company. All rights reserved.</div>
                <div className="flex gap-3">
                    <p className="bg-white text-black w-8 h-8 flex justify-center items-center rounded-full">
                        <FaFacebookF />
                    </p>
                    <p className="bg-white text-black w-8 h-8 flex justify-center items-center rounded-full">
                        <FaTwitter />
                    </p>
                    <p className="bg-white text-black w-8 h-8 flex justify-center items-center rounded-full">
                        <FaYoutube />
                    </p>
                </div>
            </div>
        </div>
    );
}
