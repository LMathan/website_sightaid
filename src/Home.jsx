import React from "react";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./image/image.jpg"
import slide1 from "./image/slide1.jpg"
import slide2 from "./image/slide2.jpg"
import slide3 from "./image/slide3.jpg"
import slide4 from "./image/slide4.jpg"
import slide5 from "./image/slide5.jpg"
import slide6 from "./image/slide6.jpg"
import slide7 from "./image/slide7.jpg"

function Home  () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="home">
      <div className="desktop">
        <h1>SightAid</h1>
        <img src={img1} alt="" id="deskimg"/>
        <div className="deskslider-container">
        <Slider {...settings}>
          <div><img src={slide1} alt="Slide 1" /></div>
          <div><img src={slide2} alt="Slide 2" /></div>
          <div><img src={slide3} alt="Slide 3" /></div>
          <div><img src={slide4} alt="Slide 4" /></div>
          <div><img src={slide5} alt="Slide 5" /></div>
          <div><img src={slide6} alt="Slide 6" /></div>
          <div><img src={slide7} alt="Slide 7" /></div>
        </Slider>
      </div>
      
        </div>




        <div className="mobile">
        <h1>SightAid</h1>
        <img src={img1} alt="" id="mobimg" />
        <div className="slider-container">
        <Slider {...settings}>
          <div><img src={slide1} alt="Slide 1" /></div>
          <div><img src={slide2} alt="Slide 2" /></div>
          <div><img src={slide3} alt="Slide 3" /></div>
          <div><img src={slide4} alt="Slide 4" /></div>
          <div><img src={slide5} alt="Slide 5" /></div>
          <div><img src={slide6} alt="Slide 6" /></div>
          <div><img src={slide7} alt="Slide 7" /></div>
        </Slider>
      </div>
        
        
        </div>
    </div>
  );
};

export default Home;
