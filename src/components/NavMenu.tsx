import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { clickable, menuOption } from "./commonStyles";
interface Props {
  options: MenuItem[];
  horizontal?: boolean;
}
interface MenuItem {
  name: string;
  url: string;
  image?: string;
  onClick?: () => void;
}
//menu takes up full width of its container.
//unhovered items are black
//hovered items are white with black text
export const NavMenu: React.FC<Props> = ({ options, horizontal = false }) => {
  console.log(options);
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection={horizontal ? "row" : "column"}
      overflow="auto"
      justifyContent={"end"}
    >
      {options.map((option) => (
        <Option
          onClick={
            !!option.onClick ? option.onClick : () => navigate(option.url)
          }
        >
          {!!option.image && (
            <div>
              <StaticImage alt="" src={option.image} />
            </div>
          )}
          <Typography variant="h5">{option.name}</Typography>
        </Option>
      ))}
    </Box>
  );
};
const Option = styled("div")({
  ...menuOption,
  ...clickable,
});
