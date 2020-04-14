/** main import(s)                                                      */
import React, { Component } from 'react';

/** helper import(s)                                                    */
import testprofileimg from '../../_img/testprofileimg.png';
/** component import(s)                                                 */
import TeamProfile from '../../components/Utilities/TeamProfile';
/** style import(s)                                                     */

class OurTeam extends Component {
  render()
  {
    return (
      <div className = "aboutTeam">
        <div className = "customContainer about">
          <div className = "bar"></div>
          <h1 className = "name-block-h1">Our Team</h1>
        </div>
        <div className = "container">
          <div className = "row text-center">
            <TeamProfile
              imgURL = { testprofileimg }
              name = "Elija Zimmerman"
              position = "CEO/Co Founder"
              bio = "Co-Founder and Chief Operations Officer for Beyond the Block Consulting. Under his guidance, BTBC began development of the internal team mission, vision, and core values. After prioritizing the company culture, his focus was directed on partnering with global leaders in the Blockchain space."
            />
            <TeamProfile
              imgURL = {testprofileimg}
              name = "Issiah Zimmerman"
              position = "CEO/Co Founder"
              bio = "A self-motivated individual with a passion for helping others, Nick is a blockchain enthusiast with a strong background in digital marketing, communications, and business operations. He analyzes different markets"
            />
            <TeamProfile
              imgURL = {testprofileimg}
              name = "Nick Lasky"
              position = "CEO/Co Founder"
              bio = "A self-motivated individual with a passion for helping others, Nick is a blockchain enthusiast with a strong background in digital marketing, communications, and business operations. He analyzes different markets"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default OurTeam;
