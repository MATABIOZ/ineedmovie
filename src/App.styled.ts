import { IColorsProps } from "context/color_theme/color_themes";
import styled from "styled-components";

export const StyledApp = styled.div<IColorsProps>(({ $colors }) => ({
  backgroundColor: $colors.mainBackground,
  color: $colors.mainText,
  minWidthidth: "100vw",
  minHeight: "100vh",
  padding: "0 16px",
  position: "relative",
}));
