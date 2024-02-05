import React, { useRef, useState } from "react";
export const HeaderContext = React.createContext({});
export const HeaderContextProvider = ({ children, }) => {
    const [searchIsActive, setSearchIsActive] = useState(false);
    const searchInputRef = useRef(null);
    const [burgerIsActive, setBurgerIsActive] = useState(false);
    const burgerMenuRef = useRef(null);
    const [userMenuIsActive, setUserMenuIsActive] = useState(false);
    const userMenuRef = useRef(null);
    return (<HeaderContext.Provider value={{
            searchIsActive: searchIsActive,
            setSearchIsActive: setSearchIsActive,
            searchInputRef: searchInputRef,
            burgerIsActive: burgerIsActive,
            setBurgerIsActive: setBurgerIsActive,
            burgerMenuRef: burgerMenuRef,
            userMenuIsActive: userMenuIsActive,
            setUserMenuIsActive: setUserMenuIsActive,
            userMenuRef: userMenuRef,
        }}>
      {children}
    </HeaderContext.Provider>);
};
