import {motion} from 'framer-motion';
import React from "react";

const parentVariants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.05
        }
    },
}

const childVariants = {
    initial: {opacity: 0, y: 10},
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.1,
            type: "easeOut"
        }
    },
}


function spanChars(children) {

    return React.Children.map(children, (child) => {
        if (typeof child === 'string') {
            return [...child].map((char, idx) => (
                    <motion.span
                        variants={childVariants}
                        style={{display: "inline-block"}}
                        key={idx}
                    >
                        {char === " " ? '\u00A0' : char}
                    </motion.span>
                )
            )
        }

        else {
            return spanChars(child.props.children)
        }
    })
}

function HeroText({children}) {

    return (
        <motion.h1
            className="hero__text"
            variants={parentVariants}
        >
            {spanChars(children)}
        </motion.h1>
    )
}

export default HeroText;