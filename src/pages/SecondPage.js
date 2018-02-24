import React, { Component } from 'react';
import '../App.css';
import {Card, CardHeader, CardText} from 'material-ui/Card';
// import ScrollAnimation from 'react-animate-on-scroll';

class SecondPage extends Component {
  render() {
    return (
      <div className="Content">

         <header className="App-header">   
              <h2 className="App-title">Experience</h2>
          </header>
    <div className="contentWrapperExperience">
        
  <Card containerStyle={{backgroundColor: '#90CAF9', marginTop: '10px', transition:'all 2s ease-in'}}>
    <CardHeader
      title="Work Experience"
      actAsExpander={true}
      showExpandableButton={true}
      style={{fontSize: '50px'}}
    />
   
    <CardText expandable={true}  >
    <div style={{borderTop: '1px ridge gray'}}>
      <h4>Assistant Plant Manager</h4>
      <p> 2012-2014 </p>
      <h5>Circle K Europe</h5>
      Working in a tight team with the Plant manager. Responsibilities included recruitment, general management of staff, security (in case of fire, etc), day to day sales coaching and accounting.
    </div>

    <div style={{borderTop: '1px solid gray'}}>
    <h4>E-commerce Manager</h4>
    <p> 2011-2012 </p>
    <h5>Kläd-In AB</h5>
    <p>Responsible for starting and up the e-commerce side of the business and maintaining it using an open-source e-commerce software. Responisbilities included inventory management, marketing aswell as technical administration.</p>
    </div>

    <div style={{borderTop: '1px solid gray'}}>
    <h4>Sales Coach</h4>
    <p> 2011-2011 </p>
    <h5>Statoil Retail</h5>
    Traveled around to diffrent stores coaching around Sweden, coaching sales persons and managers to better their sales figures. 
    </div>

    <div style={{borderTop: '1px solid gray'}}>
      <h4>Sales Person</h4>
      <p> 2009-2011 </p>
      <h5>Statoil Retail</h5>
      <p>Responsible for customer management.</p>
    </div>

    </CardText>
  </Card>
  <Card style={{backgroundColor: '#A5D6A7', marginTop: 10}}>
    <CardHeader
      title="Education"
      actAsExpander={true}
      showExpandableButton={true}
    />
   
    <CardText expandable={true}>
    <div style={{borderTop: '1px solid gray'}}>
      <h4>Exchange Student</h4>
      <p> 2017-2018</p>
      <h5>Johannes Kepler Universität Linz</h5>
      <p>Master level studies with relation to web engineering. Studies ending 1/2-2018.</p>
     </div>
     <div style={{borderTop: '1px solid gray'}}>
      <h4>Bachelor Information Technology</h4>
      <p> 2015-2018</p>
      <h5>University of Skövde</h5>
      <p>Information systems - Enterprise information management. The education touches a lot of fields, per example web programming, but specializes in databases and how to handle and visualize enterprise data within data- warehouses and marts to aid the decision makers of the enterprise (business intelligence). </p>
     </div>
     <div style={{borderTop: '1px solid gray'}}>
      <h4>Södertörn University</h4>
      <p> 2017-2018</p>
      
      <p>International macro- and microeconomics (30 credits)</p>
     </div>
     <div style={{borderTop: '1px solid gray'}}>
      <h4>Circle K Leadership program</h4>
      <p> 2013-2014</p>
      <h5>Private enterprise institute</h5>
      <p>Chosen as one of the few prospects for education from a 
      private enterprise institute for potential future leaders of the organization.</p>
     </div>
    </CardText>
  </Card>

  <Card style={{backgroundColor: '#CE93D8', marginTop: 10}}>
    <CardHeader
      title="Skills"
      
      actAsExpander={true}
      showExpandableButton={true}
    />
    
    <CardText expandable={true}>
    
      <div style={{borderTop: '1px solid gray'}}>
        <h4>Database management</h4>
        <p>Good. A big focus of my bachelor.</p>
       </div>
       <div style={{borderTop: '1px solid gray'}}>
        <h4>XML</h4>
        <p>Good. A big focus of my bachelor. Finished top of my class.</p>
       </div>
       <div style={{borderTop: '1px solid gray'}}>
        <h4>Database management</h4>
        <p>Good. A big focus of my bachelor.</p>
       </div>
       <div style={{borderTop: '1px solid gray'}}>
        <h4>Web development</h4>
        <p>Good. Self learnt in HTML, CSS Javascript, PHP and self learnt in React</p>
       </div>
       <div style={{borderTop: '1px solid gray'}}>
        <h4>Mobile development</h4>
        <p>Moderate. Self learnt in React Native</p>
       </div>
       
    </CardText>

  </Card>
 
  
  <Card style={{backgroundColor: '#EF9A9A', marginTop: 10}}>
    <CardHeader
      title="Languages"
     
      actAsExpander={true}
      showExpandableButton={true}
    />
   
    <CardText expandable={true}>
     <div style={{borderTop: '1px solid gray'}}>
        <h4>Swedish</h4>
        <p>Mother Language</p>
       </div>

      <div style={{borderTop: '1px solid gray'}}>
        <h4>English</h4>
        <p>Very fluent, excellent</p>
       </div>
       
       <div style={{borderTop: '1px solid gray'}}>
        <h4>German</h4>
        <p>50% fluent</p>
       </div>

       <div style={{borderTop: '1px solid gray'}}>
        <h4>Spanish</h4>
        <p>Understand small amounts</p>
       </div>
    </CardText>
  </Card>
 
 
        </div>
      </div>
    );
  }
}

export default SecondPage;
