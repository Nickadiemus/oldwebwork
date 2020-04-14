/** main import(s)                                                      */
import React, { Component } from 'react';
/** helper import(s)                                                    */
import Link from 'gatsby-link';
import blockChainImage from '../../../_img/blockchain-companies.png';
/** component import(s)                                                 */
import BackgroundImage from '../../../components/Utilities/BackgroundImage';
import BlockchainBusinessSubheader from '../../../components/Subheaders/BlockchainBusinessSubheader';
/** style import(s)                                                     */

const BlockchainBusiness = () => (
  <div>
    <BackgroundImage imgURL = {blockChainImage} height = "40vh"/>
    <BlockchainBusinessSubheader />
  </div>
);

export default BlockchainBusiness;
