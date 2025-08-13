
import {motion} from 'framer-motion';

const variants = {
    initial: {opacity: 0, y: 25},
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        }
    }
}

export default function MutedHeroText({children}) {
    return (
        <motion.p
            className="hero__text--muted"
            variants={variants}
        >
            {children}
        </motion.p>
    )
}