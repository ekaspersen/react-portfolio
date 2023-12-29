import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import EpicSlider from "./EpicSlider";
import edueducaeducation from "../assets/edueducaeducation.svg";
import me from "../assets/me.png";
ScrollToTopButton;

import Contact from "./Contact";
import ScrollToTopButton from "./ScrollToTopButton";
import CoolLines from "./CoolLines";

const Home = () => {
    return (
        <div className="home overflow-x-hidden">
            <section className="h-screen bg-black flex flex-col justify-between relative overflow-hidden">
                <CoolLines />
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
                        <h1 className="italic text-6xl font-montserrat text-primary-light font-black">
                            Welcome !
                        </h1>
                        <span className="font-black max-w-short-text lg:text-lg lg:max-w-long-text text-secondary-light italic font-montserrat">
                            I am a frontend developer with experience in backend
                            and design. This is my portfolio
                        </span>
                        <span className=" text-secondary-light50op italic font-montserrat">
                            from brief to hosting. - Fullstack-ish unicorn
                            developer
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
                    <span className="flex flex-col text-xs italic font-montserrat">
                        <span className="opacity-50">Favourite hobbies:</span>
                        <span className="opacity-50">
                            Cooking | Weightlifting | Web-design
                        </span>
                    </span>
                </div>
                <div className="w-full flex z-40">
                    <div className="flex-1 px-2 sm:px-8 gap-1 text-xs sm:text-base">
                        <p className="font-bold opacity-40 max-w-short-text text-primary-light">
                            A Frontend developer and UI designer with a passion
                            for great user experience and clean scalable code. I
                            also enjoy tacos !
                        </p>
                    </div>
                    <div className="flex-1 px-2 sm:px-8 bg-secondary-light  text-xs sm:text-base flex items-center">
                        <p className="font-black text-secondary">
                            SCROLL TO LEARN MORE ABOUT ME
                        </p>
                    </div>
                </div>
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
                            LINK TO MY PROJECTS
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
                <div className="flex-1 flex flex-col p-4 sm:px-16 py-8 gap-8">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-6xl italic font-bold font-montserrat   ">
                            RELEVANT STUDIES
                        </h2>
                        <Link
                            to="/education"
                            className="mb-8 underline underline-offset-[6px] hover:text-2xl text-secondary-light50op whitespace-nowrap hover:text-secondary-light w-fit font-montserrat italic text-sm xs:text-xl text-primary-light font-black flex flex-col"
                        >
                            Click here to read more about them !
                        </Link>
                    </div>

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
                </div>
            </section>
            <ScrollToTopButton />
        </div>
    );
};

export default Home;
