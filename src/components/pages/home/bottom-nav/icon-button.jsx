import {motion} from "framer-motion";

const buttonVariants = {
    initial: {
        opacity: 0,
        y: 10
    },
    animate: {
        opacity: 1,
        y: 0
    }
}

function IconButton ({className="", Icon, text, onClick}) {
    return (
        <motion.button
            className={"bottom-nav__button " + className}
            onClick={onClick || (() => {})}
            variants={buttonVariants}
            whileHover={{scale: 1.08}}
        >
            {Icon && <Icon/>}
            <span>{text}</span>
        </motion.button>
    )
}

export default IconButton