import { useContext } from "react";
import Brightness3Icon from "@mui/icons-material/Brightness3";

import { ColorThemeContext } from "../../../../../../context/color_theme/color_theme_context_provider";
import { switchUserTheme } from "../../../../../../redux/reducers/auth_reducer/auth_reducer";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../redux/store/store";

import { StyledHeaderButton } from "./header_button_wrapper.styled";

export const SwitchThemeButton = () => {
  const { getTheme, themeType, setThemeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.appAuthReducer.user);

  const handleClick = () => {
    themeType === "dark" ? setThemeType("light") : setThemeType("dark");
    user && dispatch(switchUserTheme(user));
  };

  return (
    <StyledHeaderButton type="button" $colors={colors} onClick={handleClick}>
      <Brightness3Icon />
    </StyledHeaderButton>
  );
};
