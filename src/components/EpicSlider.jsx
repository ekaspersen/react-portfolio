import React from "react";
import Slider from "react-slick";

import { skills } from "./skills";
import SkillsModal from "./SkillsModal";

const EpicSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        variableWidth: true,
    };

    return (
        <div className="overflow-hidden  cursor-default relative py-16">
            <Slider {...settings}>
                {skills.map((text, index) => (
                    <div
                        key={index}
                        className=" font-black text-5xl text-primary-light xl:text-8xl mx-4 md:mx-8 py-2 whitespace-nowrap"
                    >
                        {text.name}
                    </div>
                ))}
            </Slider>
            <SkillsModal />
        </div>
    );
};

export default EpicSlider;
