import {motion} from 'framer-motion';

const variants={
    initial: {opacity: 0, y: 20},
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2
        }
    },
}

function HeroLink({className, Icon, to}) {

    if (!Icon) throw new Error("An Icon is required");

    return (
        <motion.a
            href={to}
            variants={variants}
            style={{display: "inline-block"}}
        >
            <Icon className={`hero__icon ${className}`}/>
        </motion.a>
    )
}

export default HeroLink