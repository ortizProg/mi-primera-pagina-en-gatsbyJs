import * as React from 'react';
import './styles/defaultStylesMDX.css';
import {Link, graphql, useStaticQuery} from "gatsby";
import {layoutContainer} from './styles/Layout.module.css'

const Layout = (props) => {

  const data = (graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
        }
      }
    }
  `)

  return (
    <div className={layoutContainer}>
        {props.children}
    </div>
    
  )

}

export default Layout;