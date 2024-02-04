import { motion } from "framer-motion";
import me from "../assets/speilselfy.png";
import me2 from "../assets/eskilsmiler.png";
import me3 from "../assets/me.png";
import ScrollToTopButton from "./ScrollToTopButton";
import CoolLines from "./CoolLines";
import SkillsModal from "./SkillsModal";
const AboutMe = () => {
    return (
        <div className=" flex flex-col justify-center items-center max-w-screen relative overflow-hidden">
            <CoolLines />
            <motion.img
                animate={{ y: 0, opacity: 100 }}
                initial={{ y: 300, opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="fixed bottom-0 right-4 max-h-60 lg:max-h-80 z-20"
                src={me3}
                alt="image of me"
            />
            <motion.img
                animate={{ y: 0, opacity: 100 }}
                initial={{ y: 300, opacity: 0 }}
                transition={{ duration: 1, delay: 1.3 }}
                className="fixed bottom-[-20px] right-[-32px] max-h-60 lg:max-h-80 z-20"
                src={me}
                alt="image of me"
            />
            <motion.img
                animate={{ y: 0, opacity: 100 }}
                initial={{ y: 300, opacity: 0 }}
                transition={{ duration: 1, delay: 3 }}
                className="fixed bottom-0 right-0 max-h-60 lg:max-h-80 z-20"
                src={me2}
                alt="image of me"
            />
            <div className=" z-10 flex flex-col justify-between px-8 pb-16 mt-32 pt-32 bg-secondary-light ">
                <div className="flex flex-col text-primary">
                    <span className="text-7xl pb-3 font-bold text-primary-light">
                        OSL<span className="o-pinpoint">O</span>, NORWAY
                    </span>
                    <span className="font-bold text-3xl ">
                        Eskil Kaspersen Hagen
                    </span>
                    <span className="text-xs font-bold">From Bodø, Norway</span>
                    <span className="font-bold">22 YEARS YOUNG</span>
                </div>
            </div>
            <div className="z-10 flex flex-col justify-between px-8 relative py-16 gap-4 bg-primary max-w-3xl">
                <h1 className="font-black text-5xl mb-4 text-secondary-light">
                    About Me
                </h1>

                <p className="font-bold  text-lg text-secondary-light opacity-75">
                    Hello there! My name is Eskil K. Hagen and I'm a Frontend
                    Developer and User Interface Designer. This means i can do
                    the entire process from creating the design to coding the
                    website and its deployment.
                </p>

                <p className="font-medium opacity-80">
                    I've learned the basics of programming through a bit of php
                    and JS at high-school, mostly JS and NodeJS in the last
                    couple of years at Noroff. In the last two years I've
                    started using React- and Next -JS for my applications. I
                    also handle API integrations and have some knowledge of SQL
                    and database/table management. This means I can smoothly
                    connect the front-end of websites with various back-end
                    systems, making sure everything works together seamlessly.{" "}
                    <span className=" font-montserrat italic">
                        For example i've used supabase and firebase to create
                        and manage storage and auth for a couple
                        web-applications.
                    </span>
                </p>
                <p className="font-medium opacity-80">
                    With a Solid background in CSS i can make any design come to
                    life on the web. Whether it is CSS, SASS, TailwindCSS or
                    Bootstrap i can make it mobile responsive, animated and
                    optimised. I am very design oriented so i love creating both
                    the User interface -(design) and make it come to life with
                    CSS.
                </p>
                <p className="font-medium opacity-80">
                    Away from my professional life, I value the time spent with
                    friends and engaging in various activities. These
                    experiences help me maintain a balanced lifestyle, providing
                    me with fresh perspectives that I believe also benefit my
                    work.
                </p>
                <p className="font-medium text-secondary-light opacity-75">
                    My educational journey has given me a solid foundation in
                    coding standards, UX principles, and the latest JavaScript
                    frameworks and libraries. I'm committed to continuous
                    learning, always seeking new knowledge and techniques to
                    stay updated in the fast-paced world of web development.
                </p>
                <p className="font-bold italic font-montserrat text-secondary-light">
                    - Eskil, 22
                </p>
                <SkillsModal />
            </div>
            <ScrollToTopButton />
        </div>
    );
};

export default AboutMe;
