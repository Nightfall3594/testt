import {motion} from "framer-motion";
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import React from "react";

/**
 * Nav item for desktop
 *
 * - Must be used with DesktopNavLinks to have a dynamic shifting layout based on active links
 * - Highlights itself with icons, color, and underline based on current route
 * - IMPORTANT: do not use this as standalone. use NavItem to adapt flexibly on mobile/desktop
 *
 * @param children - The linked text
 * @param Icon - The accompanying icon of the text
 * @param to - The destination route of the link
 * @returns {Element}
 */
function DesktopNavItem({children, Icon, to}){

    const fullPath = useResolvedPath(to)
    const isMatch = useMatch({path: fullPath.pathname})

    return (
        <motion.li layout className={isMatch ? "navbar__link--active" : ""}>
            <Link to={to}>
                {isMatch &&
                    <motion.div layoutId={"nav__icon--active"}>
                        {Icon && <Icon/>}
                    </motion.div>
                }
                <span>{children}</span>
            </Link>

            {isMatch &&
                <motion.div
                    className="navbar__underline"
                    layoutId="navbar__underline"
                />
            }

        </motion.li>
    )
}

export default DesktopNavItem;