import React from "react";

export const NavContext = React.createContext({
    handleClick: () => {},
    isVisible: true,
    isMobile: false
});