import everyday from "../assets/everydayytyt.svg";
import ScrollToTopButton from "./ScrollToTopButton";
const Education = () => {
    return (
        <div className="lg:h-screen">
            <section className="w-full flex justify-end xl:justify-start h-full">
                <div className="absolute hidden z-[-10] xl:relative max-w-{32px} lg:max-w-full flex-1 h-full lg:grid place-items-center flex-col">
                    <img
                        src={everyday}
                        alt="graphic"
                        className="absolute w-full h-full  object-cover"
                    />
                    <div className="flex flex-col font-bold xl:text-xl xxl:gap-2 xxl:text-3xl">
                        <p className="text-primary">
                            Crafting code with skill, precision, and care,
                        </p>
                        <p className="text-primary-light opacity-50">
                            User needs at heart, a vision rare.
                        </p>
                        <p className="text-primary">
                            Each new line, a step towards mastery's quest,
                        </p>
                        <p className="text-primary-light opacity-50">
                            In design and code, I'm at my best.
                        </p>
                        <p className="text-primary">
                            In every script, my passion shows,
                        </p>
                        <p className="text-primary-light opacity-50">
                            Frontend dev. where my skill grows.
                        </p>
                        <p className="text-[10px] font-montserrat italic text-primary">
                            - Eskil K. Hagen ft. GPT-4
                        </p>
                    </div>
                </div>
                <div className="lg:w-[50vw] h-full flex flex-col gap-8 lg:gap-10 pb-16 lg:pb-32 pt-48 justify-center items-center bg-secondary-light">
                    <div className="flex flex-col text-4xl xl:text-[64px] xl:gap-2 font-montserrat font-bold italic ">
                        <h1>Navigate Studies</h1>
                        <span className="text-primary-light">
                            Navigate Studies
                        </span>
                        <span className="text-primary">Navigate Studies</span>
                        <span className="text-secondary">Navigate Studies</span>
                    </div>
                    <div className="flex flex-col gap-8 px-4 sm:px-8">
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
                                    <h3 className="lg:text-3xl text-2xl text-primary-light sm:border-b-2 sm:border-secondary sm:pb-[2px]">
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
                                    <h3 className="lg:text-3xl text-2xl text-primary-light sm:border-b-2 sm:border-secondary sm:pb-[2px]">
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
                            <div className="text-xs font-montserrat font-semibold italic z-50">
                                2019 - 2020
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            <section
                id="noroff"
                className="w-full flex flex-col-reverse lg:flex-row h-fit bg-primary text-secondary-light scroll-m-16"
            >
                <div className="flex-1 flex flex-col gap-8 px-4 sm:px-16 pb-16 lg:py-32 box-border">
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
                    <div className="flex-1 flex flex-col px-4 sm:pl-16 py-16 lg:py-32 bg-secondary-light text-primary">
                        <h1 className="font-black text-3xl">
                            Noroff, Oslo Campus
                        </h1>
                        <h2 className="font-black text-4xl sm:text-6xl lg:text-4xl xl:text-6xl text-primary-light">
                            Frontend Development
                        </h2>
                        <span className="font-bold text-3xl">2021 - 2023</span>
                    </div>
                    <div className="flex flex-col huge:flex-row gap-8 px-4 sm:px-16  py-16 text-secondary-light">
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
                <div
                    id="bodovgs"
                    className="flex-1 flex flex-col gap-16 px-4 lg:px-8 py-12 xl:px-16 xl:py-24 scroll-m-16"
                >
                    <div className="flex flex-col ">
                        <span className="text-3xl text-secondary-light font-bold">
                            Bodø Videregående Skole
                        </span>
                        <span className="text-primary-light text-4xl sm:text-5xl font-black">
                            IT1 - Programfag
                        </span>
                        <span className="text-xl text-white font-bold">
                            2020 - 2021
                        </span>
                    </div>
                    <div className="md:max-w-long-text lg:max-w-none scroll-m-72 lg:scroll-m-12 flex flex-col h-full gap-8">
                        <p className=" font-extrabold text-primary-light opacity-70">
                            In my final year of high school, I focused on
                            advanced studies with an emphasis on IT as an
                            elective. This experience allowed me to further
                            refine my technical skills, particularly in web
                            development.
                        </p>
                        <p>
                            During the initial phase of the year, I revisited
                            and strengthened my knowledge of HTML and CSS over a
                            three-week period. This refresher was particularly
                            beneficial after the summer break, allowing me to
                            solidify my understanding of web design
                            fundamentals.
                        </p>
                        <p>
                            The highlight of the year was a major project after
                            Christmas, where I developed an Admin Panel and User
                            Interface for a library system. This project
                            involved integrating basic HTML/CSS/JS websites with
                            PHP/MySQL to enable inventory viewing and user data
                            updates. Although the project was lost due to being
                            stored on a school computer, the experience provided
                            me with hands-on practice in real-world
                            applications.
                        </p>
                        <p className="font-bold text-primary-light">
                            Reflecting on this pivotal year, I value the
                            experiences and skills gained, which have solidified
                            my foundation in IT and web development. These
                            skills and insights continue to be instrumental as I
                            progress in my career.
                        </p>

                        <div class="flex flex-col  gap-4 lg:gap-0">
                            <span className="text-3xl text-primary-light font-montserrat italic font-bold mb-2">
                                Summarised:
                            </span>
                            <details>
                                <summary className="font-bold cursor-pointer text-secondary-light">
                                    HTML and CSS Refresh
                                </summary>
                                <p>
                                    Reinforced understanding of HTML and CSS,
                                    focusing on refreshing knowledge and
                                    improving proficiency in web design
                                    fundamentals.
                                </p>
                            </details>

                            <details>
                                <summary className="font-bold cursor-pointer text-secondary-light">
                                    PHP/MySQL Advanced
                                </summary>
                                <p>
                                    In-depth exploration of PHP and MySQL,
                                    focusing on database creation and management
                                    using CRUD operations, and developing
                                    dynamic web applications.
                                </p>
                            </details>

                            <details>
                                <summary className="font-bold cursor-pointer text-secondary-light">
                                    Web Application Development
                                </summary>
                                <p>
                                    Hands-on project experience in creating a
                                    comprehensive Admin Panel and User Interface
                                    for a library system, integrating both
                                    frontend and backend technologies.
                                </p>
                            </details>

                            <details>
                                <summary className="font-bold cursor-pointer text-secondary-light">
                                    Self-Guided Learning
                                </summary>
                                <p>
                                    Emphasis on independent learning and skill
                                    enhancement, utilizing class time for
                                    exploring new technologies and reinforcing
                                    unclear or forgotten concepts from previous
                                    studies.
                                </p>
                            </details>
                        </div>
                    </div>
                </div>
                <div
                    id="bodinvgs"
                    className="flex-1 h-full flex flex-col bg-primary gap-16 px-4 py-12 lg:px-8 xl:px-16 xl:py-24  scroll-m-16"
                >
                    <div className="flex flex-col ">
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
                    <div className="md:max-w-long-text lg:max-w-none flex scroll-m-80 lg:scroll-m-[-20000px] bg-primary font-medium flex-col gap-8">
                        <p className="font-bold text-secondary-light50op">
                            The beginning of my journey in the IT and
                            development field was greatly influenced by a former
                            military officer who transitioned into
                            ICT-maintenance for various military operations in
                            Bodø since the late 90s. This unique exposure to the
                            early culture of technology enthusiasts and
                            data-driven approaches significantly enriched my
                            learning experience.
                        </p>
                        <p>
                            My educational pathway included a deep dive into the
                            fundamentals of web technology, covering the
                            architecture of the World Wide Web, the
                            functionality of local and wide area networks (LANs
                            and WANs), and the complexities of server routing.
                            We also studied data communication protocols,
                            understanding how data travels from basic binary
                            units to complex server interactions. This year
                            marked my first experience with HTML and CSS,
                            presenting a challenging yet engaging learning
                            curve. My interest in CSS grew as I became
                            proficient in manipulating the box model.
                            Additionally, I began exploring JavaScript, creating
                            basic projects like a simple cookie-clicker game and
                            a Celsius/Fahrenheit/Kelvin converter to familiarize
                            myself with programming concepts.
                        </p>
                        <p>
                            The journey also involved back-end development,
                            focusing on PHP/MySQL. We started with fundamental
                            programming concepts such as variables, arrays, and
                            loops. Practical applications included developing
                            websites using databases we created and managed on
                            our own LAN, which we connected using Ethernet
                            cables. My time at Bodin vgs. was crucial in shaping
                            my career in development. The teaching approach,
                            blending humor with discipline, offered constant
                            inspiration and provided a comprehensive insight
                            into the IT sector. This experience has
                            significantly contributed to my current career
                            trajectory, giving me a clear and confident
                            understanding of my future in the IT field.
                        </p>
                        <div class="flex flex-col gap-4 lg:gap-0">
                            <span className="text-3xl text-secondary-light font-montserrat italic font-bold mb-2">
                                Summarised:
                            </span>
                            <details>
                                <summary className="font-bold cursor-pointer text-secondary-light">
                                    Web Fundamentals
                                </summary>
                                <p>
                                    Detailed understanding of HTML structure,
                                    DOM manipulation, and basic SEO principles.
                                </p>
                            </details>

                            <details>
                                <summary className="font-bold cursor-pointer text-secondary-light">
                                    Network Technologies
                                </summary>
                                <p>
                                    Knowledge of networking concepts, including
                                    IP addressing, subnetting, and configuring
                                    LAN/WAN environments.
                                </p>
                            </details>

                            <details>
                                <summary className="font-bold cursor-pointer text-secondary-light">
                                    Server Routing
                                </summary>
                                <p>
                                    Understanding of server-client
                                    communication, DNS configuration, and load
                                    balancing.
                                </p>
                            </details>

                            <details>
                                <summary className="font-bold cursor-pointer text-secondary-light">
                                    Data Communication Protocols
                                </summary>
                                <p>
                                    Familiarity with TCP/IP, HTTP/HTTPS, and
                                    WebSocket protocols for data transfer and
                                    real-time communication.
                                </p>
                            </details>

                            <details>
                                <summary className="font-bold cursor-pointer text-secondary-light">
                                    HTML
                                </summary>
                                <p>
                                    Proficiency in creating semantic HTML5
                                    structures and integrating multimedia
                                    content.
                                </p>
                            </details>

                            <details>
                                <summary className="font-bold cursor-pointer text-secondary-light">
                                    CSS
                                </summary>
                                <p>
                                    Learned to write CSS fluently by
                                    understanding the box-model quickly and
                                    learned both flexbox and grid on my own time
                                    (grid was developed this year), but our
                                    teacher also gave us a good understanding of
                                    coding layouts "the old way" with table and
                                    float layouts.
                                </p>
                            </details>

                            <details>
                                <summary className="font-bold cursor-pointer text-secondary-light">
                                    JavaScript Basics
                                </summary>
                                <p>
                                    Created small apps like a fahrenheit to
                                    celsius to kelvin converter and a cookie
                                    clicker type game to get to use our
                                    programming foundational skills from PHP in
                                    a frontend environment.
                                </p>
                            </details>

                            <details>
                                <summary className="font-bold cursor-pointer text-secondary-light">
                                    PHP/MySQL
                                </summary>
                                <p>
                                    Skills in developing dynamic web
                                    applications using PHP, including CRUD
                                    operations with MySQL databases, session
                                    management, and form validation.
                                </p>
                            </details>

                            <details>
                                <summary className="font-bold cursor-pointer text-secondary-light">
                                    Programming Foundations
                                </summary>
                                <p>
                                    Strong understanding of fundamental
                                    programming concepts, including
                                    object-oriented programming, data
                                    structures, and algorithmic problem-solving.
                                </p>
                            </details>

                            <details>
                                <summary className="font-bold cursor-pointer text-secondary-light">
                                    Network Setup and Management
                                </summary>
                                <p>
                                    Hands-on experience in setting up and
                                    managing network infrastructures, including
                                    router and switch configuration, and
                                    understanding network security basics.
                                </p>
                            </details>
                            <details>
                                <summary className="font-bold cursor-pointer text-secondary-light">
                                    Problem-Solving and Logical Thinking
                                </summary>
                                <p>
                                    Developed strong problem-solving skills
                                    through debugging and optimizing code, and
                                    implementing efficient algorithms.
                                </p>
                            </details>
                            <details>
                                <summary className="font-bold cursor-pointer text-secondary-light">
                                    Adaptability and Learning Agility
                                </summary>
                                <p>
                                    Ability to quickly adapt to new technologies
                                    and methodologies in the rapidly evolving IT
                                    landscape.
                                </p>
                            </details>
                        </div>
                    </div>
                </div>
            </section>
            <ScrollToTopButton />
        </div>
    );
};

export default Education;
