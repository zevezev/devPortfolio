import { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";
import { useMediaQuery } from "react-responsive";
import { pages } from "./layoutData";
import { Menu } from "@mui/material";
import React from "react";
import { SiteMenu } from "./SiteMenu";

const Layout = ({
  pageTitle,
  children,
}: {
  pageTitle: string;
  children: any;
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const onClickMobileMenu = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <>
      <GlobalStyle />
      <LayoutComponent>
        <Header>
          <SiteTitle>
            <LinkText to={"/"}>{data.site.siteMetadata.title} </LinkText>
          </SiteTitle>

          {/* todo put this in an expand on movile and change the flex direciton */}
          {(isTabletOrMobile && (
            <MobileMenuButton onClick={onClickMobileMenu}>X</MobileMenuButton>
          )) || <SiteMenu />}
        </Header>
        <main>
          <h1>{pageTitle}</h1>
          {children}
        </main>
        <Menu
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={() => setAnchorEl(null)}
        ></Menu>
      </LayoutComponent>
    </>
  );
};

const MobileMenuButton = styled.div`
  font-size: "18px";
`;
const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
`;
const Header = styled.header`
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LinkText = styled(Link)`
  color: black;
  text-decoration: none;
`;
const SiteTitle = styled.h1`
  font-size: 2rem;
  color: gray;
  font-weight: 700;
  margin: 0;
`;
export default Layout;
