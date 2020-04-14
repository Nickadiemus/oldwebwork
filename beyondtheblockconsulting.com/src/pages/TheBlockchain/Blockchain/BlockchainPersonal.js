/** main import(s)                                                      */
import React from 'react';

/** helper import(s)                                                    */
import Link from 'gatsby-link';
import educationSeriesImage from '../../../_img/EducationalSeries.png';

/** component import(s)                                                 */
import BackgroundImage from '../../../components/Utilities/BackgroundImage';
import BlockchainPersonalSubheader from '../../../components/Subheaders/BlockchainPersonalSubheader';
/** style import(s)                                                     */

const BlockchainPersonal = () => (
  <div>
    <BackgroundImage imgURL = {educationSeriesImage} height = "40vh"/>
    <BlockchainPersonalSubheader />
  </div>
);

export default BlockchainPersonal;
