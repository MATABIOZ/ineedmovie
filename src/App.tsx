import { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { Header } from "./components/ui/header/header";
import { Movies } from "./components/ui/main/movies/movies";
import { ColorThemeContext } from "./context/color_theme/color_theme_context_provider";
import {
  getGenres,
  getPopularMovies,
} from "./redux/reducers/content_reducer/content_reducer";
import { useAppDispatch } from "./redux/store/store";
import { StyledApp } from "./App.styled";

function App() {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPopularMovies());
  }, []);

  return (
    <StyledApp className="App" $colors={colors}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/movies" />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/genres" element={<Header />} />
          <Route path="/favorites" element={<Header />} />
          <Route path="/about" element={<Header />} />
        </Routes>
      </Router>
    </StyledApp>
  );
}

export default App;
