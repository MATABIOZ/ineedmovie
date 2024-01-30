import { FC, useContext } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { ColorThemeContext } from "../../../../context/color_theme/color_theme_context_provider";

import { StyledFavoriteButton } from "./favorite_button.styled";

interface IFavoriteButtonProps {
  movieId: number;
}

export const FavoriteButton: FC<IFavoriteButtonProps> = ({ movieId }) => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  const handleFavoriteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    console.log(`Add to favorite movie "${movieId}"`);
  };

  return (
    <StyledFavoriteButton
      $colors={colors}
      type="button"
      onClick={handleFavoriteClick}
    >
      <FavoriteBorderIcon />
    </StyledFavoriteButton>
  );
};
