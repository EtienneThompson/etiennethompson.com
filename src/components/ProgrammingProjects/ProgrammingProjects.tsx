import React, { useEffect, useState } from "react";
import { SectionHeader } from "../common/SectionHeader";
import { Card, CardTitle, CardContent } from "../common/Card";
import { Container, Row, Col } from "../common/Grid";
import { Button } from "../common/Button";
import { FadeInSection } from "../common/FadeInSection";
import "./ProgrammingProjects.scss";

import vivianethompson from "../../assets/images/vivianethompson.png";
import disney_bingo from "../../assets/images/disney_bingo.png";
import admin_etiennethompson from "../../assets/images/admin_etiennethompson.png";
import inventory_etiennethompson from "../../assets/images/inventory_etiennethompson.png";
import le_barbu_game from "../../assets/images/le_barbu_game.png";

export const ProgrammingProjects = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const onProgrammingProjectClicked = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="programming">
      <FadeInSection>
        <SectionHeader>Programming Projects</SectionHeader>
        <Row justify="center">
          <div className="container">
            <Card>
              <Container
                className={
                  windowWidth > 900 ? "desktop-container" : "mobileContainer"
                }
              >
                <img
                  className="card-image"
                  src={le_barbu_game}
                  alt="Screenshot from the Barbu Card Game app. It is in the middle of the game with 3 of the players having played a single card."
                  loading="lazy"
                />
                <Col>
                  <CardTitle align="center">Barbu Card Game</CardTitle>
                  <CardContent align="center">
                    <Row justify="center">
                      The Barbu Card Game is an iOS app I created that allows
                      people to play the French card game Le Barbu. Le Barbu is
                      a trick-taking game similar to Hearts or Spades.
                    </Row>
                    <Row justify="center">
                      <a
                        href="https://apps.apple.com/us/app/barbu-card-game/id6462794394"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Check it out in the App Store
                      </a>
                    </Row>
                  </CardContent>
                </Col>
              </Container>
            </Card>
            <Card>
              <Container
                className={
                  windowWidth > 900 ? "desktop-container" : "mobileContainer"
                }
              >
                <Col>
                  <CardTitle align="center">
                    inventory.etiennethompson.com
                  </CardTitle>
                  <CardContent align="center">
                    <Row justify="center">
                      This is an inventory app within my ecosystem of web
                      applications. The idea was a way to track where all of my
                      stuff is, because whenever I'm looking for something it's
                      always in the last place I look.
                    </Row>
                    <Row justify="center">
                      <b>Demo coming soon</b>
                    </Row>
                  </CardContent>
                </Col>
                <img
                  className="card-image"
                  src={inventory_etiennethompson}
                  alt="Inventory application for the etiennethompson.com ecosystem of web applications. Pictured is an example page of a box with a few items stored inside."
                  loading="lazy"
                />
              </Container>
            </Card>
            <Card>
              <Container
                className={
                  windowWidth > 900 ? "desktop-container" : "mobileContainer"
                }
              >
                <img
                  className="card-image"
                  src={admin_etiennethompson}
                  alt="Admin site for etiennethompson.com ecosystem of web applications."
                  loading="lazy"
                />
                <Col>
                  <CardTitle align="center">
                    admin.etiennethompson.com
                  </CardTitle>
                  <CardContent align="center">
                    <Row justify="center">
                      This is an admin portal used to manage various web
                      applications I have developed. The functionality includes
                      adding users to the system, configuring the applications
                      I have developed, and configuring users permissions to
                      the various applications.
                    </Row>
                    <Row justify="center">
                      <b>Demo coming soon</b>
                    </Row>
                  </CardContent>
                </Col>
              </Container>
            </Card>
            <Card>
              {/*Change render based on window width.*/}
              <Container
                className={
                  windowWidth > 900 ? "desktop-container" : "mobile-container"
                }
              >
                <Col>
                  <CardTitle align="center">vivianethompson.com</CardTitle>

                  <CardContent align="center">
                    <Row justify="center">
                      This is my mom's business website I re-made for her over
                      a summer. This was done using Vue.js and using her old
                      website design, just modernizing the look. You can view
                      more at the actual site.
                    </Row>
                    <Row justify="center">
                      <Button
                        onClick={() => {
                          onProgrammingProjectClicked(
                            "https://vivianethompson.com"
                          );
                        }}
                      >
                        Visit
                      </Button>
                    </Row>
                  </CardContent>
                </Col>
                <img
                  className="card-image"
                  src={vivianethompson}
                  alt="vivianethompson.com Home Page, used as an example thumbnail for the project."
                  loading="lazy"
                />
              </Container>
            </Card>
            <Card>
              {/*Change render based on window width.*/}
              <Container
                className={
                  windowWidth > 900 ? "desktop-container" : "mobile-container"
                }
              >
                <img
                  className="card-image"
                  src={disney_bingo}
                  alt="Disney Bingo Website. Shows the game board that players were using. Used as an example thumbnail for the project."
                  loading="lazy"
                />
                <Col>
                  <CardTitle align="center">
                    University of Arizona Disney Club Bingo
                  </CardTitle>
                  <CardContent align="center">
                    <Row justify="center">
                      This was a small project I made for my university's
                      Disney Club. It was a Halloween Bingo game. They way it
                      worked was students needed to log in to view their own
                      individual bingo board. When they completed a square they
                      could upload a photo as proof of completion. At the time
                      I hosted the front end on my personal website, the back
                      end on Heroku, and used AWS S3 for file storage.
                      <br className="mv-5" />A demo version is available! Use
                      "demo" as the username and password when logging in.
                    </Row>
                    <Row justify="center">
                      <Button
                        onClick={() =>
                          onProgrammingProjectClicked(
                            "http://disney.bingo.etiennethompson.com"
                          )
                        }
                      >
                        Try it out!
                      </Button>
                    </Row>
                  </CardContent>
                </Col>
              </Container>
            </Card>
          </div>
        </Row>
      </FadeInSection>
    </div>
  );
};
