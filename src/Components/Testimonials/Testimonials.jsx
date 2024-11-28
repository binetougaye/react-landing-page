import React from "react";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

export default function Testimonials() {
    return (
        <div>
            <div className="flex items-center gap-20 justify-center mt-80">
                <LeftPart />
                <RightPart />
            </div>
        </div>
    );
}
