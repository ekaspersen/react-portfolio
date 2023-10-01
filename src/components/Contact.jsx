import ContactSlider from "./ContactSlider";
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
            className={`flex-1 h-full px-6 lg:max-w-full cursor-pointer bg-secondary-light text-secondary grid gap-8 place-items-center relative ${
                showModal ? " bg-secondary bg-opacity-50 transition-all" : ""
            }`}
            onClick={copyToClipboard}
        >
            <div className="flex flex-col gap-8">
                <span className="font-montserrat font-black text-2xl sm:text-3xl lg:text-5xl xl:text-4xl lg:font-light italic">
                    {email}
                </span>
                <span className="font-bold text-xs">
                    CLICK THIS BOX TO COPY EMAIL ADDRESS <br /> I FIND EMAIL
                    POP-UPS ANNOYING TOO
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
const Contact = () => {
    return (
        <section className="flex xl:h-screen justify-between flex-col pb-16 pt-32 gap-16">
            <ContactSlider />
            <div className="flex flex-col xl:flex-row justify-center h-screen items-center xl:h-full gap-8 text-center">
                <EmailBox />
                <span className="text-5xl">or</span>
                <a
                    href="https://www.linkedin.com/in/eskil-k-hagen-43b7011a0/"
                    target="_blank"
                    className="flex-1 w-full h-full bg-primary grid place-items-center"
                >
                    <div className="flex flex-col gap-8 ">
                        <span className="font-montserrat text-6xl font-light italic">
                            LinkedIn
                        </span>
                        <span className="font-bold text-xs">
                            CLICK THIS BOX TO REDIRECT TO MY <br /> LINKEDIN IN
                            A NEW TAB
                        </span>
                    </div>
                </a>
            </div>
            <ContactSlider direction="rtl" />
        </section>
    );
};

export default Contact;
