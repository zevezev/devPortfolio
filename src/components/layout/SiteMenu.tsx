import React from "react";
import styled from "styled-components";
import { pages } from "./layoutData";
import { Link } from "gatsby";

export const SiteMenu = () => {
  return (
    <NavComponent>
      <NavLinks>
        {pages.map((page) => (
          <LinkText to={page.url}>{page.name}</LinkText>
        ))}
      </NavLinks>
    </NavComponent>
  );
};
const NavComponent = styled.nav``;
const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  align-items: center;
  gap: 1.5rem;
`;

const LinkText = styled(Link)`
  color: black;
  text-decoration: none;
`;
