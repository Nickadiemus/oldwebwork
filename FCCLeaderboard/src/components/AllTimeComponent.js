import React from 'react';
import {Link} from 'react-router';

//Helper imports
import axios from 'axios';
import TableProps from './TableProps';


let AllTimeComponent = React.createClass({
  getInitialState: function() {
    return{
      users: []
    }
  },

  componentDidMount:  function() {
    axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime").then(data =>{
        this.setState({
          users: data.data
        })
      })
   },

  render(){
    return(
      <table>
        <tbody>
          <tr className = "text-center outerFont">
            <td>Rank</td>
            <td>Camper Name</td>
            <td><Link to = "/">Points in the past 30 days</Link></td>
            <td><Link to = "/AllTimeLayout">All time Points</Link></td>
          </tr>
          {
            this.state.users.map(function(user, j){
            return <TableProps key = {user.username} image = {user.img} rank = {j+1} name = {user.username} pointsM = {user.recent} pointsA = {user.alltime}/>
          })
          }
        </tbody>
      </table>
    )
  }
})

export default AllTimeComponent
