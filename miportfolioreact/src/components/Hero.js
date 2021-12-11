import React from 'react'
import githubimg from '../images/github.svg'
import linkedingimg from '../images/linkedin.svg'
import ytimg from '../images/youtube.svg'

export const Hero = () => {
    return (
        <div className="hero">
            <nav>
                <ul>
                    <li>Blog</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className="title__hero">
                <h1>Conecto ideas para los usuarios del mundo</h1>
                
                <p>Procurando la mejor calidad y experiencia digital</p>
            </div>

            <div className="footer__hero">
                <ul>
                
                    <li> <img src={githubimg} alt="a"/></li>
                    <li><img src={linkedingimg} alt=""/></li>
                    <li><img  src={ytimg} alt=""/></li>
                </ul>
            </div>
        </div>
    )
}
