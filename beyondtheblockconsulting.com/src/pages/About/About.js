/** main import(s)                                                      */
import React from 'react';

/** helper import(s)                                                    */
import Link from 'gatsby-link';
import imageURL from '../../_img/About.png';

/** component import(s)                                                 */
import BackgroundImage from '../../components/Utilities/BackgroundImage';
import AboutSubheader from '../../components/Subheaders/AboutSubheader';
import AboutSection from '../../components/About/AboutSection';
import OurTeam from '../../components/About/OurTeam';

/** style import(s)                                                     */
import './About.scss';

const AboutPage = () => (
  <div>
    <BackgroundImage imgURL = {imageURL} height = "50vh"/>
    <AboutSubheader />
    <OurTeam />
  </div>
);

export default AboutPage;
