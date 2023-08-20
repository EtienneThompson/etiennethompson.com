import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";

import { Toolbar } from "./components/common/Toolbar";
import { Footer } from "./components/common/Footer";

// import visitsApi from "./api";

function App() {
  useEffect(() => {
    // Set the document title and theme.
    document.title = "Etienne Thompson - Portfolio";
    document.documentElement.className = "theme-light";

    // Send visit notice to api only in production.
    // if (process.env.NODE_ENV === "production") {
    //   visitsApi.post("/api/httpexample").catch((error) => {
    //     console.log(error);
    //   });
    // }
  }, []);

  return (
    <div className="App">
      <Toolbar />
      <div style={{ paddingTop: "50px" }} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
