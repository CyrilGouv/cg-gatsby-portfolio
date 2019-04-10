import React from "react"
import PropTypes from "prop-types"

import Header from "./Home/header"
import "../scss/main.scss"

const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    <main>
      {children}
    </main>
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
