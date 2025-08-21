import React from "react";

import {NavContext} from "../navContext.js";
import MobileNavItem from "./mobile-navitem.jsx";
import DesktopNavItem from "./desktop-navitem.jsx";


/**
 * Navigation item for NavLinks component.
 *
 * Returns either a mobile or desktop item based on isMobile prop, accessed through a context.
 *
 * @param to - The destination route of the link
 * @param children - The text marked as link
 * @param Icon - Accompanying icon of the text
 * @returns {Element}
 */
function NavItem({to="#", children, Icon}) {

    const {isMobile} = React.useContext(NavContext)

    return (
        isMobile
            ? <MobileNavItem to={to} Icon={Icon}>{children}</MobileNavItem>
            : <DesktopNavItem to={to} Icon={Icon}>{children}</DesktopNavItem>
    )
}

export default NavItem
