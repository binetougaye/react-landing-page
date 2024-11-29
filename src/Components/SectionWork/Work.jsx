import React from "react";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

export default function Work() {
    return (
        <div className="flex md:mt-80 mt-40 md:flex-row  flex-col-reverse items-center">
            <LeftPart />
            <RightPart />
        </div>
    );
}
