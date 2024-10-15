

import Me from "../assets/me.webp";
import "../styles/Introduction.css";
import "../styles/Colors.css";
import {motion} from "framer-motion";
import Links from "./links.jsx";
import "../styles/Colors.css"
function Intoduction() {



    return (
        <div>
            <div className={`parentcontainer`} >
                <section>
                    <div className="container">
                          <motion.div className="imagecon"
                                    initial={{translateX: -90, opacity: 0}}
                                    animate={{translateX: 0, opacity: 1}}
                                    transition={{duration: 0.5, delay: 0.7, type: "spring", stiffness: 100}}><img src={Me} alt={""}/>
                           </motion.div>
                            <div className="introduction">
                            <motion.h4 initial={{translateX: 90, opacity: 0}}
                                       animate={{translateX: 0, opacity: 1}}
                                       transition={{duration: 0.1, delay: 0.9, type: "spring", stiffness: 100}}>Hello,
                                      they call me Bani
                            </motion.h4>
                            <motion.h1 className="introh"
                                       initial={{translateX: 90, opacity: 0}}
                                       animate={{translateX: 0, opacity: 1}}
                                       transition={{duration: 0.1, delay: 1.2, type: "spring", stiffness: 100}}> As a <span>Hobby</span>, I <span>design</span> and <span>develop</span> things for the web with Francis.
                            </motion.h1>


                            <div className="btns">
                                <motion.a href="#section2" className="projbtn"
                                          initial={{opacity: 0, translateY: -30}}

                                          whileInView={{opacity: 1, translateY: 0}}
                                          viewport={{once: true}}
                                          transition={{duration: 0.5, delay:  1.5, type: "spring", stiffness: 100}}>projects
                                </motion.a>

                                <div>
                                  <Links/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Intoduction;
