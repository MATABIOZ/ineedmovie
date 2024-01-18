import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StyledApp } from "App.styled";
import { ColorThemeContext } from "context/color_theme/color_theme_context_provider";

import { Header } from "components/ui/header/header";

function App() {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  return (
    <StyledApp className="App" $colors={colors}>
      <Router>
        <Routes>
          <Route path="/" element={"/movies"} />
          <Route path="/movies" element={<Header />} />
          <Route path="/genres" element={<Header />} />
          <Route path="/favorites" element={<Header />} />
          <Route path="/about" element={<Header />} />
        </Routes>
      </Router>
    </StyledApp>
  );
}

export default App;
