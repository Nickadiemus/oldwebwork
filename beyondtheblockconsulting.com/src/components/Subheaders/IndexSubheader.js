/** main import(s)                                                      */
import React, { Component } from 'react';

/** helper import(s)                                                    */

/** component import(s)                                                 */

/** style import(s)                                                     */

class IndexSubheader extends Component {
  render() {
    return (
      <div className = "subhead">
        <div className = "customContainer">
          <div className = "bar"></div>
          <h1 className = "name-block-h1 home">{this.props.header}</h1>
          <div>
            <h3 className = "name-block-h3 text-left">{this.props.subheader}</h3>
          </div>
            <p className = "name-block-p text-left">
              {this.props.content}
            </p>
        </div>
      </div>
    );
  }
}

export default IndexSubheader;
