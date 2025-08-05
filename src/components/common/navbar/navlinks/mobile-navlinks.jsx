import {AnimatePresence, easeOut, motion} from "framer-motion";
import React from "react";

function MobileNavLinks({isVisible, children}) {

    const mobileNavLinkVariants = {
        hidden: {opacity: 0, y: "100%"},
        show: {
            y: "0%",
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
                animation: easeOut
            }
        },
        exit: {
            y: "100%",
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    return (
        <AnimatePresence>
            {isVisible &&
                <motion.nav
                    className="navbar__links"
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={mobileNavLinkVariants}
                >
                    <motion.ul>
                        {children}
                    </motion.ul>
                </motion.nav>
            }
        </AnimatePresence>
    )
}

export default MobileNavLinks;