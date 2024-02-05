import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { ColorThemeContext } from "../../../../../context/color_theme/color_theme_context_provider";
import { useAppSelector } from "../../../../../redux/store/store";
import { StyledNavBar, StyledNavBarWrapper, StyledNavLink, } from "./nav_bar.styled";
export const NavBar = () => {
    const { getTheme, themeType } = useContext(ColorThemeContext);
    const colors = getTheme(themeType);
    const { pathname } = useLocation();
    const navLinkTitlesArr = ["Home", "Genres", "Favorites"];
    const user = useAppSelector((state) => state.appAuthReducer.user);
    const [favoritesIsUnlock, setFavoritesIsUnlock] = useState(false);
    useEffect(() => {
        user ? setFavoritesIsUnlock(true) : setFavoritesIsUnlock(false);
    }, [user]);
    return (<StyledNavBar>
      <StyledNavBarWrapper $colors={colors}>
        {navLinkTitlesArr.map((item) => (<li key={navLinkTitlesArr.indexOf(item)}>
            <StyledNavLink to={item === "Favorites" && !favoritesIsUnlock
                ? ""
                : `/${item.toLowerCase()}`} $colors={colors} $isactive={pathname === `/${item.toLowerCase()}` ? true : false} $isFavorites={item === "Favorites" ? true : false} $favoritesIsUnlock={favoritesIsUnlock}>
              {item === "Favorites" && favoritesIsUnlock ? (<>
                  {item}
                  <LockOpenIcon />
                </>) : item === "Favorites" && !favoritesIsUnlock ? (<>
                  {item}
                  <LockPersonIcon />
                </>) : (item)}
            </StyledNavLink>
          </li>))}
      </StyledNavBarWrapper>
    </StyledNavBar>);
};
