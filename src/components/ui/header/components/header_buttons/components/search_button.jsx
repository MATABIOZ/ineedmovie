import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import { ColorThemeContext } from "../../../../../../context/color_theme/color_theme_context_provider";
import { HeaderContext } from "../../../../../../context/header_context/header_context_provider";
import { StyledHeaderButton } from "./header_button_wrapper.styled";
export const SearchButton = () => {
    const { getTheme, themeType } = useContext(ColorThemeContext);
    const colors = getTheme(themeType);
    const { searchIsActive, setSearchIsActive } = useContext(HeaderContext);
    const [searchButtonDisabled, setSearchButtonDisabled] = useState(false);
    const params = useParams();
    useEffect(() => {
        params.value && setSearchButtonDisabled(true);
    }, []);
    const handleSearchToggle = () => {
        setTimeout(() => {
            !searchIsActive && setSearchIsActive(!searchIsActive);
        });
    };
    return (<StyledHeaderButton type="button" $colors={colors} $searchButtonDisabled={searchButtonDisabled} onClick={handleSearchToggle} disabled={searchButtonDisabled}>
      {searchIsActive && !searchButtonDisabled ? (<SearchOffIcon />) : (<SearchIcon />)}
    </StyledHeaderButton>);
};
