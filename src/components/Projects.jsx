import "../styles/Projects.css"
import github from "../assets/github.png";
import {motion } from "framer-motion";
const PROJECTS = [{
    id: 1,
    title: "WeTalk",
    type: "Messaging app",
    description: " A simple chat app, Connect with friends and family instantly, share messages, and stay in touch effortlessly",
    stacks: ["firebase", "react", "sass", "css"]

    },
    {
        id: 2,
        title: "DriveExchange",
        type: "Buy and Sell app",
        description: " Welcome to DriveExchange, your go-to platform for effortlessly buying and selling vehicles, offering a seamless experience for both buyers and sellers alike.",
        stacks: ["kotlin", "firebae"]

    },

    {
        id: 3,
        title: "Ispsc Library",
        type: "Simple Library ",
        description: "Introducing a streamlined library solution designed to efficiently manage a vast collection of ebooks and e-journals, this a personal project only",
        stacks: ["Jquery", "html", "css", "php", "sql"]

    },

    {
        id: 4,
        title: "Spotify Clone",
        type: "Spotify Api",
        description: " A simplified music discovery platform exclusively fetching artists and songs, ensuring seamless exploration without the clutter , This a simple personal project for practicing Api",
        stacks: ["firebase", "react", "Tailwind"]

    },
]


function Projects() {
    return (
        <div className="projectcontainer">

            <header id="section2"> Projects
            </header>
            <header><span>-School Projects</span></header>
            <div className="projectcon1">


                {
                    PROJECTS.map((item,i) => {

                        const {title, description, type, stacks, id} = item

                        return (

                            <motion.div className="childprojectcontainer" key={id}
                                        initial={{opacity:0,translateX:-50}}
                                        transition={{duration:0.5,delay:i *0.3}}

                                        viewport={{once: true}}
                                        whileInView={{opacity:1,translateX:0}}

                            >

                                <div>


                                    <div className="links_icon"><a href="https://github.com/Bani69"><img alt=""
                                                                                                         src={github}/></a>
                                    </div>
                                    <div>
                                        <header className="title_project">{title}

                                        </header>
                                        <h4>{type}</h4>

                                        <p>
                                            {description}
                                        </p>
                                    </div>

                                    <div className="grid-stack">

                                        {
                                            stacks.map((id) =>

                                                <div key={id}>{id}</div>
                                            )
                                        }

                                    </div>


                                </div>

                            </motion.div>
                        )

                    })
                }

            </div>


        </div>
    );
}

export default Projects;