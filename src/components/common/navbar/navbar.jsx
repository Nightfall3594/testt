import './navbar.css'

import NavItem from './navitems/navitem.jsx'
import NavLinks from "./navlinks/navlinks.jsx";
import * as Icons from '../icons/index.js'
import Overlay from "../overlays/overlay.jsx";

import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import NavbarBackdrop from "./navlinks/navbar-backdrop.jsx";


function NavBar() {

    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [isNavLinkVisible, setNavLinkVisible] = useState(false);

    const [isMobile, setMobile] = useState(window.innerWidth <= 768);

    let hideNav = () => {
        setOverlayVisible(false);
        setNavLinkVisible(false);
    }

    let showNav = () => {
        setOverlayVisible(true);
        setNavLinkVisible(true);
    }

    /* Hide the nav if the screen becomes mobile */
    let handleResize = () =>
    {
        setMobile(window.innerWidth <= 768);
        if(!isMobile) hideNav();
    }

    useEffect( () =>
    {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    })

    /* Frosted glass effect */
    const [isFrosted, setFrosted] = useState(false);

    const handleScroll = () => {
        setFrosted(window.scrollY > 60);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })


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


    return (
        <motion.header
            className="navbar"
            variants={navbarVariants}
            initial="default"
            animate={isFrosted ? "frosted" : "default"}
        >

            <Overlay
                className="navbar__overlay"
                onClick={hideNav}
                isVisible={isOverlayVisible}
            />

            <button
                className="navbar__icon hamburger-menu"
                onClick={showNav}
            >
                <Icons.Hamburger/>
            </button>

            <img src="/images/pfp.jpg" alt="profile picture" className="navbar__profile-image"/>

            {/* isVisible, handleClick are all mobile-only.
            isMobile could be relegated to NavLinks.jsx, to reduce markup

            To do: find a way to relegate them properly so that they are strictly mobile only
            Without passing unnecessary props */}

            <NavLinks isVisible={isNavLinkVisible} handleClick={hideNav} isMobile={isMobile}>
                <NavItem to="/" Icon={Icons.Home}>Home</NavItem>
                <NavItem to="/journal" Icon={Icons.Journal}>Journal</NavItem>
                <NavItem to="/thoughts" Icon={Icons.Thought}>Thoughts</NavItem>
                <NavItem to="/projects" Icon={Icons.Project}>Projects</NavItem>
                <NavItem to="/other" Icon={Icons.Other}>Other</NavItem>
            </NavLinks>

            <button className="navbar__icon contact-button">
                <Icons.Mail/>
            </button>

            <NavbarBackdrop isVisible={isFrosted}/>

        </motion.header>
    )
}

export default NavBar
