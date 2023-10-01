import React from "react";
import Slider from "react-slick";

const skills = [
    "HTML",
    "SEO practices",
    "CSS",
    "javaScript",
    "ReactJS",
    "API / RestAPI",
    "Responsive design",
    "TailwindCSS",
    "Wireframing",
    "UI design",
    "UX principles",
    "Figma",
    "npm / yarn",
    "CRUD tables",
    "Firebase",
    "Git",
    "Branching",
    "Headless CMS (WP, Strapi)",
    "NodeJs",
    "PhpMySQL",
    "CSS/JS animations",
    "DB structure",
];

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
        <div className="overflow-hidden bg-secondary cursor-default">
            <Slider {...settings}>
                {skills.map((text, index) => (
                    <div
                        key={index}
                        className="mx-8 my-8 font-black text-5xl xl:mx-16 text-primary-light xl:text-8xl whitespace-nowrap"
                    >
                        {text}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default EpicSlider;
