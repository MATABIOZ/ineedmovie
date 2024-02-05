import { useContext, useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ColorThemeContext } from "../../../../context/color_theme/color_theme_context_provider";
import { changeArrFavoriteMovies } from "../../../../redux/reducers/auth_reducer/auth_reducer";
import { useAppDispatch, useAppSelector } from "../../../../redux/store/store";
import { StyledFavoriteButton } from "./favorite_button.styled";
export const FavoriteButton = ({ movieId }) => {
    const { getTheme, themeType } = useContext(ColorThemeContext);
    const colors = getTheme(themeType);
    const dispatch = useAppDispatch();
    const favoriteMovies = useAppSelector((state) => state.appAuthReducer.user?.favoriteMovies);
    const user = useAppSelector((state) => state.appAuthReducer.user);
    const [isFavorite, setIsFavorite] = useState(false);
    const handleFavoriteClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        user && dispatch(changeArrFavoriteMovies({ user: user, movieId: movieId }));
        // console.log(user);
        // console.log("FavoriteIcon click");
    };
    useEffect(() => {
        if (favoriteMovies && favoriteMovies.indexOf(movieId) !== -1) {
            setIsFavorite(true);
        }
        else {
            setIsFavorite(false);
        }
    }, [favoriteMovies]);
    return (<>
      {user && (<StyledFavoriteButton $colors={colors} type="button" onClick={handleFavoriteClick}>
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </StyledFavoriteButton>)}
    </>);
};
