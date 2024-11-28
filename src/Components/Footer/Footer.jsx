import React from "react";
import { footerData } from "../../utils/data";
export default function Footer() {
    return (
        <div className="bg-[#6415ff]  text-[#f7fafc] mt-60">
            <div className="flex">
                {footerData &&
                    footerData?.map((item) => (
                        <div>
                            <h1>{item.title}</h1>
                            <div className="flex">
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
            </div>
            <hr />
            <div></div>
        </div>
    );
}
