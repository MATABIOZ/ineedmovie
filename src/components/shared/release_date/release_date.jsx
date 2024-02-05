import { useContext } from "react";
import EventIcon from "@mui/icons-material/Event";
import { ColorThemeContext } from "../../../context/color_theme/color_theme_context_provider";
import { StyledReleaseDate } from "./release_date.styled";
export const ReleaseDate = ({ releaseDate }) => {
    const { getTheme, themeType } = useContext(ColorThemeContext);
    const colors = getTheme(themeType);
    return (<StyledReleaseDate $colors={colors}>
      <EventIcon />
      {releaseDate.substring(0, 4)}
    </StyledReleaseDate>);
};
