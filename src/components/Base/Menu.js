import React, { Component } from 'react'
import { Link } from 'gatsby'
import { TimelineLite, TweenMax, Power2, Power1, Power4 } from "gsap/TweenMax";

import Logo from '../Base/Logo'

export default class Menu extends Component {
    state = {
        menuOpen: this.props.isOpen
    }

    componentDidMount() {
        const menu = this.refs.menu
        const menuLinksLi = this.refs.menuLinksUl.children

        TweenMax.set(menu, { y: '-100%' })
        TweenMax.set(menuLinksLi, { autoAlpha: 0, y: '-10%' })
    }
    
    

    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen) {
            this.setState({ menuOpen: nextProps.isOpen })
            this.openMenu()
        } else {
            this.setState({ menuOpen: nextProps.isOpen })
            this.hideMenu()
        }
    }

    openMenu = () => {
        const openTl = new TimelineLite()

        const menu = this.refs.menu
        const menuLinksLi = this.refs.menuLinksUl.children

        openTl
            .set('.singleProjectContent', { zIndex: '-1' })
            .set('.footer', { zIndex: '' })
            .to(menu, 1.25, { y: '100%', ease: Power4.easeOut })
            .staggerTo(menuLinksLi, 0.5, { autoAlpha: 1, transform: 'translateY(10%)', ease: Power1.easeOut }, 0.25)
    }

    hideMenu = () => {
        const closeTl = new TimelineLite()

        const menu = this.refs.menu
        const menuLinksLi = this.refs.menuLinksUl.children

        const menuLinksLiArr = Array.from(menuLinksLi)
        const menuLinksLiArrReverse = menuLinksLiArr.reverse()
        
        this.setState({ menuOpen: false })

        closeTl
            .staggerTo(menuLinksLiArrReverse, 0.5, { autoAlpha: 0, transform: 'translateY(-10%)', ease: Power1.easeOut }, 0.25)        
            .to(menu, 1.25, { y: '-100%', ease: Power4.easeOut })
            .set('.singleProjectContent', { zIndex: '1' })
            .set('.footer', { zIndex: '' })
    }


    render() {
        return (
            <div className="menu" ref="menu">
                <div className="left">
                    <Logo />
                </div>
                <nav className="menu-links">
                    <ul ref="menuLinksUl">
                        <li>
                            <span>01.</span><Link to="/">Accueil.</Link>
                        </li>
                        <li>
                            <span>02.</span><Link to="/a-propos">A propos.</Link>
                        </li>
                        <li>
                            <span>03.</span><Link to="/portfolio">Portfolio.</Link>
                        </li>
                        <li>
                            <span>04.</span><Link to="/contact">Contact.</Link>
                        </li>
                    </ul>
                </nav>
                <div className="right">
                    <nav className="nav--menu">
                        <button className="close" onClick={ this.hideMenu }>
                            <span className="nav--bar"></span>
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
