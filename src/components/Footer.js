import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the newsletter to receive our best deals.
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
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
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>How it works</Link>
                        <Link to='/'>How it works</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/contact'>Something else</Link>
                        <Link to='/'>Something else</Link>
                        <Link to='/'>Something else</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Video</h2>
                        <Link to='/'>YouTube</Link>
                        <Link to='/'>Twitch</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Instagram</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Casey's 
                            {/* <i className='fab fa-typo3' /> */}
                        </Link>
                    </div>
                    <small className='website-rights'>Casey's @ 2023</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook' to="/" target='_blank' aria-label='Facebook'>
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link className='social-icon-link instagram' to="/" target='_blank' aria-label='Instagram'>
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link className='social-icon-link linkedin' to="/" target='_blank' aria-label='LinkedIn'>
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer