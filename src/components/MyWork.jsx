import tetradMGif from "../assets/videos/tetrad-marketing.gif";
import reactlogo from "../assets/icons/react-logo.svg";
import firebaselogo from "../assets/icons/firebase-logo.svg";
import tailwindCSSlogo from "../assets/icons/tailwindCSS-logo.svg";
import motionlogo from "../assets/icons/framer-motion.svg";
import vitelogo from "../assets/icons/vite-logo.svg";
import htmllogo from "../assets/icons/html-logo.svg";
import csslogo from "../assets/icons/css-logo.svg";
import jslogo from "../assets/icons/javascript-logo.svg";
const MyWork = () => {
    return (
        <div className="flex flex-col">
            <div className="w-full bg-secondary-light h-24"></div>
            <div className="flex ">
                <div className="flex-1 min-h-full bg-secondary-light"></div>
                <div className="flex flex-col px-8 py-16 gap-8 bg-primary text-secondary-light">
                    <h1 className="text-5xl font-black">My Work</h1>
                    <p className="text-3xl font-medium max-w-long-text">
                        Here is a collection of my favourite projects and tasks
                        done so far
                    </p>
                    <p className="max-w-long-text">
                        I will be updating this page over the next couple of
                        weeks to create and sort the content for it, stay
                        updated!
                    </p>
                </div>
            </div>
            <section className="min-h-screen flex flex-col-reverse py-16 gap-8 lg:flex-row bg-black">
                <div className="flex-1 min-h-full flex flex-col gap-8 justify-center items-center">
                    <div className="flex gap-4 flex-wrap px-8 justify-center">
                        <img src={reactlogo} alt="react logo" />
                        <img src={tailwindCSSlogo} alt="tailwindCSS logo" />
                        <img src={htmllogo} alt="HTML shiled" />
                        <img src={csslogo} alt="CSS shield" />
                        <img src={jslogo} alt="JS shield" />
                        <img src={firebaselogo} alt="firebase logo" />
                        <img src={motionlogo} alt="framer motion logo" />
                        <img src={vitelogo} alt="Vite Js logo" />
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
                            href="https://tetrad-marketing-react.vercel.app/"
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
                        Tetrad Marketing is my student company. I was lucky to
                        get to use our website as my final exam. It is a
                        ReactJs/Vite project that uses Firebase/Auth for User
                        authentication to the Admin panel, and Firestore to
                        create an API for blogposts and of course display them
                        on the site..
                    </p>
                    <p className="max-w-long-text">
                        It was a fun project to work on, i created the logo,
                        brief, design, code and deployed this website by myself
                    </p>
                    <p className="max-w-long-text font-normal text-sm text-secondary-light50op">
                        Site is still under constructon as i have fulfilled exam
                        criteria and Tetrad is not planned to start up before
                        after a summer break. Therefore i am finally putting my
                        portfolio first, soon this site will be live on
                        tetradmarketing.no
                    </p>
                </div>
            </section>
            <div className="py-32 grid place-items-center bg-secondary-light text-primary">
                <span className="md:text-xl text-xl font-montserrat italic font-extrabold">
                    More Content on its way !!!
                </span>
                <span className="md:text-3xl text-xl font-montserrat italic font-extrabold mb-4 text-primary-light">
                    !!! Posting threw the summer
                </span>
                <span className="md:text-xl text-xl font-montserrat italic font-extrabold">
                    More Content on its way !!!
                </span>
                <span className="md:text-3xl text-xl font-montserrat italic font-extrabold mb-4 text-primary-light">
                    !!! Posting threw the summer
                </span>
                <span className="md:text-xl text-xl font-montserrat italic font-extrabold">
                    More Content on its way !!!
                </span>
            </div>
        </div>
    );
};

export default MyWork;
