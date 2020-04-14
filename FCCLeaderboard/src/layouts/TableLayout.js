import React from 'react';
import {Link} from 'react-router';

let TableLayout = function(props){
  return(
    <div>
      <div className = "table">
        <table>
          <tbody>
            <tr>
              <th className = "tableHeader text-center outerFont" colSpan = "4">FreeCodeCamp LeaderBoard</th>
            </tr>
            </tbody>
          </table>
          <main>
            {props.children}
          </main>
        </div>
    </div>
  )
}

export default TableLayout
