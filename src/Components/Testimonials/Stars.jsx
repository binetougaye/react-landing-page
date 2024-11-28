import React from "react";
import { stars } from "../../utils/data";
export default function Stars() {
    return (
        <div className="flex text-start text-[#f6ad55]">
            {stars.map((star) => star)}
        </div>
    );
}
