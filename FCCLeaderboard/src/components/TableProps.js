import React from 'react';
import {Link} from 'react-router';

let TableProps = React.createClass({
  render(){
    return(
      <tr>
          <td className = "text-center innerFont rankFont" >{ this.props.rank }</td>
          <td className = "text-center">
            <div>
              <a href = {"https://www.freecodecamp.com/" + this.props.name} target = "_blank"><img src = {this.props.image} className = "img-r" /></a>
            </div>
            <a href = {"https://www.freecodecamp.com/" + this.props.name} target = "_blank"><p className = "innerFont">{ this.props.name }</p></a>
          </td>
          <td><p className = "innerFont text-center numberFont">{ this.props.pointsM}</p></td>
          <td><p className = "innerFont text-center numberFont">{ this.props.pointsA}</p></td>
      </tr>
    );
  }
})

export default TableProps
