import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { ColorThemeContext } from "../../../../context/color_theme/color_theme_context_provider";
import { getSingleMovie } from "../../../../redux/reducers/content_reducer/content_reducer";
import { useAppDispatch, useAppSelector } from "../../../../redux/store/store";
import { Banner } from "../../../shared/banner/banner";
import { ContentWrapper } from "../../../shared/content_wrapper/content_wrapper";
import { CustomSwiper } from "../../../shared/custom_swiper/custom_swiper";
import { Footer } from "../../footer/footer";
import { Header } from "../../header/header";

import {
  StyledMovieCastSwiperContainer,
  StyledMovieInfo,
  StyledMovieInfoWrapper,
  StyledMovieItem,
  StyledMovieItemsTitle,
  StyledMovieItemsWrapper,
  StyledMovieText,
  StyledMovieTitle,
} from "./single_movie.styled";

export const SingleMovie = () => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  const movie = useAppSelector((state) => state.appContentReducer.singleMovie);
  const dispatch = useAppDispatch();

  const params = useParams();

  useEffect(() => {
    params.movie_id && dispatch(getSingleMovie(Number(params.movie_id)));
  }, []);

  return (
    <>
      <Header />
      {movie.id === Number(params.movie_id) && (
        <>
          <Banner
            movieId={movie.id}
            title={movie.title}
            backgroundLink={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            voteAverage={movie.vote_average}
            releaseDate={movie.release_date}
            inSwiper={false}
          />

          <ContentWrapper groupType={"info"}>
            <StyledMovieInfo>
              <StyledMovieInfoWrapper $colors={colors}>
                <StyledMovieItemsTitle $colors={colors}>
                  Genres
                </StyledMovieItemsTitle>
                <StyledMovieItemsWrapper>
                  {movie.genres.map((item) => (
                    <StyledMovieItem key={item.id} $colors={colors}>
                      {item.name}
                    </StyledMovieItem>
                  ))}
                </StyledMovieItemsWrapper>
              </StyledMovieInfoWrapper>
              <StyledMovieInfoWrapper $colors={colors}>
                <StyledMovieItemsTitle $colors={colors}>
                  Production Countries
                </StyledMovieItemsTitle>
                <StyledMovieItemsWrapper>
                  {movie.production_countries.map((item) => (
                    <StyledMovieItem key={item.iso_3166_1} $colors={colors}>
                      {item.name}
                    </StyledMovieItem>
                  ))}
                </StyledMovieItemsWrapper>
              </StyledMovieInfoWrapper>
              {movie.homepage && (
                <StyledMovieInfoWrapper $colors={colors}>
                  <StyledMovieItemsTitle $colors={colors}>
                    Home Page
                  </StyledMovieItemsTitle>
                  <StyledMovieItemsWrapper>
                    <Link to={`${movie.homepage}`} target="_blank">
                      <StyledMovieItem $colors={colors}>
                        {movie.homepage}
                      </StyledMovieItem>
                    </Link>
                  </StyledMovieItemsWrapper>
                </StyledMovieInfoWrapper>
              )}
            </StyledMovieInfo>
            <StyledMovieTitle $colors={colors}>Description</StyledMovieTitle>
            <StyledMovieInfoWrapper $colors={colors}>
              <StyledMovieText $colors={colors}>
                {movie.overview}
              </StyledMovieText>
            </StyledMovieInfoWrapper>
            <StyledMovieTitle $colors={colors}>Cast</StyledMovieTitle>
            <StyledMovieCastSwiperContainer>
              <CustomSwiper
                swiperFor={"cardsForCast"}
                swiperClassPostfix={"cast"}
                castArr={movie.credits.cast}
              />
            </StyledMovieCastSwiperContainer>
          </ContentWrapper>
        </>
      )}
      <Footer />
    </>
  );
};
