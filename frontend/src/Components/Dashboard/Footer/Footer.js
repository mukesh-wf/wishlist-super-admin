import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className='footer-sec'>
            <div className='row'>
                <div className='col-md-6'>
                    <p>All Rights Reserved by Webframez ©2023</p>
                </div>
                <div className='col-md-6'>
                    <ul>
                        <li><a href="!#">Profile</a></li>
                        <li><a href="!#">Team</a></li>
                        <li><a href="!#">Contacts</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
