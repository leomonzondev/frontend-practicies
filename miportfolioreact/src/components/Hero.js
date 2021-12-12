import React from 'react'
import githubimg from '../images/github.svg'
import linkedingimg from '../images/linkedin.svg'
import ytimg from '../images/youtube.svg'
import twimg from '../images/twitter.svg'
import vid from '../video/video5.mp4'


export const Hero = () => {
    return (
        <div className="hero">
        <div className='cover-container'>
            <video className="videoBG" src={vid} autoPlay={true} loop muted/>
        </div>
            <nav>
                <ul>
                    <li>Blog</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className="title__hero">
                <h1>Conecto <span>ideas</span> para los usuarios del mundo</h1>
                
                <p>Procurando la mejor calidad y experiencia digital</p>
            </div>

            <div className="footer__hero">
                <ul>
                
                    <li><a href="https://github.com/Leob4rr0s" target="_blank" rel="noopener noreferrer"> <img src={githubimg} alt="githubicon" /></a></li>
                    <li><a href="https://www.linkedin.com/in/cristian-leonardo-barros-monzon" target="_blank" rel="noopener noreferrer"><img src={linkedingimg} alt="linkedinicon" /></a></li>
                    <li><img  src={ytimg} alt="yticon" /></li>
                    <li><a href="https://twitter.com/crisleobm" target="_blank" rel="noopener noreferrer"><img src={twimg} alt="twicon" /></a></li>
                    
                </ul>
            </div>
        </div>
    )
}
