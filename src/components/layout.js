import React from "react"
import PropTypes from "prop-types"

import Header from "./Home/header"
import Footer from "./Base/footer"
import Cursor from '../components/Base/Cursor'
import "../scss/main.scss"

const Layout = ({ children, mousePosX, mousePosY }) => (
  <React.Fragment>
    <Cursor handlePosX={ mousePosX } handlePosY={ mousePosY } />
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
