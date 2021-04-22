import React from 'react';
import Beforc from './beforCompany';
import Afterc from './afterCompany';

function Main(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <Afterc />;
    }
    return <Beforc />;
  }

  export default Main;