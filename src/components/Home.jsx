import { Link } from "react-router-dom";
import EpicSlider from "./EpicSlider";
import mikaText from "../assets/icouldbebrownicouldebeblue.svg";
import "./home.css";
import ContactSlider from "./ContactSlider";
import moreEducationDeets from "../assets/moreeducationdetails.svg";
import edueducaeducation from "../assets/edueducaeducation.svg";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const EmailBox = () => {
    const [showModal, setShowModal] = useState(false);
    const email = "ekhatwork@gmail.com";

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setShowModal(true);
            toast.success("Email copied!");
        } catch (err) {
            toast.error("Failed to copy text");
        }
    };

    useEffect(() => {
        let timer;
        if (showModal) {
            timer = setTimeout(() => {
                setShowModal(false);
            }, 2000);
        }
        return () => clearTimeout(timer);
    }, [showModal]);

    return (
        <div
            className={`flex-1 h-full cursor-pointer bg-secondary-light text-secondary grid gap-8 place-items-center relative ${
                showModal ? " bg-secondary bg-opacity-50 transition-all" : ""
            }`}
            onClick={copyToClipboard}
        >
            <div className="flex flex-col gap-8">
                <span className="font-montserrat text-6xl font-light italic">
                    {email}
                </span>
                <span className="font-bold text-xs">
                    CLICK THIS BOX TO COPY EMAIL ADDRESS <br /> I FIND EMAIL
                    POP-UPS ANNOYING TO
                </span>
            </div>
            {showModal && (
                <div className="absolute inset-0 flex text-3xl items-center justify-center text-white">
                    Email copied!
                </div>
            )}
        </div>
    );
};
const Home = () => {
    return (
        <div className="home">
            <section className="h-screen bg-primary flex flex-col justify-between">
                <div className="h-[84px]"></div>
                <h1 className="flex flex-col text-6xl gap-4 mx-8">
                    <span>Welcome, i am a frontend developer</span>
                    <span>
                        i <span className="text-secondary-light"> Design </span>
                        and <span className="text-secondary-light"> code </span>
                        websites.
                    </span>
                </h1>
                <div className="w-full flex">
                    <div className="flex-1 px-8 gap-1  flex flex-col text-primary-light">
                        <p className="font-bold opacity-50 max-w-short-text">
                            I choose a lazy person to do a hard job. Because a
                            lazy person will find an easy way to do it.
                        </p>
                        <p className="font-montserrat italic">- Bill Gates</p>
                    </div>
                    <div className="flex-1 px-8 bg-secondary-light flex items-center">
                        <p className="font-bold text-secondary">
                            SCROLL TO LEARN MORE ABOUT ME
                        </p>
                    </div>
                </div>
            </section>
            <EpicSlider />
            <section className="flex w-full">
                <div className="flex-1 flex bg-primary px-8 py-16 gap-2">
                    <img
                        src={mikaText}
                        className="h-full"
                        alt="lyrics from a grace kelly - MIKA"
                    />
                    <div className="flex flex-col gap-3 text-secondary-light whitespace-nowrap justify-between">
                        <div className="flex">
                            <h2 className="font-bold underline  text-6xl">
                                FRONTEND DEVELOPER
                            </h2>
                            <span className="font-black text-6xl">.</span>
                        </div>
                        <div className="flex">
                            <h2 className="font-bold underline  text-6xl">
                                REACT DEVELOPER
                            </h2>
                            <span className="font-black text-6xl">.</span>
                        </div>

                        <div className="flex">
                            <h2 className="font-bold underline  text-6xl">
                                UX&UI DESIGNER
                            </h2>
                            <span className="font-black text-6xl">.</span>
                        </div>
                        <div className="flex">
                            <h1 className="font-bold underline text-secondary-light50op text-6xl">
                                UNICORN DEVELOPER
                            </h1>
                            <span className="font-black text-6xl">.</span>
                        </div>
                        <Link
                            to="/mywork"
                            className="font-black text-secondary-light50op underline"
                        >
                            SEE MY WORK
                        </Link>
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-between px-8 py-16 bg-secondary-light ">
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
            <section className="flex h-screen justify-between flex-col py-16 gap-16">
                <ContactSlider />
                <div className="flex justify-center items-center h-full gap-8 text-center">
                    <EmailBox />
                    <span className="text-5xl">or</span>
                    <a
                        href="https://www.linkedin.com/in/eskil-k-hagen-43b7011a0/"
                        target="_blank"
                        className="flex-1 h-full bg-primary grid place-items-center"
                    >
                        <div className="flex flex-col gap-8">
                            <span className="font-montserrat text-6xl font-light italic">
                                LinkedIn
                            </span>
                            <span className="font-bold text-xs">
                                CLICK THIS BOX TO REDIRECT TO MY <br /> I
                                LINKEDIN IN A NEW TAB
                            </span>
                        </div>
                    </a>
                </div>
                <ContactSlider direction="rtl" />
            </section>
            <section className="flex">
                <div className="flex-1 w-full relative ">
                    <img
                        src={edueducaeducation}
                        className="absolute w-full h-full object-contain"
                        alt="graphic"
                    />
                </div>
                <div className="flex-1 flex flex-col px-16 py-16 gap-8">
                    <h2 className="text-6xl italic font-bold font-montserrat mb-8  ">
                        RELEVANT STUDIES
                    </h2>
                    <div className="flex flex-col">
                        <span className="text-5xl font-black text-secondary-light">
                            Frontend Development
                        </span>
                        <span className="font-bold text-primary">
                            Noroff - School of Technology, 2 years
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-5xl font-black text-secondary-light">
                            General Studies + IT1 - programfag
                        </span>
                        <span className="font-bold text-primary">
                            Bodø videregående skole, 1 year (Påbygg)
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-5xl font-black text-secondary-light">
                            ICT: Maintenance and development
                        </span>
                        <span className="font-bold text-primary">
                            Bodin videregående skole, 1 year (IKT-drift og
                            utvikling)
                        </span>
                    </div>
                    <div className="flex max-h-fit">
                        <Link
                            to="/education"
                            className="text-3xl whitespace-nowrap max-h-fit font-black flex flex-col"
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
        </div>
    );
};

export default Home;
