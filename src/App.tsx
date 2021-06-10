import "./App.scss";
import { useEffect } from "react";

import { Toolbar } from "./components/common/Toolbar";
import { Footer } from "./components/common/Footer";
import { AboutMe } from "./components/AboutMe";
import { Banner } from "./components/Banner";
import { Art } from "./components/Art";
import { ProgrammingProjects } from "./components/ProgrammingProjects";
// eslint-disable-next-line
import visitsApi from "./api";

function App() {
  useEffect(() => {
    // Set the document title and theme.
    document.title = "Etienne Thompson";
    document.documentElement.className = "theme-light";

    // Send visit notice to api.
    // visitsApi.post("/api/httpexample").catch((error) => {
    //   console.log(error);
    // });
  }, []);

  return (
    <div className="App">
      {/*Toolbar section.*/}
      <Toolbar />
      {/*Banner image section.*/}
      <Banner />
      {/*About me section*/}
      <AboutMe />
      {/*Art section.*/}
      <Art />
      {/*Programming section*/}
      <ProgrammingProjects />
      {/*Footer section*/}
      <Footer />
    </div>
  );
}

export default App;
