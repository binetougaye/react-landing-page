import React from "react";
import hero from "../../assets/images/heroimg.png";
import { Data } from "../../utils/data";
export default function Steps() {
    return (
        <div className="flex justify-between items-center gap-20 mt-80">
            <div>
                <img src={hero} alt="" />
            </div>
            <div>
                <h5 className="uppercase text-start text-[16px] text-[#6415ff] font-bold">
                    steps
                </h5>
                <h1 className="text-[48px] text-start font-bold mt-3 ">
                    <span className="text-[#243e63] font-bold">Easy to</span>
                    <span className="text-[#6415ff] ms-2">Get Started.</span>
                </h1>
                <div>
                    {Data &&
                        Data.map((item, index) => (
                            <div key={index} className="flex">
                                <div className="flex items-center gap-10 py-5">
                                    <div>
                                        <h1 className="text-[#cbd5e0] text-[36px] font-semibold">
                                            {item.num}
                                        </h1>
                                    </div>
                                    <div>
                                        <p className="text-[#243e63] text-[20px] font-semibold">
                                            {item.title}
                                        </p>
                                        <p className="text-[#718096] text-[14px] mt-3 font-semibold">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
