import { useEffect, useState } from "react";
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
      </FadeInSection>
    </div>
  );
};
