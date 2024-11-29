import React from "react";
import { card } from "../../utils/data";
export default function Formule() {
    return (
        <div className="flex md:flex-row flex-col items-center mt-10 gap-10  justify-center">
            {card &&
                card?.map((item, index) => (
                    <div className={item.className} key={index}>
                        <div className="py-10">
                            <h1 className="text-[#1a202c] mt-5 uppercase text-[20px] font-bold">
                                {item.title}
                            </h1>
                            <div className="flex mt-5 justify-center items-center">
                                <p>
                                    <img
                                        className="w-[50px]"
                                        src={item.img}
                                        alt=""
                                    />
                                </p>
                                <h2 className="text-[#1a202c]  uppercase text-[48px] font-bold">
                                    {item.price}
                                </h2>
                            </div>

                            <p className="uppercase text-[16px] mt-5 text-[#a0aec0]">
                                {item.time}
                            </p>
                        </div>
                        <hr />
                        <div className="py-10">
                            <p className="text-[#1a202c] text-[20px]">
                                {item.text}
                            </p>
                            <ul>
                                {item.offre.map((items) => (
                                    <li className="text-[#718096] py-2 text-[16px]">
                                        {items}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <button className={item.btnColor}>buy now</button>
                        </div>
                    </div>
                ))}
        </div>
    );
}
