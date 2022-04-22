import { useEffect, useState } from "react";
import { SectionHeader } from "../common/SectionHeader";
import { Card, CardTitle, CardContent } from "../common/Card";
import { Row, Col } from "../common/Grid";
import { Button } from "../common/Button";
import { FadeInSection } from "../common/FadeInSection";
import "./ProgrammingProjects.scss";

import vivianethompson from "../../assets/images/vivianethompson.png";
import disney_bingo from "../../assets/images/disney_bingo.png";

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
              {/*Change render based on window width.*/}
              {windowWidth > 900 ? (
                <Row justify="center">
                  <Col cols="2">
                    <CardTitle align="center">vivianethompson.com</CardTitle>

                    <CardContent align="center">
                      <Row justify="center">
                        This is my mom's business website I re-made for her
                        over a summer. This was done using Vue.js and using her
                        old website design, just modernizing the look. You can
                        view more at the actual site.
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
                  <Col cols="2">
                    <img
                      className="card-image"
                      src={vivianethompson}
                      alt="vivianethompson.com Home Page, used as an example thumbnail for the project."
                      loading="lazy"
                    />
                  </Col>
                </Row>
              ) : (
                <div>
                  <Row justify="center">
                    <Col cols="1">
                      <img
                        className="mobile-image"
                        src={vivianethompson}
                        alt="vivianethompson.com Home Page, used as en example thumbnail for the project."
                        loading="lazy"
                      />
                    </Col>
                  </Row>
                  <Row justify="center">
                    <Col cols="1">
                      <CardTitle align="center">vivianethompson.com</CardTitle>
                      <CardContent align="center">
                        This is my mom's business website I re-made for her
                        over a summer. This was done using Vue.js and using her
                        old website design, just modernizing the look. You can
                        view more at the actual site.
                      </CardContent>
                    </Col>
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
                </div>
              )}
            </Card>
            <Card>
              {/*Change render based on window width.*/}
              {windowWidth > 900 ? (
                <Row justify="center">
                  <Col cols="2">
                    <img
                      className="card-image"
                      src={disney_bingo}
                      alt="Disney Bingo Website. Shows the game board that players were using. Used as an example thumbnail for the project."
                      loading="lazy"
                    />
                  </Col>
                  <Col cols="2">
                    <CardTitle align="center">
                      University of Arizona Disney Club Bingo
                    </CardTitle>
                    <CardContent align="center">
                      <Row justify="center">
                        This was a small project I made for my university's
                        Disney Club. It was a Halloween Bingo game. They way it
                        worked was students needed to log in to view their own
                        individual bingo board. When they completed a square
                        they could upload a photo as proof of completion. At
                        the time I hosted the front end on my personal website,
                        the back end on Heroku, and used AWS S3 for file
                        storage.
                        <br className="mv-5" />A demo version is available! Use
                        "demo" as the username and password!
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
                </Row>
              ) : (
                <div>
                  <Row justify="center">
                    <Col cols="1">
                      <img
                        className="mobile-image"
                        src={disney_bingo}
                        alt="Disney Bingo Website. Shows the game board that players were using. Used as an example thumbnail for the project."
                        loading="lazy"
                      />
                    </Col>
                  </Row>
                  <Row justify="center">
                    <Col cols="1">
                      <CardTitle align="center">
                        University of Arizona Disney Club Bingo
                      </CardTitle>
                      <CardContent align="center">
                        <Row>
                          This was a small project I made for my university's
                          Disney Club. It was a Halloween Bingo game. They way
                          it worked was students needed to log in to view their
                          own individual bingo board. When they completed a
                          square they could upload a photo as proof of
                          completion. At the time I hosted the front end on my
                          personal website, the back end on Heroku, and used
                          AWS S3 for file storage. A demo version is available!
                          Use "demo" as the username and password!
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
                  </Row>
                </div>
              )}
            </Card>
          </div>
        </Row>
      </FadeInSection>
    </div>
  );
};
