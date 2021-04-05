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
        <div className="text">
          <p>
            I'm a current Junior studying Computer Science and Chinese at the
            University of Arizona. I'm interested currently in web development
            and learning the full stack. I've worked mostly on some front end
            projects, and want to delve deeper into back end frameworks and
            design, and looking into different hosting service options like
            serverless.
          </p>
          <p>
            In my free time I like to play trading card games. Right now I
            mainly play the Commander format of Magic: the Gathering, but I've
            played a few others as well. I started playing the Pokemon Trading
            Card Game back in 2008 with my dad. I also like to draw! I'm a self
            taught artist who likes colored pencil and normal pencil medium
            drawings. You can check out my artwork below.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
