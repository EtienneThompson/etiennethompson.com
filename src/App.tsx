import backgroundImage from "./assets/etienne_flowers.jpg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="toolbar">
        <p className="name">Etienne Thompson</p>
      </div>
      <div className="banner">
        <img className="bannerImage" src={backgroundImage} alt="Background" />
        <p className="welcomeText">
          <span style={{ fontSize: 24 }}>Hey There! I'm</span>
          <br />
          <span style={{ fontSize: 44 }}>Etienne Thompson</span>
        </p>
        <div className="diagonalLine"></div>
      </div>
      <div className="aboutMe">
        <div className="header">
          <p>About Me</p>
        </div>
      </div>
    </div>
  );
}

export default App;
