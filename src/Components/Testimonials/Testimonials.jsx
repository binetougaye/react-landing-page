import React from "react";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

export default function Testimonials() {
    return (
        <div>
            <div className="flex md:flex-row flex-col items-center gap-20 justify-center md:mt-80 mt-40">
                <LeftPart />
                <RightPart />
            </div>
        </div>
    );
}
