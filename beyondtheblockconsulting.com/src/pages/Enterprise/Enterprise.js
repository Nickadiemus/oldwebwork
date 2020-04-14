/** main import(s)                                                      */
import React from 'react';

/** helper import(s)                                                    */
import Link from 'gatsby-link';
import enterpriseImg from '../../_img/Enterprise.png';

/** component import(s)                                                 */
import BackgroundImage from '../../components/Utilities/BackgroundImage';
import EnterpriseSubheader from '../../components/Subheaders/EnterpriseSubheader';

/** style import(s)                                                     */


const EnterprisePage = () => (
  <div>
    <BackgroundImage imgURL = {enterpriseImg} height = "100vh"/>
    <EnterpriseSubheader />
  </div>
);

export default EnterprisePage;
