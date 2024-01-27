import ReactPlayer from "react-player";
import styled from "styled-components";

import { IColorsProps } from "../../../context/color_theme/color_themes";
import { MEDIA_LARGE_LAPTOP, MEDIA_MOBILE } from "../../consts/media_vars";

export const StyledReactPlayerWrapper = styled.div<IColorsProps>(
  ({ $colors }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: $colors.thickBorder,
    width: "100%",
    height: "100%",
  }),
);

export const StyledReactPlayer = styled(ReactPlayer)<IColorsProps>(
  ({ $colors }) => ({
    overflow: "hidden",
    borderRadius: "12px",
    border: `1px solid ${$colors.thinBorder}`,
  }),
);

export const StyledPlayerMessageWrapper = styled.div<IColorsProps>(
  ({ $colors }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: "12px",
    border: `1px solid ${$colors.thinBorder}`,
    backgroundColor: $colors.itemBackground,
    width: "100%",
    height: "100%",
  }),
);

export const StyledPlayerMessage = styled.h3<IColorsProps>(({ $colors }) => ({
  fontSize: 38,
  fontWeight: 700,
  lineHeight: "150%",
  color: $colors.mainText,
  [MEDIA_LARGE_LAPTOP]: {
    fontSize: 30,
  },
  [MEDIA_MOBILE]: {
    fontSize: 24,
    paddingBottom: 20,
  },
}));
