import styled from "styled-components";

import { IColorsProps } from "./context/color_theme/color_themes";

export const StyledApp = styled.div<IColorsProps>(({ $colors }) => ({
  backgroundColor: $colors.mainBackground,
  color: $colors.mainText,
  minWidth: "100%",
  minHeight: "100vh",
  padding: "0 16px",
  position: "relative",
}));
