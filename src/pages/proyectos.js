import React from "react";
import { Link } from 'gatsby';
import LogoEmpresa from '../images/MetLogo.png';
import Layout from "../components/Layout";
import '../components/styles/defaultStyles.css'
import NavBar from "../components/NavBar";
import SubNavBar from "../components/SubNavBar";
import Seo from "../components/Seo";

function Proyectos({data}) {
    return(
        <React.Fragment>
            <NavBar srcImg={LogoEmpresa} />
            <main>
                <SubNavBar title="Proyectos" />
                <Layout pageTitle="MET Documentation">
                
                </Layout>
            </main>
        </React.Fragment>
    )
}

export const Head = () => <Seo title="Proyectos | Met" />

export default Proyectos;


