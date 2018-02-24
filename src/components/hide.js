import React, { Component } from 'react';
import '../App.css';
// import ContactForm from '../components/ContactForm';
import TextField from 'material-ui/TextField';
import {orange500, blue500, grey50} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {Container} from 'semantic-ui-react'
import ProfilePicHomePage from '../pics/rasmus.jpg';
import Sticky from 'semantic-ui-react';
import {Link} from 'react-router-dom';


import { Button, Divider, Image, Transition } from 'semantic-ui-react'


export default class TransitionExampleTransition extends Component {
  state = { visible: true }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state

    return (
      <div>
      asd
        <Button content={visible ? 'Hide' : 'Show'} onClick={this.toggleVisibility} />
        <Divider hidden />
        <Transition visible={visible} animation='scale' duration={500}>
          
           <form method="post" action="http://www.rasmusarvidsson.nu/cgi-bin/FormMail.pl" 
                        accept-charset="ISO-8859-1" onsubmit="var originalCharset = document.charset; 
                        document.charset = 'ISO-8859-1'; 
                        window.onbeforeunload = function () {document.charset=originalCharset;};">
                <div style={{margin: 'auto !important'}}>
                <TextField
                style={{width: '100%'}}
                  name="realname"
                  hintText="Namn"
                 

                /><br />
                <TextField
               style={{width: '100%'}}
                name="email"
                  hintText="Email"
                  type='email'
                /><br />
               
                <TextField
                style={{width: '100%'}}
                cols="40" rows="10" name="Message"
                  hintText="Skriv ditt meddelande här"
                  floatingLabelText="Meddelande"
                  multiLine={true}
                  rows={2}
                /><br />
                </div>
                <div>
                    <RaisedButton style={{width: '100%'}} label="Skicka meddelande" primary={true}type="submit" value="Skicka" onClick={this.handleOpen} />
                    <Dialog
                    
                      modal={false}
                      open={this.state.open}
                      onRequestClose={this.handleClose}
                    >
                      Ditt meddelande är skickat till Rasmus!
                       <input type="hidden" name="recipient" value="info@rasmusarvidsson.nu" />
                        <input type="hidden" name="subject" value="Subject" />
                       <input type="hidden" name="redirect" 
                        value="http://www.rasmusarvidsson.nu/ThirdPage" />
                        <input className="ContactForm" type="hidden" name="missing_fields_redirect" 
                        value="http://www.rasmusarvidsson.nu/fel.html" />
                        <input className="ContactForm" type="hidden" name="required" value="realname,email,Message" />
                    </Dialog>
                  </div>
                 {/*<RaisedButton label="Primary" primary={true}type="submit" value="Skicka" />*/}
                      
              
             </form>   
        </Transition>
      </div>
    )
  }
}
