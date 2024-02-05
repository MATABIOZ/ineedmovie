import { Form } from "formik";
import styled from "styled-components";
import { MEDIA_MOBILE } from "../../consts/media_vars";
export const StyledFormContainer = styled.div({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
});
export const StyledForm = styled(Form)(({ $colors }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: $colors.activeItemBackground,
    border: `1px solid ${$colors.thinBorder}`,
    borderRadius: "12px",
    maxWidth: "850px",
    width: "100%",
    padding: "24px",
    gap: "14px",
    height: "auto",
    [MEDIA_MOBILE]: {
        padding: "14px",
    },
}));
