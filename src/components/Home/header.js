import React from "react"
import { Link } from "gatsby"
import Banner from './Banner'
import arrowImg from '../../images/base/arrow-white.svg'

const Header = () => (
  <header className="homeHeader">
    <Banner />
    <Link to="/contact" className="btn--contact">
      Me contacter
      <img src={ arrowImg } alt="Flèche blanche action boutton" className="btn--contact-arrow"/>
    </Link>
  </header>
)
export default Header
