import React, { Component } from "react"
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export default class AboutContent extends Component {
    render() {
        return (
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