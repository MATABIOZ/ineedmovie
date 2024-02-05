import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ColorThemeContextProvider } from "./context/color_theme/color_theme_context_provider";
import { store } from "./redux/store/store";
import App from "./App";
import "./normalize.css";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={store}>
    <ColorThemeContextProvider>
      <App />
    </ColorThemeContextProvider>
  </Provider>);
