/** main import(s)                                                      */
import React, { Component } from 'react';

/** helper import(s)                                                    */
import Link from 'gatsby-link';
/** component import(s)                                                 */

/** style import(s)                                                     */



class BlockchainPersonalSubheader extends Component {
  render() {
    return (
      <div className = "subhead">
        <div className = "customContainer">
          <div className = "bar"></div>
          <h1 className = "name-block-h1">Blockchain Personal</h1>
          <p className = "name-block-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    );
  }
}

export default BlockchainPersonalSubheader;
