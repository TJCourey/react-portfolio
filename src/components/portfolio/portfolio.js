import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Col, Row, Media } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import BandAidPhoto from "../../images/bandAid.gif";
import BeerMePhoto from "../../images/beerMe.png";
import BudgetPhoto from "../../images/budget.png";
import FitnessPhoto from "../../images/fitness-tracker.png";
import SchedulerPhoto from "../../images/scheduler.png";
import WeatherPhoto from "../../images/weather-dash.png";
import ClayPalPhoto from "../../images/claypal.png";
import "./portfolio.module.css";

function Portfolio() {
  const projectInfo = [
    {
      id: 1,
      image: ClayPalPhoto,
      title: "ClayPal",
      desc: "A web app designed to track clay sports score like trap and skeet",
      deploy: "https://claypal.herokuapp.com/",
      github: "https://github.com/TJCourey/ClayPal",
    },
    {
      id: 2,
      image: BandAidPhoto,
      title: "BandAID",
      desc: "A helpful application for musicians on tour",
      deploy: "https://fierce-beach-33317.herokuapp.com/",
      github: "https://github.com/AaronDMendoza/BandAid",
    },
    {
      id: 3,
      image: BeerMePhoto,
      title: "BeerMe",
      desc: "A fun application for finding new beers",
      deploy: "https://tjcourey.github.io/beerMe-international/",
      github: "https://github.com/TJCourey/beerMe-international",
    },
    {
      id: 4,
      image: SchedulerPhoto,
      title: "Day Planner",
      desc: "A helpful day planner that utilizes local storage",
      deploy: "https://tjcourey.github.io/day-planner/",
      github: "https://github.com/TJCourey/day-planner",
    },
    {
      id: 5,
      image: WeatherPhoto,
      title: "Weather Overground",
      desc: "A weather application that utilizes api calls",
      deploy: "https://tjcourey.github.io/weather-dashboard/",
      github: "https://github.com/TJCourey/weather-dashboard",
    },
    {
      id: 6,
      image: FitnessPhoto,
      title: "Fitness Tracker",
      desc: "A application designed to help with fitness goals",
      deploy:
        "https://immense-castle-10334.herokuapp.com/?id=60c8c01b2c91df0015e28109",
      github: "https://github.com/TJCourey/fitness-tracker",
    },
    {
      id: 7,
      image: BudgetPhoto,
      title: "Budget Tracker",
      desc: "A budgeting tool that has both online and offline functionality",
      deploy: "https://sheltered-tundra-23663.herokuapp.com/",
      github: "https://github.com/TJCourey/progressive-budget",
    },
  ];
  const renderCard = (card) => {
    return (
      <Container key={card.id} style={{ padding: "4rem" }}>
        <Card
          className="projectCard bg-image hover-zoom hover-shadow"
          style={{ padding: "2rem" }}
        >
          <Media>
            <Col xs={6} md={8}>
              <Card.Img className="w-100" src={card.image} />
            </Col>
            <Card.Body>
              <Card.Title style={{ textAlign: "Center" }}>
                {card.title}
              </Card.Title>
              <Card.Text style={{ textAlign: "center" }}>{card.desc}</Card.Text>
              <Container>
                <Row className="justify-content-md-center">
                  <Col style={{ textAlign: "center" }}>
                    <Button href={card.github} variant="dark" target="_blank">
                      Github
                    </Button>
                  </Col>
                  <br></br>
                  <Col style={{ textAlign: "center" }}>
                    <Button
                      href={card.deploy}
                      variant="secondary"
                      target="_blank"
                    >
                      Deployed
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Media>
        </Card>
      </Container>
    );
  };

  return projectInfo.map(renderCard);
}

export default Portfolio;
