import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimeLineThree = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018 - 2019"
        iconStyle={{ background: "rgba(0, 0, 0, 0.7)" }}
        icon={
          <i style={{ marginTop: "7px" }} className="material-icons">
            school
          </i>
        }
      >
        <h3 className="vertical-timeline-element-title">Utvecklare</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Bonnier News, Stockholm
        </h4>

        <p>
          <ul>
            <li>Teknologi: <span style={{fontWeight: 300}}><ul><li>Klient: JavaScript, React.js, Electron.js, HTML och CSS.</li><li>Server: JavaScript, Node.js och Express.js.</li><li>Lagring: MongoDB, ElasticSearch och Redis.</li></ul> </span> </li>
            
            <li>Produkt: <span style={{fontWeight: 300}}>Hemmabyggt skrivverktyg som används för artiklarna på sajt och i tidningen för bland
          annat Dagens Nyheter, Expressen och Dagens Industri.</span></li>
          <li>Team: <span style={{fontWeight: 300}}>Ca 10 personer. En blandning av både mobbprogrammering och självständigt arbete.</span></li>
          </ul>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018"
        iconStyle={{ background: "rgba(0, 0, 0, 0.7)" }}
        icon={
          <i style={{ marginTop: "7px" }} className="material-icons">
            school
          </i>
        }
      >
        <h3 className="vertical-timeline-element-title">Produktägare</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Tipser AB, Stockholm
        </h4>
        <p>
          Produktägare tillsammans med ägaren för företaget. Produkten var en
          webshop med utvecklare lokaliserade i Polen.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2018"
        iconStyle={{ background: "rgba(0, 0, 0, 0.7)" }}
        icon={
          <i style={{ marginTop: "7px" }} className="material-icons">
            card_travel
          </i>
        }
      >
        <h3 className="vertical-timeline-element-title">Examensarbeta</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Tipser AB, Stockholm
        </h4>
        <p>
          Ämnet för uppsatsen för gällande utvecklingsteams som använder Node
          Package Managers ekosystem. Detta med en inriktning på teknisk skuld
          och beroenden för moduler samt hur detta kan analyseras.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2017 - 2018"
        iconStyle={{ background: "rgba(0, 0, 0, 0.7)" }}
        icon={
          <i style={{ marginTop: "7px" }} className="material-icons">
            school
          </i>
        }
      >
        <h3 className="vertical-timeline-element-title">Utbytesstudent</h3>
        <h4 className="vertical-timeline-element-subtitle">JKU, Linz</h4>
        <p>
          Studier på masternivå med en stark relation till web engineering.
          Studierna avklarade 1/2-2018.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2015 - 2018"
        iconStyle={{ background: "rgba(0, 0, 0, 0.7)", color: "#fff" }}
        icon={
          <i style={{ marginTop: "7px" }} className="material-icons">
            school
          </i>
        }
      >
        <h3 className="vertical-timeline-element-title">Student</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Högskolan i Skövde, Skövde
        </h4>
        <p>
          Systemvetenskap med inriktning på Enterprise information management.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2014 - 2015"
        iconStyle={{ background: "rgba(0, 0, 0, 0.7)", color: "#fff" }}
        icon={
          <i style={{ marginTop: "7px" }} className="material-icons">
            school
          </i>
        }
      >
        <h3 className="vertical-timeline-element-title">Student</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Södertörns Högskola, Stockholm
        </h4>
        <p>Nationalekonomi A, macro- och micro economics.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2013 - 2014"
        iconStyle={{ background: "rgba(0, 0, 0, 0.7)", color: "#fff" }}
        icon={
          <i style={{ marginTop: "7px" }} className="material-icons">
            card_travel
          </i>
        }
      >
        <h3 className="vertical-timeline-element-title">Student/ Praktik</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Circle K Ledarprogram, Stockholm
        </h4>
        <p>
          {" "}
          Vald som en av få kandidater för att genomföra en utbildning inom
          ledarskap, anpassad till framtida ledare inom organisationen.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2012 - 2014"
        iconStyle={{ background: "rgba(0, 0, 0, 0.7)", color: "#fff" }}
        icon={
          <i style={{ marginTop: "7px" }} className="material-icons">
            card_travel
          </i>
        }
      >
        <h3 className="vertical-timeline-element-title">
          Ställföreträdande Anläggningschef
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Circle K Europe</h4>
        <p>
          Ansvar inkluderade ett generellt personalansvar, rekrytering, säkerhet
          (brand etc.) och day-to-day säljresultat.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2011 - 2012"
        iconStyle={{ background: "rgba(0, 0, 0, 0.7)", color: "#fff" }}
        icon={
          <i style={{ marginTop: "7px" }} className="material-icons">
            card_travel
          </i>
        }
      >
        <h3 className="vertical-timeline-element-title">E-commerce Manager</h3>
        <h4 className="vertical-timeline-element-subtitle">Kläd-In AB</h4>
        <p>
          Ansvar för att både skapa och underhålla e-handel. Ansvar inkluderade
          marknadsföring, teknisk administration, lager management.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--competencies"
        iconStyle={{ background: "rgba(0, 0, 0, 0.7)", color: "#fff" }}
        icon={
          <i style={{ marginTop: "7px" }} className="material-icons">
            whatshot
          </i>
        }
      >
        <h4
          style={{ marginBottom: "12px" }}
          className="vertical-timeline-element-subtitle"
        >
          Kompetenser
        </h4>

        <h3 className="vertical-timeline-element-title">Webbutveckling</h3>
        <p className="vertical-timeline-element-p">
          Flera års erfarenhet inom Javascript, HTML och CSS. React.js är min
          personliga favorit för klienten, medans Node.js är mig nära till hands
          på server-sidan, mest erfaren med Express.js. Jag känner mig däremot
          bekväm med det mesta inom web.
        </p>

        <h3 className="vertical-timeline-element-title">Databas</h3>
        <p className="vertical-timeline-element-p">
          Ett stort fokus på SQL under min utbildning. Jag har mestadels arbetat
          professionellt med NOSQL och ElasticSearch.
        </p>

        <h3 className="vertical-timeline-element-title">Mobilutveckling</h3>
        <p className="vertical-timeline-element-p">
          Lite erfarenhet i React Native
        </p>

        <h3 className="vertical-timeline-element-title">Bildeditering</h3>
        <p className="vertical-timeline-element-p">
          Gått några privata kurser i photoshop. Editerat bilder för e-handel.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--languages"
        iconStyle={{ background: "rgba(0, 0, 0, 0.7)", color: "#fff" }}
        icon={
          <i style={{ marginTop: "7px" }} className="material-icons">
            language
          </i>
        }
      >
        <h4
          style={{ marginBottom: "12px" }}
          className="vertical-timeline-element-subtitle"
        >
          Språk
        </h4>
        <h3 className="vertical-timeline-element-title">Svenska</h3>
        <p className="vertical-timeline-element-p">Modersmål</p>

        <h3 className="vertical-timeline-element-title">Engelska</h3>
        <p className="vertical-timeline-element-p">
          Flytande i både skrift och tal. C2 (högsta betyg) på mitt senaste
          språktest.
        </p>

        <h3 className="vertical-timeline-element-title">Tyska</h3>
        <p className="vertical-timeline-element-p">
          Läst två 6hp grundkurser under mina studier i Österrike.
        </p>

        <h3 className="vertical-timeline-element-title">JavaScript</h3>
        <p className="vertical-timeline-element-p">Modersmål</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        // icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
};

export default TimeLineThree;
