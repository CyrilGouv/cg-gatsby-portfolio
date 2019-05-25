import React, { Component } from 'react'
import { TimelineLite, Power2 } from "gsap/TweenMax";

import Logo from '../Base/Logo'
import Menu from '../Base/Menu'

export default class Header extends Component {
    state = {
        menuOpen: false
    }

    componentDidMount = () => {
        this.animHeader()
    }

    animHeader = () => {
        const titleTl = new TimelineLite()

        const titleFirst = this.refs.titleFirst
        const titleSec = this.refs.titleSec
        const titleThird = this.refs.titleThird
        const titleFourth = this.refs.titleFourth

        titleTl
            .from(titleFirst, 0.85, { transform: 'translateY(100%)', ease: Power2.easeOut })
            .from(titleSec, 0.85, { transform: 'translateY(100%)', ease: Power2.easeOut }, '-=0.70')
            .from(titleThird, 0.85, { transform: 'translateY(100%)', ease: Power2.easeOut }, '-=0.70')
            .from(titleFourth, 0.85, { transform: 'translateY(100%)', ease: Power2.easeOut }, '-=0.70')
    }

    handleMenu = () => {
        this.setState({ menuOpen: !this.state.menuOpen })
    }

    render() {
        return (
            <div className="aboutHeader">
                <Menu isOpen={ this.handleMenu } />
                <div className="left">
                    <Logo />
                </div>
                <div className="content">
                    <h1>
                        <span ref="titleFirst">
                            Développeur web freelance
                        </span>
                    </h1>
                    <h1>
                        <span ref="titleSec">
                            spécialisé en création de site
                        </span>
                    </h1>
                    <h1>
                        <span ref="titleThird">
                            vitrine basé à Biscarrosse dans
                        </span>
                    </h1>
                    <h1>
                        <span ref="titleFourth">
                            les Landes.
                        </span>
                    </h1>
                </div>
                <div className="right">
                    <nav className="nav">
                        <button className="open" onClick={ this.handleMenu }>
                            <span className="nav--bar-mr"></span><span className="nav--bar-ml"></span>
                        </button>
                    </nav>
                </div>
            </div>
        )
    }
}
