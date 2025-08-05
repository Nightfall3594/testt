import React, {useState} from "react";
import {motion} from "framer-motion";
import NavLinkGlow from "./navlink-glow.jsx";


function DesktopNavLinks({children}) {

    const [position, setPosition] = useState({x: 0, y: 0})

    const handleMouseMove = (event) => {
        const navbar = event.currentTarget;
        const navsize = navbar.getBoundingClientRect();

        const x = event.clientX - navsize.left;
        const y = event.clientY - navsize.top;

        const xPercent = x / navsize.width * 100;
        const yPercent = y / navsize.height * 100;

        setPosition({x: xPercent + "%", y: yPercent + "%"});
    }

    const [isHovered, setHovered] = useState(false);

    const handleMouseOut = () => {
        setHovered(false);
    };

    const handleMouseEnter = () => {
        setHovered(true);
    };

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

    return (
        <motion.nav className="navbar__links"
             onMouseMove={handleMouseMove}
             onMouseLeave={handleMouseOut}
             onMouseEnter={handleMouseEnter}
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