/** main import(s)                                                      */
import React, { Component } from 'react';

/** helper import(s)                                                    */
import Link from 'gatsby-link';
/** component import(s)                                                 */

/** style import(s)                                                     */



class BlockchainSubheader extends Component {
  render() {
    return (
      <div className = "subhead">
        <div className = "customContainer">
          <div className = "bar"></div>
          <h1 className = "name-block-h1">The Blockchain</h1>
          <p className = "name-block-p">
             As a whole, Blockchain technology is not simply limited to this craze or boom in the digital/cryptocurrency market, although mainstream adoption has found its roots in this side of the market. The Blockchain as a protocol is an ever growing, secure, and scalable solution to many industries and organizations that offers, for the first time in history, a paradigm shift in the privacy and autonomy of the individuals and companies who utilize it. 
          </p>
        </div>
      </div>
    );
  }
}

export default BlockchainSubheader;
