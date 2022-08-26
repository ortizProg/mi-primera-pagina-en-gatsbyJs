import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import {headerContainer, navLogo, navTitle, navContainer, optionsNavContainer,optionsNavItem,optionsNavText} from './styles/subNavBar.module.css'


const SubNavBar = ({ruta, title}, props) => {

    return(
        <div className={headerContainer}>
            <nav className={navContainer}>
                <Link className={navTitle} to={ruta}>
                    {title}
                </Link>
                <ul className={optionsNavContainer}>
                    {props.children}
                </ul>
            </nav>
        </div>
    )


}

export default SubNavBar;