//Main imports
import React from 'react';
import {Link} from 'react-router';

//Helper imports
import axios from 'axios';
import TableProps from './TableProps';

let MonthComponent = React.createClass({

  getInitialState: function() {
    return{
      users: []
    }
  },

  componentDidMount:  function() {
    axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent").then(data =>{
        this.setState({
          users: data.data
        })
      })
   },

  render(){
    console.log(this.state.users)
    return(
      <table>
        <tbody className = "outerFont">
          <tr className = "text-center">
            <td>Rank</td>
            <td>Camper Name</td>
            <td><Link className = "linkColor" to = "/">Points in the past 30 days</Link></td>
            <td><Link className = "linkColor" to = "/AllTimeLayout">All time Points</Link></td>
          </tr>
          {
            this.state.users.map(function(user, i){
            return <TableProps key = {user.username} image = {user.img} rank = {i+1} name = {user.username} pointsM = {user.recent} pointsA = {user.alltime}/>
          })
          }
        </tbody>
      </table>
    )
  }
})

export default MonthComponent
