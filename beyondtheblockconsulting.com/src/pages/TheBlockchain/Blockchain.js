/** main import(s)                                                      */
import React, { Component } from 'react';
/** helper import(s)                                                    */
import Link from 'gatsby-link';
import blockChainImage from '../../_img/blockchain-companies.png';
/** component import(s)                                                 */
import BackgroundImage from '../../components/Utilities/BackgroundImage';
import BlockchainSubheader from '../../components/Subheaders/BlockchainSubheader';
/** style import(s)                                                     */

const Blockchain = () => (
  <div>
    <BackgroundImage imgURL = {blockChainImage} height = "40vh"/>
    <BlockchainSubheader />
  </div>
);

export default Blockchain;
