import React from "react";
import Slider from "react-slick";

const skills = [
    "HTML&SEO",
    "CSS",
    "SASS/SCSS",
    "TailwindCSS",
    "javaScript",
    "ReactJs",
    "API handling",
    "C.R.U.D.stuff",
    "Git",
    "npm",
    "Branching",
    "Wireframing",
    "Figma",
    "UI-design",
    "UX-principles",
];

const EpicSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: "linear",
        variableWidth: true,
    };

    return (
        <div className="overflow-hidden bg-black">
            <Slider {...settings}>
                {skills.map((text, index) => (
                    <div
                        key={index}
                        className="mx-8 my-8 text-5xl xl:mx-16 text-white xl:text-8xl whitespace-nowrap"
                    >
                        {text}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default EpicSlider;
