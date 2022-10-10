import React from "react";
import Layout from "../components/layout/layout";
import { StaticImage } from "gatsby-plugin-image";
import { NavMenu } from "../components/NavMenu";

export const Home = () => {
  return (
    <Layout>
      <NavMenu options={dummyArticleData} />
      {/* <StaticImage alt="" src={dummyArticleData[0].image} /> */}
    </Layout>
  );
};
const dummyArticleData = [
  {
    name: "Intelus Duet",
    url: "/intelus",
    image: "localhost:8000/images/dev/intelusLogo.png",
  },
  {
    name: "This site",
    url: "/thisSite",
    image: "src/images/ArtExplosionOpenStudio/dreamBeasts.jpeg",
  },
  {
    name: "Art portfolio",
    url: "/art-portfolio",
    image: "src/images/ArtExplosionOpenStudio/dreamBeasts.jpeg",
  },
];
