import React from "react";
import "./Home.css";
import img1 from "./image/image.jpg"
function Home  () {
  return (
    <div className="home">
      <div className="desktop">
        <h1>SightAid</h1>
        <img src={img1} alt="" id="deskimg"/>
        </div>
        <div className="mobile">
        <h1>SightAid</h1>
        <img src={img1} alt="" id="mobimg" />
        
        </div>
    </div>
  );
};

export default Home;
