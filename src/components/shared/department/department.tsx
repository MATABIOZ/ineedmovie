import { FC, useContext } from "react";
import WorkspacesIcon from "@mui/icons-material/Workspaces";

import { ColorThemeContext } from "../../../context/color_theme/color_theme_context_provider";

import { StyledDepartment } from "./department.styled";

interface IDepartment {
  department: string;
}

export const Department: FC<IDepartment> = ({ department }) => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  return (
    <StyledDepartment $colors={colors}>
      <WorkspacesIcon />
      {department}
    </StyledDepartment>
  );
};
