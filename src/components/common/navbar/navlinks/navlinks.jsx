import {NavContext} from '../navContext.js';
import DesktopNavLinks from "./desktop-navlinks.jsx";
import MobileNavLinks from "./mobile-navlinks.jsx";

function NavLinks({handleClick, children, isMobile, isVisible}) {

    return (
        <NavContext.Provider value={{handleClick, isMobile}}>
            {isMobile
                ? <MobileNavLinks isVisible={isVisible}>{children}</MobileNavLinks>
                : <DesktopNavLinks>{children}</DesktopNavLinks>
            }
        </NavContext.Provider>
    )
}

export default NavLinks;