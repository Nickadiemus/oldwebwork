/** main import(s)                                                      */
import React, { Component } from 'react';

/** helper import(s)                                                    */

/** component import(s)                                                 */

/** style import(s)                                                     */
import './TeamProfile.scss';



class TeamProfile extends Component {
  render() {
    return (
      <div className = "col-s-4 col-m-4 col-lg-4 profile">
        <img src = {this.props.imgURL} className = "teamProfile"/>
        <div className = "profile-name">
          {this.props.name}
        </div>
        <div className = 'profile-position'>
          {this.props.position}
        </div>
        <div className = "profile-bio">
          {this.props.bio}
        </div>
      </div>
    );
  }
}

export default TeamProfile;
