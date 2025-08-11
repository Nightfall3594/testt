import {NavContext} from '../navContext.js';
import DesktopNavLinks from "./desktop-navlinks.jsx";
import MobileNavLinks from "./mobile-navlinks.jsx";
import {useContext} from "react";

function NavLinks({children}) {

    const {isMobile} = useContext(NavContext);

    return (
        isMobile
            ? <MobileNavLinks>{children}</MobileNavLinks>
            : <DesktopNavLinks>{children}</DesktopNavLinks>
    )
}

export default NavLinks;