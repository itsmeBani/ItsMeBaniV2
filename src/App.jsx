import Navbar from "./components/Navbar.jsx";
import Intoduction from "./components/Intoduction.jsx";
import FeaturedProjects from "./components/FeaturedProjects.jsx";
import Projects from "./components/Projects.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Contacts from "./components/Contacts.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/Colors.css"
import useLocalStorage from "use-local-storage";
function App() {
    const [isDark] = useLocalStorage('theme' ? 'dark' : 'light');
    return (
        <>
            <section className="parentcontainer" data-theme={isDark}>
                <Navbar/>
                <Intoduction />
                <FeaturedProjects/>
                <Projects/>
                <AboutMe/>
                <Contacts/>
                <Footer/>
            </section>


        </>
    )
}

export default App
