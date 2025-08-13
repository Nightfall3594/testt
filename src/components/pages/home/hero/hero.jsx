import './hero.css'

import {Mail, Discord, Github, SubtleScroll} from "../../../common/icons/index.js";
import HeroLink from "./hero-link.jsx";
import HeroText from "./hero-text.jsx";
import MutedHeroText from "./muted-hero-text.jsx";

function Hero() {
    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__text-container">

                    <HeroText>Hi! I'm Nightfall 👋</HeroText>
                    <HeroText>I'm a <span>&lt;Python Developer/&gt;</span></HeroText>
                    <MutedHeroText>I like to code because I like building stuff</MutedHeroText>

                    <div className="hero__links">
                        <HeroLink Icon={Github} className="hero__icon github-icon" to="#"/>
                        <HeroLink Icon={Mail} className="hero__icon mail-icon" to="#"/>
                        <HeroLink Icon={Discord} className="hero__icon discord-icon" to="#"/>
                    </div>

                </div>

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