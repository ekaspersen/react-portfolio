import React from "react";
import Slider from "react-slick";

const words = Array(20).fill("CONTACT");

const ContactSlider = ({ direction = "ltr" }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 7000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear", // change ease to linear
        variableWidth: true,
        rtl: direction === "rtl",
    };

    return (
        <div className="overflow-hidden min-h-[64px] ">
            <Slider {...settings}>
                {words.map((text, index) => (
                    <div
                        key={index}
                        className="text-white pr-6 my-auto h-[100px] pt-2 pb-2 text-6xl font-montserrat italic whitespace-nowrap"
                    >
                        {text}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ContactSlider;
