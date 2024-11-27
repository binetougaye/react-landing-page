import React from "react";
import { data } from "../../utils/data";
export default function Card() {
    return (
        <div className="grid grid-rows-2 gap-y-12 grid-cols-3 place-items-center mt-10 ">
            {data &&
                data?.map((item, index) => (
                    <div className="flex gap-3" key={index}>
                        <div className="flex justify-center items-center border rounded-full">
                            <img src={item.img} alt="" className="w-100" />
                        </div>
                        <div>
                            <p>{item.title} </p>
                            <p>{item.text} </p>
                        </div>
                    </div>
                ))}
        </div>
    );
}
