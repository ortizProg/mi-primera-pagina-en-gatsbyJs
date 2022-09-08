import * as React from 'react'
import { Link } from 'gatsby'
import {sideNavBarContainer, sideNavBar, sideNavBarTitle, sideNavBarItem, sideNavBarText, sideNavBarTitleContainer, sideNavBarIcon} from './styles/SideNavBar.module.css';

const SideNavBarItem = ({data, titulo, children, ruta, id}) => {

  return(
      <li key={id}className={sideNavBarItem}>
          <Link className={sideNavBarText} to={`/docs/${ruta}`}>{titulo}</Link>
      </li>
  )

}

export default SideNavBarItem;
