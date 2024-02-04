import { FC, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

import { ColorThemeContext } from "../../../context/color_theme/color_theme_context_provider";
import {
  getFavoriteMovies,
  getNextPageMovies,
  getNextPageSearchResults,
  getSearchResults,
} from "../../../redux/reducers/content_reducer/content_reducer";
import { IMovie } from "../../../redux/reducers/content_reducer/content_reducer_types";
import { useAppDispatch, useAppSelector } from "../../../redux/store/store";
import { IMovieGroup, movieGroupArr } from "../../consts/movie_groups";
import { StyledColorfulButton } from "../buttons/colorful_button.styled";
import { Card } from "../card/card";
import { Cards } from "../cards/cards";
import { StyledContainer } from "../container.styled";
import { ErrorMessage } from "../error_message/error_message";

import {
  StyledContentWrapper,
  StyledContentWrapperCardsContainer,
  StyledContentWrapperHeaderContainer,
  StyledContentWrapperHeaderItem,
  StyledContentWrapperTitle,
  StyledContentWrapperTitleContainer,
} from "./content_wrapper.styled";

interface IContentWrapperProps {
  groupType:
    | "main"
    | "genres"
    | "specific group"
    | "search"
    | "info"
    | "favorites";
  children?: React.ReactNode;
}

export const ContentWrapper: FC<IContentWrapperProps> = ({
  groupType,
  children,
}) => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  const contentState = useAppSelector((state) => state.appContentReducer);
  const loading = contentState.loading;
  const errorMessage = contentState.errorMessage;

  const user = useAppSelector((state) => state.appAuthReducer.user);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

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
  const [currentTotalResults, setCurrentTotalResults] = useState<number>(0);
  const handleClick = () => {
    dispatch(getNextPageMovies({ group: currentGroup, page: currentPage }));
  };
  const handleSearchClick = () => {
    params.value &&
      dispatch(
        getNextPageSearchResults({ value: params.value, page: currentPage }),
      );
  };

  useEffect(() => {
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

  useEffect(() => {
    if (groupType === "search" && params.value) {
      if (
        contentState.searchResults.results &&
        contentState.searchResults.page &&
        contentState.searchResults.total_pages &&
        contentState.searchResults.total_results
      ) {
        setCurrentMoviesArr(contentState.searchResults.results);
        setCurrentPage(contentState.searchResults.page);
        setCurrentTotalPages(contentState.searchResults.total_pages);
        setCurrentTotalResults(contentState.searchResults.total_results);
      } else {
        dispatch(getSearchResults({ value: params.value }));
      }
    }
  }, [contentState.searchResults]);

  useEffect(() => {
    if (
      groupType === "favorites" &&
      user?.favoriteMovies &&
      user.favoriteMovies.length > 0
    ) {
      dispatch(getFavoriteMovies(user.favoriteMovies));
    }
  }, [user?.favoriteMovies]);

  useEffect(() => {
    groupType === "favorites" && !user && navigate("/home");
  }, [user]);

  useEffect(() => {
    groupType === "main" &&
      setMainMovieGroupArr(
        movieGroupArr.filter((item) => item.groupType === "main"),
      );
    groupType === "genres" &&
      setGenreMovieGroupArr(
        movieGroupArr.filter((item) => item.groupType === "genre"),
      );
  }, []);

  return (
    <>
      {errorMessage ? (
        <ErrorMessage errorText={errorMessage} />
      ) : (
        <StyledContainer>
          <StyledContentWrapper $colors={colors}>
            <StyledContentWrapperTitleContainer>
              <StyledContentWrapperTitle $colors={colors}>
                {groupType === "main" && "Home"}
                {groupType === "genres" && "Genres"}
                {groupType === "specific group" && currentGroup.title}
                {groupType === "search" && "Search Results"}
                {groupType === "info" && "Info"}
                {groupType === "favorites" && "Favorites"}
              </StyledContentWrapperTitle>
            </StyledContentWrapperTitleContainer>
            {children}
            {(groupType === "specific group" ||
              groupType === "search" ||
              groupType === "favorites") && (
              <>
                <StyledContentWrapperCardsContainer>
                  {groupType === "search" && (
                    <StyledContentWrapperHeaderContainer>
                      <StyledContentWrapperHeaderItem
                        $colors={colors}
                      >{`"${params.value}"`}</StyledContentWrapperHeaderItem>
                      <StyledContentWrapperHeaderItem
                        $colors={colors}
                        $isTotalResults={true}
                      >{`Found: ${currentTotalResults}`}</StyledContentWrapperHeaderItem>
                    </StyledContentWrapperHeaderContainer>
                  )}
                  {groupType === "favorites" && (
                    <StyledContentWrapperHeaderContainer>
                      <StyledContentWrapperHeaderItem
                        $colors={colors}
                      >{`Movies: ${contentState.favoriteMovies.length}`}</StyledContentWrapperHeaderItem>
                    </StyledContentWrapperHeaderContainer>
                  )}
                  {(groupType === "specific group" || groupType === "search") &&
                    currentMoviesArr.map(
                      (item) =>
                        item.poster_path && (
                          <Card
                            key={item.id}
                            itemId={item.id}
                            title={item.title}
                            backgroundLink={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                            voteAverage={item.vote_average}
                            releaseDate={item.release_date}
                          />
                        ),
                    )}
                  {groupType === "favorites" &&
                    contentState.favoriteMovies.map(
                      (item) =>
                        item.poster_path && (
                          <Card
                            key={item.id}
                            itemId={item.id}
                            title={item.title}
                            backgroundLink={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                            voteAverage={item.vote_average}
                            releaseDate={item.release_date}
                          />
                        ),
                    )}
                </StyledContentWrapperCardsContainer>
                {currentTotalPages > 1 && currentTotalPages !== currentPage && (
                  <>
                    {!loading ? (
                      <StyledColorfulButton
                        $colors={colors}
                        type="button"
                        onClick={
                          groupType === "search"
                            ? handleSearchClick
                            : handleClick
                        }
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
              </>
            )}
            {groupType === "main" &&
              mainMovieGroupArr.map((item) => (
                <Cards
                  key={item.pathTitle}
                  currentGroup={item}
                  currentMoviesArr={
                    contentState[`${item.camelCaseTitle}Movies`].results
                  }
                />
              ))}
            {groupType === "genres" &&
              genreMovieGroupArr.map((item) => (
                <Cards
                  key={item.pathTitle}
                  currentGroup={item}
                  currentMoviesArr={
                    contentState[`${item.camelCaseTitle}Movies`].results
                  }
                />
              ))}
          </StyledContentWrapper>
        </StyledContainer>
      )}
    </>
  );
};
