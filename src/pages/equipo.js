import React from "react";
import { Link } from 'gatsby';
import LogoEmpresa from '../images/MetLogo.png';
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import '../components/styles/defaultStyles.css'
import NavBar from "../components/NavBar";
import SubNavBar from "../components/SubNavBar";
import Seo from "../components/Seo";

function Equipo() {
    return(
        <main>
            <NavBar srcImg={LogoEmpresa} />
            <SubNavBar title="Equipo" />
            <Layout pageTitle="MET Documentation">
                
            </Layout>
        </main>
    )
}

export const Head = () => <Seo title="Equipo | Met" />

export default Equipo;


