import { FC, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

import { ColorThemeContext } from "../../../context/color_theme/color_theme_context_provider";
import { getNextPageMovies } from "../../../redux/reducers/content_reducer/content_reducer";
import { IMovie } from "../../../redux/reducers/content_reducer/content_reducer_types";
import { useAppDispatch, useAppSelector } from "../../../redux/store/store";
import { IMovieGroup, movieGroupArr } from "../../consts/movie_groups";
import { Header } from "../../ui/header/header";
import { StyledColorfulButton } from "../buttons/colorful_button.styled";
import { Card } from "../card/card";
import { Cards } from "../cards/cards";
import { StyledContainer } from "../container.styled";
import { ErrorMessage } from "../error_message/error_message";

import {
  StyledContentWrapper,
  StyledContentWrapperCardsContainer,
  StyledContentWrapperTitle,
  StyledContentWrapperTitleContainer,
} from "./content_wrapper.styled";

interface IContentWrapperProps {
  groupType: "main" | "genres" | "specific group";
}

export const ContentWrapper: FC<IContentWrapperProps> = ({ groupType }) => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  const contentState = useAppSelector((state) => state.appContentReducer);
  const loading = contentState.loading;
  const errorMessage = contentState.errorMessage;
  const dispatch = useAppDispatch();

  const params = useParams();

  const [mainMovieGroupArr, setMainMovieGroupArr] = useState<
    Array<IMovieGroup>
  >([]);
  const [genreMovieGroupArr, setGenreMovieGroupArr] = useState<
    Array<IMovieGroup>
  >([]);
  const [currentGroup, setCurrentGroup] = useState<IMovieGroup>(
    {} as IMovieGroup,
  );
  const [currentMoviesArr, setCurrentMoviesArr] = useState<Array<IMovie>>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [currentTotalPages, setCurrentTotalPages] = useState<number>(0);
  const handleClick = () => {
    dispatch(getNextPageMovies({ group: currentGroup, page: currentPage }));
  };

  useEffect(() => {
    groupType === "main" &&
      setMainMovieGroupArr(
        movieGroupArr.filter((item) => item.groupType === "main"),
      );
    groupType === "genres" &&
      setGenreMovieGroupArr(
        movieGroupArr.filter((item) => item.groupType === "genre"),
      );
    if (groupType === "specific group" && params.movie_group) {
      const isCurrentGroup = movieGroupArr.find(
        (item) => item.pathTitle === params.movie_group,
      );
      if (isCurrentGroup) {
        setCurrentGroup(isCurrentGroup);
        if (
          contentState[`${isCurrentGroup.camelCaseTitle}Movies`].results &&
          contentState[`${isCurrentGroup.camelCaseTitle}Movies`].page &&
          contentState[`${isCurrentGroup.camelCaseTitle}Movies`].total_pages
        ) {
          setCurrentMoviesArr(
            contentState[`${isCurrentGroup.camelCaseTitle}Movies`].results,
          );
          setCurrentPage(
            contentState[`${isCurrentGroup.camelCaseTitle}Movies`].page,
          );
          setCurrentTotalPages(
            contentState[`${isCurrentGroup.camelCaseTitle}Movies`].total_pages,
          );
        }
      }
    }
  }, [contentState]);

  return (
    <>
      {errorMessage ? (
        <ErrorMessage errorText={errorMessage} />
      ) : (
        <>
          {groupType === "specific group" ? (
            <>
              <Header />
              <StyledContainer>
                <StyledContentWrapper $colors={colors}>
                  <StyledContentWrapperTitleContainer>
                    <StyledContentWrapperTitle $colors={colors}>
                      {currentGroup.title}
                    </StyledContentWrapperTitle>
                  </StyledContentWrapperTitleContainer>
                  <StyledContentWrapperCardsContainer>
                    {currentMoviesArr.map((item) => (
                      <Card
                        key={item.id}
                        movieId={item.id}
                        title={item.title}
                        backgroundLink={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                        voteAverage={item.vote_average}
                        releaseDate={item.release_date}
                      />
                    ))}
                  </StyledContentWrapperCardsContainer>
                  {currentTotalPages > 1 &&
                    currentTotalPages !== currentPage && (
                      <>
                        {!loading ? (
                          <StyledColorfulButton
                            $colors={colors}
                            type="button"
                            onClick={handleClick}
                          >
                            Show More
                          </StyledColorfulButton>
                        ) : (
                          <CircularProgress
                            size={50}
                            sx={{ color: colors.colorfulItem }}
                          />
                        )}
                      </>
                    )}
                </StyledContentWrapper>
              </StyledContainer>
            </>
          ) : (
            <StyledContainer>
              <StyledContentWrapper $colors={colors}>
                {groupType === "main" && (
                  <>
                    <StyledContentWrapperTitleContainer>
                      <StyledContentWrapperTitle $colors={colors}>
                        Home
                      </StyledContentWrapperTitle>
                    </StyledContentWrapperTitleContainer>
                    {mainMovieGroupArr.map((item) => (
                      <Cards
                        key={item.pathTitle}
                        currentGroup={item}
                        currentMoviesArr={
                          contentState[`${item.camelCaseTitle}Movies`].results
                        }
                      />
                    ))}
                  </>
                )}
                {groupType === "genres" && (
                  <>
                    <StyledContentWrapperTitleContainer>
                      <StyledContentWrapperTitle $colors={colors}>
                        Genres
                      </StyledContentWrapperTitle>
                    </StyledContentWrapperTitleContainer>

                    {genreMovieGroupArr.map((item) => (
                      <Cards
                        key={item.pathTitle}
                        currentGroup={item}
                        currentMoviesArr={
                          contentState[`${item.camelCaseTitle}Movies`].results
                        }
                      />
                    ))}
                  </>
                )}
              </StyledContentWrapper>
            </StyledContainer>
          )}
        </>
      )}
    </>
  );
};
