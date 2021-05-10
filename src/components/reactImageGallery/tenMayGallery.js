import React, { Component } from 'react';
import styles from './reactImage.module.css';


class HeaderContent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.header}>
                <div>
                    <img />
                    <div>
                        <p>Tommothy Steward</p>
                        <p>@vluebear</p>
                    </div>
                </div>
                
                <div>
                    <p>May 10, 2020</p>
                    <p>2:04 pm</p>
                </div>
            </div>
         );
    }
}
 
export default HeaderContent;