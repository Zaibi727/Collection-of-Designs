import React,{Component} from 'react';
import styles from './junenine.module.css';
import datas from './cardData';
//import AbButton from '../twentyMay/abButton';
import AbCard from './AbCard'
import AbCardContent from './AbCardContent';


class JuneNineContainer extends Component {
    constructor(props) {
      super(props);
     
      this.state = { 
          open: false,
          selected: '',
        
       };

       this.OneClick = this.OneClick.bind(this);    
     
  }
  
  
  OneClick = (id) => {
      this.setState(state => {
        return {
          open: !state.open, 
          selected: id,
        };
      });
    };
 
    
 



render(){
    return (
        <div className={styles.container}>
             {datas.map((data, id) => {
               return(
                <div  className={styles.wrapper} key={id} ref={this.container}>
                   <div  className={styles.buttonportion} onClick={() => this.OneClick(id)}  style={{color: this.state.selected === id ? 'white' : 'black', backgroundColor: this.state.selected === id ? '#2fc772' : 'white'}}>
                      <p className={styles.aaa}>{data.Icon}</p>
                      <p className={styles.bbb}>{data.label}</p>
                   </div>

                 {data.cardContent ? data.cardContent.map((c) => 
                              <div className={styles.cardPortion}>  
                              {this.state.open && this.state.selected === id && (
                                <AbCard>                
                                   <AbCardContent 
                                     c={c}
                                   />
                                </AbCard>
                              )}
                              </div>                       
                            ) : null } 

               </div>
               )})}
              
        </div>
    )
}
}
export default JuneNineContainer;
