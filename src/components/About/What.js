import React, { Component } from "react"
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { TimelineLite, Power1, Power2 } from "gsap/TweenMax";
import ScrollMagic from '../Base/ScrollMagic'

export default class What extends Component {

    componentDidMount = () => {
        this.animWhat()
    }

    animWhat = () => {
        const whatTl = new TimelineLite()
        const controller = new ScrollMagic.Controller()

        const what = this.refs.what
        const whatTitle = this.refs.whatTitle
        const whatDesc = this.refs.whatDesc.children
        const whatImg = this.refs.whatImg

        new ScrollMagic.Scene({
            triggerElement: what,
            triggerHook: .85,
            reverse: false
        })
        .setTween(
            whatTl
            .from(whatTitle, .85 , { transform: 'translateY: 100%', ease: Power2.easeOut })
            .staggerFrom(whatDesc, .5, { autoAlpha: 0, y: 30, ease: Power1.easeOut }, .25)
            .staggerFrom('.reveal-img--mask', 1.25, { transform: 'translateY(100%)', ease: Power2.easeOut }, .35)
        )
        .addTo(controller)
    }
    
    render() {
        return (
            <div className="what">
                <div className="what-blurb" ref="what">
                    <h2>
                        <span ref="whatTitle">
                            02. Ce que je fais ?
                        </span>
                    </h2>
                    <div className="what-desc" ref="whatDesc">
                        <p>
                            Toujours curieux à propos des dernières évolutions technologiques, mon objectif est d'aidé les entreprises à être présentes sur internet en développant des sites internet modernes et intuitifs.
                            Je place toujours l'expérience de l'utilisateur au coeur de la conception d'un site web en réfléchissant à l'ensemble des émotions que peuvent ressentir un visiteur.
                        </p>
                        <p>
                            Même si j'aime particulièrement travailler avec des tecnologies modernes tels que <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby Js</a> qui permet de créer des sites web ultra rapides, modernes et performants. Des critères SEO toujours de plus en plus importants aujourd'hui pour ne pas se faire pénaliser par Google.
                        </p>
                        <p>
                            Je conçois également des sites internet professionnels en utilisant le CMS <a href="https://fr.wordpress.org/" target="_blank" rel="noopener noreferrer">Wordpress</a> qui vous permettra de gérer du contenu ou pour vos besoin d'E-commerce grace à l'extension WooCommerce.
                        </p>
                        <p>
                            J'intègre vos maquettes graphiques en utilisant du HTML5, CSS3 et JavaScript en respectant les standards du web. De plus, je teste la compatibilité de votre site (Cross Browser Testing) sur les navigateurs les plus populaires tels que Chrome, Firefox, Safari et Edge.
                        </p>
                        <p>
                            Chacune de mes créations sera responsive est s'adaptera quel que soit le support (ordinateur, mobile, tablette ...).
                        </p>
                    </div>
                </div>
                <div className="what-img" ref="whatImg">
                    <StaticQuery
                        query={ Image }
                        render={ data => {

                            const html = data.html.childImageSharp.fluid
                            const wordpress = data.wordpress.childImageSharp.fluid
                            const digital = data.digital.childImageSharp.fluid

                            return (
                                <div className="what-img-content">
                                    <figure className="what-img--left">
                                        <Img fluid={ html } />
                                        <div className="reveal-img--mask"></div>
                                    </figure>
                                    <div className="what-img--right">
                                        <figure>
                                            <Img fluid={ wordpress } className="what-img--wp" />
                                            <div className="reveal-img--mask"></div>
                                        </figure>
                                        <figure>
                                            <Img fluid={ digital } className="what-img--digital" />
                                            <div className="reveal-img--mask"></div>
                                        </figure>
                                    </div>
                                </div>
                            )

                        }}
                    />
                </div>
            </div>
        )
    }
}

const Image = graphql`
    {
        html:file(relativePath:{eq: "about/html5-css3.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 700) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }

        wordpress:file(relativePath:{eq: "about/wordpress-blog.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 450) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }

        digital:file(relativePath:{eq: "about/digital-nomade-cyril-gouverneur.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`