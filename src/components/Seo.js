import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href={'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'} rel="stylesheet"></link>
      <title>{title}</title>
    </React.Fragment>
    
  )
}

export default Seo