import React from "react";
import LogoEmpresa from '../images/MetLogo.png';
import Layout from "./Layout";
import './styles/defaultStyles.css'
import NavBar from "./NavBar";
import SubNavBar from "./SubNavBar";
import Seo from "./Seo";
import SideNavBar from "./SideNavBar";
import { contentContainer } from "./styles/Layout.module.css";
import { graphql, useStaticQuery} from "gatsby";
import SideNavBarItem from "./SideNavBarItem";

function EstructuraDocs({children}) {

  const data = useStaticQuery(graphql`
  query {
    allMdx {
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
  `)

    

    return(
        <React.Fragment>
            <NavBar srcImg={LogoEmpresa} />
            <main>
                <SubNavBar title="Documentación" />
                <section className={contentContainer}>
                    <SideNavBar />
                    <Layout pageTitle="">
                      {children}
                    </Layout>
                </section>
            </main>
        </React.Fragment>
    )
}

export const Head = () => <Seo title="Documentación | Met" />

export default EstructuraDocs;


