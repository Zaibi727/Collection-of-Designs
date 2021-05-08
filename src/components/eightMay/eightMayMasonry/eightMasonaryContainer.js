import React, { Component } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import styles from './eightMasonry.module.css';
//import EightImage from './eightMasonryAbstract';

class EightMasonaryContainer extends Component {
    state = {  }
    render() { 
        return (
            <div className={styles.egihtMasonCon}>
             <ResponsiveMasonry
                columnsCountBreakPoints={{350: 2, 750: 2, 900: 3}}
            >
               <Masonry gutter="10px">
               {images.map((image, i) => (
                    <img
                        className={styles.iimg}
                        key={i}
                        src={image}
                        style={{width: "100%", display: "block"}}
                    />
                ))}
            </Masonry>
            </ResponsiveMasonry>
            </div>
         );
    }
}
 
export default EightMasonaryContainer;


let images = [
    "https://images.unsplash.com/photo-1568792358202-0b9a9071b357?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI4fHxkZXNrJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://media.gettyimages.com/photos/supermoon-rises-over-the-china-zun-on-april-27-2021-in-beijing-china-picture-id1314891261?k=6&m=1314891261&s=612x612&w=0&h=hqA8W9F42r8d5WUXM3g9Elcxjsv-mINZPeZ2oHdtMx8=",
    "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGRlc2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://media.gettyimages.com/photos/super-moon-rises-through-the-clouds-behind-a-statue-of-the-vittoriano-picture-id1232546553?k=6&m=1232546553&s=612x612&w=0&h=KcENP0Ute8Lrcb_senOvQfPyl3ONEQc2ctLb7mzjMqQ=",
    "https://images.unsplash.com/photo-1588097257570-59b6f7360bfb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fGRlc2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://media.gettyimages.com/photos/supermoon-rises-over-the-china-zun-on-april-27-2021-in-beijing-china-picture-id1314891261?k=6&m=1314891261&s=612x612&w=0&h=hqA8W9F42r8d5WUXM3g9Elcxjsv-mINZPeZ2oHdtMx8=",
    "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGRlc2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://media.gettyimages.com/photos/super-moon-rises-through-the-clouds-behind-a-statue-of-the-vittoriano-picture-id1232546553?k=6&m=1232546553&s=612x612&w=0&h=KcENP0Ute8Lrcb_senOvQfPyl3ONEQc2ctLb7mzjMqQ=",
    "https://media.gettyimages.com/photos/supermoon-rises-over-the-china-zun-on-april-27-2021-in-beijing-china-picture-id1314891261?k=6&m=1314891261&s=612x612&w=0&h=hqA8W9F42r8d5WUXM3g9Elcxjsv-mINZPeZ2oHdtMx8=",
    "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGRlc2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://media.gettyimages.com/photos/super-moon-rises-through-the-clouds-behind-a-statue-of-the-vittoriano-picture-id1232546553?k=6&m=1232546553&s=612x612&w=0&h=KcENP0Ute8Lrcb_senOvQfPyl3ONEQc2ctLb7mzjMqQ=",
    "https://images.unsplash.com/photo-1588097257570-59b6f7360bfb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fGRlc2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1542684377-0b875fde9563?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRlc2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fGRlc2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1588097257570-59b6f7360bfb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fGRlc2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1542684377-0b875fde9563?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRlc2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fGRlc2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    

]
