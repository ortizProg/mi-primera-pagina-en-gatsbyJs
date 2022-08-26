import React from "react";
import LogoEmpresa from '../../images/MetLogo.png';
import Layout from "../../components/Layout";
import '../../components/styles/defaultStyles.css'
import NavBar from "../../components/NavBar";
import SubNavBar from "../../components/SubNavBar";
import Seo from "../../components/Seo";
import SideNavBar from "../../components/SideNavBar";
import { contentContainer } from "../../components/styles/Layout.module.css";
import { graphql, Link } from "gatsby";
import { docsTitle, docsColorBlue, docsTextReduceContainer, docsTextDescript, cardContainer, cardTitle, cardText, cardBtn, cardsContainer} from "../../components/styles/defaultStylesDocs.module.css";
import SideNavBarItem from "../../components/SideNavBarItem";
import {MDXRenderer} from "gatsby-plugin-mdx";
import EstructuraDocs from "../../components/EstructuraDocs";

function Documentacion({ data, children }) {

    return(
      <EstructuraDocs>
          
              
      </EstructuraDocs>

    )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Documentación | Met" />

export default Documentacion;


