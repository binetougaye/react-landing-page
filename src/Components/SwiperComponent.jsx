import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Stars from "./Stars";
import Stars from "./Testimonials/Stars";
import user from "../assets/images/user.jpeg";
import user1 from "../assets/images/user1.jpeg";
export default function SwiperComponent() {
    const settings = {
        dots: true, // Afficher les points de navigation
        infinite: true, // Permet le défilement infini
        speed: 500, // Temps de transition entre les slides (ms)
        slidesToShow: 1, // Nombre de slides visibles en même temps
        slidesToScroll: 1, // Nombre de slides à défiler par clic
        autoplay: true, // Ajout de défilement automatique
        autoplaySpeed: 3000, // Durée entre les transitions (ms)
    };

    return (
        <div className=" pt-10 m-auto">
            <Slider {...settings}>
                <div>
                    <Stars />
                    <h3 className="text-[#243e63] mt-5 font-bold text-[20px]">
                        Amazing User Experience
                    </h3>
                    <p className="text-[#4a5568] leading-[26px] text-[16px] mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia ipsam voluptatem corporis odit debitis atque
                        nam, quaerat voluptate a quia asperiores modi iure quo.
                        Totam fugit ipsa numquam sit mollitia.
                    </p>
                    <div className="flex gap-5 items-center  mt-10">
                        <div>
                            <img
                                className="w-[80px] h-[80px] rounded-full"
                                src={user}
                                alt=""
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
                <div>
                    <Stars />
                    <h3 className="text-[#243e63] mt-5 font-bold text-[20px]">
                        Lover the Developer Experience and Design Principles !
                    </h3>
                    <p className="text-[#4a5568] leading-[26px] text-[16px] mt-5">
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
                                alt=""
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
