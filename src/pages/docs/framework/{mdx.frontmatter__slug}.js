import React from "react";
import LogoEmpresa from '../../../images/MetLogo.png';
import Layout from "../../../components/Layout";
import '../../../components/styles/defaultStyles.css'
import NavBar from "../../../components/NavBar";
import SubNavBar from "../../../components/SubNavBar";
import Seo from "../../../components/Seo";
import SideNavBar from "../../../components/SideNavBar";
import { contentContainer } from "../../../components/styles/Layout.module.css";
import { graphql} from "gatsby";
import SideNavBarItem from "../../../components/SideNavBarItem";

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
export default DocumentacionBlock;