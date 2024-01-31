import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ColorThemeContext } from "../../../../../context/color_theme/color_theme_context_provider";
import { HeaderContext } from "../../../../../context/header_context/header_context_provider";
import { getSearchResults } from "../../../../../redux/reducers/content_reducer/content_reducer";
import { useAppDispatch } from "../../../../../redux/store/store";

import {
  StyledSearch,
  StyledSearchMessage,
  StyledSearchWrapper,
} from "./search.styled";

export const Search = () => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  const { searchIsActive, setSearchIsActive, searchInputRef } =
    useContext(HeaderContext);

  const dispatch = useAppDispatch();

  const params = useParams();
  const navigate = useNavigate();

  const [value, setValue] = useState<string>("");
  const [prevValue, setPrevValue] = useState<string>("");

  const [noResults, setNoResults] = useState<boolean>(true);
  const [isVisibleNoResultsMessage, setIsVisibleNoResultsMessage] =
    useState<boolean>(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (!searchInputRef.current?.contains(event.target as HTMLInputElement)) {
      setSearchIsActive(false);
      setIsVisibleNoResultsMessage(false);
    }
  };

  useEffect(() => {
    if (params.value) {
      setSearchIsActive(true);
    } else {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, []);

  useEffect(() => {
    !params.value && searchIsActive && searchInputRef.current?.focus();
  }, [searchIsActive]);

  useEffect(() => {
    !noResults && navigate(`/search/${prevValue}`);
  }, [noResults, prevValue]);

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const getSearchResultsProps = {
      value: value,
      setNoResults: setNoResults,
      setIsVisibleNoResultsMessage: setIsVisibleNoResultsMessage,
    };
    await dispatch(getSearchResults(getSearchResultsProps));
    setPrevValue(value);
    setValue("");
  };

  return (
    <>
      {searchIsActive && (
        <StyledSearchWrapper onSubmit={handleSearch}>
          <StyledSearch
            type="search"
            name="searchInput"
            $colors={colors}
            placeholder="Search..."
            ref={searchInputRef}
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          {noResults && isVisibleNoResultsMessage && (
            <StyledSearchMessage $colors={colors}>
              Nothing found for {`"${prevValue}".`}
            </StyledSearchMessage>
          )}
        </StyledSearchWrapper>
      )}
    </>
  );
};
