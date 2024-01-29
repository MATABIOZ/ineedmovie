import { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { movieGroupsArr } from "./components/consts/movie_groups";
import { Header } from "./components/ui/header/header";
import { Home } from "./components/ui/main/home/home";
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
    dispatch(getMovies(movieGroupsArr));
    // dispatch(
    //   getNextPageMovies({
    //     group: {
    //       groupType: "main",
    //       title: "Now Playing",
    //       camelCaseTitle: "nowPlaying",
    //       pathTitle: "now_playing",
    //     },
    //     page: 1,
    //   }),
    // );
  }, []);

  return (
    <StyledApp className="App" $colors={colors}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:movie_group" element={<></>} />
          <Route path="/genres" element={<Header />} />
          <Route path="/genres/:movie_group" element={<></>} />
          <Route path="/favorites" element={<Header />} />
          <Route path="/about" element={<Header />} />
          <Route path="/movie/:movie_id" element={<></>} />
        </Routes>
      </Router>
    </StyledApp>
  );
}

export default App;
