import { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { movieGroupArr } from "./components/consts/movie_groups";
import { ScrollToTopButton } from "./components/shared/buttons/scroll_to_top_button/scroll_to_top_button";
import { AuthorisationForm } from "./components/ui/authorisation/authorisation_form";
import { Header } from "./components/ui/header/header";
import { Genres } from "./components/ui/main/genres/genres";
import { Home } from "./components/ui/main/home/home";
import { SearchResults } from "./components/ui/main/search_results/search_results";
import { SingleMovie } from "./components/ui/main/single_movie/single_movie";
import { SpecificGroup } from "./components/ui/main/specific_group/specific_group";
import { ColorThemeContext } from "./context/color_theme/color_theme_context_provider";
import {
  getGenres,
  getMovies,
} from "./redux/reducers/content_reducer/content_reducer";
import { useAppDispatch } from "./redux/store/store";
import { StyledApp } from "./App.styled";

function App() {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getMovies(movieGroupArr));
  }, []);

  return (
    <StyledApp className="App" $colors={colors}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:movie_group" element={<SpecificGroup />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/genres/:movie_group" element={<SpecificGroup />} />
          <Route path="/favorites" element={<Header />} />
          <Route path="/movie/:movie_id" element={<SingleMovie />} />
          <Route path="/search/:value" element={<SearchResults />} />
          <Route
            path="/authorisation/sign_up"
            element={<AuthorisationForm formFor={"sign_up"} />}
          />
          <Route
            path="/authorisation/sign_in"
            element={<AuthorisationForm formFor={"sign_in"} />}
          />
        </Routes>
      </Router>
      <ScrollToTopButton />
    </StyledApp>
  );
}

export default App;
