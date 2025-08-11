import './navbar.css'

import NavItem from './navitems/navitem.jsx'
import NavLinks from "./navlinks/navlinks.jsx";
import * as Icons from '../icons/index.js'
import Overlay from "../overlays/overlay.jsx";
import {NavContext} from "./navContext.js";

import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import NavbarBackdrop from "./navlinks/navbar-backdrop.jsx";
import NavButton from "./navbutton.jsx";

const navbarVariants={
    default: {
        borderBottomWidth: 0,
        borderBottomColor: 'rgba(0, 0, 0, 0)',
        borderBottomStyle: 'solid',
    },

    frosted: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,1)',
        borderBottomStyle: 'solid',
    }
}

function NavBar() {

    const [isMobileNavVisible, setMobileNavVisible] = useState(false);
    const [isMobile, setMobile] = useState(window.innerWidth <= 768);
    const [isFrosted, setFrosted] = useState(false);

    const handleResize = () => {
        setMobile(window.innerWidth <= 768);
        if(!isMobile) setMobileNavVisible(false);
    }

    const handleScroll = () => {
        setFrosted(window.scrollY > 60);
    }

    useEffect( () => {
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('scroll', handleScroll);
        };
    },[])


    return (
        <motion.header
            className="navbar"
            variants={navbarVariants}
            initial="default"
            animate={isFrosted ? "frosted" : "default"}
        >

            <Overlay
                className="navbar__overlay"
                onClick={() => setMobileNavVisible(false)}
                isVisible={isMobileNavVisible}
            />

            <NavButton Icon={Icons.Hamburger} className="hamburger-menu" onClick={() => setMobileNavVisible(true)} />

            <img src="/images/pfp.jpg" alt="profile picture" className="navbar__profile-image"/>

            <NavContext.Provider value={{
                isVisible: isMobileNavVisible,
                handleClick: () => setMobileNavVisible(false),
                isMobile: isMobile
            }}>
                <NavLinks>
                    <NavItem to="/" Icon={Icons.Home}>Home</NavItem>
                    <NavItem to="/journal" Icon={Icons.Journal}>Journal</NavItem>
                    <NavItem to="/thoughts" Icon={Icons.Thought}>Thoughts</NavItem>
                    <NavItem to="/projects" Icon={Icons.Project}>Projects</NavItem>
                    <NavItem to="/other" Icon={Icons.Other}>Other</NavItem>
                </NavLinks>
            </NavContext.Provider>

            <NavButton Icon={Icons.Mail} className="navbar__icon" onClick={() => {}} />

            <NavbarBackdrop isVisible={isFrosted}/>

        </motion.header>
    )
}

export default NavBar
