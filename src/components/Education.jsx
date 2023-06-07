import everyday from "../assets/everydayytyt.svg";
const Education = () => {
    return (
        <div className="h-screen grid place-items-center overflow-x overflow-x-hidden">
            <section className="w-full flex justify-end xl:justify-start h-full">
                <div className="absolute z-[-10] xl:relative flex-1 h-full grid place-items-center flex-col">
                    <img
                        src={everyday}
                        alt="graphic"
                        className="absolute w-full h-full  object-contain"
                    />
                    <div className=" flex flex-col gap-4 font-bold text-3xl">
                        <p className="text-primary">Does Youtube Count?</p>
                        <p className="text-primary-light opacity-50">
                            Does Youtube Count?
                        </p>
                        <p className="text-primary">Does Youtube Count?</p>
                        <p className="text-primary-light opacity-50">
                            Does Youtube Count?
                        </p>
                        <p className="text-primary">Does Youtube Count?</p>
                        <p className="text-primary-light opacity-50">
                            Does Youtube Count?
                        </p>
                    </div>
                </div>
                <div className="lg:w-[50vw] h-full flex flex-col gap-20 pb-32 pt-48 justify-center items-center bg-secondary-light">
                    <div className="flex flex-col text-4xl xl:text-[64px] xl:gap-2 font-montserrat font-bold italic ">
                        <h1>Navigate Studies</h1>
                        <span className="text-primary-light">
                            Navigate Studies
                        </span>
                        <span className="text-primary">Navigate Studies</span>
                        <span className="text-secondary">Navigate Studies</span>
                    </div>
                    <div className="flex flex-col gap-8 px-8">
                        <a
                            href="#noroff"
                            className="flex scroll-m-8 flex-col gap-4 text-secondary"
                        >
                            <div className="flex gap-4 font-black">
                                <span className="underline underline-offset-4">
                                    1.
                                </span>
                                <div className="flex flex-col">
                                    <h2 className="text-base lg:text-xl">
                                        Noroff - Oslo Campus
                                    </h2>
                                    <h3 className="lg:text-3xl text-2xl text-primary-light border-b-2 border-secondary pb-[2px]">
                                        Frontend Development
                                    </h3>
                                </div>
                            </div>
                            <div className="text-xs font-montserrat font-semibold italic">
                                2021 - 2023
                            </div>
                        </a>
                        <a
                            href="#bodovgs"
                            className="flex flex-col gap-4 text-secondary"
                        >
                            <div className="flex gap-4 font-black">
                                <span className="underline underline-offset-4">
                                    2.
                                </span>
                                <div className="flex flex-col">
                                    <h2 className="text-base lg:text-xl">
                                        Bodø vgs.
                                    </h2>
                                    <h3 className="lg:text-3xl text-2xl text-primary-light border-b-2 border-secondary pb-[2px]">
                                        General Studies + IT1 - programfag
                                    </h3>
                                </div>
                            </div>
                            <div className="text-xs font-montserrat font-semibold italic">
                                2020 - 2021
                            </div>
                        </a>
                        <a
                            href="#bodinvgs"
                            className="flex flex-col gap-4 text-secondary"
                        >
                            <div className="flex gap-4 font-black">
                                <span className="underline underline-offset-4">
                                    3.
                                </span>
                                <div className="flex flex-col">
                                    <h2 className="text-base lg:text-xl">
                                        Bodin vgs.
                                    </h2>
                                    <h3 className="lg:text-3xl text-2xl text-primary-light border-b-2 border-secondary pb-[2px]">
                                        IKT - Drift og Utvikling
                                    </h3>
                                </div>
                            </div>
                            <div className="text-xs font-montserrat font-semibold italic">
                                2019 - 2020
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            <section
                id="noroff"
                className="w-full flex flex-col-reverse lg:flex-row h-fit bg-primary text-secondary-light"
            >
                <div className="flex-1 flex flex-col gap-8 px-16 pb-16 lg:py-32 box-border">
                    <h2 className="text-white font-black text-6xl lg:text-4xl xl:text-6xl w-fit">
                        My experience at Noroff
                    </h2>
                    <div className="max-w-long-text flex flex-col gap-4 text-secondary-light">
                        <p className="font-semibold text-secondary-light50op">
                            As a Noroff graduate, I gained a thorough
                            understanding of how to build and design a website
                            from scratch. My experience includes every step of
                            the process, from client communication and brief
                            understanding to UI-design, development and
                            deployment.
                        </p>
                        <p>
                            This journey has sharpened my understanding of web
                            development, my technical skills and my creative
                            process. I worked hard to strengthen my skills in
                            basic web technologies like HTML, CSS, JavaScript,
                            and have gained proficiency in modern tools like
                            TailwindCSS, Framer-Motion, ReactJS and other
                            libraries.
                        </p>
                        <p>
                            The collaborative development components are also an
                            important part of my learning journey. I had the
                            opportunity to work on various team projects,
                            gaining expertise in using Git and GitHub to
                            maintain code consistency and simple workflows.
                        </p>
                        <p>
                            In the later part of my course, I got into the
                            backend by learning how to setup a simple CMS with
                            modern data services. I also saw how to use APIs,
                            adding valuable skills to my front end development
                            tools.
                        </p>
                        <p className="font-semibold text-secondary-light50op">
                            Noroff have taught me to be a well-rounded frontend
                            developer, comfortable with both the creative and
                            technical aspects of the process. Previously i knew
                            parts of the client to deploy journey, but now i
                            know how to go from A-Z without getting stuck at LMN
                            or P.
                        </p>
                    </div>
                </div>
                <div className=" lg:w-[50vw] h-full flex flex-col box-border">
                    <div className="flex-1 flex flex-col pl-16 py-32 bg-secondary-light text-primary">
                        <h1 className="font-black text-3xl">
                            Noroff, Oslo Campus
                        </h1>
                        <h2 className="font-black text-6xl lg:text-4xl xl:text-6xl text-primary-light">
                            Frontend Development
                        </h2>
                        <span className="font-bold text-3xl">2021 - 2023</span>
                    </div>
                    <div className="flex flex-col huge:flex-row gap-8 px-16 py-16 text-secondary-light">
                        <div className="flex-1 flex flex-col overflow-hidden">
                            <p className="font-black text-3xl text-primary-light mb-2">
                                First Years Courses
                            </p>
                            <p className="font-black">
                                UI-Design ( Figma and UI/UX )
                            </p>
                            <p className="font-black">
                                Web and communication tech.
                            </p>
                            <p className="font-black">HTML and CSS</p>
                            <p className="font-black">Project Methodology</p>
                            <p className="font-black">Semester Project 1</p>
                            <div className="max-w-short-text overflow-hidden border-t-4 border-b-4 flex gap-2 font-black text-secondary-light50op border-secondary-light50op whitespace-nowrap">
                                <span className="text-xs">Merry Christmas</span>
                                <span className="text-xs">Merry Christmas</span>
                                <span className="text-xs">Merry Christmas</span>
                                <span className="text-xs">Merry Christmas</span>
                                <span className="text-xs">Merry Christmas</span>
                                <span className="text-xs">Merry Christmas</span>
                                <span className="text-xs">Merry Christmas</span>
                                <span className="text-xs">Merry Christmas</span>
                            </div>
                            <p className="font-black">
                                Programming Foundations
                            </p>
                            <p className="font-black">javaScript 1</p>
                            <p className="font-black">Interaction Design</p>
                            <p className="font-black">CMS and API fetching</p>
                            <p className="font-black">Exam Project 1</p>
                            <div className="max-w-short-text overflow-hidden border-t-4 border-b-4 flex gap-2 font-black text-secondary-light50op border-secondary-light50op whitespace-nowrap">
                                <span className="text-xs">SUMMER</span>
                                <span className="text-xs">HAPPY</span>
                                <span className="text-xs">SUMMER</span>
                                <span className="text-xs">HAPPY</span>
                                <span className="text-xs">SUMMER</span>
                                <span className="text-xs">HAPPY</span>
                                <span className="text-xs">SUMMER</span>
                                <span className="text-xs">HAPPY</span>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col overflow-hidden">
                            <p className="text-white font-black whitespace-nowrap">
                                Each course is about 4-6 weeks
                            </p>
                            <p className="font-black text-3xl text-primary-light mb-2">
                                Second Years Courses
                            </p>
                            <p className="font-black">
                                CSS Frameworks ( TailwindCSS )
                            </p>
                            <p className="font-black">javaScript 2</p>
                            <p className="font-black">Workflow</p>
                            <p className="font-black">Semester Project 2</p>
                            <div className="max-w-short-text overflow-hidden border-t-4 border-b-4 flex gap-2 font-black text-secondary-light50op border-secondary-light50op whitespace-nowrap">
                                <span className="text-xs">Merry Christmas</span>
                                <span className="text-xs">Merry Christmas</span>
                                <span className="text-xs">Merry Christmas</span>
                                <span className="text-xs">Merry Christmas</span>
                                <span className="text-xs">Merry Christmas</span>
                                <span className="text-xs">Merry Christmas</span>
                                <span className="text-xs">Merry Christmas</span>
                                <span className="text-xs">Merry Christmas</span>
                            </div>
                            <p className="font-black">Industry Knowledge</p>
                            <p className="font-black">Development Platforms</p>
                            <p className="font-black">
                                javaScript frameworks ( ReactJs )
                            </p>
                            <p className="font-black">Exam Project 2</p>
                            <p className="font-black">
                                Portfolio - This page !
                            </p>
                            <div className="max-w-short-text overflow-hidden border-t-4 border-b-4 flex gap-2 font-black text-secondary-light50op border-secondary-light50op">
                                <span className="text-xs">SUMMER</span>
                                <span className="text-xs">GRIND</span>
                                <span className="text-xs">SUMMER</span>
                                <span className="text-xs">GRIND</span>
                                <span className="text-xs">SUMMER</span>
                                <span className="text-xs">GRIND</span>
                                <span className="text-xs">SUMMER</span>
                                <span className="text-xs">GRIND</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full flex h-screen">
                <div className="flex-1 h-full flex flex-col"></div>
                <div className="flex-1 h-full flex flex-col"></div>
            </section>
        </div>
    );
};

export default Education;
