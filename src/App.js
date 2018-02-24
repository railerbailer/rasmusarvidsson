import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import cv from './pages/cv';
import SecondPage from './pages/SecondPage';
import HomePage from './pages/HomePage';
import webbutveckling from './pages/webbutveckling';

import {Route, Link} from 'react-router-dom'; 
import FontIcon from 'material-ui/FontIcon';
import {gray800} from 'material-ui/styles/colors';
import {LinkedinIcon, EmailIcon, FacebookIcon} from './components/ShareButtons';
import stickyIcons from './components/stickyIcons';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import Iframe from 'react-iframe';



import ScrollUpButton from './components/scrollUp'



class App extends Component {
    constructor(props) {
    super(props);
    this.state = {open: false};
  }




drawerMover=(open)=>{
  let style;
  if (open===false){
    style="open"
    return style
  }
  else {
    style="closed"
    return style
  }
};

 
handleClose = () => this.setState({open: false});
  handleToggle = () => this.setState({open: !this.state.open});
  render() {
    const iconStyles = {
      top: 6,
      marginRight: 10
    };

   


    
const muiTheme = getMuiTheme({
  palette: {
    
  },

  h1:{
    
  },
  
});
    return ( 

      <MuiThemeProvider muiTheme={muiTheme}>  
          
         <div className="Wrapper">
     
          <AppBar
            style={{backgroundColor: 'rgba(60,60,60, 0.5)', borderBottom: '3px solid rgb(0, 188, 212)', position: 'absolute' }}
            titleStyle={{fontSize: 40}}

            onLeftIconButtonClick={this.handleToggle}        
            title={<h1><Link to="/">Rasmus Arvidsson</Link></h1>}
          /> 
      
          <i style={{color: 'black', position: 'fixed', top: '1px', left: '1px', zIndex: '4000'}}onClick={this.handleToggle} class="material-icons">&#xE5D2;</i>
          <Drawer 

          docked={false} 
          open={this.state.open}  
          containerStyle={{backgroundColor: 'white', width: '200px'}}
          onRequestChange={(open) => this.setState({open})}
          >
              
                 <MenuItem onClick={this.handleClose} containerElement={<Link to="/"/>}>
                    <FontIcon className="material-icons"  style={iconStyles}color={gray800}>&#xE88A;</FontIcon> 
                    Hem
                  </MenuItem>

                  <MenuItem onClick={this.handleClose} containerElement={<Link to="/cv"/>}>
                    <FontIcon className="material-icons"  style={iconStyles}color={gray800}>&#xE8F8;</FontIcon> 
                    CV
                  </MenuItem>

                  <MenuItem onClick={this.handleClose} containerElement={<Link to="/webbutveckling"/>}>
                    <FontIcon className="material-icons"  style={iconStyles}color={gray800}>&#xD8F8;</FontIcon> 
                    Mer info
                  </MenuItem>
                
                             {/*<MenuItem selectedMenuItemStyle={{textColor: 'red'}} containerElement={<Link to="/SecondPage"/>}>
                  <FontIcon   className="material-icons"style={iconStyles}color={gray800}>&#xE8F8;</FontIcon>
                   Experience
                </MenuItem>
              
                <Link activeStyle={{ color: 'red' }} to="/HomePage">
                <MenuItem>
                  <FontIcon className="material-icons" style={iconStyles}color={gray800}>&#xE0D0;</FontIcon>
                   Projects
                </MenuItem>
                </Link>

                 <MenuItem selectedMenuItemStyle={{textColor: 'red'}} containerElement={<Link to="/HomePage"/>}>
                  <FontIcon className="material-icons" style={iconStyles}color={gray800}><i class="material-icons">&#xE0C6;</i></FontIcon>
                   Contact
                </MenuItem>
              */}
                  
              
          </Drawer>
           
      
        {/* closed or open css class*/}
        
          <div className={this.drawerMover(this.state.open)} >
          
            <Route path="/cv" exact component={cv}/>
             <Route path="/webbutveckling" exact component={webbutveckling}/>  
            <Route path="/SecondPage" exact component={SecondPage}/>
            <Route path="/" exact component={HomePage}/>  
            
            

          </div>
          <ScrollUpButton/>
          
          <div className="footer">
          <stickyIcons/>
            <div className="SocialButtons">
                   <a without rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/rasmus.arvidsson1">
                       <FacebookIcon />             
                  </a>
                   <a without rel="noopener noreferrer" target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=rasmus.arvidsson1@gmail.com&su=SUBJECT&body=BODY&bcc=">
                      <EmailIcon/> 
                   </a>

                  <a without rel="noopener noreferrer" href="https://www.linkedin.com/in/rasmus-arvidsson/" target="_blank">
                    <LinkedinIcon />        
                  </a>
              </div>
              
  

              <div>Rasmus Arvidsson&copy;2017</div>

              <div className="footerDiv">Email: rasmus.arvidsson1@gmail.com</div>
              <div className="footerDiv">Phone: +46709704038</div>
          </div>
         
                    
         </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
