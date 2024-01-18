import styled from "styled-components";

import { MEDIA_LARGE_LAPTOP } from "components/consts/media_vars";

export const StyledHeaderButtonsWrapper = styled.div({
  display: "flex",
  width: "100%",
  justifyContent: "flex-end",
  gap: 30,
  [MEDIA_LARGE_LAPTOP]: {
    gap: 14,
  },
});
