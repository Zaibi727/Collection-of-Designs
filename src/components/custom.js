import React from 'react';
import {
    Menu,
    MenuItem,
    SubMenu,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import './dropDown.css';



 const Custom = () => {
    return (
        <div className="Menu">
            <Menu className="menu" menuButton={<MenuButton className="btn"><i class="fa fa-bars"></i></MenuButton>}>
            <MenuItem>New File</MenuItem>
                <SubMenu label="Open">
                  <MenuItem>index.html</MenuItem>
                  <MenuItem>example.js</MenuItem>
                    <SubMenu label="Styles">
                      <MenuItem>about.css</MenuItem>
                      <MenuItem>home.css</MenuItem>
                     <MenuItem>index.css</MenuItem>
                   </SubMenu>
             </SubMenu>
    <MenuItem>Save</MenuItem>
        </Menu>
        </div>
    )
}

export default Custom;