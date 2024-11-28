import React from "react";
import illustration from "../../assets/images/illustration.svg";
import { dataTwo } from "../../utils/data";

export default function SecValues() {
    return (
        <div className="flex justify-between mt-80">
            <div>
                <h5 className="uppercase  text-[16px] text-[#6415ff] font-bold">
                    values
                </h5>
                <h1 className="text-[48px]  font-bold mt-3 ">
                    <span className="text-[#243e63] font-bold">
                        We Always Abide by Our
                    </span>
                    <span className="text-[#6415ff] ms-2">Principles.</span>
                </h1>
                <p className="text-[18px] mt-4 text-[#7c8ba1]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="flex gap-10 mt-10">
                    {dataTwo.map((item, index) => (
                        <div className="flex  gap-3" key={index}>
                            <div>
                                <p className={item.className}>
                                    <img
                                        src={item.img}
                                        className="w-[60px]"
                                        alt=""
                                        style={{
                                            filter: "invert(36%) sepia(72%) saturate(750%) hue-rotate(340deg) brightness(95%) contrast(91%)",
                                        }}
                                    />
                                </p>
                            </div>
                            <div>
                                <p className="text-[#243e63]  text-[20px] font-bold">
                                    {item.title}
                                </p>
                                <p className="text-[#718096] font-[16px]">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <button className="bg-[#6415ff] mt-14 text-[#f7fafc] px-6 py-2 rounded-full">
                        Learn More
                    </button>
                </div>
            </div>
            <div>
                <img className="max-w-custom" src={illustration} alt="" />
            </div>
        </div>
    );
}
