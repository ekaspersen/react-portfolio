import React from "react";
import Slider from "react-slick";

const skills = [
    "HTML",
    "SEO",
    "CSS",
    "TailwindCSS",
    "javaScript",
    "ReactJs",
    "SASS/SCSS",
    "Git / branching",
    "UX-principles",
    "UI-designer",
    "Figma",
];

const EpicSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        centerMode: true,
        centerPadding: "60px",
        variableWidth: true, // add this
    };

    return (
        <div className="overflow-hidden bg-black">
            <Slider {...settings}>
                {skills.map((text, index) => (
                    <div
                        key={index}
                        className="mx-16 my-8 text-white text-8xl whitespace-nowrap" // add the whitespace-nowrap class
                    >
                        {text}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default EpicSlider;
