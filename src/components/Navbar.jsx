// noinspection HtmlUnknownAnchorTarget

import "../styles/navbar.css"
import {useState, useEffect} from 'react';
import {motion} from "framer-motion";
import useLocalStorage from "use-local-storage";
import Moon from "../assets/night.png"
import Sun from "../assets/night-mode.png"
function Navbar() {
    const [isScrolled, setIsScrolled] = useState(true);
    const  [MouseStatus, setMouseStatus] = useState(0);
    const [isDark, setIsDark] = useLocalStorage('theme' ? 'dark' : 'light');

    const Navigation = [{
        id: 1,
        name: "Home",
        link: "",
    },
        {
            id: 2,
            name: "Projects",
            link: "#section2",
        },
        {
            id: 3,
            name: "About",
            link: "#AboutMe",
        },
        {
            id: 4,
            name: "Contacts",
            link: "#contacts",
        },


    ]
    useEffect(() => {
        const handleMouseMove = (event) => {
            const mouseStatus = event.clientY
           setMouseStatus(mouseStatus)
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                if (MouseStatus < 60 ) {
                    setIsScrolled(true);
                }

            },1000)



        };


        let timeoutId;
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(true);
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                if (scrollTop < 600 ) {
                    setIsScrolled(true);
                }


                else {
                    setIsScrolled(false);
                }
            }, 2000);
        };


        document.addEventListener('mousemove', handleMouseMove);

        window.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, [isScrolled]);


    const handledarkmode = () => {

        const newtheme = isDark=== 'light' ? 'dark':'light'
        setIsDark(newtheme)
    }
    return (
        <>
            {isScrolled &&
                <div className="parentnav">
                    <nav>

                        <motion.a
                            initial={{opacity: 0, translateY: -30}}

                            whileInView={{opacity: 1, translateY: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: 0.2, type: "spring", stiffness: 100}}
                        >@JiovaniFabro
                        </motion.a>

                        <div>
                            <ul>
                                {

                                    Navigation.map((item, i) =>




                                            <motion.a href={item.link} key={item.id}
                                                      initial={{opacity: 0, translateY: -10}}

                                                      whileInView={{opacity: 1, translateY: 0}}
                                                      viewport={{once: true}}
                                                      transition={{
                                                          duration: 0.5,
                                                          delay: i * 0.2,
                                                          type: "spring",
                                                          stiffness: 100
                                                      }}>{item.name}</motion.a>

                                    )
                                }
                                <motion.button className="btndarkmode" onClick={handledarkmode}

                                               initial={{opacity: 0, translateY: -10}}

                                               whileInView={{opacity: 1, translateY: 0}}
                                               viewport={{once: true}}
                                               transition={{
                                                   duration: 0.5,
                                                   delay: 1,}}


                                               >
                                    {isDark === 'light'?  <svg stroke="currentColor" fill="#00331a" strokeWidth="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path fillRule="nonzero" d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"></path></g></svg>
                                     :<svg stroke="currentColor" fill="#f1f1f1"   strokeWidth="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path fillRule="nonzero" d="M10 6a8 8 0 0 0 11.955 6.956C21.474 18.03 17.2 22 12 22 6.477 22 2 17.523 2 12c0-5.2 3.97-9.474 9.044-9.955A7.963 7.963 0 0 0 10 6zm-6 6a8 8 0 0 0 8 8 8.006 8.006 0 0 0 6.957-4.045c-.316.03-.636.045-.957.045-5.523 0-10-4.477-10-10 0-.321.015-.64.045-.957A8.006 8.006 0 0 0 4 12zm14.164-9.709L19 2.5v1l-.836.209a2 2 0 0 0-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 0 0-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0 0 15.29.836L15.5 0h1l.209.836a2 2 0 0 0 1.455 1.455zm5 5L24 7.5v1l-.836.209a2 2 0 0 0-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 0 0-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 0 0 1.455-1.455L20.5 5h1l.209.836a2 2 0 0 0 1.455 1.455z"></path></g></svg>
                                    }
                                </motion.button>
                            </ul>


                        </div>

                    </nav>

                </div>


            }
        </>


    );
}

export default Navbar;