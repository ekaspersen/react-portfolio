import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ServiceCard = ({ title, intro, point1, point2, point3, price }) => {
    const [isShown, setIsShown] = useState(true);

    const handleButtonClick = () => {
        setIsShown(!isShown);
    };

    return (
        <div className="flex-1 flex flex-col p-4 bg-primary max-w-short-text">
            <h2 className="text-3xl font-bold pb-4">{title}</h2>
            <p className="font-bold text-secondary-light">{intro}</p>

            <AnimatePresence>
                {!isShown && (
                    <motion.div
                        className="flex flex-col gap-4 mt-4 max-h-content"
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        style={{ originY: 0 }}
                    >
                        <motion.p
                            initial={{ opacity: 0, scaleY: 0 }}
                            animate={{ opacity: 1, scaleY: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: 0.2,
                                ease: "easeInOut",
                            }}
                            className="list-item list-outside list-disc mx-4"
                            style={{ originY: 0 }}
                        >
                            {point1}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, scaleY: 0 }}
                            animate={{ opacity: 1, scaleY: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: 0.4,
                                ease: "easeInOut",
                            }}
                            className="list-item list-outside list-disc mx-4"
                            style={{ originY: 0 }}
                        >
                            {point2}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, scaleY: 0 }}
                            animate={{ opacity: 1, scaleY: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: 0.6,
                                ease: "easeInOut",
                            }}
                            className="list-item list-outside list-disc mx-4"
                            style={{ originY: 0 }}
                        >
                            {point3}
                        </motion.p>
                        <motion.span
                            initial={{ opacity: 0, scaleY: 0 }}
                            animate={{ opacity: 1, scaleY: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: 0.6,
                                ease: "easeInOut",
                            }}
                            className="font-bold mt-auto"
                        >
                            <span className=" text-secondary-light">
                                {price}
                            </span>
                        </motion.span>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                className="w-fit underline underline-offset-4 mt-4 font-bold"
                onClick={handleButtonClick}
            >
                {isShown ? "Show More" : "Show Less"}
            </button>
        </div>
    );
};
const Services = () => {
    return (
        <div className="flex flex-col items-center gap-16 pt-32 mx-auto">
            <h1 className="text-5xl font-extrabold">My proposals</h1>
            <div className="flex gap-8 flex-col lg:flex-row">
                <ServiceCard
                    title="Web-Design"
                    intro="I provide you with a figma-wireframe and style guide. Get a unique, tailored website design that resonates with your target audience."
                    point1="Comprehensive visual style guide: color scheme, typography, etc.."
                    point2="Wireframes and prototypes for an accurate preview of your website."
                    point3="2 Revisions to ensure the final design aligns with your vision."
                    price="From 300€"
                />
                <ServiceCard
                    title={"Design, Code, Deploy!"}
                    intro="From design to code to deployment, I handle it all. This provides a smooth, hassle-free process for getting your business online."
                    point1="Discovery phase to understand your business and website needs."
                    point2="Tailored website design with 2 revisions based on your feedback."
                    point3="Result is a UX optimised website that's responsive on all platforms."
                    price="From 1000€"
                />
                <ServiceCard
                    title="Website from design"
                    intro="Bring your existing website design to life. I will transform your designs into a fully functional, fast, and user-friendly website."
                    point1="Conversion of your existing design into a functional website."
                    point2="Use of the latest web development technologies for optimal performance."
                    point3="Thorough testing and optimization for all devices and browsers."
                    price="From 600€"
                />
            </div>
            <p className="font-montserrat italic text-center">
                to discuss pricing and more... <br />
                Contact me on{" "}
                <a
                    className="underline font-bold text-secondary-light underline-offset-4"
                    href="https://www.linkedin.com/in/eskil-k-hagen-43b7011a0/"
                >
                    Linkedin
                </a>{" "}
                !
            </p>
            <section className="flex flex-col gap-8 py-16 px-4 w-full bg-primary max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-6xl lg:text-8xl font-bold text-secondary-light whitespace-pre-wrap ">
                    About the process...
                </h1>
                <p className="text-lg font-bold text-secondary-light50op max-w-long-text">
                    I understand that creating a new website can seem daunting,
                    but I'm here to guide you every step of the way. Here's what
                    the process with me looks like:
                </p>
                <ol className="list-outside list-decimal mx-8 text-lg gap-2 flex flex-col">
                    <li>
                        An initial consultation where we'll discuss your
                        business and website needs
                    </li>
                    <li>
                        Project scoping where I'll define goals, timelines, and
                        budget
                    </li>
                    <li>
                        The design phase, where I create a unique, tailored
                        website design for your audience
                    </li>
                    <li>
                        The development phase, where I bring the design to life
                    </li>
                    <li>
                        Thorough testing and optimization for all devices and
                        browsers
                    </li>
                    <li>Deployment of your new website</li>
                    <li>
                        Ongoing support and maintenance to keep your website
                        performing at its best if wanted.
                    </li>
                </ol>
                <p className="text-lg font-bold text-secondary-light50op max-w-2xl">
                    Throughout this process, you'll be in the loop with regular
                    updates and opportunities for feedback. With years of
                    experience in web design and development, I'm committed to
                    delivering a website that's not only aesthetically pleasing
                    and functional but also effectively serves your business
                    needs. The journey doesn't end at deployment - I'm here for
                    ongoing support and maintenance, ensuring your website
                    continues to deliver value for your business, if you want me
                    to!
                </p>
            </section>
        </div>
    );
};

export default Services;
