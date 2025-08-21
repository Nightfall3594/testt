import {Link} from "react-router-dom";
import React from "react";
import {motion} from "framer-motion";

import {NavContext} from "../navContext.js";


const navItemVariants = {
    hidden: {opacity: 0, y: 20},
    show: {opacity: 1, y: 0},
};

function MobileNavItem({to, children, Icon}) {

    const {handleClick} = React.useContext(NavContext)

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