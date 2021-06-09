import { useEffect, useState } from "react";
import { SectionHeader } from "../common/SectionHeader";
import { Card, CardTitle, CardContent } from "../common/Card";
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

  return (
    <div className="programming">
      <SectionHeader>Programming Projects</SectionHeader>
      <div className="row">
        <div className="container">
          <Card>
            {/*Change render based on window width.*/}
            {windowWidth > 900 ? (
              <div className="row">
                <div className="column">
                  <CardTitle align="center">vivianethompson.com</CardTitle>
                  <CardContent align="center">
                    This is my mom's business website I re-made for her over a
                    summer. This was done using Vue.js and using her old
                    website design, just modernizing the look. You can view
                    more at the actual site. Just click this card!
                  </CardContent>
                </div>
                <div className="column">
                  <img
                    className="card-image"
                    src={vivianethompson}
                    alt="vivianethompson.com Home Page"
                  />
                </div>
              </div>
            ) : (
              <div>
                <div className="row">
                  <div className="mobile-column">
                    <img
                      className="mobile-image"
                      src={vivianethompson}
                      alt="vivianethompson.com Home Page"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="mobile-column">
                    <CardTitle align="center">vivianethompson.com</CardTitle>
                    <CardContent align="center">
                      This is my mom's business website I re-made for her over
                      a summer. This was done using Vue.js and using her old
                      website design, just modernizing the look. You can view
                      more at the actual site. Just click this card!
                    </CardContent>
                  </div>
                </div>
              </div>
            )}
          </Card>
          <Card>
            {/*Change render based on window width.*/}
            {windowWidth > 900 ? (
              <div className="row">
                <div className="column">
                  <img
                    className="card-image"
                    src={disney_bingo}
                    alt="Disney Bingo Website"
                  />
                </div>
                <div className="column">
                  <CardTitle align="center">
                    University of Arizona Disney Club Bingo
                  </CardTitle>
                  <CardContent align="center">
                    This was a small project I made for my university's Disney
                    Club. It was a Halloween Bingo game. They way it worked was
                    students needed to log in to view their own individual
                    bingo board. When they completed a square they could upload
                    a photo as proof of completion. At the time I hosted the
                    front end on my personal website, the back end on Heroku,
                    and used AWS S3 for file storage. A demo version will come
                    soon.
                  </CardContent>
                </div>
              </div>
            ) : (
              <div>
                <div className="row">
                  <div className="mobile-column">
                    <img
                      className="mobile-image"
                      src={disney_bingo}
                      alt="Disney Bingo Website"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="mobile-column">
                    <CardTitle align="center">
                      University of Arizona Disney Club Bingo
                    </CardTitle>
                    <CardContent align="center">
                      This was a small project I made for my university's
                      Disney Club. It was a Halloween Bingo game. They way it
                      worked was students needed to log in to view their own
                      individual bingo board. When they completed a square they
                      could upload a photo as proof of completion. At the time
                      I hosted the front end on my personal website, the back
                      end on Heroku, and used AWS S3 for file storage. A demo
                      version will come soon.
                    </CardContent>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};
