import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { FaGitSquare } from 'react-icons/fa';

export default class AboutContent extends Component {
    render() {
        return (
            <section className="aboutContent">
                <div className="who">
                    <div className="who-left"></div>
                    <div className="who-content">
                        <div className="who-content-img">
                            <StaticQuery
                                query={ Image }
                                render={ data => {
                                    const whoProfile = data.profile.childImageSharp.fluid

                                    return (
                                        <figure className="who-content-img--profile">
                                            <Img fluid={ whoProfile } />
                                        </figure>
                                    )
                                }}
                            />
                        </div>
                        <div className="who-content-desc">
                            <h2>01. Qui suis-je ?</h2>
                            <p>
                                <strong>Développeur Front-End & intégrateur web spécialisé dans la création de site vitrine sur Biscarrosse.</strong>
                            </p>
                            <p>
                                Habitué du travail à distance, mes clients sont répartis dans toute la France mais aussi à l'étranger. Disposant d'une clientèle variée allant de l'auto-entrepreneur à des PME en passant par des associations, je dispose d'une solution adaptée à vos besoins.
                            </p>
                            <p>
                                Diplomé d'un Bac +2 en développement d'application web mais aussi issu d'un parcours atypique qui m'a permit d'avoir une très grande ouverture d'esprit venant ainsi compléter mon profil.
                            </p>
                        </div>
                    </div>
                    <div className="who-socials">
                        <div className="who-socials-right">
                            <a href="https://twitter.com/CyrilGouv" target="_blank" rel="noopener noreferrer">Twitter</a>
                            <span></span>
                            <a href="https://www.instagram.com/cyrilgouv/" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <span></span>
                            <a href="https://www.linkedin.com/in/cyril-g-030690167/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                        </div>
                    </div>
                </div>

                <div className="what">
                    <div className="what-blurb">
                        <h2>02. Ce que je fais ?</h2>
                        <p>
                            Toujours curieux à propos des dernières évolutions technologiques, mon objectif est d'aidé les entreprises à être présentes sur internet en développant des sites internet modernes et intuitifs.
                            Je place toujours l'expérience de l'utilisateur au coeur de la conception d'un site web en réfléchissant à l'ensemble des émotions que peuvent ressentir un visiteur.
                        </p>
                        <p>
                            Même si j'aime particulièrement travailler avec des tecnologies modernes tels que <a href="#">Gatsby Js</a> qui permet de créer des sites web ultra rapides, modernes et performants. Des critères SEO toujours de plus en plus importants aujourd'hui pour ne pas se faire pénaliser par Google.
                        </p>
                        <p>
                            Je conçois également des sites internet professionnels en utilisant le CMS <a href="#">Wordpress</a> qui vous permettra de gérer du contenu ou pour vos besoin d'E-commerce grace à l'extension WooCommerce.
                        </p>
                        <p>
                            J'intègre vos maquettes graphiques en utilisant du HTML5, CSS3 et JavaScript en respectant les standards du web. De plus, je teste la compatibilité de votre site (Cross Browser Testing) sur les navigateurs les plus populaires tels que Chrome, Firefox, Safari et Edge.
                        </p>
                        <p>
                            Chacune de mes créations sera responsive est s'adaptera quel que soit le support (ordinateur, mobile, tablette ...).
                        </p>
                    </div>
                    <div className="what-img">
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
                                        </figure>
                                        <div className="what-img--right">
                                            <Img fluid={ wordpress } className="what-img--wp" />
                                            <Img fluid={ digital } className="what-img--digital" />
                                        </div>
                                    </div>
                                )

                            }}
                        />
                    </div>
                </div>

                
            </section>
        )
    }
}

const Image = graphql`
    {
        profile:file(relativePath:{eq: "about/cyril-gouverneur-creation-site-internet.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }

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

        pilat:file(relativePath:{eq: "about/dune-pilat.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 550) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }

        plage:file(relativePath:{eq: "about/plage-landes.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 550) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }

        lac:file(relativePath:{eq: "about/biscarrosse-lac.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 500) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`