import React from 'react';
import Tabs from './fifthTabs'; 
import "./fifthTab.css";

function TabContainer() {
    return (
      <div className="tabs-wrap">
       <Tabs> 
         <div label="General"> 
           See ya later, <em>General</em>! 
         </div> 
         <div label="Business"> 
           After 'while, <em>Business</em>! 
         </div> 
         <div label="Social"> 
           Nothing to see here, this tab is <em>Social</em>! 
         </div> 
       </Tabs> 
      </div>
    );
  }
  
  export default TabContainer;