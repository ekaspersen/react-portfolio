import everyday from "../assets/everydayytyt.svg";
const Education = () => {
    return (
        <div className="h-screen grid place-items-center">
            <section className="w-full flex justify-end xl:justify-start h-full">
                <div className="absolute hidden  z-[-10] xl:relative max-w-{32px} lg:max-w-full flex-1 h-full lg:grid place-items-center flex-col">
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
                <div className="lg:w-[50vw] h-full flex flex-col gap-8 lg:gap-20 pb-16 lg:pb-32 pt-48 justify-center items-center bg-secondary-light">
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
                className="w-full flex flex-col-reverse lg:flex-row h-fit bg-primary text-secondary-light scroll-m-8"
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
                    <div className="flex-1 flex flex-col pl-16 py-16 lg:py-32 bg-secondary-light text-primary">
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

            <section className="w-full flex flex-col lg:flex-row-reverse">
                <div className="flex-1 flex flex-col lg:flex-col-reverse">
                    <div className="flex lg:hidden flex-col px-4 lg:px-8 py-12 xl:px-16 xl:py-24">
                        <span className="text-3xl text-secondary-light font-bold">
                            Bodø Videregående Skole
                        </span>
                        <span className="text-primary-light text-5xl font-black">
                            IT1 - Programfag
                        </span>
                        <span className="text-xl text-white font-bold">
                            2020 - 2021
                        </span>
                    </div>
                    <div className="lg:flex mt-auto lg:bg-primary hidden flex-col px-4 py-12 lg:px-8 xl:px-16 xl:py-24">
                        <span className="text-3xl text-primary-light font-bold">
                            Bodin Videregående Skole
                        </span>
                        <span className="text-secondary-light text-5xl font-black">
                            IT1 - Programfag
                        </span>
                        <span className="text-xl text-white font-bold">
                            2020 - 2021
                        </span>
                    </div>
                    <div
                        id="bodovgs"
                        className="md:max-w-long-text lg:max-w-none scroll-m-72 lg:scroll-m-12 flex flex-col h-full px-4 py-8 gap-8 lg:px-8 lg:py-16 xl:px-16 xl:py-24"
                    >
                        <p>
                            My last year at high-school i did common studies
                            (Påbygg), and i had IT as my extra corriculum. It
                            was only 5 classes each week, but i got to continue
                            to develop some of my skills from the year before.
                            First we went over how to use HTML and CSS in 3
                            weeks, remember it was nice to freshen up after the
                            summer.
                        </p>
                        <p>
                            Then we spent 2-3 months going over php/mysql,
                            -mainly creating databases using C.R.U.D. After
                            christmas we spent a long time on a main assignment;
                            creating a Admin panel and UI where users can view
                            inventory and update their own data for a library
                            with html/css and php/mysql. Sadly the project is
                            lost on a school computer.
                        </p>
                        <p>
                            This was a great year for me because the tasks was
                            simple so i got to use my time in class on learning
                            new stuff alongside refreshing things that was
                            unclear or forgotten from the last year!
                        </p>
                        <p className="text-2xl text-primary-light mt-8 h-full flex flex-col justify-between">
                            <span>
                                The most important qualities i got from studying
                                IT in high-school (Learning to code was also
                                good) must be knowledge of how the backend of
                                everything works. Even though it is not my
                                field, i think it is very helpful for both me
                                and piers if developers can discuss things
                                together -
                            </span>

                            <li className="custom-bullet font-black text-6xl">
                                From Design to back to Front end.
                            </li>
                        </p>
                    </div>
                </div>
                <div className="flex-1 h-full flex flex-col bg-primary lg:bg-transparent">
                    <div className="lg:flex hidden flex-col px-4 lg:px-8 py-12 xl:px-16 xl:py-24">
                        <span className="text-3xl text-secondary-light font-bold">
                            Bodø Videregående Skole
                        </span>
                        <span className="text-primary-light text-5xl font-black">
                            IT1 - Programfag
                        </span>
                        <span className="text-xl text-white font-bold">
                            2020 - 2021
                        </span>
                    </div>
                    <div className="flex lg:hidden flex-col px-4 py-12 lg:px-8 xl:px-16 xl:py-24">
                        <span className="text-3xl  text-primary-light font-bold">
                            Bodin Videregående Skole
                        </span>
                        <span className="text-secondary-light text-5xl font-black">
                            IT1 - Programfag
                        </span>
                        <span className="text-xl text-white font-bold">
                            2020 - 2021
                        </span>
                    </div>
                    <div
                        id="bodinvgs"
                        className="md:max-w-long-text lg:max-w-none flex scroll-m-80 lg:scroll-m-[-20000px] bg-primary font-medium flex-col px-4 py-8 gap-8 lg:px-8 lg:py-16 xl:px-16 xl:py-24"
                    >
                        <p className="font-bold text-secondary-light50op">
                            The start of my developer/IT career was deeply
                            influenced by learning from an ex-military officer
                            who started working in ICT-maintenance for several
                            military operations in Bodø from the end of the 90s.
                            This experience was steeped in the earliest culture
                            of data-nerdism, and the rewards from such exposure
                            were plentiful.
                        </p>
                        <p>
                            Our studies involved learning how the w3 is put
                            together, what/how LANs and WANs are and work, how
                            to set up routing for LAN servers, protocols and
                            generally how everything is set up from bits to
                            protocols to servers talking to send code that in
                            the end tells the screen what rgb value the pixels
                            should fire.
                        </p>
                        <p>
                            This year was my first meeting with HTML and CSS. It
                            was a steep learning curve, but i found a passion
                            for CSS and i had a very good understanding of
                            bending the box model by the time the year was over.
                            We also dabbled a bit with javaScript, nothing much
                            but i made a very simple cookie-clicker type game
                            and a Celsius/Fahrenheit/kelvin translator just to
                            get familiarised with programming.
                        </p>
                        <p>
                            Delving deeper into the world of back-end
                            development, we dedicated significant time of the
                            year learning about and creating databases with
                            PHP/MySQL. First we learned simple programming
                            foundations like var., arrays, loops and other logic
                            to get started. then wee created a couple CRUD
                            applications on our local networks.
                        </p>
                        <p className="font-bold text-xl text-secondary-light">
                            My time at Bodin vgs. set the groundwork for my
                            career and gave me a strong foundation as a
                            developer. My teacher was a big inspiration to me
                            with his light hearted yet disciplined take on life.
                            It sort of feels like we got a look into how it was
                            to work in every IT field, and it lead me down the
                            road i’m on today feeling confident about my path
                            onwards.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Education;
