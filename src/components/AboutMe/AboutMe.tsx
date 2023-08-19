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
            <br /> In my free time I like to play trading card games. Right now
            I mainly play the Commander format of Magic: the Gathering, but
            I've played a few others as well. I started playing the Pokemon
            Trading Card Game back in 2008 with my dad. I also like to draw!
            I'm a self taught artist who likes colored pencil and normal pencil
            medium drawings. You can check out my artwork below.
          </p>
        </div>
      </FadeInSection>
    </div>
  );
};
