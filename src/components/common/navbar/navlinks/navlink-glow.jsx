import {AnimatePresence, motion} from "framer-motion";


const variants = {
    visible: {opacity: 1},
    hidden: {opacity: 0},
    transition: {
        duration: 0.3
    }
}

function NavLinkGlow({isVisible, position}){

    return (
        isVisible &&
            <AnimatePresence>
                <motion.div
                    className="navlink-glow"
                    style={{left: position.x, top: position.y}}
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                />
            </AnimatePresence>
    )
}

export default NavLinkGlow;