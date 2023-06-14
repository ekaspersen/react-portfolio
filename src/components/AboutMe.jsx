import { motion } from "framer-motion";
import me from "../assets/me.png";
const AboutMe = () => {
    return (
        <div className="pt-28 flex flex-col justify-center items-center">
            <motion.img
                animate={{ y: 0, opacity: 100 }}
                initial={{ y: 300, opacity: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="fixed bottom-0 right-0 max-h-60 lg:max-h-80"
                src={me}
                alt="image of me"
            />
            <div className="flex flex-col justify-between px-8 pb-16 pt-32 bg-secondary-light ">
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
            <div className="flex flex-col justify-between px-8 pb-16 mb-48 xl:mb-32 pt-8 gap-4 bg-primary max-w-3xl text-secondary-light">
                <h1 className="font-black text-5xl mb-4">About Me</h1>
                <p className="font-bold text-secondary-light50op text-lg">
                    Hello there! My name is Eskil K. Hagen and i am a Frontend
                    Developer and User Interface Designer. This means i am
                    capable of getting a website up and running for a client by
                    myself from the brief to the website is done. But altough i
                    can, i love having some company when i am designing or
                    developing.
                </p>
                <p className="font-medium">
                    I'm a dedicated Frontend developer, my favourite language to
                    work with being CSS, with emmet on my side i speak
                    css/tailwind fluently. In my work, I aim to build websites
                    that are both attractive and user-friendly. My educational
                    journey provided me with a solid grasp of coding rules and
                    UX (user experience) principles. I'm always on the lookout
                    for new learnings, taking steps every day to enhance my
                    skills and stay at the forefront of my field.
                </p>
                <p className="font-medium">
                    Collaborating with team members is one of the aspects I
                    enjoy most about what I do. I've found that I can often help
                    to keep the team spirit high with my outgoing personality,
                    and I believe that a happy, motivated team is key to good
                    workflow.
                </p>
                <p className="font-medium">
                    Away from my professional life, I value the time spent with
                    friends and engaging in various activities. These
                    experiences help me maintain a balanced lifestyle, providing
                    me with fresh perspectives that I believe also benefit my
                    work.
                </p>
                <p className="font-bold italic font-montserrat">- Eskil, 22</p>
            </div>
        </div>
    );
};

export default AboutMe;
