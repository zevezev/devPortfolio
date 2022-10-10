import * as React from "react";
import { HeadFC, Link } from "gatsby";
import Seo from "../components/seo";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../components/theme";
import GlobalStyle from "../components/globalStyles";
import { Home } from "./home";
//for now, this page is the dev page. I'll move it to the dev folder when ready to add the other 2 pages.
const IndexPage = () => {
  return (
    <main>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo pageTitle="Home" />;
