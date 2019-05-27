import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Tilt from 'react-tilt'

import arrowBlack from '../../images/base/arrow-black.svg'


const ContactContent = () => (
    <section className="contactContent">
        <StaticQuery
            query={ Image }
            render={ data => {

                const maps = data.maps.childImageSharp.fluid

                return (
                    <div className="contactContent-maps">
                        <figure>
                            <Img fluid={ maps } />
                            <Tilt className="maps-logo" options={{ scale: 1.25 }}>
                                Cg.
                            </Tilt>
                            <div className="reveal-maps--mask"></div>
                        </figure>
                    </div>
                )

            }}
        />
        <div className="contactContent-form">
            <form action="">
                <div className="form-group">
                    <input type="text" name="name" id="name" className="name" />
                    <label htmlFor="name">Votre nom</label>
                </div>
                <div className="form-group">
                    <input type="email" name="email" id="name" className="email" />
                    <label htmlFor="name">Votre email</label>
                </div>
                <div className="form-group">
                    <textarea name="message" id="message" className="message"></textarea>
                    <label htmlFor="message">Votre message</label>
                </div>
                <a className="btn--default">
                    Envoyer
                    <img src={ arrowBlack } alt="Flèche bouton voir le projet" />
                </a>
            </form>
        </div>
    </section>
)
    
export default ContactContent 

const Image = graphql`
    {
        maps:file(relativePath:{eq: "contact/maps.png"}) {
            childImageSharp {
                fluid(maxHeight: 700) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`