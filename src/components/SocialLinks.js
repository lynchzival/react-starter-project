import React from 'react';

import GithubLogo from '../static/images/case.png';
import InstagramLogo from '../static/images/instagram.png';
import LinkedinLogo from '../static/images/linkedin.png';
import TelegramLogo from '../static/images/telegram.png';

function ContactSocial(props) {
    return (
        <div className="container social-links">
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <a href="http://">
                        <img className='img-fluid' width='30' height='30' src={GithubLogo} alt="" />
                    </a>
                </div>
                <div className="col d-flex justify-content-center">
                    <a href="http://">
                        <img className='img-fluid' width='30' height='30' src={InstagramLogo} alt="" />
                    </a>
                </div>
                <div className="col d-flex justify-content-center">
                    <a href="http://">
                        <img className='img-fluid' width='30' height='30' src={LinkedinLogo} alt="" />
                    </a>
                </div>
                <div className="col d-flex justify-content-center">
                    <a href="http://">
                        <img className='img-fluid' width='30' height='30' src={TelegramLogo} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactSocial;