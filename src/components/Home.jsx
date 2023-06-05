import EpicSlider from "./EpicSlider";

const Home = () => {
    return (
        <div className="home">
            <section className="h-screen bg-primary flex flex-col justify-between">
                <div className="h-[84px]"></div>
                <h1 className="flex flex-col text-6xl mx-8">
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
        </div>
    );
};

export default Home;
