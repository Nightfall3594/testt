import './hero.css'

import {Mail, Discord, Github, SubtleScroll} from "../../../common/icons/index.js";
import HeroLink from "./hero-link.jsx";
import HeroText from "./hero-text.jsx";
import MutedHeroText from "./muted-hero-text.jsx";

import {motion} from "framer-motion";

const heroTextContainerVariants = {
    initial: {opacity: 0},
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.75
        }
    }
}

function Hero() {
    return (
        <section className="hero">
            <div className="hero__container">
                <motion.div
                    className="hero__text-container"
                    variants={heroTextContainerVariants}
                    initial="initial"
                    animate="animate"
                >
                    <HeroText>Hi! I'm Nightfall 👋</HeroText>
                    <HeroText>I'm a <span>&lt;Python Developer/&gt;</span></HeroText>
                    <MutedHeroText>I like to code because I like building stuff</MutedHeroText>

                    <motion.div className="hero__links">
                        <HeroLink Icon={Github} className="github-icon" to="#"/>
                        <HeroLink Icon={Mail} className="mail-icon" to="#"/>
                        <HeroLink Icon={Discord} className="discord-icon" to="#"/>
                    </motion.div>

                </motion.div>

                <img src="/images/pfp.jpg" className="hero__image " alt="hero image"/>

            </div>

            <div className="subtle-scroll">
                <p>Come have a look!</p>
                <SubtleScroll className='subtle-scroll__icon'/>
            </div>
        </section>
    )
}

export default Hero