import { useContext, useEffect, useState } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { ColorThemeContext } from "../../../../context/color_theme/color_theme_context_provider";
import { StyledScrollToTopButton } from "./scroll_to_top_button.styled";
export const ScrollToTopButton = () => {
    const { getTheme, themeType } = useContext(ColorThemeContext);
    const colors = getTheme(themeType);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const headerHeight = 95;
            setIsVisible(scrollY > headerHeight);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (<StyledScrollToTopButton $colors={colors} $isVisible={isVisible} onClick={scrollToTop}>
      <KeyboardDoubleArrowUpIcon />
    </StyledScrollToTopButton>);
};
