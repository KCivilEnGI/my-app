import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join out community to get the latest information
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input' />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Contact</h2>
                        <Link to='https://www.linkedin.com/in/k-c-cheng/' target='_blank'><i class="fa-brands fa-linkedin" style={{color:"#0080ff"}}/>&nbsp;LinkedIn</Link>
                        <Link to='https://github.com/KCivilEnGI' target='_blank'><i className='fa fa-github'/>&nbsp;GitHub</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Video</h2>
                        <Link to='https://www.youtube.com/' target='_blank'><i className='fa-brands fa-youtube' style={{color:"#ff0000"}}/>&nbsp;YouTube</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link style={{color:"#a8a8a8", display:'flex', justifyContent:'center'}}>coming soon</Link>
                    </div>
                </div>
                {/* <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Video</h2>
                        <Link style={{color:"#a8a8a8"}}>coming soon</Link>
                        <Link to='https://www.youtube.com/' target='_blank'>YouTube</Link>
                        <Link to='https://www.twitch.tv/' target='_blank'>TwitchTV</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='https://www.facebook.com/' target='_blank'>Facebook</Link>
                        <Link to='https://www.instagram.com/'target='_blank'>Instagram</Link>
                        <Link to='https://www.linkedin.com/'target='_blank'>LinkedIn</Link>
                    </div>
                </div> */}
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    {/* <div className='footer-logo'>
                        <Link to='/my-app/' className='social-logo'>
                            Casey's 
                        </Link>
                    </div> */}
                    <small className='website-rights'>kc.goomail@gmail.com</small>
                    <small className='website-rights'>Casey's @ 2023</small>
                    {/* <div className='social-icons'>
                        <Link className='social-icon-link facebook' to="/" target='_blank' aria-label='Facebook'>
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link className='social-icon-link instagram' to="/" target='_blank' aria-label='Instagram'>
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link className='social-icon-link linkedin' to="/" target='_blank' aria-label='LinkedIn'>
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div> */}
                </div>
            </section>
        </div>
    )
}

export default Footer