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

const Home = () => {
    return (
        <div className="home overflow-x-hidden">
            <section className="h-screen bg-primary flex flex-col justify-between relative ">
                <motion.img
                    animate={{ y: 0, opacity: 100 }}
                    initial={{ y: 300, opacity: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="max-w-xs w-[49vw] lg:w-full absolute bottom-0 right-0"
                    src={me}
                    alt="image of me"
                />
                <div className="h-[84px]"></div>
                <h1 className="flex flex-col text-2xl sm:text-3xl lg:text-6xl gap-4 mx-4 sm:mx-8">
                    <span>Frontend developer portfolio</span>
                    <span>
                        I <span className="text-secondary-light"> design </span>
                        and <span className="text-secondary-light"> code </span>
                        websites.
                    </span>
                </h1>
                <div className="w-full flex z-50">
                    <div className="flex-1 px-2 sm:px-8 gap-1 text-xs sm:text-base flex flex-col text-primary-light">
                        <p className="font-bold opacity-50 max-w-short-text">
                            I choose a lazy person to do a hard job. Because a
                            lazy person will find an easy way to do it.
                        </p>
                        <p className="font-montserrat italic">- Bill Gates</p>
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
                        <div className="flex text-secondary-light50op">
                            <h1 className="font-bold underline  text-2xl sm:text-4xl md:text-5xl xl:text-6xl">
                                UNICORN DEVELOPER
                            </h1>
                            <span className="font-black text-3xl lg:text-5xl xl:text-6xl">
                                .
                            </span>
                        </div>
                        <Link
                            to="/mywork"
                            className="font-black text-secondary-light50op underline"
                        >
                            SEE MY WORK
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
                        className="absolute w-full h-full object-cover"
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
                        <div className="w-full max-h-[175px] ml-auto">
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
