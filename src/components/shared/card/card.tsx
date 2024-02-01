import { FC, useContext, useEffect, useState } from "react";

import { ColorThemeContext } from "../../../context/color_theme/color_theme_context_provider";
import { FavoriteButton } from "../buttons/favorite_button/favorite_button";
import { Department } from "../department/department";
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
  itemId: number;
  title: string;
  backgroundLink: string;
  voteAverage?: number;
  releaseDate?: string;
  department?: string;
}

export const Card: FC<ICardProps> = ({
  itemId,
  title,
  backgroundLink,
  voteAverage,
  releaseDate,
  department,
}) => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  const [isActiveLink, setIsActiveLink] = useState<boolean>(false);

  const cardLink = `/movie/${itemId}`;

  useEffect(() => {
    !department && setIsActiveLink(true);
  }, []);

  return (
    <StyledCardLink to={!department ? cardLink : ""} $isActive={isActiveLink}>
      <StyledCardWrapper $colors={colors}>
        <StyledCardPoster $colors={colors} $backgroundLink={backgroundLink}>
          {!department && <FavoriteButton movieId={itemId} />}
        </StyledCardPoster>
        <StyledCardTitle $colors={colors}>{title}</StyledCardTitle>
        <StyledCardInfo>
          {releaseDate && voteAverage && (
            <>
              <ReleaseDate releaseDate={releaseDate} />
              <VoteAverage voteAverage={voteAverage} />
            </>
          )}
          {department && (
            <>
              <span></span>
              <Department department={department} />
            </>
          )}
        </StyledCardInfo>
      </StyledCardWrapper>
    </StyledCardLink>
  );
};
