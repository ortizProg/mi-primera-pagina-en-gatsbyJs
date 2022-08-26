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


function Documentacion({ data, children }) {

    return(
        <React.Fragment>
            <NavBar srcImg={LogoEmpresa} />
            <main>
                <SubNavBar title="Documentación" />
                <section className={contentContainer}>
                    <SideNavBar />
                    <Layout pageTitle="MET Documentation">
                      <h1 className={docsTitle}>Bienvenido a la <span className={docsColorBlue}>documentación de MetCloud</span></h1>
                      <br />
                      <p className={docsTextDescript}>MetCloud es un conjunto de programas informáticos de la empresa MetGroup. Tiene como objetivo unificar las soluciones a varias necesidades que tiene el sector de transporte masivo.</p>
                      <br />
                      <br />
                      <div className={cardsContainer}>
                        <div className={cardContainer}>
                          <h3 className={cardTitle}>¿Listo para sumergirte?</h3>
                          <p className={cardText}>Empieza a configurar tu entorno en pocos pasos</p>
                          <button className={cardBtn}>Inicio Rapido</button>
                        </div>
                        <div className={cardContainer}>
                          <h3 className={cardTitle}>¿Eres nuevo en Met?</h3>
                          <p className={cardText}>Empieza por conocer los conceptos básicos</p>
                          <button className={cardBtn}>Pruebe el tutorial</button>
                        </div>
                      </div>
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

export default Documentacion;


