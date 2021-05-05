import React, { Component } from 'react';
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { FaPhone } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import {BiMessage } from "react-icons/bi";
import styles from './displayArea.module.css';

class TableRow extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.tableRowWrapper}>
            <table>

                <tr className={styles.dataRow}>
                    <td className={styles.personalDetial}>
                        <img className={styles.img} src={this.props.pic} />
                        <div>
                            <p className={styles.name}>{this.props.name}</p>
                            <p className={styles.email}>{this.props.email}</p>
                        </div>
                    </td>
                   
                   <td className={styles.iconTable}>
                       <span><BiMessage /></span>
                       <span><FaPhone /></span>
                       <span>@</span>
                       <span><FaLinkedinIn className={styles.linkedin} /></span>
                   </td>
                   <td>
                       <span>{this.props.role}</span>
                   </td>
                   <td>
                       <span>{this.props.status}</span>
                   </td>
                   <td>
                       <span id={styles.project}>{this.props.clearance}</span>
                   </td>
                    <td className={styles.btn}>
                        <Menu className={styles.menu} menuButton={<MenuButton className={styles.menuBtn}><i class="fa fa-ellipsis-h"></i></MenuButton>}>
                             <MenuItem>Change account type</MenuItem>
                             <MenuItem>Deactive account</MenuItem>
                       </Menu>
                    </td>
                </tr>
            </table>
        </div>
         );
    }
}
 
export default TableRow;