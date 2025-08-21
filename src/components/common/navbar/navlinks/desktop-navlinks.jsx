import React, {useState} from "react";
import {motion} from "framer-motion";
import NavLinkGlow from "./navlink-glow.jsx";


const variants = {
    default: {
        transition: {
            duration: 0.5,
        }
    },
    frosted: {
        background: "transparent",
        border: "1px solid transparent",
        transition: {
            duration: 0.5,
        }
    }
}

function DesktopNavLinks({children}) {

    const [position, setPosition] = useState({x: 0, y: 0})
    const [isHovered, setHovered] = useState(false);

    const handleMouseMove = (event) => {
        const navbar = event.currentTarget;
        const navsize = navbar.getBoundingClientRect();

        const x = event.clientX - navsize.left;
        const y = event.clientY - navsize.top;

        const xPercent = x / navsize.width * 100;
        const yPercent = y / navsize.height * 100;

        setPosition({x: xPercent + "%", y: yPercent + "%"});
    }

    return (
        <motion.nav className="navbar__links"
             onMouseMove={handleMouseMove}
             onMouseLeave={() => setHovered(false)}
             onMouseEnter={() => setHovered(true)}
             variants={variants}
        >
            <motion.ul layout>
                {children}
            </motion.ul>

            <NavLinkGlow position={position} isVisible={isHovered}/>
        </motion.nav>
    )
}

export default DesktopNavLinks;