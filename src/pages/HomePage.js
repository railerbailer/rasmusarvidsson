import React, { Component } from "react";
import "../App.css";
// import ContactForm from '../components/ContactForm';
import TextField from "material-ui/TextField";

import RaisedButton from "material-ui/RaisedButton";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import { Container } from "semantic-ui-react";
import ProfilePicHomePage from "../pics/rasmus.jpg";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

class ThirdPage extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton label="Ok" primary={true} onClick={this.handleClose} />
    ];
    return (
      <div className="Content">
        <section className="introText">
          <header className="App-header">
            <h1 className="App-title">Rasmus Arvidsson</h1>
          </header>

          <Container style={{ display: "flex" }}>
            <Image src={ProfilePicHomePage} size="small" />
            <p style={{ margin: "auto", padding: "10px", maxWidth: "500px" }}>
              Mitt namn är Rasmus Arvidsson och jag är en 28 årig JavaScript
              utvecklare. För mer information om mig,{" "}
              <Link style={{ color: "lightblue" }} to="/cv">
                se mitt cv{" "}
              </Link>
              eller kontakta mig i formuläret nedan.
            </p>
          </Container>
        </section>
        {/* CONTACT FORM*/}

        <section className="divider">
          <div
            style={{
              margin: "auto",
              padding: "7% 20% 10% 20%",
              transform: "skewY(-7deg)"
            }}
          >
            <h2>
              För mer information om hur vi ska samarbeta,{" "}
              <Link to="/webbutveckling">klicka här</Link> eller kontakta mig i
              formuläret nedan.
            </h2>

            <form
              method="post"
              action="http://www.rasmusarvidsson.nu/cgi-bin/FormMail.pl"
              accept-charset="ISO-8859-1"
              onsubmit="var originalCharset = document.charset; 
                        document.charset = 'ISO-8859-1'; 
                        window.onbeforeunload = function () {document.charset=originalCharset;};"
            >
              <div style={{ margin: "auto !important" }}>
                <TextField
                  style={{ width: "100%" }}
                  name="realname"
                  hintText="Namn"
                />
                <br />
                <TextField
                  style={{ width: "100%" }}
                  name="email"
                  hintText="Email"
                  type="email"
                />
                <br />

                <TextField
                  style={{ width: "100%" }}
                  cols="40"
                  name="Message"
                  hintText="Skriv ditt meddelande här"
                  floatingLabelText="Meddelande"
                  multiLine={true}
                  rows={4}
                />
                <br />
              </div>

              <RaisedButton
                style={{ width: "100%" }}
                label="Skicka meddelande"
                primary={true}
                type="submit"
                value="Skicka"
              />
              <Dialog
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
              >
                Ditt meddelande är skickat till Rasmus!
              </Dialog>
              <input
                type="hidden"
                name="recipient"
                value="info@rasmusarvidsson.nu"
              />
              <input type="hidden" name="subject" value="Subject" />
              <input
                type="hidden"
                name="redirect"
                value="http://www.rasmusarvidsson.nu/"
              />
              <input
                type="hidden"
                name="missing_fields_redirect"
                value={"http://www.rasmusarvidsson.nu/"}
              />
              <input
                type="hidden"
                name="required"
                value="realname,email,Message"
              />
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default ThirdPage;
