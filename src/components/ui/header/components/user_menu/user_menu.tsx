import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { ColorThemeContext } from "../../../../../context/color_theme/color_theme_context_provider";
import { HeaderContext } from "../../../../../context/header_context/header_context_provider";
import {
  clearUser,
  deleteUser,
} from "../../../../../redux/reducers/auth_reducer/auth_reducer";
import { IUser } from "../../../../../redux/reducers/auth_reducer/auth_reducer_types";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../redux/store/store";

import {
  StyledUserMenuActionButton,
  StyledUserMenuContainer,
  StyledUserMenuLogin,
  StyledUserMenuWrapper,
} from "./user_menu.styled";

export const UserMenu = () => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  const { userMenuIsActive, setUserMenuIsActive, userMenuRef } =
    useContext(HeaderContext);

  const [deleteUserIsActive, setDeleteUserIsActive] = useState<boolean>(false);

  const user = useAppSelector((state) => state.appAuthReducer.user);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleClickOutside = (event: MouseEvent) => {
    if (!userMenuRef.current?.contains(event.target as HTMLDivElement)) {
      setUserMenuIsActive(false);
      setDeleteUserIsActive(false);
    }
  };
  const handleClickSignUpButton = () => {
    navigate("/authorisation/sign_up");
  };
  const handleClickSignInButton = () => {
    navigate("/authorisation/sign_in");
  };
  const handleClickLogoutButton = () => {
    dispatch(clearUser());
    setUserMenuIsActive(false);
  };
  const handleFirstClickDeleteUserButton = () => {
    setDeleteUserIsActive(true);
  };
  const handleClickCancelDeleteUserButton = () => {
    setDeleteUserIsActive(false);
  };
  const handleClickConfirmDeleteUserButton = () => {
    dispatch(
      deleteUser({ id: (user as IUser).id, login: (user as IUser).login }),
    );
    setUserMenuIsActive(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      {userMenuIsActive && (
        <StyledUserMenuContainer>
          <StyledUserMenuWrapper $colors={colors} ref={userMenuRef}>
            {user && !deleteUserIsActive && (
              <StyledUserMenuLogin $colors={colors} $textColor={"#4CAF50"}>
                <AccountCircleIcon />
                {user.login}
              </StyledUserMenuLogin>
            )}
            {user && deleteUserIsActive && (
              <StyledUserMenuLogin $colors={colors} $textColor={"#F44336"}>
                {"Are You Sure?"}
              </StyledUserMenuLogin>
            )}
            <StyledUserMenuActionButton
              $colors={colors}
              type="button"
              onClick={
                user && !deleteUserIsActive
                  ? handleClickLogoutButton
                  : user && deleteUserIsActive
                    ? handleClickConfirmDeleteUserButton
                    : handleClickSignUpButton
              }
            >
              {user && !deleteUserIsActive
                ? "Logout"
                : user && deleteUserIsActive
                  ? "Confirm"
                  : " Sign Up"}
            </StyledUserMenuActionButton>
            <StyledUserMenuActionButton
              $colors={colors}
              type="button"
              onClick={
                user && !deleteUserIsActive
                  ? handleFirstClickDeleteUserButton
                  : user && deleteUserIsActive
                    ? handleClickCancelDeleteUserButton
                    : handleClickSignInButton
              }
            >
              {user && !deleteUserIsActive
                ? "Delete Account"
                : user && deleteUserIsActive
                  ? "Cancel"
                  : "Sign In"}
            </StyledUserMenuActionButton>
          </StyledUserMenuWrapper>
        </StyledUserMenuContainer>
      )}
    </>
  );
};
