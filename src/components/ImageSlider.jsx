import { useState } from "react";
import './CSS/imageslider.css'

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "-40px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
  background: "transparent"
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "-40px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
  background: "transparent"
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundsize: "cover",
  height: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    filter: "grayscale(20%)",
  };
  // const content = {
  //   width: "60%",
  //   height: "60%",
  //   border: "2px solid white",
  // };

  const heading={
    margin: "auto",
  }
  
  // const btn1 = {
  //   height: "20px",
  //   width: "80px",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // };
  // const btn2 = {
  //   height: "20px",
  //   width: "80px",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // };
  // style={leftArrowStyles}
  return (
    <div style={sliderStyles}>
    
      <div>
        <div onClick={goToPrevious} className= "leftArrowStyles">
          ❰
        </div>
        <div onClick={goToNext}  className= "rightArrowStyles">
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}>
      <div className="ImgSlider">
            <h1>{slides[currentIndex].heading}</h1>
            <p>
            {slides[currentIndex].content}
            </p>
            <div className="Buttons">
              <div className="btn btn-1" >
              <a href={slides[currentIndex].live} target="_blank">View Live</a> 
              </div>
              <div className="btn btn-2" >
              <a href={slides[currentIndex].code} target="_blank">Source Code</a> 
              </div>
            </div>
        </div>
      </div>
      <div className="efg" style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;