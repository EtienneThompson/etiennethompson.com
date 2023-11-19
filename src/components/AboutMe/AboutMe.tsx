import React, { useEffect, useState } from "react";
import { SectionHeader } from "../common/SectionHeader";
import { FadeInSection } from "../common/FadeInSection";
import "./AboutMe.scss";

export const AboutMe = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <div className="about-me-container">
      <FadeInSection>
        <SectionHeader>About Me</SectionHeader>
        <div className="description">
          {/*Change this section's className based on window height.*/}
          <p
            className={
              "" +
              (windowWidth > 900 ? "description-text" : "mobile-text") +
              ""
            }
          >
            I'm a software engineer curerntly working at Microsoft on Microsoft
            Cashback. I graduated from the University of Arizona with a
            Bachelor's in Computer Science and East Asian Studies focusing on
            Chinese Language in May 2022. I'm also currently working on my
            Master's in Artificial Intelligence from Penn State University.
            <br />
            <br /> Outside of work, I like to work on other software projects,
            play trading card games like Magic: the Gathering, and draw. You
            can see some of my artwork and personal projects down below!
          </p>
        </div>
      </FadeInSection>
    </div>
  );
};
