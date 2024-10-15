import {socialLinks} from "./linksarray.js";
import {motion} from  "framer-motion"

export default function Links() {
    return (
        <>
            {socialLinks.map((link, index) => (
                 <motion.a key={index} href={link.href}
                      initial={{opacity: 0, translateY: -20}}
                      transition={{duration: 0.3, delay: index * 0.2 + 2}}
                      whileInView={{opacity: 1, translateY: 0}}
                      viewport={{once: true}}


                 >
                     <img alt={link.alt} src={link.src}/>
                </motion.a>
        ))}</>

    )
}