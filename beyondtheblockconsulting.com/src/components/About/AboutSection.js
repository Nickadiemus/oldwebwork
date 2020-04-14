/** main import(s)                                                      */
import React, { Component } from 'react';

/** helper import(s)                                                    */

/** component import(s)                                                 */

/** style import(s)                                                     */

class AboutSection extends Component {
  render() {
    return (
      <div className = "aboutsubhead">
        <div className = "customContainer">
          <div className = "bar right"></div>
          <h1 className = "name-block-h1 text-right">About us</h1>
          <p className = "name-block-p-about text-right">
            We are not brokers, and we will not manage your trades for you if you choose to invest in these projects. However, we aim to reduce the often feared barriers of entry into investing in this industry with tutorials on exchange account setup, the importance of two-factor authentication, and how to execute trades. We do this by offering a variety of consulting services, both in person, by skype or through online access to our optimized content focused on educating, advising and detailing the future impacts of this pivotal technology.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutSection;
