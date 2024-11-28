import React from "react";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

export default function Work() {
    return (
        <div className="flex mt-80 items-center">
            <LeftPart />
            <RightPart />
        </div>
    );
}
