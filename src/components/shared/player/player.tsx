import { FC, useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";

import { ColorThemeContext } from "../../../context/color_theme/color_theme_context_provider";
import { StyledColorfulButton } from "../buttons/colorful_button.styled";

import {
  StyledPlayerMessage,
  StyledPlayerMessageWrapper,
  StyledReactPlayer,
  StyledReactPlayerWrapper,
} from "./player.styled";

interface IPlayerProps {
  videoUrl: string;
  setShowPlayer: React.Dispatch<React.SetStateAction<boolean>>;
  isTrailerKey: boolean;
}

export const Player: FC<IPlayerProps> = ({
  videoUrl,
  setShowPlayer,
  isTrailerKey,
}) => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  const handlePlayerClose = () => {
    setShowPlayer(false);
  };

  return (
    <StyledReactPlayerWrapper $colors={colors}>
      <StyledColorfulButton
        $colors={colors}
        type="button"
        onClick={handlePlayerClose}
      >
        <CloseIcon /> Close Player
      </StyledColorfulButton>
      {isTrailerKey ? (
        <StyledReactPlayer
          $colors={colors}
          url={videoUrl}
          playing
          controls
          width="100%"
          height="100%"
        />
      ) : (
        <StyledPlayerMessageWrapper $colors={colors}>
          <StyledPlayerMessage $colors={colors}>
            Trailer not found :)
          </StyledPlayerMessage>
        </StyledPlayerMessageWrapper>
      )}
    </StyledReactPlayerWrapper>
  );
};
