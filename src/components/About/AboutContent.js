import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';


import Who from './Who'
import What from './What'
import Love from './Love'

const AboutContent = () => (
    <ParallaxProvider>
        <section className="aboutContent">
            <Who />
            <What />
            <Love />
        </section>
    </ParallaxProvider>
)
    
export default AboutContent            
        
