import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import EpicSlider from "./EpicSlider";
import edueducaeducation from "../assets/edueducaeducation.svg";
import me from "../assets/me.png";
ScrollToTopButton;

import Contact from "./Contact";
import ScrollToTopButton from "./ScrollToTopButton";
import CoolLines from "./CoolLines";

import htmlLogo from "../assets/icons/html-logo.svg";
import restApiLogo from "../assets/icons/RestApi.png";
import cssLogo from "../assets/icons/css-logo.svg";
import jsLogo from "../assets/icons/javascript-logo.svg";
import nextLogo from "../assets/icons/nextLogowhite.svg";
import reactLogo from "../assets/icons/react-logo.svg";
import supabaseLogo from "../assets/icons/supabase-logo.png";
import firebaseLogo from "../assets/icons/firebase-logo.svg";
import framerLogo from "../assets/icons/framer-motion.svg";
import typescriptLogo from "../assets/icons/typescriptlogo.png";
import tailwindLogo from "../assets/icons/tailwindCSS-logo.svg";
import MyWork from "./MyWork";
import LoadyBlobs from "./LoadyBlobs";
import { useEffect, useState } from "react";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 900);
        return () => clearTimeout(timer);
    }, []);
    return isLoading ? (
        <LoadyBlobs />
    ) : (
        <div className="home overflow-x-hidden">
            <section className="h-screen bg-black flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0">
                    <CoolLines />
                </div>

                <motion.img
                    animate={{ y: 0, opacity: 100 }}
                    initial={{ y: 300, opacity: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="max-w-xs w-[49vw] lg:w-full absolute bottom-0 right-0 z-40"
                    src={me}
                    alt="image of me"
                />
                <div className="flex flex-col mt-32 md:mt-0 gap-4 lg:gap-8 mx-4 sm:mx-8 z-40">
                    <span className="flex flex-col gap-2">
                        <h1 className="italic text-4xl font-montserrat font-black text-secondary-light">
                            Eskil K. Hagen
                        </h1>
                        <span className="font-black max-w-short-text  text-primary lg:text-lg lg:max-w-long-text  italic font-montserrat">
                            Frontend developer with experience in both backend
                            and UI-design. This is my portfolio
                        </span>
                        <span className=" opacity-50 font-montserrat italic">
                            Welcome to my portfolio
                        </span>
                        <span className=" opacity-50 font-montserrat italic mt-[-16 px]">
                            - Eskil K. Hagen
                        </span>
                    </span>
                    <div className="flex flex-col mt-4">
                        <span className="text-xs font-montserrat italic font-bold text-secondary-light50op">
                            Navigate:
                        </span>
                        <div className="flex gap-4 text-xs underline underline-offset-[6px]  font-black flex-wrap italic font-montserrat ">
                            <Link
                                className="hover:text-secondary-light hover:scale-110 focus:text-secondary-light focus:scale-110"
                                to="/mywork"
                            >
                                My projects
                            </Link>
                            <Link
                                className="hover:text-secondary-light hover:scale-110 focus:text-secondary-light focus:scale-110 "
                                to="/education"
                            >
                                Education
                            </Link>
                            <Link
                                className="hover:text-secondary-light hover:scale-110 focus:text-secondary-light focus:scale-110 "
                                to="/aboutme"
                            >
                                About me
                            </Link>
                        </div>
                    </div>
                    <span className="flex flex-col opacity-50 text-sm italic font-montserrat">
                        <span>I have studied code since fall 2019</span>
                        <span>Frontend Developer | UX Designer</span>
                    </span>
                </div>
                <div className="absolute z-50 bottom-0 text-xs text-primary font-black bg-secondary-light px-4 py-4 sm:px-8 w-full">
                    Scroll to see more ... <br />
                    Thanks for visiting !
                </div>
            </section>
            <EpicSlider />
            <div className="px-4 sm:px-8 py-4 flex gap-4 justify-center flex-wrap mx-auto">
                <div className="h-8 w-8">
                    <img
                        className="w-full h-full object-cover"
                        src={htmlLogo}
                        alt="html"
                        title="HTML"
                    />
                </div>
                <div className="h-8 w-8">
                    <img
                        className="w-full h-full object-cover"
                        src={cssLogo}
                        alt="css"
                        title="CSS"
                    />
                </div>
                <div className="h-8 w-8">
                    <img
                        className="w-full h-full object-cover"
                        src={tailwindLogo}
                        alt="TailwindCSS"
                        title="TailwindCSS"
                    />
                </div>
                <div className="h-8 w-8">
                    <img
                        className="w-full h-full object-cover"
                        src={jsLogo}
                        alt="javascript"
                        title="javaScript"
                    />
                </div>
                <div className="h-8 w-8">
                    <img
                        className="w-full h-full object-cover"
                        src={typescriptLogo}
                        alt="typescript"
                        title="TypeScript"
                    />
                </div>
                <div className="h-8 w-8">
                    <img
                        className="w-full h-full object-contain"
                        src={reactLogo}
                        alt="reactjs"
                        title="ReactJS"
                    />
                </div>
                <div className="h-8 w-8">
                    <img
                        className="w-full  h-full object-cover"
                        src={nextLogo}
                        alt="nextjs"
                        title="NextJS"
                    />
                </div>
                <div className="h-8 w-8">
                    <img
                        className="w-full h-full object-cover"
                        src={supabaseLogo}
                        alt="supabase"
                        title="Supabase"
                    />
                </div>
                <div className="h-8 w-8">
                    <img
                        className="w-full h-full object-cover"
                        src={firebaseLogo}
                        alt="firebase"
                        title="Firebase Auth/Storage"
                    />
                </div>
            </div>
            <section className="flex lg:flex-row flex-col-reverse w-full">
                <div className=" flex bg-black px-4 sm:px-8 py-32 gap-2 items-center">
                    <Link
                        to="/mywork"
                        className="flex flex-col font-black underline text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-2xl xl:text-6xl text-secondary-light50op "
                    >
                        <span>FRONTEND DEVELOPER</span>
                        <span>BACKEND EXPERIENCED</span>

                        <span>UX&UI DESIGNER</span>
                        <span>UNICORN DEVELOPER</span>
                        <span className=" text-secondary-light underline">
                            SEE MY PROJECTS
                        </span>
                    </Link>
                </div>
                <div className="flex-1 flex flex-col justify-between px-8 py-32 bg-secondary-light ">
                    <div className="flex flex-col text-primary">
                        <span className="text-7xl pb-3 font-bold text-primary-light">
                            OSL<span className="o-pinpoint">O</span>, NORWAY
                        </span>
                        <span className="font-bold text-3xl">
                            Eskil Kaspersen Hagen
                        </span>
                        <span className="text-xs font-bold">
                            From Bodø, Norway
                        </span>
                        <span className="font-bold">22 YEARS YOUNG</span>
                    </div>
                    <Link
                        to="/aboutme"
                        className="underline text-2xl font-bold text-primary-light"
                    >
                        READ MORE ABOUT ME
                    </Link>
                </div>
            </section>
            <Contact />
            <section className="flex">
                <div className="flex-1 w-full relative">
                    <img
                        src={edueducaeducation}
                        className="absolute w-full h-full  object-cover min-[1600px]:object-contain"
                        alt="graphic"
                    />
                </div>
                <div className="flex-1 flex flex-col p-4 sm:px-16 py-8 gap-8">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-6xl italic font-bold font-montserrat   ">
                            RELEVANT STUDIES
                        </h2>
                        <Link
                            to="/education"
                            className="mb-8 underline underline-offset-[6px] text-secondary-light50op whitespace-nowrap hover:text-secondary-light w-fit font-montserrat italic text-sm xs:text-xl text-primary-light font-black flex flex-col"
                        >
                            <motion.span whileHover={{ scale: 1.1 }}>
                                Click here to read more about them !
                            </motion.span>
                        </Link>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-3xl lg:text-5xl font-black text-primary-light">
                            Frontend Development
                        </span>
                        <span className="font-bold ">
                            Noroff - School of Technology, 2 years
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl xl:text-5xl font-black text-primary-light">
                            General Studies + IT1 - programfag
                        </span>
                        <span className="font-bold ">
                            Bodø videregående skole, 1 year (Påbygg)
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl xl:text-5xl font-black text-primary-light">
                            ICT: Maintenance and development
                        </span>
                        <span className="font-bold ">
                            Bodin videregående skole, 1 year (IKT-drift og
                            utvikling)
                        </span>
                    </div>
                </div>
            </section>
            <MyWork />
        </div>
    );
};

export default Home;
