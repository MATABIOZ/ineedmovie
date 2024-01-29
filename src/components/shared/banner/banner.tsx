import { FC, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import { ColorThemeContext } from "../../../context/color_theme/color_theme_context_provider";
import { getVideos } from "../../../redux/reducers/content_reducer/content_reducer";
import { useAppDispatch, useAppSelector } from "../../../redux/store/store";
import { StyledColorfulButton } from "../buttons/colorful_button.styled";
import { StyledContainer } from "../container.styled";
import { Player } from "../player/player";

import {
  StyledBannerInfoWrapper,
  StyledBannerOverview,
  StyledBannerTitle,
  StyledBannerWrapper,
} from "./banner.styled";

interface IBannerProps {
  movieId: number;
  title: string;
  overview: string;
  backgroundLink: string;
  inSwiper: boolean;
}

export const Banner: FC<IBannerProps> = ({
  movieId,
  title,
  overview,
  backgroundLink,
  inSwiper,
}) => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  const [showPlayer, setShowPlayer] = useState<boolean>(false);

  const navigate = useNavigate();

  const videos = useAppSelector((state) => state.appContentReducer.videos);
  const trailerKey = videos
    .find((item) => item.id === movieId)
    ?.results.find((item) => item.type === "Trailer")?.key;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getVideos(movieId));
  }, []);

  const handleWatchTrailer = () => {
    setShowPlayer(true);
  };

  const handleNavigate = () => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <StyledContainer>
      <StyledBannerWrapper $colors={colors} $backgroundLink={backgroundLink}>
        {!showPlayer ? (
          <StyledBannerInfoWrapper>
            <StyledBannerTitle $colors={colors}>{title}</StyledBannerTitle>
            <StyledBannerOverview $colors={colors}>
              {overview}
            </StyledBannerOverview>
            <StyledColorfulButton
              $colors={colors}
              type="button"
              onClick={inSwiper ? handleNavigate : handleWatchTrailer}
            >
              {inSwiper ? (
                <>
                  <DoubleArrowIcon /> Go To Movie
                </>
              ) : (
                <>
                  <PlayArrowIcon /> Watch Trailer
                </>
              )}
            </StyledColorfulButton>
          </StyledBannerInfoWrapper>
        ) : (
          <Player
            videoUrl={`https://www.youtube.com/watch?v=${trailerKey}`}
            setShowPlayer={setShowPlayer}
            isTrailerKey={trailerKey ? true : false}
          />
        )}
      </StyledBannerWrapper>
    </StyledContainer>
  );
};
