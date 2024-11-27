import React from "react";
import customers from "../../assets/images/customers.png";
export default function Customers() {
    return (
        <div className="mt-5 md:inline-block  sm:flex sm:flex-col sm:justify-center sm:items-center">
            <h5 className="text-[#a0aec0] text-[12px] font-bold mb-5">
                OUR TRUSTED CUSTOMERS
            </h5>
            <img className="w-[30%]" src={customers} alt="" />
        </div>
    );
}
