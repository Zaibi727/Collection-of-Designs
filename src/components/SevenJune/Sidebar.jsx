import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import styles from './sevenJune.module.css';
import SidebarData from './SidebarData';
import SubMenu from './SubMenu';





function Sidebar() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
      
          <div className={styles.topNav}>
              <div className={styles.menuIcon}>
                  <FaIcons.FaBars onClick={showSidebar} />
              </div>
          </div>
             <div className={styles.sidebar} 
               style={ sidebar ? {left: '0'} : {left: '-100%' }}
             >
                   <section className={styles.sidebarWrap}>
                          <div className={styles.menuuIcon}>
                             <AiIcons.AiOutlineClose   onClick={showSidebar} />
                          </div>
                          {SidebarData.map((item, i) => {
                              return <SubMenu item={item} key={i}  />
                          })}
                   </section>
              </div>
           
        
        </>
    )
}

export default Sidebar;
