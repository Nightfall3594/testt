import './bottom-nav.css'

import * as Icons from "/src/components/common/icons/index.js";
import {default as BottomNavItem} from "./bottom-nav-item.jsx"
import IconButton from "./icon-button.jsx";
import CommentBox from "./comment-box.jsx"
import {useState} from "react";

import {motion} from "framer-motion";


const bottomNavVariants= {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const h1Variants = {
    hidden: {opacity: 0, y: 30},
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.25
        }
    }
}

const buttonListVariants= {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
}


function BottomNav({className=""}) {

    const [isCommentBoxVisible, setCommentBoxVisible] = useState(false);

    return (
        <section className={"bottom-nav " + className}>

            <motion.h1
                className="bottom-nav__title"
                variants={h1Variants}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
            >
                Why don't you take a look?
            </motion.h1>

            <motion.ul
                className="bottom-nav__list"
                variants={bottomNavVariants}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
            >
                <BottomNavItem
                    to="/journal"
                    Icon={Icons.Journal}
                    text="What I've been writing"
                />

                <BottomNavItem
                    to="/thoughts"
                    Icon={Icons.Thought}
                    text="What I've been up to"
                />

                <BottomNavItem
                    to="/projects"
                    Icon={Icons.Project}
                    text="What I'm working on"
                />

                <BottomNavItem
                    to="/other"
                    Icon={Icons.Other}
                    text="About the site"
                />
            </motion.ul>

            <motion.div
                className="bottom-nav__buttons"
                variants={buttonListVariants}
                initial="initial"
                whileInView="animate"
                viewport={{once: true}}
            >
                <IconButton
                    className="bottom-nav__like"
                    Icon={Icons.HeartFilled}
                    text="Like this page"
                />

                <IconButton
                    className="bottom-nav__comment"
                    Icon={Icons.MessageFilled}
                    onClick={() =>{setCommentBoxVisible(true)}}
                    text="Leave a message"
                />
            </motion.div>

            <CommentBox isVisible={isCommentBoxVisible} onClose={() => setCommentBoxVisible(false)} />
        </section>
    )
}

export default BottomNav;
