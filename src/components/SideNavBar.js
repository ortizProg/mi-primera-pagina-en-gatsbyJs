import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import arrow from '../images/arrow.png';
import {sideNavBarContainer, sideNavBar, inputCheck, childrenNavBar, menuArrow, sideNavBarItemShow, sideNavBarTitle, sideNavBarItem, sideNavBarText, sideNavBarTitleContainer, sideNavBarIcon} from './styles/SideNavBar.module.css';

<<<<<<< HEAD
const SideNavBar = ({data, titulo, children}) => {

        return(
            <div className={sideNavBarContainer}>
                <ul className={sideNavBar}>
                    <div className={sideNavBarTitleContainer} >
                        <span className={sideNavBarIcon}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 10C6 8.4 7.4 7 9 7H12V12H6V10Z" fill="#F5F5F5" stroke="#78757A" stroke-width="1.5"></path><path d="M9 7C10.6 7 12 8.4 12 10V22C12 23.6 13.3 25 15 25C16.7 25 18 23.6 18 22H24V10C24 8.4 22.6 7 21 7H9Z" fill="white"></path><path d="M9 7H21C22.6 7 24 8.4 24 10V22" stroke="#78757A" stroke-width="1.5"></path><path d="M15 24C13.3 24 12 22.6 12 21V10C12 8.4 10.6 7 9 7" stroke="#78757A" stroke-width="1.5"></path><path d="M15 24H24C25.6 24 27 22.6 27 21V20H18V21C18 22.6 16.6 24 15 24Z" fill="white" stroke="#78757A" stroke-width="1.5"></path><circle cx="20.2002" cy="11" r="1" fill="#78757A"></circle><circle cx="16" cy="11" r="1" fill="#78757A"></circle><path d="M21.2002 13.8999C21.2002 13.8999 21.2002 14.9999 21.2002 15.1999C21.2002 15.7999 20.9002 16.2999 20.4002 16.7999C19.9002 17.2999 19.1002 17.6999 18.2002 17.6999C17.3002 17.6999 16.5002 17.2999 16.0002 16.7999C15.5002 16.2999 15.2002 15.7999 15.2002 15.1999C15.2002 14.8999 15.2002 13.8999 15.2002 13.8999C16.9002 13.8999 19.6002 13.8999 21.2002 13.8999Z" fill="#78757A"></path></svg>
                        </span>
                        <h4 className={sideNavBarTitle}>Documentacion</h4>
                    </div>
                    {children}

                </ul>
            </div>
        )

}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`
=======
const SideNavBar = ({data, children}) => {

    return(
        <div className={sideNavBarContainer}>
            <ul className={sideNavBar}>
                <div className={sideNavBarTitleContainer} >
                    <span className={sideNavBarIcon}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 10C6 8.4 7.4 7 9 7H12V12H6V10Z" fill="#F5F5F5" stroke="#78757A" stroke-width="1.5"></path><path d="M9 7C10.6 7 12 8.4 12 10V22C12 23.6 13.3 25 15 25C16.7 25 18 23.6 18 22H24V10C24 8.4 22.6 7 21 7H9Z" fill="white"></path><path d="M9 7H21C22.6 7 24 8.4 24 10V22" stroke="#78757A" stroke-width="1.5"></path><path d="M15 24C13.3 24 12 22.6 12 21V10C12 8.4 10.6 7 9 7" stroke="#78757A" stroke-width="1.5"></path><path d="M15 24H24C25.6 24 27 22.6 27 21V20H18V21C18 22.6 16.6 24 15 24Z" fill="white" stroke="#78757A" stroke-width="1.5"></path><circle cx="20.2002" cy="11" r="1" fill="#78757A"></circle><circle cx="16" cy="11" r="1" fill="#78757A"></circle><path d="M21.2002 13.8999C21.2002 13.8999 21.2002 14.9999 21.2002 15.1999C21.2002 15.7999 20.9002 16.2999 20.4002 16.7999C19.9002 17.2999 19.1002 17.6999 18.2002 17.6999C17.3002 17.6999 16.5002 17.2999 16.0002 16.7999C15.5002 16.2999 15.2002 15.7999 15.2002 15.1999C15.2002 14.8999 15.2002 13.8999 15.2002 13.8999C16.9002 13.8999 19.6002 13.8999 21.2002 13.8999Z" fill="#78757A"></path></svg>
                    </span>
                    <Link className={sideNavBarTitle} to="/docs">
                        Documentación
                    </Link>
                </div>
                <li className={sideNavBarItem}>
                    <Link className={sideNavBarText} to={`/docs/`}>Visión general</Link>
                </li>
                <li className={sideNavBarItem}>
                    <Link className={sideNavBarText} to={`/docs/como-empezar`}>Como empezar</Link>
                </li>
                <li className={sideNavBarItem}>
                    <input className={inputCheck} type="checkbox" id="navFramework" name="navFramework" />
                    <div className={sideNavBarItemShow}>
                        <label className={sideNavBarText} htmlFor="navFramework">FRAMEWORK</label>
                        <span className={sideNavBarIcon}>
                            <img className={menuArrow} src={arrow} />
                        </span>
                    </div>
                    <ul className={childrenNavBar}>
                        <li className={sideNavBarItem}>
                            <Link className={sideNavBarText} to={`/docs/framework`}>Visión general</Link>
                        </li>
                        <li className={sideNavBarItem}>
                            <Link className={sideNavBarText} to={`/docs/framework/como-empezar`}>Como empezar</Link>
                        </li>
                        <li className={sideNavBarItem}>
                            <Link className={sideNavBarText} to={`/docs/framework/como-empezar`}>Como modificarlo</Link>
                        </li>
                    </ul>
                </li>
                <li className={sideNavBarItem}>
                    <input className={inputCheck} type="checkbox" id="navCloud" name="navCloud" />
                    <div className={sideNavBarItemShow}>
                        <label className={sideNavBarText} htmlFor="navCloud">METCLOUD</label>
                        <span className={sideNavBarIcon}>
                            <img className={menuArrow} src={arrow} />
                        </span>
                    </div>
                    <ul className={childrenNavBar}>
                        <li className={sideNavBarItem}>
                            <Link className={sideNavBarText} to={`/docs/metcloud/como-empezar`}>Visión general</Link>
                        </li>
                        <li className={sideNavBarItem}>
                            <Link className={sideNavBarText} to={`/docs/metcloud/como-empezar`}>Como utilizarlo</Link>
                        </li>
                        <li className={sideNavBarItem}>
                            <Link className={sideNavBarText} to={`/docs/metcloud/como-empezar`}>Como modificarlo</Link>
                        </li>
                    </ul>
                </li>
                <li className={sideNavBarItem}>
                    <input className={inputCheck} type="checkbox" id="metVoa" name="metVoa" />
                    <div className={sideNavBarItemShow}>
                        <label className={sideNavBarText} htmlFor="metVoa">METVOA</label>
                        <span className={sideNavBarIcon}>
                            <img className={menuArrow} src={arrow} />
                        </span>
                    </div>
                    <ul className={childrenNavBar}>
                        <li className={sideNavBarItem}>
                            <Link className={sideNavBarText} to={`/docs/metvoa/como-empezar`}>Visión general</Link>
                        </li>
                        <li className={sideNavBarItem}>
                            <Link className={sideNavBarText} to={`/docs/metvoa/como-empezar`}>Como utilizarlo</Link>
                        </li>
                        <li className={sideNavBarItem}>
                            <Link className={sideNavBarText} to={`/docs/metvoa/como-empezar`}>Como modificarlo</Link>
                        </li>
                    </ul>
                </li>
                <li className={sideNavBarItem}>
                    <input className={inputCheck} type="checkbox" id="metPay" name="metPay" />
                    <div className={sideNavBarItemShow}>
                        <label className={sideNavBarText} htmlFor="metPay">METPAY</label>
                        <span className={sideNavBarIcon}>
                            <img className={menuArrow} src={arrow} />
                        </span>
                    </div>
                    <ul className={childrenNavBar}>
                        <li className={sideNavBarItem}>
                            <Link className={sideNavBarText} to={`/docs/metpay/como-empezar`}>Visión general</Link>
                        </li>
                        <li className={sideNavBarItem}>
                            <Link className={sideNavBarText} to={`/docs/metpay/como-empezar`}>Como utilizarlo</Link>
                        </li>
                        <li className={sideNavBarItem}>
                            <Link className={sideNavBarText} to={`/docs/metpay/como-empezar`}>Como modificarlo</Link>
                        </li>
                    </ul>
                </li>
                <li className={sideNavBarItem}>
                    <input className={inputCheck} type="checkbox" id="metBia" name="metBia" />
                    <div className={sideNavBarItemShow}>
                        <label className={sideNavBarText} htmlFor="metBia">METBIA</label>
                        <span className={sideNavBarIcon}>
                            <img className={menuArrow} src={arrow} />
                        </span>
                    </div>
                    <ul className={childrenNavBar}>
                        <li className={sideNavBarItem}>
                            <Link className={sideNavBarText} to={`/docs/metbia/como-empezar`}>Visión general</Link>
                        </li>
                        <li className={sideNavBarItem}>
                            <Link className={sideNavBarText} to={`/docs/metbia/como-empezar`}>Como utilizarlo</Link>
                        </li>
                        <li className={sideNavBarItem}>
                            <Link className={sideNavBarText} to={`/docs/metbia/como-empezar`}>Como modificarlo</Link>
                        </li>
                    </ul>
                </li>
                <li className={sideNavBarItem}>
                    <input className={inputCheck} type="checkbox" id="metsus" name="metsus" />
                    <div className={sideNavBarItemShow}>
                        <label className={sideNavBarText} htmlFor="metsus">METBIASUS</label>
                        <span className={sideNavBarIcon}>
                            <img className={menuArrow} src={arrow} />
                        </span>
                    </div>
                    <ul className={childrenNavBar}>
                        <li className={sideNavBarItem}>
                            <Link className={sideNavBarText} to={`/docs/metsus/como-empezar`}>Visión general</Link>
                        </li>
                        <li className={sideNavBarItem}>
                            <Link className={sideNavBarText} to={`/docs/metsus/como-empezar`}>Como utilizarlo</Link>
                        </li>
                        <li className={sideNavBarItem}>
                            <Link className={sideNavBarText} to={`/docs/metsus/como-empezar`}>Como modificarlo</Link>
                        </li>
                    </ul>
                </li>
                <li className={sideNavBarItem}>
                    <input className={inputCheck} type="checkbox" id="metmda" name="metmda" />
                    <div className={sideNavBarItemShow}>
                        <label className={sideNavBarText} htmlFor="metmda">METMDA</label>
                        <span className={sideNavBarIcon}>
                            <img className={menuArrow} src={arrow} />
                        </span>
                    </div>
                    <ul className={childrenNavBar}>
                        <li className={sideNavBarItem}>
                            <Link className={sideNavBarText} to={`/docs/metmda/como-empezar`}>Visión general</Link>
                        </li>
                        <li className={sideNavBarItem}>
                            <Link className={sideNavBarText} to={`/docs/metmda/como-empezar`}>Como utilizarlo</Link>
                        </li>
                        <li className={sideNavBarItem}>
                            <Link className={sideNavBarText} to={`/docs/metmda/como-empezar`}>Como modificarlo</Link>
                        </li>
                    </ul>
                </li>
                <li className={sideNavBarItem}>
                    <input className={inputCheck} type="checkbox" id="voa18" name="voa18" />
                    <div className={sideNavBarItemShow}>
                        <label className={sideNavBarText} htmlFor="voa18">VOAS/18</label>
                        <span className={sideNavBarIcon}>
                            <img className={menuArrow} src={arrow} />
                        </span>
                    </div>
                    <ul className={childrenNavBar}>
                        <li className={sideNavBarItem}>
                            <Link className={sideNavBarText} to={`/docs/voa18/como-empezar`}>Visión general</Link>
                        </li>
                        <li className={sideNavBarItem}>
                            <Link className={sideNavBarText} to={`/docs/voa18/como-empezar`}>Como utilizarlo</Link>
                        </li>
                        <li className={sideNavBarItem}>
                            <Link className={sideNavBarText} to={`/docs/voa18/como-empezar`}>Como modificarlo</Link>
                        </li>
                    </ul>
                </li>
                
                
                <li className={sideNavBarItem}>
                    <Link className={sideNavBarText} to={`/docs/Tonces`}>Edición</Link>
                </li>
            </ul>
        </div>
    )

}

>>>>>>> remote

export default SideNavBar;
