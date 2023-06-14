import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="">
            {isVisible && (
                <div
                    onClick={scrollToTop}
                    className="flex max-w-full justify-center whitespace-nowrap gap-4 py-8 mt-16 bg-black overflow-hidden text-xs lg:text-3xl font-black"
                >
                    <span>SCROLL TO TOP</span>|<span>SCROLL TO TOP</span>|
                    <span>SCROLL TO TOP</span>|<span>SCROLL TO TOP</span>|
                    <span>SCROLL TO TOP</span>|<span>SCROLL TO TOP</span>|
                    <span>SCROLL TO TOP</span>|<span>SCROLL TO TOP</span>|
                    <span>SCROLL TO TOP</span>|<span>SCROLL TO TOP</span>|
                    <span>SCROLL TO TOP</span>|<span>SCROLL TO TOP</span>
                </div>
            )}
        </div>
    );
};

export default ScrollToTopButton;
