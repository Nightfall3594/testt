import {AnimatePresence, motion} from "framer-motion";

function NavbarBackdrop({isVisible}){

    const variants = {
        default: {
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        frosted: {
            opacity: 1,
            transition: {
                duration: 0.5,
            }
        }
    }

    return (
        <AnimatePresence>
            {isVisible &&
                <motion.div
                    className="navbar__backdrop"
                    variants={variants}
                    initial="default"
                    animate="frosted"
                    exit="default"
                />}
        </AnimatePresence>
    )
}

export default NavbarBackdrop;