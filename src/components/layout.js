import React from "react"
import PropTypes from "prop-types"

import Header from "./Home/header"
import Footer from "./Base/footer"
import "../scss/main.scss"

const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
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
