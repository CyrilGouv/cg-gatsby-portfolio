import React from 'react'
import { Link } from 'gatsby';
import arrowImg from '../../images/base/arrow-white.svg'

import Logo from '../Base/Logo'

const Banner = () => (
    <div className="banner">
        <div className="left">
            <Logo />
            <div className="left-adj">
                <span>Passionné</span>
                <span className="left-adj--rect"></span>
                <span>Créatif</span>
            </div>
        </div>
        <div className="content">
            <h2>
                Je suis
                <br></br>
                <span className="txt-yellow">
                    Développeur Web
                </span>
            </h2>
            <h1>
                Création de site internet moderne, professionnel et responsive à Biscarrosse dans les Landes.
            </h1>
            <Link to="/a-propos" className="btn">
                En savoir plus <img src={ arrowImg } alt="Flèche blanche action boutton" className="arrow"/>
            </Link>
        </div>
        <div className="right">
            <nav className="nav">
                <button className="open">
                    <span className="nav--bar-mr"></span><span className="nav--bar-ml"></span>
                </button>
            </nav>

            <div className="right-socials">
                <a href="https://twitter.com/CyrilGouv" target="_blank" rel="nooponer noreferrer">Twitter</a>
                <span></span>
                <a href="https://www.instagram.com/cyrilgouv/" target="_blank" rel="nooponer noreferrer">Instagram</a>
                <span></span>
                <a href="https://www.linkedin.com/in/cyril-g-030690167/" target="_blank" rel="nooponer noreferrer">Linkedin</a>
            </div>
        </div>
    </div>
)

export default Banner
