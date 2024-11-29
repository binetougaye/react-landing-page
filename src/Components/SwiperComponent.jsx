import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stars from "./Testimonials/Stars";
import user from "../assets/images/user.jpeg";
import user1 from "../assets/images/user1.jpeg";

export default function SwiperComponent() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <div className="pt-10 md:m-auto w-full md:max-w-[1200px] max-w-[350px] px-4">
            <Slider {...settings}>
                {/* Slide 1 */}
                <div className="flex flex-col items-center md:items-start">
                    <Stars />
                    <h3 className="text-[#243e63] md:text-start text-center mt-5 font-bold md:text-[20px] text-[14px]">
                        Amazing User Experience
                    </h3>
                    <p className="text-[#4a5568] md:text-start text-center leading-[26px] text-[16px] mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia ipsam voluptatem corporis odit debitis atque
                        nam, quaerat voluptate a quia asperiores modi iure quo.
                        Totam fugit ipsa numquam sit mollitia.
                    </p>
                    <div className="flex gap-5 items-center mt-10">
                        <div>
                            <img
                                className="w-[80px] h-[80px] rounded-full"
                                src={user}
                                alt="Charlotte Hale"
                            />
                        </div>
                        <div>
                            <p className="text-[#243e63] font-bold text-[16px]">
                                Charlotte Hale
                            </p>
                            <p className="text-[#7c8ba1]">
                                Director, Delos INC.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Slide 2 */}
                <div className="flex flex-col items-center md:items-start">
                    <Stars />
                    <h3 className="text-[#243e63] md:text-start text-center mt-5 font-bold md:text-[20px] text-[14px]">
                        Love the Developer Experience and Design Principles!
                    </h3>
                    <p className="text-[#4a5568] md:text-start text-center leading-[26px] text-[16px] mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia ipsam voluptatem corporis odit debitis atque
                        nam, quaerat voluptate a quia asperiores modi iure quo.
                        Totam fugit ipsa numquam sit mollitia.
                    </p>
                    <div className="flex gap-5 items-center mt-10">
                        <div>
                            <img
                                className="w-[80px] h-[80px] rounded-full"
                                src={user1}
                                alt="Adam Cuppy"
                            />
                        </div>
                        <div>
                            <p className="text-[#243e63] font-bold text-[16px]">
                                Adam Cuppy
                            </p>
                            <p className="text-[#7c8ba1]">Founder, EventsNYC</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}
