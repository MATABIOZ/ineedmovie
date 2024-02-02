import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ColorThemeContext } from "../../../../../context/color_theme/color_theme_context_provider";

import {
  StyledFormButton,
  StyledFormButtonsContainer,
} from "./form_buttons.styled";

interface IFormButtonsProps {
  submitIsActive: boolean;
  handleSubmit: () => void;
}

export const FormButtons: FC<IFormButtonsProps> = ({
  submitIsActive,
  handleSubmit,
}) => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <StyledFormButtonsContainer>
      <StyledFormButton
        $colors={colors}
        type="button"
        onClick={handleNavigate}
        $buttonForSubmit={false}
      >
        Back
      </StyledFormButton>
      <StyledFormButton
        $colors={colors}
        type="submit"
        $buttonForSubmit={true}
        disabled={!submitIsActive}
        $isActive={submitIsActive}
        onSubmit={handleSubmit}
      >
        Send
      </StyledFormButton>
    </StyledFormButtonsContainer>
  );
};
