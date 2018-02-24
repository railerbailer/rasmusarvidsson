import React, { Component } from 'react';
import '../App.css';
import {Image} from 'semantic-ui-react';
import ProfilePic from '../pics/profil.jpg';

import Timeline from '../components/Timeline';
import TimelineTwo from '../components/TimelineTwo';
// import ThirdPage from './ThirdPage';
import {Container} from 'semantic-ui-react';


class HomePage extends Component {
  render() {
    return (
      
      <div className="ContentCv">
      
      <div className="firstSection">
       <header className="App-header">   
                 <h1>Rasmus Arvidsson CV</h1>
                 </header> 

        <Container className="">
              
            
            
            
            <section style={{display: 'flex'}}>
             		 
               
                <div className="contentWrapper">
               
      
                   <h2>Om mig</h2>

                   

                    <p>
                    Jag ser sällan mig själv
                    som den smartaste personen i rummet, jag vet däremot att jag kan kämpa hårdast. 
                    Jag är en tänkare. En av mina bra egenskaper är att jag lägger ned mycket tid på att
                    tänka, analysera för att komma på nya idéer och bryta ned problem. Problemlösning är något som motiverar mig och
                    jag ger mig inte förrän jag har löst det.
                    Jag är bekväm med ansvar, vilket gör att jag klarar mig på bra egen hand, likväl som i grupp.
                    Livet utan ansvar är ett liv utan konsekvenser, och hur kul
                    är det att inte ha något att förlora?                
                    Jag är bra på att ta emot kritik, vilket är väldigt viktigt för mig personligen då 
                    detta ger mig möjlighet att ständigt utvecklas och lära mig nya saker.
                    </p>
                     <p>
                    Jag heter Rasmus Arvidsson, jag är 27 år gammal. Bor och studerar gör jag just nu i Linz, Österrike. 
                    Jag ska däremot nu i januari påbörja mitt examensarbete i Stockholm för min kandidatexamen i systemvetenskap. 
                    Jag har en lägenhet i Skövde där jag studerat i 2,5 år och en i Stockholm som är min primära bostad.
                    Samtidigt 
                    arbetar jag med att designa och skapa webbapplikationer och hemsidor på frilans.
                    </p>



            {/*         <p>
                    My name is Rasmus Arvidsson and I am a 27 years old "stockholmare".

                    I have lived most of my life in  Nacka where I have my family and an 
                    apartment which I at the moment rent out. I rarely consider myself the
                    smartest person in the room,  I do however know that I have the grit 
                    to work harder than anyone in the room. I would define myself as  a 
                    teamplayer and I live by the ideology that working together with others
                      is something that makes us stronger and hightens our potential. 
                      Problemsolving is something that I thrive on, therefore organizational 
                      and IT -development is a hobby of mine. To develop myself and following 
                      my passion is a high priority of mine. I worked a lot in the retail 
                      business, where I thought about making a career. After a few years 
                      of climbing the ladder in the retail business I realized it is not for me.
                      Therefore I started an education in System Informatics. I am now in my 
                      last semester about to start my thesis. I am also a self taught fullstack 
                      programmer.
                    </p>*/}
                </div>
                 <Image src={ProfilePic}size='small' circular/>
            </section>
        </Container>
      </div>
        
       
        <Container>
          <Timeline/>
          <TimelineTwo/>
        </Container>

        
        
      </div>

    );
  }
}

export default HomePage;
 