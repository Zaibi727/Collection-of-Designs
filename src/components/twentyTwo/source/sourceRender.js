import React, { Component } from 'react';
import Befores from './beforSource';
import Afters from './afterSource';


class Sources extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
      }
    
      handleLoginClick() {
        this.setState({isLoggedIn: true});
      }
    
      handleLogoutClick() {
        this.setState({isLoggedIn: false});
      }

      
    render() {

        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
          button = <Afters onClick={this.handleLogoutClick} />;
        } else {
          button = <Befores onClick={this.handleLoginClick} />;
        }

        return (
            <div>
              <div>
                {button}
             </div>
            </div>
        );
    }
}

export default Sources;
