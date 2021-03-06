import React from "react"
import PropTypes from "prop-types"

import Header from "./Home/header"
import Footer from "./Base/Footer"
import Cursor from '../components/Base/Cursor'
import "../scss/main.scss"
import { ParallaxProvider } from 'react-scroll-parallax';


const Layout = ({ children }) => (
  <ParallaxProvider>
  <React.Fragment>
    <Cursor />
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </React.Fragment>
  </ParallaxProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
