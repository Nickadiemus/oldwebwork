/** main import(s)                                                      */
import React, { Component } from 'react';

/** helper import(s)                                                    */
import Link from 'gatsby-link';
import socialMail from '../../_img/_social/005-mail.png';
import socialFacebook from '../../_img/_social/002-facebook.png';
import socialTwitter from '../../_img/_social/004-twitter.png';
import socialSnapchat from '../../_img/_social/001-snapchat.png';
import socialInstagram from '../../_img/_social/003-instagram.png';
/** component import(s)                                                 */

/** style import(s)                                                     */
import './Footer.scss';



const Footer = () => (
      <footer className="navbar-fixed-bottom footer-bottom">
        <div className="container-fluid">
          <div className = "row">

            <div className = "col-md-6 text-center footer-text">
              <p className = "inner footer-text-none span">&copy; Beyond The Blockchain Consulting </p> <p className="inner">| <Link className="inner footer-text" to="/Privacy">Privacy</Link> | <Link className="inner footer-text" to="/Terms">Terms of Use</Link></p>
            </div>
            <div className = "col-md-6 text-center footer-text">
              <Link className="inner footer-text" to = "/" >Privacy Policy</Link>
              <p className="inner">|</p>
              <Link className="inner footer-text" to = "/" >Share Page</Link>
              <p className="inner">|</p>
              <Link className="inner footer-text" to = "/Questions" >Questions & Answers</Link>
            </div>

          </div>
          <div className = "row">
            <div className = "col text-center social-media">
              <span >
                <a className = "social-media icon" href = "mailto:beyondtheblockconsulting@gmail.com"><img src= {socialMail} width = "35" height = "35"/></a>
                <a className = "social-media icon" href = "https://twitter.com" target="_blank"><img src={socialTwitter} width = "35" height = "35"/></a>
                <a className = "social-media icon" href = "https://www.instagram.com" target="_blank"><img src={socialInstagram} width = "35" height = "35"/></a>
                <a className = "social-media icon" href = "https://www.facebook.com" target="_blank"><img src={socialFacebook} width = "35" height = "35"/></a>
                {/* <a className = "social-media icon" href = "https://www.snapchat.com" target="_blank"><img src={socialSnapchat} width = "35" height = "35"/></a> */}
              </span>
            </div>
          </div>
        </div>
      </footer>
    );

export default Footer;
