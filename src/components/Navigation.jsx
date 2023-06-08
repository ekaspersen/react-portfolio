import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

// Motion Variants
// Button
const topVariant = {
    open: { rotate: 45, y: 14 },
    closed: { rotate: 0, y: 0 },
};

const midVariant = {
    open: { width: "0%", x: -30, opacity: 0 },
    closed: { width: "100%", x: 0, opacity: 1 },
};

const bottomVariant = {
    open: { width: "100%", rotate: -45, y: -14 },
    closed: { width: "80%", rotate: 0, y: 0 },
};

// Nav Wrapper
const navVariant = {
    open: {
        height: "fit-content",
        y: 0,
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
    closed: { height: "0%", y: -19 },
};

const listItemVariant = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -400 },
};
// /Motion Variants/

// Function to get window's width
const useIsLgOrAbove = () => {
    const [isLgOrAbove, setIsLgOrAbove] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => setIsLgOrAbove(window.innerWidth >= 1024);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return isLgOrAbove;
};

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isLgOrAbove = useIsLgOrAbove();

    const toggleMenu = () => {
        if (!isLgOrAbove) {
            setIsOpen(!isOpen);
        }
    };

    const animationState = isLgOrAbove ? "open" : isOpen ? "open" : "closed";

    return (
        <header className="header-index fixed top-0 flex left-0 right-0 justify-between items-center p-4 bg-secondary">
            <Link to="/" className="max-h-full">
                <img src={logo} alt="Logo" />
            </Link>

            <nav className="flex flex-col h-full items-end relative">
                <button
                    onClick={toggleMenu}
                    className="h-8 w-12 flex lg:hidden flex-col justify-between"
                >
                    <motion.div
                        className="h-1 w-full bg-white rounded-md"
                        variants={topVariant}
                        animate={animationState}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.div
                        className="h-1 w-full bg-white rounded-md"
                        variants={midVariant}
                        animate={animationState}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.div
                        className="h-1 w-4/5 ml-auto bg-white rounded-md"
                        variants={bottomVariant}
                        animate={animationState}
                        transition={{ duration: 0.3 }}
                    />
                </button>
                <motion.ul
                    className={`flex-col bg-secondary px-4 pb-4 mr-[-16px] lg:p-0 lg:pr-4 lg:flex-row lg:gap-4 absolute top-14 transition duration-200 ${
                        isOpen ? "flex" : "hidden"
                    } lg:flex lg:static`}
                    variants={navVariant}
                    animate={animationState}
                    transition={{ duration: 0.5 }}
                >
                    <motion.li variants={listItemVariant}>
                        <Link
                            onClick={toggleMenu} // Add this line
                            to="/mywork"
                            className="block my-2 lg:my-0 py-3 px-8 bg-primary whitespace-nowrap text-primary-light text-xl font-black"
                        >
                            My Work
                        </Link>
                    </motion.li>
                    <motion.li variants={listItemVariant}>
                        <Link
                            onClick={toggleMenu} // Add this line
                            to="/education"
                            className="block my-2 lg:my-0 py-3 px-8 bg-primary whitespace-nowrap text-primary-light text-xl font-black"
                        >
                            Education
                        </Link>
                    </motion.li>
                    <motion.li variants={listItemVariant}>
                        <Link
                            onClick={toggleMenu} // Add this line
                            to="/aboutme"
                            className="block my-2 lg:my-0 py-3 px-8 bg-primary whitespace-nowrap text-primary-light text-xl font-black"
                        >
                            About Me
                        </Link>
                    </motion.li>
                    <motion.li variants={listItemVariant}>
                        <Link
                            onClick={toggleMenu} // Add this line
                            to="/contact"
                            className="block my-2 lg:my-0 py-3 px-8 bg-primary whitespace-nowrap text-primary-light text-xl font-black"
                        >
                            Contact
                        </Link>
                    </motion.li>
                </motion.ul>
            </nav>
        </header>
    );
};

export default Nav;
