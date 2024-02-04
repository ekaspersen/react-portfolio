import { useState } from "react";
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
        y: -8,
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
    closed: { height: "0%", y: -24, opacity: 0 },
};

const listItemVariant = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -400 },
};

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const animationState = isOpen ? "open" : "closed";

    return (
        <header className="header-index fixed top-0 flex left-0 right-0 justify-between items-center py-4 px-8 bg-black text-xl">
            <Link to="/" className="max-h-full">
                <img src={logo} alt="Logo" />
            </Link>

            <nav className="flex flex-col h-full items-end relative">
                <button
                    onClick={toggleMenu}
                    className="h-8 lg:h-7 w-12 flex flex-col justify-between"
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
                    className={`flex-col bg-black px-4 pb-4 mr-[-16px] absolute top-14 transition duration-200 ${
                        isOpen ? "flex" : "hidden"
                    }`}
                    variants={navVariant}
                    animate={animationState}
                    transition={{ duration: 0.5 }}
                >
                    <motion.li
                        variants={listItemVariant}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 1.3 }}
                    >
                        <Link
                            onClick={toggleMenu}
                            to="/"
                            className="block text-center my-2 py-2 px-6 whitespace-nowrap hover:bg-secondary-light hover:text-secondary focus:bg-secondary-light focus:text-secondary target:bg-secondary-light target:text-secondary font-black"
                        >
                            Home
                        </Link>
                    </motion.li>
                    <motion.li
                        variants={listItemVariant}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 1.3 }}
                    >
                        <Link
                            onClick={toggleMenu}
                            to="/mywork"
                            className=" block text-center my-2 py-2 px-6 whitespace-nowrap hover:bg-secondary-light hover:text-secondary focus:bg-secondary-light focus:text-secondary target:bg-secondary-light target:text-secondary font-black"
                        >
                            My Projects
                        </Link>
                    </motion.li>
                    <motion.li
                        variants={listItemVariant}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 1.3 }}
                    >
                        <Link
                            onClick={toggleMenu}
                            to="/education"
                            className=" block text-center my-2 py-2 px-6 whitespace-nowrap hover:bg-secondary-light hover:text-secondary focus:bg-secondary-light focus:text-secondary target:bg-secondary-light target:text-secondary font-black"
                        >
                            Education
                        </Link>
                    </motion.li>
                    <motion.li
                        variants={listItemVariant}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 1.3 }}
                    >
                        <Link
                            onClick={toggleMenu}
                            to="/aboutme"
                            className=" block text-center my-2 py-2 px-6 whitespace-nowrap hover:bg-secondary-light hover:text-secondary focus:bg-secondary-light focus:text-secondary target:bg-secondary-light target:text-secondary font-black"
                        >
                            About Me
                        </Link>
                    </motion.li>
                    <motion.li
                        variants={listItemVariant}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 1.3 }}
                    >
                        <Link
                            onClick={toggleMenu}
                            to="/contact"
                            className=" block text-center my-2 py-2 px-6 whitespace-nowrap hover:bg-secondary-light hover:text-secondary focus:bg-secondary-light focus:text-secondary target:bg-secondary-light target:text-secondary font-black"
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
