import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import {headerContainer, navLogo, navTitle, navContainer, optionsNavContainer,optionsNavItem,optionsNavText} from './styles/navBar.module.css'


const NavBar = ({srcImg}) => {

    return(
        <header className={headerContainer}>
            <nav className={navContainer}>
                <Link to="/">
                    <img className={navLogo} src={srcImg} />
                </Link>
                <ul className={optionsNavContainer}>
                    <li className={optionsNavItem}>
                        <Link className={optionsNavText} to="/proyectos"> 
                                Proyectos
                        </Link>
                    </li>
                    <li className={optionsNavItem}>
                        <Link className={optionsNavText} to="/equipo"> 
                                Equipo
                        </Link>
                    </li>
                    <li className={optionsNavItem}>
                        <Link className={optionsNavText} to="/repositorios"> 
                                Repositorios
                        </Link>
                    </li>
                    <li className={optionsNavItem}>
                        <Link className={optionsNavText} to="/docs"> 
                                Documentación
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )


}

export default NavBar;