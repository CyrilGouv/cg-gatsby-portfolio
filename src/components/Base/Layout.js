import React from "react"
import PropTypes from "prop-types"

import Footer from "./Footer"
import Cursor from './Cursor'
import "../../scss/main.scss"

const Layout = ({ children }) => (
  <React.Fragment>
    <Cursor />
    <main>
      {children}
    </main>
    <Footer />
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
