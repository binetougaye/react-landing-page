import React from "react";
import hero from "../../assets/images/heroimg.png";
import { Data } from "../../utils/data";
export default function Steps() {
    return (
        <div className="flex md:flex-row flex-col  md:justify-between justify-center items-center gap-20 md:mt-80 mt-40">
            <div>
                <img src={hero} alt="" />
            </div>
            <div>
                <h5 className="uppercase md:text-start text-center text-[16px] text-[#6415ff] font-bold">
                    steps
                </h5>
                <h1 className="md:text-[48px] text-[32px] md:text-start text-center font-bold mt-3 ">
                    <span className="text-[#243e63] font-bold">Easy to</span>
                    <span className="text-[#6415ff] ms-2">Get Started.</span>
                </h1>
                <div className="container mx-auto px-4">
                    {Data &&
                        Data.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row items-center md:items-start gap-6 py-5"
                            >
                                {/* Section gauche */}
                                <div className="flex justify-center md:justify-start">
                                    <h1 className="text-[#cbd5e0] text-[36px] font-semibold">
                                        {item.num}
                                    </h1>
                                </div>

                                {/* Section droite */}
                                <div className="text-center md:text-left">
                                    <p className="text-[#243e63] text-[20px] font-semibold">
                                        {item.title}
                                    </p>
                                    <p className="text-[#718096] text-[14px] mt-3 font-semibold">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
