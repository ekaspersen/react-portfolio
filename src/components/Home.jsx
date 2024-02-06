import { Link } from "react-router-dom";
import { easeOut, motion } from "framer-motion";
import EpicSlider from "./EpicSlider";
import edueducaeducation from "../assets/edueducaeducation.svg";
import me from "../assets/me.png";
ScrollToTopButton;

import Contact from "./Contact";
import ScrollToTopButton from "./ScrollToTopButton";
import htmlLogo from "../assets/icons/html-logo.svg";
import restApiLogo from "../assets/icons/RestApi.png";
import cssLogo from "../assets/icons/css-logo.svg";
import jsLogo from "../assets/icons/javascript-logo.svg";
import nextLogo from "../assets/icons/nextLogowhite.svg";
import reactLogo from "../assets/icons/react-logo.svg";
import supabaseLogo from "../assets/icons/supabase-logo.png";
import firebaseLogo from "../assets/icons/firebase-logo.svg";
import framerLogo from "../assets/icons/framer-motion.svg";
import wordpressLogo from "../assets/icons/wordpressLogo.svg";
import typescriptLogo from "../assets/icons/typescriptlogo.png";
import tailwindLogo from "../assets/icons/tailwindCSS-logo.svg";
import npmLogo from "../assets/icons/npm.png";
import sassLogo from "../assets/icons/sassLogo.png";
import viteLogo from "../assets/icons/vite-logo.svg";
import seoLogo from "../assets/icons/seoLogo.png";
import nodejsLogo from "../assets/icons/nodejsLogo.png";
import figmaLogo from "../assets/icons/figma.png";
import gitLogo from "../assets/icons/gitLogo.png";
import githubLogo from "../assets/icons/githubLogo.webp";
import databaseLogo from "../assets/icons/databaseLogo.png";
import gptBackdrop from "../assets/gptBackdrop.webp";
import MyWork from "./MyWork";
import LoadyBlobs from "./LoadyBlobs";
import { useEffect, useState } from "react";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);
    return isLoading ? (
        <LoadyBlobs />
    ) : (
        <div className="home overflow-x-hidden">
            <section className=" min-h-[630px] sm:h-screen bg-black flex flex-col justify-center relative overflow-hidden">
                <div className="absolute w-full h-full">
                    <img
                        src={gptBackdrop}
                        className="object-fill min-h-screen w-full opacity-[2%]"
                        alt="backdrop"
                    />
                </div>
                <motion.img
                    animate={{ y: 0, opacity: 100 }}
                    initial={{ y: 300, opacity: 0 }}
                    transition={{ duration: 1, delay: 3 }}
                    className="max-w-xs w-[49vw] lg:w-full absolute bottom-0 right-0 z-40"
                    src={me}
                    alt="image of me"
                />
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.9, // Total duration for spins plus fade out
                        ease: easeOut,
                    }}
                    className="flex flex-col mt-32 md:mt-0 gap-4 lg:gap-8 mx-4 sm:mx-8 z-40"
                >
                    <span className="flex flex-col gap-2">
                        <h1 className="italic text-4xl font-montserrat font-black text-primary-light">
                            Eskil K. Hagen
                        </h1>
                        <span className="font-bold opacity-80 max-w-short-text lg:text-lg lg:max-w-long-text  italic font-montserrat">
                            Frontend developer with experience in both backend
                            and UI-design. This is my portfolio.
                        </span>
                    </span>
                    <div className="flex flex-col mt-4">
                        <span className="text-lg font-montserrat italic font-bold text-secondary-light50op">
                            Navigate:
                        </span>
                        <div className="flex gap-4 text-sm underline underline-offset-[6px]  font-black flex-wrap italic font-montserrat ">
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
                </motion.div>
                <motion.div className="absolute bottom-[-100px] right-[-60px] outline-primary outline outline-8 outline-offset-8 rounded-full w-[320px] h-[320px] overflow-hidden sm:w-[416px] sm:h-[416px] lg:w-[460px] lg:h-[460px] bg-primary">
                    <img
                        src={gptBackdrop}
                        className="object-cover absolute h-full w-full opacity-10 rotate-45"
                        alt="backdrop"
                    />
                </motion.div>
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    transition={{
                        delay: 1.2,
                        duration: 0.9, // Total duration for spins plus fade out
                        ease: easeOut,
                    }}
                    className="absolute top-24 right-0  md:flex px-4 sm:px-8 hidden justify-center gap-4 max-w-lg flex-wrap mx-auto bg-secondary-light50op rounded-l-xl py-8"
                >
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex flex-col gap-1 items-center"
                    >
                        <div className="h-8 w-8">
                            <img
                                className="w-full h-full object-cover"
                                src={htmlLogo}
                                alt="html"
                                title="HTML"
                            />
                        </div>
                        <span className="text-xs font-montserrat italic opacity-50">
                            HTML
                        </span>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex flex-col gap-1 items-center"
                    >
                        {" "}
                        <div className="h-8 w-8">
                            <img
                                className="w-full  h-full object-cover"
                                src={seoLogo}
                                alt="SEO"
                                title="SEO (Search Engine Optimization)"
                            />
                        </div>
                        <span className="text-xs font-montserrat italic opacity-50">
                            SEO
                        </span>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex flex-col gap-1 items-center"
                    >
                        {" "}
                        <div className="h-8 w-8">
                            <img
                                className="w-full h-full object-cover"
                                src={cssLogo}
                                alt="css"
                                title="CSS"
                            />
                        </div>
                        <span className="text-xs font-montserrat italic opacity-50">
                            CSS
                        </span>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex flex-col gap-1 items-center"
                    >
                        <div className="h-8 w-8">
                            <img
                                className="w-full h-full object-cover"
                                src={tailwindLogo}
                                alt="TailwindCSS"
                                title="TailwindCSS"
                            />
                        </div>
                        <span className="text-xs font-montserrat italic opacity-50">
                            Tailwind
                        </span>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex flex-col gap-1 items-center"
                    >
                        <div className="h-8 w-8">
                            <img
                                className="w-full  h-full object-cover"
                                src={sassLogo}
                                alt="sass"
                                title="SASS/SCSS"
                            />
                        </div>
                        <span className="text-xs font-montserrat italic opacity-50">
                            SASS
                        </span>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex flex-col gap-1 items-center"
                    >
                        <div className="h-8 w-8">
                            <img
                                className="w-full  h-full object-contain"
                                src={framerLogo}
                                alt="framermotion"
                                title="Framer Motion"
                            />
                        </div>
                        <span className="text-xs font-montserrat italic opacity-50">
                            Motion
                        </span>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex flex-col gap-1 items-center"
                    >
                        <div className="h-8 w-8">
                            <img
                                className="w-full  h-full object-contain"
                                src={figmaLogo}
                                alt="figma"
                                title="Figma"
                            />
                        </div>
                        <span className="text-xs font-montserrat italic opacity-50">
                            Figma
                        </span>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex flex-col gap-1 items-center"
                    >
                        <div className="h-8 w-8">
                            <img
                                className="w-full h-full object-cover"
                                src={jsLogo}
                                alt="javascript"
                                title="javaScript"
                            />
                        </div>
                        <span className="text-xs font-montserrat italic opacity-50">
                            JS
                        </span>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex flex-col gap-1 items-center"
                    >
                        <div className="h-8 w-8">
                            <img
                                className="w-full h-full object-cover"
                                src={typescriptLogo}
                                alt="typescript"
                                title="TypeScript"
                            />
                        </div>
                        <span className="text-xs font-montserrat italic opacity-50">
                            TS
                        </span>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex flex-col gap-1 items-center"
                    >
                        <div className="h-8 w-8">
                            <img
                                className="w-full  h-full object-cover"
                                src={viteLogo}
                                alt="vite"
                                title="ViteJs vanilla | Vite/ReactJS"
                            />
                        </div>
                        <span className="text-xs font-montserrat italic opacity-50">
                            Vite
                        </span>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex flex-col gap-1 items-center"
                    >
                        <div className="h-8 w-8">
                            <img
                                className="w-full h-full object-contain"
                                src={reactLogo}
                                alt="reactjs"
                                title="ReactJS"
                            />
                        </div>
                        <span className="text-xs font-montserrat italic opacity-50">
                            ReactJS
                        </span>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex flex-col gap-1 items-center"
                    >
                        <div className="h-8 w-8">
                            <img
                                className="w-full  h-full object-cover"
                                src={nextLogo}
                                alt="nextjs"
                                title="NextJS"
                            />
                        </div>
                        <span className="text-xs font-montserrat italic opacity-50">
                            NextJS
                        </span>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex flex-col gap-1 items-center"
                    >
                        <div className="h-8 w-8">
                            <img
                                className="w-full h-full object-cover"
                                src={supabaseLogo}
                                alt="supabase"
                                title="Supabase"
                            />
                        </div>
                        <span className="text-xs font-montserrat italic opacity-50">
                            Supabase
                        </span>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex flex-col gap-1 items-center"
                    >
                        <div className="h-8 w-8">
                            <img
                                className="w-full h-full object-cover"
                                src={firebaseLogo}
                                alt="firebase"
                                title="Firebase Auth/Storage"
                            />
                        </div>
                        <span className="text-xs font-montserrat italic opacity-50">
                            Firebase
                        </span>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex flex-col gap-1 items-center"
                    >
                        <div className="h-8 w-8">
                            <img
                                className="w-full  h-full object-cover"
                                src={wordpressLogo}
                                alt="wordpress"
                                title="Headless CMS | Basic Wordpress knowledge"
                            />
                        </div>
                        <span className="text-xs font-montserrat italic opacity-50">
                            Wordpress
                        </span>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex flex-col gap-1 items-center"
                    >
                        <div className="h-8 w-8">
                            <img
                                className="w-full  h-full object-cover"
                                src={restApiLogo}
                                alt="sql"
                                title="SQL | CRUD | API fetch"
                            />
                        </div>
                        <span className="text-xs font-montserrat italic opacity-50">
                            Sql/Api
                        </span>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex flex-col gap-1 items-center"
                    >
                        <div className="h-8 w-8">
                            <img
                                className="w-full  h-full object-cover"
                                src={databaseLogo}
                                alt="database"
                                title="DB modelling | phpMySQL | SQL"
                            />
                        </div>
                        <span className="text-xs font-montserrat italic opacity-50">
                            DB
                        </span>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex flex-col gap-1 items-center"
                    >
                        <div className="h-8 w-8">
                            <img
                                className="w-full  h-full object-contain"
                                src={nodejsLogo}
                                alt="nodejs"
                                title="NodeJS"
                            />
                        </div>
                        <span className="text-xs font-montserrat italic opacity-50">
                            NodeJs
                        </span>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex flex-col gap-1 items-center"
                    >
                        <div className="h-8 w-8">
                            <img
                                className="w-full  h-full object-cover"
                                src={npmLogo}
                                alt="npm"
                                title="npm"
                            />
                        </div>
                        <span className="text-xs font-montserrat italic opacity-50">
                            NPM
                        </span>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex flex-col gap-1 items-center"
                    >
                        <div className="h-8 w-8">
                            <img
                                className="w-full  h-full object-cover"
                                src={gitLogo}
                                alt="git"
                                title="Git | branch/pr-management"
                            />
                        </div>
                        <span className="text-xs font-montserrat italic opacity-50">
                            GIT
                        </span>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex flex-col gap-1 items-center"
                    >
                        <div className="h-8 w-8">
                            <img
                                className="w-full bg-white rounded-full h-full object-cover"
                                src={githubLogo}
                                alt="github"
                                title="Github"
                            />
                        </div>
                        <span className="text-xs font-montserrat italic opacity-50">
                            Github
                        </span>
                    </motion.div>
                </motion.div>
            </section>
            <EpicSlider />
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
