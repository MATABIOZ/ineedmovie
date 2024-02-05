import { BurgerButton } from "./components/burger_button/burger_button";
import { SearchButton } from "./components/search_button";
import { SwitchThemeButton } from "./components/switch_theme_button";
import { UserButton } from "./components/user_button";
import { StyledHeaderButtonsWrapper } from "./header_buttons_wrapper.styled";
export const HeaderButtons = () => {
    return (<StyledHeaderButtonsWrapper>
      <SearchButton />
      <SwitchThemeButton />
      <UserButton />
      <BurgerButton />
    </StyledHeaderButtonsWrapper>);
};
