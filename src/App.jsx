import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Contact from "./components/Contact";
import Education from "./components/Education";
import MyWork from "./components/MyWork";
import Nav from "./components/Navigation";
import AboutMe from "./components/AboutMe";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/education" element={<Education />} />
                <Route path="/services" element={<Services />} />
                <Route path="/mywork" element={<MyWork />} />
            </Routes>
        </Router>
    );
};

export default App;
