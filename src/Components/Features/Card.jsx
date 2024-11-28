import React from "react";
import { data } from "../../utils/data";
export default function Card() {
    return (
        <div className="grid grid-rows-2 gap-y-12 gap-x-14 grid-cols-3 place-content-center place-items-center mt-20 ">
            {data &&
                data?.map((item, index) => (
                    <div className="flex gap-3" key={index}>
                        <div className="flex flex-shrink-0 justify-center items-center border w-[70px] h-[70px] rounded-full ">
                            <img
                                src={item.img}
                                alt=""
                                className="w-[24px] h-[24px]"
                            />
                        </div>

                        <div>
                            <p className="text-[#243e63] text-[24px] font-bold">
                                {item.title}{" "}
                            </p>
                            <p className="text-[#7c8ba1] text-[16px] mt-5">
                                {item.text}{" "}
                            </p>
                        </div>
                    </div>
                ))}
        </div>
    );
}
