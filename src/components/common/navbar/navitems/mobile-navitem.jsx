import {Link} from "react-router-dom";
import React from "react";
import {motion} from "framer-motion";

import {NavContext} from "../navContext.js";

/**
 * Nav item for mobile
 *
 * - Must be used with MobileNavLinks for a bottom-drawer animation
 * - uses handleClick to also close nav links when pressed (via nav context)
 * - IMPORTANT: do not use this as standalone. use NavItem to adapt flexibly on mobile/desktop
 *
 * @param children - The linked text
 * @param Icon - The accompanying icon of the text
 * @param to - The destination route of the link
 * @returns {Element}
 */
function MobileNavItem({to, children, Icon}) {

    const {handleClick} = React.useContext(NavContext)

    const navItemVariants = {
        hidden: {opacity: 0, y: 20},
        show: {opacity: 1, y: 0},
        exit: {opacity: 0, y: 20}
    };

    return (
        <motion.li
            onClick={handleClick}
            variants={navItemVariants}
        >
            <Link to={to}>
                {Icon && <Icon/>}
                <span>{children}</span>
            </Link>
        </motion.li>
    )
}

export default MobileNavItem;