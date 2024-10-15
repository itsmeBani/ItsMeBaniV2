
import "../styles/Footer.css"
import reactsvg from "../assets/react.svg"
import Links from "./links.jsx";

function Footer(props) {

    return (

        <div className="footer">
            <div className="linkscon">
                <Links/>
            </div>
            <div className="author"><h1>Created with <img alt={""} src={reactsvg}/> by Jiovani Fabro</h1></div>
        </div>
    );
}

export default Footer;