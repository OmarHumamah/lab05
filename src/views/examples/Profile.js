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

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import profile from "assets/img/theme/omar800x800.png";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
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
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={profile}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="6">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">Projects</span>
                          <span className="description">2</span>
                        </div>
                        <div>
                          <span className="heading">Experience</span>
                          <span className="description">3 months</span>
                        </div>
                        <div>
                          <span className="heading">Cups of tea</span>
                          <span className="description">100+</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Omar Nabeel Humamah{" "}
                      <span className="font-weight-light">, 23</span>
                    </h3>
                    <div className="h6 font-weight-300">S
                      <i className="ni location_pin mr-2" />
                      Zarqa, Jordan
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Software developer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      ASAC - LTUC
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          A junior Software developer and Photoshop designer, I've studied English language and literature, but I have a passion for technology, Internet and visual arts. I had courses in software and Web developing, photoshop and similar technical stuff. I worked at many places and my last job experience was at a computer and phone accessories store, my position was a shop assistant. I helped them in online marketing by publishing social media pages for the store’s items. Now, I have a wide experience in software developing languages like HTML, JS and CSS, beside handling editing application like photoshop. And I'm looking to extend it on and on.
                        </p>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Show more
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        
      </>
    );
  }
}

export default Profile;
