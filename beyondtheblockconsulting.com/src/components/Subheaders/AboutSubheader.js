/** main import(s)                                                      */
import React, { Component } from 'react';

/** helper import(s)                                                    */
import Link from 'gatsby-link';
/** component import(s)                                                 */

/** style import(s)                                                     */



class AboutSubheader extends Component {
  render() {
    return (
      <div className = "subhead">
        <div className = "customContainer">
          <div className = "bar"></div>
          <h1 className = "name-block-h1">About Us</h1>
          <p className = "name-block-p-about text-left">
            We help the consumer and financial sectors to better understand the technology that is blockchain and what they can do to stay ahead of the curve of implementation. We address specifically how each industry will be affected by this new wave of digital information transfer and how the technology itself works on a technical and basic level.
          </p>
          <p className = "name-block-p-about">
            We are not brokers, and we will not manage your trades for you if you choose to invest in these projects. However, we aim to reduce the often feared barriers of entry into investing in this industry with tutorials on exchange account setup, the importance of two-factor authentication, and how to execute trades. We do this by offering a variety of consulting services, both in person, by skype or through online access to our optimized content focused on educating, advising and detailing the future impacts of this pivotal technology.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutSubheader;
