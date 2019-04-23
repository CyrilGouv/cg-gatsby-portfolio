import React, { Component } from 'react'
import { Link } from 'gatsby';
import { TimelineLite, Power1 } from "gsap/TweenMax";
import CSSRulePlugin from "gsap/CSSRulePlugin";

import arrowImg from '../../images/base/arrow-white.svg'

import Logo from '../Base/Logo'
import Loading from '../Base/Loading'
import Menu from '../Base/Menu'

export default class Banner extends Component {
    state = {
        menuOpen: false
    }

    componentDidMount = () => {
        this.initAnim()
    }

    initAnim = () => {
        const tl = new TimelineLite()

        const contentTitleBar = this.refs.contentTitleBar
        const h2Title = this.refs.h2Title
        const h1Title = this.refs.h1Title
        var rule = CSSRulePlugin.getRule(".btn::before")

        tl
            .from(contentTitleBar, 1, { transform: "scaleY(0)", delay: 3 })
            .from(h2Title, .85, { y: "100%", ease: Power1.easeOut })
            .from(h1Title, 1, { autoAlpha: 0, y: 30, ease: Power1.easeOut })
            .from('.btn', 1, { autoAlpha: 0, y: 30, ease: Power1.easeOut })
            .from('.btn', .5, { paddingLeft: 0, ease: Power1.easeOut })
            .from(rule, .5, { cssRule: { width: 0 }, ease: Power1.easeOut }, '-=0.5')
    }


    handleMenu = () => {
        this.setState({ menuOpen: !this.state.menuOpen })
    }
    

    render() {
        return (
            <div className="banner">
                <Loading />
                <Menu isOpen={ this.handleMenu } />
                <div className="left">
                    <Logo />
                    <div className="left-adj">
                        <span>Passionné</span>
                        <span className="left-adj--rect"></span>
                        <span>Créatif</span>
                    </div>
                </div>
                <div className="content">
                    <div className="contentTitle" ref="contentTitle">
                        <span className="contentTitle-bar" ref="contentTitleBar"></span>
                        <h2 ref="h2Title">
                            <span className="h2--iAm">
                                Je suis
                            </span>
                            <br />
                            <span className="txt-yellow">
                                Développeur Web
                            </span>
                        </h2>
                    </div>
                    <h1 ref="h1Title">
                        Création de site internet moderne, professionnel et responsive à Biscarrosse dans les Landes.
                    </h1>
                    <Link to="/a-propos" className="btn">
                        En savoir plus <img src={ arrowImg } alt="Flèche blanche action boutton" className="arrow"/>
                    </Link>
                </div>
                <div className="right">
                    <nav className="nav">
                        <button className="open" onClick={ this.handleMenu }>
                            <span className="nav--bar-mr"></span><span className="nav--bar-ml"></span>
                        </button>
                    </nav>
        
                    <div className="right-socials">
                        <a href="https://twitter.com/CyrilGouv" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <span></span>
                        <a href="https://www.instagram.com/cyrilgouv/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <span></span>
                        <a href="https://www.linkedin.com/in/cyril-g-030690167/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    </div>
                </div>
            </div>
        )
    }
}
