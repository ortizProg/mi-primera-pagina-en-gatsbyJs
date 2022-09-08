import React from "react";
import LogoEmpresa from '../../images/MetLogo.png';
import Layout from "../../components/Layout";
import '../../components/styles/defaultStyles.css'
import NavBar from "../../components/NavBar";
import SubNavBar from "../../components/SubNavBar";
import Seo from "../../components/Seo";
import SideNavBar from "../../components/SideNavBar";
import { contentContainer } from "../../components/styles/Layout.module.css";
<<<<<<< HEAD
import { graphql, Link } from "gatsby";
import EstructuraDocs from "../../components/EstructuraDocs";

const DocumentacionBlock = ({ data, children }) => {
  return (
    <EstructuraDocs>
      {children}
    </EstructuraDocs>
=======
import { graphql} from "gatsby";
import SideNavBarItem from "../../components/SideNavBarItem";

const DocumentacionBlock = ({ data, children }) => {
  return (
    <React.Fragment>
            <NavBar srcImg={LogoEmpresa} />
            <main>
                <SubNavBar title="Documentación" />
                <section className={contentContainer}>
                    <SideNavBar>
                    {
                      data.allMdx.nodes.map((node) => {
                        <SideNavBarItem id={node.id} ruta={node.frontmatter.slug} titulo={node.frontmatter.title} />
                      })
                    }
                    </SideNavBar>
                    <Layout pageTitle="MET Documentation">
                      {children}
                    </Layout>
                </section>
            </main>
        </React.Fragment>
>>>>>>> remote
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
export const Head = () => <Seo title="Como | Met" />
export default DocumentacionBlock;