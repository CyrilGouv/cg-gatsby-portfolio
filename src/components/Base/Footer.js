import React from 'react'
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <h5>
                    Démarrons un projet<br/>
                    <span>ensemble</span>
                </h5>
                <p>contact@cyrilgouverneur.com</p>

                <p className="footer-content-socials">
                    <a href="https://twitter.com/CyrilGouv" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <span>//</span>
                    <a href="https://www.instagram.com/cyrilgouv/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <span>//</span>
                    <a href="https://www.linkedin.com/in/cyril-g-030690167/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                </p>

                <address>
                    Gouverneur Cyril<br/>
                    62 rue Diamant<br/>
                    40600 Biscarrosse
                </address>

                <p className="copyright">
                    Made with <FaHeart className="copyright-heart" /> by <a href="mailto:contact@cyrilgouverneur.com" target="_blank" rel="noreferrer noopener">Cyril Gouverneur</a>
                </p>
            </div>
        </div>
    )
}
