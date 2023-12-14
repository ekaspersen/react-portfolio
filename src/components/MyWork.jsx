import tetradMGif from "../assets/videos/tetrad-marketing.gif";
import bidhouseShop from "../assets/bidhouse-landing.png";
import bidhouseBid from "../assets/bidhouse-newbid.png";
import bidhousePfp from "../assets/bidhouse-pfp.png";
import bidhouseSignup from "../assets/bidhouse-signup.png";
import csm from "../assets/thecsm.png";
import csmcontact from "../assets/thecsmcontact.png";
import csmexhibition from "../assets/thecsmexhibitions.png";
import csminvolved from "../assets/thecsminvolved.png";
import reactlogo from "../assets/icons/react-logo.svg";
import firebaselogo from "../assets/icons/firebase-logo.svg";
import tailwindCSSlogo from "../assets/icons/tailwindCSS-logo.svg";
import motionlogo from "../assets/icons/framer-motion.svg";
import vitelogo from "../assets/icons/vite-logo.svg";
import htmllogo from "../assets/icons/html-logo.svg";
import csslogo from "../assets/icons/css-logo.svg";
import jslogo from "../assets/icons/javascript-logo.svg";
import restapi from "../assets/icons/RestApi.png";
import ScrollToTopButton from "./ScrollToTopButton";
import ctfHero from "../assets/ctfHomePageHero.jpg";
const MyWork = () => {
    return (
        <div className="flex flex-col">
            <div className="w-full bg-secondary-light h-24"></div>
            <div className="flex ">
                <div className="flex flex-col px-8 py-16 gap-8 bg-primary text-secondary-light">
                    <h1 className="text-5xl font-black">My Work</h1>
                    <p className="text-3xl font-medium max-w-long-text">
                        Here's a collection of some of the best websites i've
                        created so far.
                    </p>
                    <p className="max-w-long-text">
                        all projects on this page are full applications planned,
                        designed and buildt by me. Working on a couple real
                        client projects that will be live soon!
                    </p>
                </div>
                <div className="flex-1 min-h-full bg-secondary-light min-w-[32px]"></div>
            </div>
            {/*
            <section className="min-h-screen flex flex-col-reverse py-16 gap-8 lg:flex-row bg-black">
                <div className="flex-1 min-h-full flex flex-col gap-8 justify-center items-center">
                    <div className="flex gap-4 flex-wrap px-8 justify-center">
                        <img src={reactlogo} alt="react logo" title="ReactJs" />
                        <img
                            src={tailwindCSSlogo}
                            alt="tailwindCSS logo"
                            title="tailwindCSS"
                        />
                        <img src={htmllogo} alt="HTML shiled" title="HTML" />
                        <img src={csslogo} alt="CSS shield" title="CSS" />
                        <img src={jslogo} alt="JS shield" title="javaScript" />
                        <img
                            src={firebaselogo}
                            alt="firebase logo"
                            title="Firebase"
                        />
                        <img
                            className="max-h-9 hover-restapi"
                            src={restapi}
                            alt="REST API"
                            title="REST API"
                        />
                        <img
                            src={motionlogo}
                            alt="framer motion logo"
                            title="Framer Motion"
                        />
                        <img src={vitelogo} alt="Vite Js logo" title="ViteJs" />
                    </div>
                    <img
                        className="max-w-full w-11/12 md:w-auto mx-4 border-8 rounded-2xl border-primary-light"
                        src={tetradMGif}
                        alt="Gif of website"
                    />
                    <a
                        className="block my-2 lg:my-0 py-3 px-8 bg-primary whitespace-nowrap text-secondary-light text-xl font-black"
                        target="_blank"
                        href="https://tetrad-marketing-react.vercel.app/"
                    >
                        Checkout website
                    </a>

                    <div className="flex gap-4">
                        <a
                            className="block my-2 lg:my-0 py-3 px-8 border-primary border-4 whitespace-nowrap text-primary text-xl font-black"
                            target="_blank"
                            href="https://github.com/ekaspersen/tetrad-marketing-react"
                        >
                            GitHub
                        </a>
                        <a
                            className="block my-2 lg:my-0 py-3 px-8 border-primary border-4 whitespace-nowrap text-primary text-xl font-black"
                            target="_blank"
                            href="https://www.figma.com/file/uTf5RJkqPVaObfhWZplAVn/Tetrad-display-Figma?type=design&node-id=0%3A1&t=nlEYfYVNvekXC6sv-1"
                        >
                            Figma
                        </a>
                    </div>
                </div>
                <div className="flex-1 min-h-full flex flex-col gap-8 justify-center items-center px-8">
                    <h2 className="text-5xl font-black font-montserrat italic text-secondary-light w-full max-w-long-text">
                        CATCH THE FOX
                    </h2>
                    <p className="max-w-long-text">
                        I am currently working on the homepage for the
                        upincoming band{" "}
                        <span className="font-montserrat italic">
                            " Catch the fox ".
                        </span>
                    </p>
                    <p className="max-w-long-text">
                        This is a NextJS project utilising Supabase as a
                    </p>
                    <p className="max-w-long-text font-normal text-sm text-secondary-light50op">
                        Site is still under constructon as i have fulfilled exam
                        criteria and we have one last assignment (this website).
                        Therefore i am putting my portfolio first, soon this
                        site will be done and live on tetradmarketing.no. but
                        for now we have buildt a temporary website with one.com.
                    </p>
                </div>
            </section>
            */}
            <section className="min-h-screen flex flex-col-reverse py-16 gap-8 lg:flex-row bg-black">
                <div className="flex-1 min-h-full flex flex-col gap-8 justify-center items-center">
                    <div className="flex gap-4 flex-wrap px-8 justify-center">
                        <img src={reactlogo} alt="react logo" title="ReactJs" />
                        <img
                            src={tailwindCSSlogo}
                            alt="tailwindCSS logo"
                            title="tailwindCSS"
                        />
                        <img src={htmllogo} alt="HTML shiled" title="HTML" />
                        <img src={csslogo} alt="CSS shield" title="CSS" />
                        <img src={jslogo} alt="JS shield" title="javaScript" />
                        <img
                            src={firebaselogo}
                            alt="firebase logo"
                            title="Firebase"
                        />
                        <img
                            className="max-h-9 hover-restapi"
                            src={restapi}
                            alt="REST API"
                            title="REST API"
                        />
                        <img
                            src={motionlogo}
                            alt="framer motion logo"
                            title="Framer Motion"
                        />
                        <img src={vitelogo} alt="Vite Js logo" title="ViteJs" />
                    </div>
                    <img
                        className="max-w-full w-11/12 md:w-auto mx-4 border-8 rounded-2xl border-primary-light"
                        src={tetradMGif}
                        alt="Gif of website"
                    />
                    <a
                        className="block my-2 lg:my-0 py-3 px-8 bg-primary whitespace-nowrap text-secondary-light text-xl font-black"
                        target="_blank"
                        href="https://tetrad-marketing-react.vercel.app/"
                    >
                        Checkout website
                    </a>

                    <div className="flex gap-4">
                        <a
                            className="block my-2 lg:my-0 py-3 px-8 border-primary border-4 whitespace-nowrap text-primary text-xl font-black"
                            target="_blank"
                            href="https://github.com/ekaspersen/tetrad-marketing-react"
                        >
                            GitHub
                        </a>
                        <a
                            className="block my-2 lg:my-0 py-3 px-8 border-primary border-4 whitespace-nowrap text-primary text-xl font-black"
                            target="_blank"
                            href="https://www.figma.com/file/uTf5RJkqPVaObfhWZplAVn/Tetrad-display-Figma?type=design&node-id=0%3A1&t=nlEYfYVNvekXC6sv-1"
                        >
                            Figma
                        </a>
                    </div>
                </div>
                <div className="flex-1 min-h-full flex flex-col gap-8 justify-center items-center px-8">
                    <h2 className="text-5xl font-black font-montserrat italic text-secondary-light w-full max-w-long-text">
                        Tetrad Marketing
                    </h2>
                    <p className="max-w-long-text">
                        Tetrad Marketing was my student company. I was lucky to
                        get to use our website as my final exam. It is a
                        ReactJs/Vite project that uses Firebase/Auth for User
                        authentication to the Admin panel, and Firestore to
                        create an API for blogposts and of course display them
                        on the site.
                    </p>
                    <p className="max-w-long-text">
                        I learned a lot from having a student company with four
                        marketing students. The most important thing i got from
                        it is probably the knowledge of how to start a business,
                        communicating with partners and i also learned a lot
                        about marketing like adds, google business and honed in
                        my SEO skills and got a client page to rank 3. in a
                        verry competetive restaurant area in Oslo.
                    </p>
                    <p className="max-w-long-text">
                        It was a fun project to work on, i created the logo,
                        brief, design, code and deployed this website by myself
                    </p>
                    <p className="max-w-long-text">
                        If you want to checkout the page for the restaurant i
                        created i'll leave a link here. This initial design
                        served as a foundation because they needed something
                        asap and we did not want to loose the client. with plans
                        for an advanced redesign that were not finalized due to
                        pending negotiations.
                        <br />
                        <a
                            className="underline text-secondary-light py-1"
                            href="https://panorama-nu.vercel.app/"
                            target="blank"
                        >
                            Link to website
                        </a>
                    </p>
                </div>
            </section>
            <section className="min-h-screen flex flex-col-reverse py-16 gap-8 lg:flex-row-reverse bg-primary">
                <div className="flex-1 min-h-full flex flex-col gap-8 justify-center items-center">
                    <div className="flex gap-4 flex-wrap px-8 justify-center">
                        <img src={jslogo} alt="JS shield" title="javaScript" />
                        <img src={csslogo} alt="CSS shield" title="CSS" />
                        <img src={htmllogo} alt="HTML shiled" title="HTML" />
                        <img
                            src={tailwindCSSlogo}
                            alt="tailwindCSS logo"
                            title="TailwindCSS"
                        />
                        <img src={vitelogo} alt="Vite Js logo" title="ViteJs" />
                        <img
                            className="max-h-9 hover-restapi"
                            src={restapi}
                            alt="REST API"
                            title="REST API"
                        />
                    </div>
                    <div className="gap-4 lg:hidden flex">
                        <a
                            className="block my-2 lg:my-0 py-3 bg-secondary-light px-8 whitespace-nowrap text-primary text-xl font-black"
                            target="_blank"
                            href="https://github.com/ekaspersen/eskil-kh-semester-project-2"
                        >
                            GitHub
                        </a>
                        <a
                            className="block my-2 lg:my-0 py-3 bg-secondary-light px-8 whitespace-nowrap text-primary text-xl font-black"
                            target="_blank"
                            href="https://www.figma.com/file/LS7szsiCEJ8hNp8t0hhw3F/SEMESTER-PROJECT-2?type=design&node-id=0%3A1&t=fSFt6kRvshglbse6-1"
                        >
                            Figma
                        </a>
                    </div>
                    <div className="flex max-w-lg lg:max-w-full max-h-[50vh] lg:max-h-[60vh] overflow-x-scroll gap-4 lg:gap-8">
                        <img
                            className="lg:py-4"
                            src={bidhouseShop}
                            alt="Gif of website"
                        />
                        <img
                            className="lg:py-4"
                            src={bidhousePfp}
                            alt="Gif of website"
                        />
                        <img
                            className="lg:py-4 "
                            src={bidhouseBid}
                            alt="Gif of website"
                        />
                        <img
                            className="lg:py-4 w-fit max-w-xs lg:max-w-full"
                            src={bidhouseSignup}
                            alt="Gif of website"
                        />
                    </div>

                    <div className="gap-4 hidden lg:flex">
                        <a
                            className="block my-2 lg:my-0 py-3 bg-secondary-light px-8 whitespace-nowrap text-primary text-xl font-black"
                            target="_blank"
                            href="https://github.com/ekaspersen/eskil-kh-semester-project-2"
                        >
                            GitHub
                        </a>
                        <a
                            className="block my-2 lg:my-0 py-3 bg-secondary-light px-8 whitespace-nowrap text-primary text-xl font-black"
                            target="_blank"
                            href="https://www.figma.com/file/LS7szsiCEJ8hNp8t0hhw3F/SEMESTER-PROJECT-2?type=design&node-id=0%3A1&t=fSFt6kRvshglbse6-1"
                        >
                            Figma
                        </a>
                    </div>
                </div>
                <div className="flex-1 min-h-full flex flex-col gap-8 justify-center items-center px-8">
                    <h2 className="text-5xl font-black font-montserrat italic text-secondary-light w-full max-w-long-text">
                        BidHouse
                    </h2>
                    <p className="max-w-long-text">
                        BidHouse is my semester project exam for my 3rd semester
                        at Noroff.
                    </p>
                    <p className="max-w-long-text">
                        It is a plain HTML/CSS/JS website using a dummy REST-api
                        that Noroff had made for us. Using their API a user can
                        CRUD themselves- They can also read other users bids and
                        Create, Update and Delete their own bidding rounds.
                    </p>
                    <p className="max-w-long-text">
                        <span className="italic font-montserrat">Brief</span>
                        <br />
                        An auction site is looking to launch a website where
                        users can add items to be bid on and bid on items other
                        users have put up for auction. When a new user joins the
                        website, they are given 1000 credits to use on the site.
                        They can get credits by selling items and use credit by
                        buying items. Non-registered users can search through
                        the listings, but only registered users can make bids on
                        listings. Requi
                    </p>

                    <p className="max-w-long-text font-black text-sm text-secondary-light50op">
                        Site is not currently depolyed <br /> Please checkout
                        Figma(design&planning) and/or github to see my website.
                        Every frame you see in the Figma was up and functional,
                        but due to changes in the Noroff-API it is not running
                        anymore.
                    </p>
                </div>
            </section>
            <section className="min-h-screen flex flex-col-reverse py-16 gap-8 lg:flex-row-reverse bg-black">
                <div className="flex-1 min-h-full flex flex-col gap-8 justify-center items-center">
                    <div className="flex gap-4 flex-wrap px-8 justify-center">
                        <img src={csslogo} alt="CSS shield" title="CSS" />
                        <img src={htmllogo} alt="HTML shiled" title="HTML" />
                    </div>
                    <div className="gap-4 lg:hidden flex flex-col">
                        <a
                            className="block my-2 lg:my-0 py-3 px-8 bg-primary whitespace-nowrap text-secondary-light text-xl font-black"
                            target="_blank"
                            href="https://semester-project-e-hagen.netlify.app/"
                        >
                            Checkout Website
                        </a>
                        <a
                            className="block max-w-fit my-2 lg:my-0 py-3 px-8 mx-auto border-primary border-4 whitespace-nowrap text-primary text-xl font-black"
                            target="_blank"
                            href="https://www.figma.com/file/fEpntM8GW9Xk97GO9IrG7e/The-CSM?type=design&node-id=0%3A1&mode=design&t=lbpD0Xrk5QvBzJAF-1"
                        >
                            Figma
                        </a>
                    </div>
                    <div className="flex max-w-lg lg:max-w-full max-h-[50vh] lg:max-h-[60vh] overflow-x-scroll gap-4 lg:gap-8">
                        <img
                            className="lg:py-4"
                            src={csm}
                            alt="Gif of website"
                        />
                        <img
                            className="lg:py-4"
                            src={csmcontact}
                            alt="Gif of website"
                        />
                        <img
                            className="lg:py-4 "
                            src={csmexhibition}
                            alt="Gif of website"
                        />
                        <img
                            className="lg:py-4 w-fit max-w-xs lg:max-w-full"
                            src={csminvolved}
                            alt="Gif of website"
                        />
                    </div>
                    <div className="gap-4 hidden lg:flex flex-col items-center">
                        <a
                            className="block my-2 lg:my-0 py-3 px-8 bg-primary whitespace-nowrap text-secondary-light text-xl font-black"
                            target="_blank"
                            href="https://semester-project-e-hagen.netlify.app/"
                        >
                            Checkout Website
                        </a>
                        <a
                            className="block max-w-fit my-2 lg:my-0 py-3 px-8 border-primary border-4 whitespace-nowrap text-primary text-xl font-black"
                            target="_blank"
                            href="https://www.figma.com/file/fEpntM8GW9Xk97GO9IrG7e/The-CSM?type=design&node-id=0%3A1&mode=design&t=lbpD0Xrk5QvBzJAF-1"
                        >
                            Figma
                        </a>
                    </div>
                </div>
                <div className="flex-1 min-h-full flex flex-col gap-8 justify-center items-center px-8">
                    <h2 className="text-5xl font-black font-montserrat italic text-secondary-light w-full max-w-long-text">
                        The CSM
                    </h2>
                    <p className="max-w-long-text">
                        The community science museum website is the semester
                        exam for my 1st semester at Noroff.
                    </p>
                    <p className="max-w-long-text">
                        I created it using ONLY vanilla HTML and CSS. This
                        semester we had learned the basics+ about vanilla HTML
                        and CSS, UX-principles and how to design a website using
                        figma.
                    </p>
                    <p className="max-w-long-text">
                        <span className="italic font-montserrat">Brief</span>
                        <br />
                        An interactive science museum called the Community
                        Science Museum is opening in your town/city. Its core
                        target audience is primary and middle school children
                        (7-15) and families with young children. The museum
                        wants a website that is informative and appealing, that
                        will attract both middle school pupils and their
                        parents. The site should appeal to youngsters without
                        pandering; it should take for granted that the audience
                        is inquisitive and intelligent. The website should be
                        informative and engaging, but should encourage viewers
                        to visit the museum itself. The website should be
                        responsive and be easy to use on a variety of devices.
                    </p>

                    <p className="max-w-long-text font-black text-sm text-secondary-light50op">
                        Somehow i have deleted this repository, but all the code
                        is live on the netlify link! if you want to check it out
                        just inspect :)
                    </p>
                </div>
            </section>
            <ScrollToTopButton />
        </div>
    );
};

export default MyWork;
