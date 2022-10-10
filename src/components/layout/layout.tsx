import { useState } from "react";
import { Link } from "gatsby";
import GlobalStyle from "../globalStyles";
import { useMediaQuery } from "react-responsive";
import { pageData } from "./layoutData";
import { Box, Menu, Typography, styled } from "@mui/material";
import React from "react";
import { clickable, menuOption } from "../commonStyles";
import { NavMenu } from "../NavMenu";

const Layout = ({ children }: { children: any }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const onClickMobileMenu = (e: any) => {
    setAnchorEl(e.currentTarget);
  };
  const currentPageData = pageData.find(
    (data) => data.url === location.pathname
  );
  const pages = pageData.map((page) => {
    return { name: page.name, url: page.url };
  });

  return (
    <>
      <GlobalStyle />
      <LayoutComponent>
        <Header>
          <Box
            display="flex"
            flexDirection="column"
            whiteSpace={!isTabletOrMobile ? "nowrap" : ""}
          >
            <Box>
              <Box display="flex" gap=".5rem">
                <LinkText to="/">
                  <Typography variant="h2">{currentPageData?.title}</Typography>
                </LinkText>

                <Typography variant="h5">
                  <LinkText to={currentPageData?.url || "/"}>
                    {currentPageData?.subtitle}{" "}
                  </LinkText>
                </Typography>
              </Box>
            </Box>
            <Typography variant="h5">{currentPageData?.heading}</Typography>
          </Box>

          {(isTabletOrMobile && (
            <Box display="flex" justifyContent="center" alignItems="center">
              <MenuButton onClick={onClickMobileMenu}>
                <Typography variant="h5">Menu</Typography>
              </MenuButton>
            </Box>
          )) || <NavMenu options={pages} horizontal />}
        </Header>
        <main>{children}</main>
        {/* TODO: create a custom menu component that fits my flat theme */}
        <Menu
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={() => setAnchorEl(null)}
        >
          <NavMenu options={pages} />
        </Menu>
      </LayoutComponent>
    </>
  );
};
const MenuButton = styled("div")({
  ...menuOption,
  ...clickable,
});

const LayoutComponent = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  maxHeight: "100vh",
  overflow: "hidden",
});
const Header = styled("header")({
  margin: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2rem",
});
const LinkText = styled(Link)({
  textDecoration: "none",
  ...clickable,
});
export default Layout;
