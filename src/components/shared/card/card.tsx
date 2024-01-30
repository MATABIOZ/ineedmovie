import { FC, useContext } from "react";

import { ColorThemeContext } from "../../../context/color_theme/color_theme_context_provider";
import { FavoriteButton } from "../buttons/favorite_button/favorite_button";
import { ReleaseDate } from "../release_date/release_date";
import { VoteAverage } from "../vote_average/vote_average";

import {
  StyledCardInfo,
  StyledCardLink,
  StyledCardPoster,
  StyledCardTitle,
  StyledCardWrapper,
} from "./card.styled";

interface ICardProps {
  movieId: number;
  title: string;
  backgroundLink: string;
  voteAverage: number;
  releaseDate: string;
}

export const Card: FC<ICardProps> = ({
  movieId,
  title,
  backgroundLink,
  voteAverage,
  releaseDate,
}) => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  return (
    <StyledCardLink to={`/movie/${movieId}`}>
      <StyledCardWrapper $colors={colors}>
        <StyledCardPoster $colors={colors} $backgroundLink={backgroundLink}>
          <FavoriteButton movieId={movieId} />
        </StyledCardPoster>
        <StyledCardTitle $colors={colors}>{title}</StyledCardTitle>
        <StyledCardInfo>
          <ReleaseDate releaseDate={releaseDate} />
          <VoteAverage voteAverage={voteAverage} />
        </StyledCardInfo>
      </StyledCardWrapper>
    </StyledCardLink>
  );
};
