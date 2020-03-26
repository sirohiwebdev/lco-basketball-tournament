import React from "react";
import { Navbar } from "../components/Navbar";
import aboutImage from "../assets/images/img3.png";
import tournamentImage from "../assets/images/back@2x.png";
import contactImage from "../assets/images/img2.png";
import { Slider } from "../components/Slider";
import { ListGroup, ListGroupItem, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Home = props => {
  return (
    <>
      <div>
        <Navbar {...props} />
        <div className="full-header d-flex justify-content-center align-items-center flex-column col">
          <Row>
            <Col md={8}>
              <h1 className="text-dark headline my-5 text-center">
                Amazing Basketball Tournament
              </h1>
              <h1 className="text-sec tagline text-center">
                Go Fight For It Team
              </h1>
            </Col>
          </Row>
        </div>
        <div className="bg-white vh-100 col" id="about">
          <div className="row minh-100">
            <div className="col-md-6 d-flex align-items-center px-md-5 px-sm-2">
              <div className="effect">
                <img
                  src={aboutImage}
                  alt="LCO Tournament"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center flex-column">
              <h1 className="text-imp text-center text-effect">About</h1>
              <p className="px-md-5 px-sm-2 text-justify mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, exercitationem. Quibusdam libero fugiat ea veritatis
                ipsam distinctio sunt quasi reiciendis odit aliquid temporibus,
                quae pariatur a eligendi corporis nemo aspernatur!
              </p>
            </div>
          </div>
        </div>
        <div className="bg-light vh-100 col" id="tournament">
          <div className="row minh-100">
            <div className="col-md-6 d-flex align-items-center justify-content-center flex-column">
              <h1 className="text-imp text-center text-effect">Tournament</h1>
              <p className="px-md-5 px-sm-2 text-justify mt-4 h4">
                A big tournament is coming up.
              </p>
            </div>

            <div className="col-md-6 d-flex align-items-center px-md-5 px-sm-2">
              <div className="px-5">
                <img
                  src={tournamentImage}
                  alt="LCO Tournament"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white vh-100 col" id="video">
          <div className="row minh-100">
            <div className="col-md-6 d-flex align-items-center justify-content-stretch px-md-5 px-sm-2">
              <iframe
                className="video"
                src="https://www.youtube.com/embed/hqvGOPB0KmQ"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              >
                <div className="effect "></div>
              </iframe>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center flex-column">
              <h1 className="text-imp text-center text-effect">Video Shots</h1>
              <p className="px-md-5 px-sm-2 text-justify mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                repellendus nihil vitae magni aliquid necessitatibus ea autem
                architecto pariatur incidunt minus culpa, ducimus doloremque,
                sit officiis provident laudantium expedita itaque.
              </p>
            </div>
          </div>
        </div>
        <div
          className="bg-light min-vh-100 py-5 col d-flex flex-column justify-content-center"
          id="team"
        >
          <div className="text-center my-5">
            <h1 className="text-imp text-center text-effect my-5 d-inline">
              Team
            </h1>
          </div>
          <Slider className="mt-5" />
        </div>

        <div
          className="bg-white min-vh-100 col py-5 d-flex flex-column justify-content-center"
          id="faq"
        >
          <div className="row minh-100">
            <div className="col-md-12 d-flex align-items-center justify-content-center flex-column">
              <h1 className="text-imp text-center text-effect my-5 d-inline">
                FAQs
              </h1>
            </div>

            <div className="col-md-12 d-flex align-items-center px-md-5 px-sm-2">
              <div className="faq-box mx-auto  p-2">
                <div>
                  <div className="mb-2 p-2 border border-light rounded">
                    <h4>What is LCO tournament is about?</h4>
                    <div>
                      LCO is coming up with and amazing Basketball Tournament.
                    </div>
                  </div>

                  <div className="mb-2 p-2 border border-light rounded">
                    <h4>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit?
                    </h4>
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempora aspernatur aliquid fugit dicta tenetur consequatur
                      dolore deleniti, optio, molestiae recusandae, omnis quas
                      debitis deserunt temporibus at perspiciatis harum eos
                      architecto.
                    </div>
                  </div>

                  <div className="mb-2 p-2 border border-light rounded">
                    <h4>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit?
                    </h4>
                    <div className="text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempora aspernatur aliquid fugit dicta tenetur consequatur
                      dolore deleniti, optio, molestiae recusandae, omnis quas
                      debitis deserunt temporibus at perspiciatis harum eos
                      architecto.
                    </div>
                  </div>

                  <div className="mb-2 p-2 border border-light rounded">
                    <h4>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit?
                    </h4>
                    <div className="text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempora aspernatur aliquid fugit dicta tenetur consequatur
                      dolore deleniti, optio, molestiae recusandae, omnis quas
                      debitis deserunt temporibus at perspiciatis harum eos
                      architecto.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light vh-100 col py-5" id="contact">
          <div className="row minh-100">
            <div className="col-md-6 d-flex align-items-center justify-content-center px-md-5 px-sm-2">
              <div className="effect">
                <img
                  src={contactImage}
                  alt="LCO Tournament"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-md-6 d-flex align-items-center justify-content-center flex-column">
              <h1 className="text-imp text-center text-effect my-5">
                Contact Us
              </h1>
              <div className="px-md-5 px-sm-2 text-justify mt-4">
                <div className="h5 mb-1">Mobile</div>
                <div className="text-muted">+91-999999999</div>
                <div className="h5 mt-3 mb-1">Address</div>
                <div className="text-muted">
                  LCO Basketball Ground, 55 - Fictional Homes, <br /> Fictional
                  Road Near Fictional Lake. India
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 py-5 bg-white text-center">
          Designed with{" "}
          <FontAwesomeIcon
            style={{ color: "red" }}
            className="mx-2"
            icon={faHeart}
          />{" "}
          by <span className="h5">Abhishek Sirohi</span>
        </div>
      </div>
    </>
  );
};
