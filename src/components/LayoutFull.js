import * as React from 'react';
import {Link, graphql, useStaticQuery} from "gatsby";
import {layoutContainerFull} from './styles/Layout.module.css'

const LayoutFull = (props) => {

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
    <div className={layoutContainerFull}>
        {props.children}
    </div>
    
  )

}

export default LayoutFull;