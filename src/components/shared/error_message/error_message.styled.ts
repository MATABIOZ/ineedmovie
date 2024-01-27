import styled from "styled-components";

import { IColorsProps } from "../../../context/color_theme/color_themes";

export const StyledErrorMessage = styled.h1<IColorsProps>(({ $colors }) => ({
  display: "flex",
  minHeight: "100vh",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  fontSize: "50px",
  color: $colors.colorfulItem,
}));
