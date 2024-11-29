import React from "react";
import illustration from "../../assets/images/illustration.svg";
import { dataTwo } from "../../utils/data";

export default function SecValues() {
    return (
        <div className="flex md:flex-row flex-col-reverse  md:justify-between justify-center md:mt-80 mt-40">
            <div>
                <h5 className="uppercase md:text-start text-center  md:mt-0 mt-10 text-[16px] text-[#6415ff] font-bold">
                    values
                </h5>
                <h1 className="md:text-[48px] text-[32px] md:text-start text-center   font-bold mt-3 ">
                    <span className="text-[#243e63] font-bold">
                        We Always Abide by Our
                    </span>
                    <span className="text-[#6415ff] ms-2">Principles.</span>
                </h1>
                <p className="md:text-[18px] text-[14px] md:text-start text-center  mt-4 text-[#7c8ba1]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                </p>
                <div className="flex md:flex-row flex-col  gap-10 mt-10">
                    {dataTwo.map((item, index) => (
                        <div
                            className="flex md:flex-row flex-col md:justify-start justify-center md:items-start items-center   gap-3"
                            key={index}
                        >
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
                                <p className="text-[#243e63] md:text-start  text-center text-[20px] font-bold">
                                    {item.title}
                                </p>
                                <p className="text-[#718096] md:text-start  text-center font-[16px]">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="md:flex md:justify-start md:items-start flex justify-center items-center">
                    <button className="bg-[#6415ff]  mt-8 text-[#f7fafc] px-6 py-2 rounded-full">
                        Learn More
                    </button>
                </div>
            </div>
            <div>
                <img className="" src={illustration} alt="" />
            </div>
        </div>
    );
}
