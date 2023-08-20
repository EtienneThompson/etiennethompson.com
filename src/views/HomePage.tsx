import React from "react";
import { Banner } from "components/Banner";
import { AboutMe } from "components/AboutMe";
import { Art } from "components/Art";
import { ProgrammingProjects } from "components/ProgrammingProjects";

export const HomePage = () => {
  return (
    <div>
      <Banner />
      <AboutMe />
      <Art />
      <ProgrammingProjects />
    </div>
  );
};
