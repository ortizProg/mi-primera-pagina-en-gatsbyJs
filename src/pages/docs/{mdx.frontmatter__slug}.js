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
import EstructuraDocs from "../../components/EstructuraDocs";

const DocumentacionBlock = ({ data, children }) => {
  return (
    <EstructuraDocs>
      {children}
    </EstructuraDocs>
  )
}
export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`
export const Head = () => <Seo title="Como | Met" />
export default DocumentacionBlock;