import React, { Component } from 'react';
import AbButton from './abButton';
import { GoGraph } from "react-icons/go";
import styles from './twentyMay.module.css';


class TwentyMayContainer extends Component {
    state = {  }

     myStyle = {
        backgroundImage: "url(/images/bc2.jpg)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        maxWidth: '100%',
        height: '100vh'
    }

    render() { 
        return ( 
            <div className={styles.wrapper} 
            style={this.myStyle}
            >
                <nav className={styles.nav}>
                    <img className={styles.logo} src="./images/softick-logo.png" />
                    <ul className={styles.navUl}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Presentations</a></li> 
                        <li><a href="#">Achievements</a></li>
                        <li><a href="#">Contact Sales</a></li>
                    </ul>
                </nav>

                <section className={styles.main}>
                    <div>
                        <h2 className={styles.h2}>Think Digital</h2>
                        <p className={styles.p}>
                            With an extensive and diverse portfolio, Jadeite is a leader in outdoor <br />
                            advertising across the pakistan.
                        </p>
                    </div>
                    <div>
                       <AbButton 
                           title="Investment Opportunities"
                           Icon={GoGraph}
                       />
                    </div>
                </section>
            </div>
         );
    }
}
 
export default TwentyMayContainer;