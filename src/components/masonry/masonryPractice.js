import styles from './masonry.module.css';
import React, { Component } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Mrender from './masonryTitle';
import Video from './videoMasonry';
import MasonryPlayer from './reactMasplayer';



let images = [
    "https://picsum.photos/200/300?image=1050",
    "https://media.gettyimages.com/photos/pakistans-prime-minister-imran-khan-ahead-of-the-visit-of-the-duke-picture-id1181210923?k=6&m=1181210923&s=612x612&w=0&h=c0epaHHZNAayV-leKJBMJTmfzUgTtUorCXdynUssWsQ=",
    "https://media.gettyimages.com/photos/prime-minister-of-pakistan-imran-khan-addresses-the-united-nations-picture-id1171492566?k=6&m=1171492566&s=612x612&w=0&h=aEUosWmhUhtNzG_I4D9IaiWFxhR1b793qFwTWrSHZHE=",
    "https://media.gettyimages.com/photos/pakistans-cricketerturned-politician-imran-khan-of-the-pakistan-to-picture-id1005001754?s=612x612",
    "https://media.gettyimages.com/photos/supermoon-rises-over-the-china-zun-on-april-27-2021-in-beijing-china-picture-id1314891261?k=6&m=1314891261&s=612x612&w=0&h=hqA8W9F42r8d5WUXM3g9Elcxjsv-mINZPeZ2oHdtMx8=",
    "https://media.gettyimages.com/photos/april-2021-saxonyanhalt-slzetal-countless-antifreeze-candles-burn-picture-id1232552797?k=6&m=1232552797&s=612x612&w=0&h=Xp10Y4MjW9-KMyRoTU3TCnSe3GEzYQqAdXzuiTHEf0g=",
    "https://media.gettyimages.com/photos/helicopter-drops-water-taken-from-a-nearby-reservoir-onto-the-flames-picture-id1232555681?s=612x612",
    "https://media.gettyimages.com/photos/super-moon-rises-through-the-clouds-behind-a-statue-of-the-vittoriano-picture-id1232546553?k=6&m=1232546553&s=612x612&w=0&h=KcENP0Ute8Lrcb_senOvQfPyl3ONEQc2ctLb7mzjMqQ=",
    "https://media.gettyimages.com/photos/april-2021-saxony-leipziger-land-a-supermoon-is-expected-at-the-end-picture-id1232570345?k=6&m=1232570345&s=612x612&w=0&h=uog50lzgd7dNBt-jBcbpb82_QBgXiO4msbfaGIA_YYQ=",
    "https://media.gettyimages.com/photos/ametist-ridden-by-tom-marquand-goes-on-to-win-the-watch-racing-tv-in-picture-id1232521337?k=6&m=1232521337&s=612x612&w=0&h=T8LhD2STc-HaUfoUnhMPYIio-rarZLEqeWbI-0F0Rds=",
    "https://media.gettyimages.com/photos/despite-the-coronavirus-curfew-2-women-are-walking-beside-a-graffiti-picture-id1232522291?k=6&m=1232522291&s=612x612&w=0&h=K22S95JCeCPRUsswpKlYhZQ8xxLepSzAJ2b3OyaZteU=",
    "https://media.gettyimages.com/photos/miss-russia-2019-alina-sanko-who-will-represent-russia-in-the-69th-picture-id1232554903?k=6&m=1232554903&s=612x612&w=0&h=Fm6tcWV4I6JnsvhMJM5jUyzTNPAbJLkQDTRpBd7vW-E=",
    "https://media.gettyimages.com/photos/miss-russia-contest-director-anastasia-belyak-gives-an-online-press-picture-id1232555756?k=6&m=1232555756&s=612x612&w=0&h=D1b56FyetB17zWHyp2IDC9im95gINGlIYs6etQAQDjk=",
    "https://media.gettyimages.com/photos/french-justice-minister-eric-dupondmoretti-reacts-as-he-attends-a-picture-id1232574070?s=612x612",
    "https://picsum.photos/200/300?image=1050",
    "https://media.gettyimages.com/photos/miss-russia-contest-director-anastasia-belyak-gives-an-online-press-picture-id1232555560?k=6&m=1232555560&s=612x612&w=0&h=JDI7SLtc_lXUi6JCmiWBaZqB43wwfyWcQd7HgcHlmA0=",
    "https://picsum.photos/200/300?image=1050",
    "https://media.gettyimages.com/photos/french-justice-minister-eric-dupondmoretti-reacts-as-he-attends-a-picture-id1232574070?s=612x612",
   
]







class Mmasonry extends Component {
    render() { 
        return ( 
            <div className={styles.now}>
           
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1200: 5}}
            >
            <Masonry columnsCount={5} gutter="10px"
              className={styles.masonryGrid}
              columnClassName={styles.columnGrid}
              >
              
                {images.map((image) => {
                  return (
                    <Mrender 
                      src={image}
                     />
                  )
                })}
                {images.map((image) => {
                  return (
                    <Mrender 
                      src={image}
                     />
                  )
                })}
                <MasonryPlayer 
                    />
                    <Video
                    />
               
            </Masonry>
            </ResponsiveMasonry>
          
         </div>
         );
    }
}
 
export default Mmasonry;