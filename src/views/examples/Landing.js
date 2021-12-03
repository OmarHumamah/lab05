/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes

import omarsArt from "assets/img/portfolio/omarsArt.png";
import covid from "assets/img/portfolio/c19vt.png";
import lastChapter from "assets/img/portfolio/lastC.jpg";

// reactstrap components
import { Badge, Button, Card, CardBody, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardImg from "reactstrap/lib/CardImg";


// index page sections

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Coding is the future's language{" "}
                        <span>The future is calling . . .</span>
                      </h1>
                      <p className="lead text-white">
                        My passion for coding comes from the love relation
                        between me & computer, beside that I like digital arts.
                        So Coding, designing, art, technology, they are all
                        related inside my head.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="6">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Omar's art project
                          </h6>
                          <CardImg src={omarsArt}/>
                          <p className="description mt-3">
                            It is project still working on to apply my
                            experience in web developing. it is includes my
                            digital art work pieces and more.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              art
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              creative
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://omarhumamah.github.io/OmarsArt/"
                            target="_blank"
                          >
                            Visit
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="6">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            201 Project: COVID-19 vaccine tracker
                          </h6>
                          <CardImg  src={covid}/>
                          <p className="description mt-3">
                            It an application that has a form where you can
                            share your experience after taking a vaccine, a page
                            to show statistics based on the information from the
                            form, a general data tab about vaccines, a page
                            where you can view the places where you can take
                            vaccines, and a Quiz to test your knowledge about
                            the vaccines in general.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              Medical
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              statistics
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              COVID
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://moros-v1.github.io/MTFV/"
                            target="_blank"
                          >
                            Visit
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="6">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            301 project: Last Chapter
                          </h6>
                          <CardImg src={lastChapter}/>
                          <p className="description mt-3">
                            A simple React app where you can find your favourite
                            book,Share Your feedback,And find out community
                            reviews
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              Education
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Books
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Library
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://lastchapter.netlify.app/"
                            onClick={(e) => e.preventDefault()}
                          >
                            Visit
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="6">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            401 project: Garage mobile
                          </h6>
                          <p className="description mt-3">
                            It is an application that supports the user to
                            easily access services related to his car in case of
                            emergency and others. This app using real-time
                            events for executing, and presenting an application
                            that showcases an event driven architecture.
                            programming concepts: A “hub” server that moderates
                            all events. Multiple “clients” that connect to the
                            hub which can .both publish and subscribe to events
                            Must operate over a network.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              Cars
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Emergency
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Services
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Soon
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default Landing;
