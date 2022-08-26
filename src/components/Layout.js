import * as React from 'react';
import {Link, graphql, useStaticQuery} from "gatsby";
import {layoutContainer} from './styles/Layout.module.css'

const Layout = ({children}) => {

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
        {children}
    </div>
    
  )

}

export default Layout;