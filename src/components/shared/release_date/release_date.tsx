import { FC, useContext } from "react";
import EventIcon from "@mui/icons-material/Event";

import { ColorThemeContext } from "../../../context/color_theme/color_theme_context_provider";

import { StyledReleaseDate } from "./release_date.styled";

interface IReleaseDateProps {
  releaseDate: string;
}

export const ReleaseDate: FC<IReleaseDateProps> = ({ releaseDate }) => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  return (
    <StyledReleaseDate $colors={colors}>
      <EventIcon />
      {releaseDate.substring(0, 4)}
    </StyledReleaseDate>
  );
};
