import * as React from "react";
import { Link, useStaticQuery, graphql } from 'gatsby';
import LogoEmpresa from '../images/MetLogo.png';
import LayoutFull from "../components/LayoutFull";
import { StaticImage } from "gatsby-plugin-image";
import '../components/styles/defaultStyles.css';
import CardNavegation from "../components/cardNavegation";
import NavBar from "../components/NavBar";
import {primaryImage} from '../components/styles/index.module.css';
/* Componentes */
import Seo from "../components/Seo";


const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <main>
      <NavBar srcImg={LogoEmpresa} />
      <LayoutFull pageTitle="MET Documentation">
        <StaticImage className={primaryImage} src="https://www.metgroupsas.com/Archivos/Contenido/Imagenes/slidehome/8hrv5eigdx.jpg" alt="pedro"/>
      </LayoutFull>
      
      <br/>
    </main>
  )
}

export default IndexPage;

// Modificación del HTML



// Modificación del head

export const Head = () => <Seo title="Documentacion Meet" />

