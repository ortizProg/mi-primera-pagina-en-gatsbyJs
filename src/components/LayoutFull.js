import * as React from 'react';
import {Link, graphql, useStaticQuery} from "gatsby";
import {layoutContainerFull} from './styles/Layout.module.css'

const LayoutFull = (props) => {

  return (
    <div className={layoutContainerFull}>
        {props.children}
    </div>
  )

}

export default LayoutFull;