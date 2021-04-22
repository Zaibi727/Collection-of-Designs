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
          button = <Befores onClick={this.handleLogoutClick} />;
        } else {
          button = <Afters onClick={this.handleLoginClick} />;
        }

        return (
            <div>
              <div>
                <Main isLoggedIn={isLoggedIn} />
                {button}
             </div>
            </div>
        );
    }
}

export default Sources;


function UserGreeting(props) {
    return <h1></h1>;
  }
  
  function GuestGreeting(props) {
    return <h1></h1>;
  }


  function Main(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }