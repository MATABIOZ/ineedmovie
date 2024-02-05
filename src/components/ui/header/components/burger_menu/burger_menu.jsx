import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { ColorThemeContext } from "../../../../../context/color_theme/color_theme_context_provider";
import { HeaderContext } from "../../../../../context/header_context/header_context_provider";
import { useAppSelector } from "../../../../../redux/store/store";
import { StyledBurgerMenu, StyledBurgerMenuNavLink, StyledBurgerMenuWrapper, } from "./burger_menu.styled";
export const BurgerMenu = () => {
    const { getTheme, themeType } = useContext(ColorThemeContext);
    const colors = getTheme(themeType);
    const { pathname } = useLocation();
    const burgerNavLinkTitlesArr = ["Home", "Genres", "Favorites"];
    const user = useAppSelector((state) => state.appAuthReducer.user);
    const [favoritesIsUnlock, setFavoritesIsUnlock] = useState(false);
    useEffect(() => {
        user ? setFavoritesIsUnlock(true) : setFavoritesIsUnlock(false);
    }, [user]);
    const { burgerIsActive, setBurgerIsActive, burgerMenuRef } = useContext(HeaderContext);
    const handleClickOutside = (event) => {
        !burgerMenuRef.current?.contains(event.target) &&
            setBurgerIsActive(false);
    };
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    return (<>
      {burgerIsActive && (<StyledBurgerMenu>
          <StyledBurgerMenuWrapper $colors={colors} ref={burgerMenuRef}>
            {burgerNavLinkTitlesArr.map((item) => (<li key={burgerNavLinkTitlesArr.indexOf(item)}>
                <StyledBurgerMenuNavLink to={item === "Favorites" && !favoritesIsUnlock
                    ? ""
                    : `/${item.toLowerCase()}`} $colors={colors} $isactive={pathname === `/${item.toLowerCase()}` ? true : false} $isFavorites={item === "Favorites" ? true : false} $favoritesIsUnlock={favoritesIsUnlock}>
                  {item === "Favorites" && favoritesIsUnlock ? (<>
                      {item}
                      <LockOpenIcon />
                    </>) : item === "Favorites" && !favoritesIsUnlock ? (<>
                      {item}
                      <LockPersonIcon />
                    </>) : (item)}
                </StyledBurgerMenuNavLink>
              </li>))}
          </StyledBurgerMenuWrapper>
        </StyledBurgerMenu>)}
    </>);
};
