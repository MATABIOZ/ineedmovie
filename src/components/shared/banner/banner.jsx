import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { ColorThemeContext } from "../../../context/color_theme/color_theme_context_provider";
import { getVideos } from "../../../redux/reducers/content_reducer/content_reducer";
import { useAppDispatch, useAppSelector } from "../../../redux/store/store";
import { StyledColorfulButton } from "../buttons/colorful_button.styled";
import { FavoriteButton } from "../buttons/favorite_button/favorite_button";
import { StyledContainer } from "../container.styled";
import { Player } from "../player/player";
import { ReleaseDate } from "../release_date/release_date";
import { VoteAverage } from "../vote_average/vote_average";
import { StyledBannerInfoInner, StyledBannerInfoWrapper, StyledBannerOverview, StyledBannerTitle, StyledBannerWrapper, } from "./banner.styled";
export const Banner = ({ movieId, title, overview, backgroundLink, inSwiper, voteAverage, releaseDate, }) => {
    const { getTheme, themeType } = useContext(ColorThemeContext);
    const colors = getTheme(themeType);
    const [showPlayer, setShowPlayer] = useState(false);
    const navigate = useNavigate();
    const videos = useAppSelector((state) => state.appContentReducer.videos);
    const trailerKey = videos
        .find((item) => item.id === movieId)
        ?.results.find((item) => item.type === "Trailer")?.key;
    const dispatch = useAppDispatch();
    useEffect(() => {
        !inSwiper && dispatch(getVideos(movieId));
    }, []);
    const handleWatchTrailer = () => {
        setShowPlayer(true);
    };
    const handleGoToMovie = () => {
        navigate(`/movie/${movieId}`);
    };
    return (<StyledContainer>
      <StyledBannerWrapper $colors={colors} $backgroundLink={backgroundLink}>
        <FavoriteButton movieId={movieId}/>
        {!showPlayer ? (<StyledBannerInfoWrapper>
            <StyledBannerInfoInner>
              <ReleaseDate releaseDate={releaseDate}/>
              <VoteAverage voteAverage={voteAverage}/>
            </StyledBannerInfoInner>
            <StyledBannerTitle $colors={colors}>{title}</StyledBannerTitle>
            {inSwiper && overview && (<StyledBannerOverview $colors={colors}>
                {overview}
              </StyledBannerOverview>)}
            <StyledColorfulButton $colors={colors} type="button" onClick={inSwiper ? handleGoToMovie : handleWatchTrailer}>
              {inSwiper ? (<>
                  <DoubleArrowIcon /> Go To Movie
                </>) : (<>
                  <PlayArrowIcon /> Watch Trailer
                </>)}
            </StyledColorfulButton>
          </StyledBannerInfoWrapper>) : (<Player videoUrl={`https://www.youtube.com/watch?v=${trailerKey}`} setShowPlayer={setShowPlayer} isTrailerKey={trailerKey ? true : false}/>)}
      </StyledBannerWrapper>
    </StyledContainer>);
};
