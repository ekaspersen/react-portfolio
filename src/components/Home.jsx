import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import EpicSlider from "./EpicSlider";
import mikaText from "../assets/icouldbebrownicouldebeblue.svg";
import moreEducationDeets from "../assets/moreeducationdetails.svg";
import edueducaeducation from "../assets/edueducaeducation.svg";
import me from "../assets/me.png";
ScrollToTopButton;

import Contact from "./Contact";
import ScrollToTopButton from "./ScrollToTopButton";
import CoolLines from "./CoolLines";

const Home = () => {
    return (
        <div className="home overflow-x-hidden">
            <section className="h-screen bg-primary flex flex-col justify-between relative overflow-hidden">
                <CoolLines />
                <motion.img
                    animate={{ y: 0, opacity: 100 }}
                    initial={{ y: 300, opacity: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="max-w-xs w-[49vw] lg:w-full absolute bottom-0 right-0 z-40"
                    src={me}
                    alt="image of me"
                />
                <h1 className="flex flex-col text-2xl sm:text-3xl lg:text-6xl mt-32 md:mt-0 md:gap-4 mx-4 sm:mx-8 z-40">
                    <span className="italic font-montserrat text-primary-light font-bold">

                        Welcome to my portfolio

                    </span>
                    <span>
                        I <span className="text-secondary-light"> design </span>
                        and <span className="text-secondary-light"> code </span>
                        websites.
                    </span>
                    <span className="text-sm italic font-montserrat">
                        - Eskil K. Hagen, Frontend Developer
                    </span>
                </h1>
                <div className="w-full flex z-40">
                    <div className="flex-1 px-2 sm:px-8 gap-1 text-xs sm:text-base">
                        <p className="font-bold opacity-50 max-w-short-text text-secondary-light">
                            A Frontend developer and UX designer with a passion
                            for great user experience and clean code.
                        </p>
                    </div>
                    <div className="flex-1 px-2 sm:px-8 bg-secondary-light  text-xs sm:text-base flex items-center">
                        <p className="font-bold text-secondary">
                            SCROLL TO LEARN MORE ABOUT ME
                        </p>
                    </div>
                </div>
            </section>
            <EpicSlider />
            <section className="flex xl:flex-row flex-col-reverse w-full">
                <div className="lg:flex-1 flex bg-primary px-8 py-16 gap-2">
                    <img
                        src={mikaText}
                        className="h-full max-h-52 sm:max-h-none"
                        alt="lyrics from a grace kelly - MIKA"
                    />
                    <div className="flex flex-col lg:gap-3 text-secondary-light whitespace-nowrap justify-between">
                        <div className="flex">
                            <h2 className="font-bold underline text-2xl sm:text-4xl md:text-5xl xl:text-6xl">
                                FRONTEND DEVELOPER
                            </h2>
                            <span className="font-black text-3xl lg:text-5xl xl:text-6xl">
                                .
                            </span>
                        </div>
                        <div className="flex">
                            <h2 className="font-bold underline text-2xl sm:text-4xl md:text-5xl xl:text-6xl">
                                REACT DEVELOPER
                            </h2>
                            <span className="font-black text-3xl lg:text-5xl xl:text-6xl">
                                .
                            </span>
                        </div>

                        <div className="flex">
                            <h2 className="font-bold underline text-2xl sm:text-4xl md:text-5xl xl:text-6xl">
                                UX&UI DESIGNER
                            </h2>
                            <span className="font-black text-3xl lg:text-5xl xl:text-6xl">
                                .
                            </span>
                        </div>
                        <div className="flex text-secondary-light">
                            <h1 className="font-bold underline  text-2xl sm:text-4xl md:text-5xl xl:text-6xl">
                                UNICORN DEVELOPER
                            </h1>
                            <span className="font-black text-3xl lg:text-5xl xl:text-6xl">
                                .
                            </span>
                        </div>
                        <Link
                            to="/mywork"
                            className="font-black text-3xl lg:text-5xl xl:text-6xl text-secondary-light50op underline"
                        >
                            MY WORK
                        </Link>
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-between px-8 pb-16 pt-32 bg-secondary-light ">
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
                        className="underline font-bold text-primary-light"
                    >
                        LINK TO ABOUT ME PAGE
                    </Link>
                </div>
            </section>
            <Contact />
            <section className="flex">
                <div className="flex-1 w-full relative ">
                    <img
                        src={edueducaeducation}
                        className="absolute w-full h-full  object-cover min-[1600px]:object-contain"
                        alt="graphic"
                    />
                </div>
                <div className="flex-1 flex flex-col p-4 sm:px-16 py-16 gap-8">
                    <h2 className="text-6xl italic font-bold font-montserrat mb-8  ">
                        RELEVANT STUDIES
                    </h2>
                    <div className="flex flex-col">
                        <span className="text-3xl lg:text-5xl font-black text-secondary-light">
                            Frontend Development
                        </span>
                        <span className="font-bold text-primary-light">
                            Noroff - School of Technology, 2 years
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl xl:text-5xl font-black text-secondary-light">
                            General Studies + IT1 - programfag
                        </span>
                        <span className="font-bold text-primary-light">
                            Bodø videregående skole, 1 year (Påbygg)
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl xl:text-5xl font-black text-secondary-light">
                            ICT: Maintenance and development
                        </span>
                        <span className="font-bold text-primary-light">
                            Bodin videregående skole, 1 year (IKT-drift og
                            utvikling)
                        </span>
                    </div>
                    <div className="flex max-h-fit">
                        <Link
                            to="/education"
                            className="sm:text-3xl whitespace-nowrap max-h-fit font-black flex flex-col"
                        >
                            <span>Link to="/education"</span>
                            <span>Link to="/education"</span>
                            <span>Link to="/education"</span>
                            <span>Link to="/education"</span>
                            <span>Link to="/education"</span>
                        </Link>
                        <div className="w-full max-h-[175px] ml-auto ">
                            <img
                                src={moreEducationDeets}
                                className="w-full h-full"
                                alt="more details about my studies"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <ScrollToTopButton />
        </div>
    );
};

export default Home;
