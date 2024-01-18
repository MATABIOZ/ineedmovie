import ReactDOM from "react-dom/client";
import { ColorThemeContextProvider } from "context/color_theme/color_theme_context_provider";

import App from "./App";

import "./normalize.css";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <ColorThemeContextProvider>
    <App />
  </ColorThemeContextProvider>,
);
