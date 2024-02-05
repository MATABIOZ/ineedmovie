import { useContext, useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { ColorThemeContext } from "../../../context/color_theme/color_theme_context_provider";
import { StyledVoteAverage } from "./vote_average.styled";
export const VoteAverage = ({ voteAverage }) => {
    const { getTheme, themeType } = useContext(ColorThemeContext);
    const colors = getTheme(themeType);
    const roundedVoteAverage = (Math.round(voteAverage * 10) / 10).toFixed(1);
    const [voteAverageBorderColor, setVoteAverageBorderColor] = useState("");
    const calcRatingBorderColor = () => {
        switch (true) {
            case +roundedVoteAverage >= 7.5:
                setVoteAverageBorderColor("#4CAF50");
                break;
            case +roundedVoteAverage >= 5:
                setVoteAverageBorderColor("#FFC107");
                break;
            default:
                setVoteAverageBorderColor("#F44336");
                break;
        }
    };
    useEffect(() => {
        calcRatingBorderColor();
    }, []);
    return (<StyledVoteAverage $colors={colors} $ratingBorderColor={voteAverageBorderColor}>
      <StarIcon />
      {roundedVoteAverage}
    </StyledVoteAverage>);
};
