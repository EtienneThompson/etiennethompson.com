import { useEffect, useState } from "react";
import backgroundImage from "../../assets/images/etienne_flowers.jpg";
import "./Banner.scss";

export const Banner = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <div>
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
    </div>
  );
};
