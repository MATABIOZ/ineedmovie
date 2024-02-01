import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ShortcutIcon from "@mui/icons-material/Shortcut";

import { ColorThemeContext } from "../../../context/color_theme/color_theme_context_provider";
import { IMovie } from "../../../redux/reducers/content_reducer/content_reducer_types";
import { IMovieGroup } from "../../consts/movie_groups";
import { CustomSwiper } from "../custom_swiper/custom_swiper";

import {
  StyledCardsHeaderWrapper,
  StyledCardsShowAllButton,
  StyledCardsTitle,
  StyledCardsWrapper,
} from "./cards.styled";

interface ICardsProps {
  currentGroup: IMovieGroup;
  currentMoviesArr: Array<IMovie>;
}

export const Cards: FC<ICardsProps> = ({ currentGroup, currentMoviesArr }) => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  const navigate = useNavigate();

  const handleClick = () => {
    currentGroup.groupType === "main"
      ? navigate(`/home/${currentGroup.pathTitle}`)
      : navigate(`/genres/${currentGroup.pathTitle}`);
  };

  return (
    <StyledCardsWrapper>
      <StyledCardsHeaderWrapper>
        <StyledCardsTitle $colors={colors}>
          {currentGroup.title}
        </StyledCardsTitle>
        <StyledCardsShowAllButton
          $colors={colors}
          type="button"
          onClick={handleClick}
        >
          <ShortcutIcon /> Show All
        </StyledCardsShowAllButton>
      </StyledCardsHeaderWrapper>
      <CustomSwiper
        moviesArr={currentMoviesArr}
        swiperFor={"cardsForMovies"}
        swiperClassPostfix={currentGroup.pathTitle}
      />
    </StyledCardsWrapper>
  );
};
