import React from "react";
import customers from "../../assets/images/customers.png";
export default function Customers() {
    return (
        <div className="md:mt-5 mt-10 flex md:flex-col md:items-start items-center md:justify-start justify-center flex-col ">
            <h5 className="text-[#a0aec0] md:text-[12px] text-[16px]  font-bold mb-5">
                OUR TRUSTED CUSTOMERS
            </h5>
            <img className="md:w-[30%] w-[50%]" src={customers} alt="" />
        </div>
    );
}
