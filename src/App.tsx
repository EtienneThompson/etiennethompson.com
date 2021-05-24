import backgroundImage from "./assets/etienne_flowers.jpg";
import colored_tiger from "./assets/colored_tiger.jpg";
import pencil_owl from "./assets/pencil_owl.jpg";
import colored_lion_1 from "./assets/colored_lion_1.jpg";
import colored_horse from "./assets/colored_horse.jpg";
import vivianethompson from "./assets/vivianethompson.png";
import disney_bingo from "./assets/disney_bingo.png";
import "./App.scss";
import { useEffect, useState } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set it so the page knows the window size.
    document.title = "Etienne Thompson";
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    document.documentElement.className = "theme-light";
  }, []);

  function toggleTheme() {
    document.documentElement.className =
      document.documentElement.className === "theme-light"
        ? "theme-dark"
        : "theme-light";
  }

  return (
    <div className="App">
      {/*Toolbar section.*/}
      <div className="toolbar">
        <p className={"" + (windowWidth > 550 ? "name" : "mobile-name") + ""}>
          Etienne Thompson
        </p>
        <label className="toggle">
          <input
            type="checkbox"
            onChange={() => {
              toggleTheme();
            }}
          />
          <span className="slider"></span>
        </label>
        <p className="toggle-label">Theme: </p>
      </div>
      {/*Banner image section.*/}
      <div className="banner">
        <img className="bannerImage" src={backgroundImage} alt="Background" />
        {windowWidth > 500 ? (
          <p className="welcomeText">
            <span style={{ fontSize: 24 }}>Hey There! I'm</span>
            <br />
            <span style={{ fontSize: 44 }}>Etienne Thompson</span>
          </p>
        ) : (
          <p></p>
        )}
      </div>
      {/*Diagonal line across banner image.*/}
      <div className="diagonalLine"></div>
      {/*About me section*/}
      <div className="aboutMe">
        <div className="header">
          <p className="header-text">About Me</p>
        </div>
        <div className="description">
          {/*Change this section's className based on window height.*/}
          <p
            className={
              "" +
              (windowWidth > 900 ? "description-text" : "mobile-text") +
              ""
            }
          >
            I'm a current Junior studying Computer Science and Chinese at the
            University of Arizona. I'm interested currently in web development
            and learning the full stack. I've worked mostly on some front end
            projects, and want to delve deeper into back end frameworks and
            design, and looking into different hosting service options like
            serverless. You can check out a few of the projects I've worked on
            down below.
            <br />
            <br /> In my free time I like to play trading card games. Right now
            I mainly play the Commander format of Magic: the Gathering, but
            I've played a few others as well. I started playing the Pokemon
            Trading Card Game back in 2008 with my dad. I also like to draw!
            I'm a self taught artist who likes colored pencil and normal pencil
            medium drawings. You can check out my artwork below.
          </p>
        </div>
      </div>
      {/*Art section.*/}
      <div className="art">
        <div className="header">
          <p className="header-text">Art</p>
        </div>
        <div className="row">
          <div className="column">
            <img
              className="image"
              src={colored_tiger}
              alt="Colored Pencil Tiger"
            />
          </div>
          <div className="column">
            <img className="image" src={pencil_owl} alt="Pencil Owl" />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <img
              className="image"
              src={colored_lion_1}
              alt="Colored Pencil Lion"
            />
          </div>
          <div className="column">
            <img
              className="image"
              src={colored_horse}
              alt="Colored Pencil Horse"
            />
          </div>
        </div>
      </div>
      {/*Programming section*/}
      <div className="programming">
        <div className="header">
          <p className="header-text">Programming Projects</p>
        </div>
        <div className="row">
          <div className="container">
            <a
              className="nav-card"
              href="https://vivianethompson.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/*Change render based on window width.*/}
              {windowWidth > 900 ? (
                <div className="row">
                  <div className="column">
                    <p className="card-title">vivianethompson.com</p>
                    <p className="description-text">
                      This is my mom's business website I re-made for her over
                      a summer. This was done using Vue.js and using her old
                      website design, just modernizing the look. You can view
                      more at the actual site. Just click this card!
                    </p>
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
                      <p className="card-title">vivianethompson.com</p>
                      <p className="description-text">
                        This is my mom's business website I re-made for her
                        over a summer. This was done using Vue.js and using her
                        old website design, just modernizing the look. You can
                        view more at the actual site. Just click this card!
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </a>
            <div className="nav-card">
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
                    <p className="card-title">
                      University of Arizona Disney Club Bingo
                    </p>
                    <p className="description-text">
                      This was a small project I made for my university's
                      Disney Club. It was a Halloween Bingo game. They way it
                      worked was students needed to log in to view their own
                      individual bingo board. When they completed a square they
                      could upload a photo as proof of completion. At the time
                      I hosted the front end on my personal website, the back
                      end on Heroku, and used AWS S3 for file storage. A demo
                      version will come soon.
                    </p>
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
                      <p className="card-title">
                        University of Arizona Disney Club Bingo
                      </p>
                      <p className="description-text">
                        This was a small project I made for my university's
                        Disney Club. It was a Halloween Bingo game. They way it
                        worked was students needed to log in to view their own
                        individual bingo board. When they completed a square
                        they could upload a photo as proof of completion. At
                        the time I hosted the front end on my personal website,
                        the back end on Heroku, and used AWS S3 for file
                        storage. A demo version will come soon.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/*Footer section*/}
      <div className="footer">
        <p className="name">Etienne Thompson</p>
      </div>
    </div>
  );
}

export default App;
