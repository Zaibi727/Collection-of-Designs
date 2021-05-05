import React, { Component } from 'react';
import TableRow from './settingTableRow';
import SettingTableHead from './settingTableHead';

class SettingTable extends Component {
    state = { 
        Rows: [
            {id: 1},
            {id: 2},
            {id: 3},  
            {id: 4},
            {id: 5},
        ],
            profilePic: './images/profile.jpg',
            name: 'Debra Waren',
            email: 'email@gmail.com',
            role: 'Owner',
            status: 'Active',
            clearance: '0 propjects',
     }


    render() { 
        return ( 
            <div>
                <SettingTableHead />
                    <ul>
                    {this.state.Rows.map(r => <TableRow
                    key={r.id}
                    pic={this.state.profilePic}
                    name={this.state.name}
                    email={this.state.email}
                    role={this.state.role}
                    status={this.state.status}
                    clearance={this.state. clearance}
                     />)}
                </ul>
            </div>

         );
    }
}
 
export default SettingTable;