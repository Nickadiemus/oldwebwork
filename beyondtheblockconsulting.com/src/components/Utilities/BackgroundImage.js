//main imports
import React, { Component } from 'react';
import { Link } from 'gatsby-link';

//helper imports

//style imports
import './BackgroundImage.scss';

class BackgroundImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    data: {
        imgPath: props.imgURL || '',
        height: props.height || '75vh',
      }
    }
  }
  render() {
    console.log(this.state.data.height);
    return (
        <img
          src = {this.state.data.imgPath}
          style = {{ height: `${this.state.data.height}` }}
          className = "BackgroundImage"
        />
    );
  }
}

export default BackgroundImage;
