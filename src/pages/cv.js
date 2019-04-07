import React, { Component } from "react";
import "../App.css";
import { Image } from "semantic-ui-react";
import ProfilePic from "../pics/profil.jpg";

import { Container } from "semantic-ui-react";
import TimelineThree from "../components/TimelineThree";

class HomePage extends Component {
  render() {
    return (
      <div className="ContentCv">
        <div className="firstSection">
          <header className="App-header">
            <h1>Rasmus Arvidsson CV</h1>
          </header>

          <Container className="">
            <section style={{ display: "flex" }}>
              <Image src={ProfilePic} size="small" circular />
            </section>
          </Container>
        </div>

        <Container>
          <TimelineThree />
        </Container>
      </div>
    );
  }
}

export default HomePage;
