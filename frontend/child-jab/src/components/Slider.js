// import React, {useState} from 'react'
// import './Slider.css'
// import BtnSlider from './BtnSlider'
// import dataSlider from './dataSlider'

// export default function Slider() {

//     const [slideIndex, setSlideIndex] = useState(1)

//     const nextSlide = () => {
//         if(slideIndex !== dataSlider.length){
//             setSlideIndex(slideIndex + 1)
//         }
//         else if (slideIndex === dataSlider.length){
//             setSlideIndex(1)
//         }
//     }

//     const prevSlide = () => {
//         if(slideIndex !== 1){
//             setSlideIndex(slideIndex - 1)
//         }
//         else if (slideIndex === 1){
//             setSlideIndex(dataSlider.length)
//         }
//     }

//     const moveDot = index => {
//         setSlideIndex(index)
//     }

//     return (
//         <div className="container-slider">
//             {dataSlider.map((obj, index) => {
//                 return (
//                     <div
//                     key={obj.id}
//                     className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
//                     >
//                         <img
//                         src={process.env.PUBLIC_URL + `/imgs/img${index + 1}.jpg`}
//                          alt="slider"/>
//                     </div>
//                 )
//             })}
//             <BtnSlider moveSlide={nextSlide} direction={"next"} />
//             <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

//             <div className="container-dots">
//                 {Array.from({length: 5}).map((item, index) => (
//                     <div
//                     onClick={() => moveDot(index + 1)}
//                     className={slideIndex === index + 1 ? "dot active" : "dot"}
//                     ></div>
//                 ))}
//             </div>
//         </div>
//     )
// }
import React from "react";

const Slider = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={
                "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              }
              className="d-block w-10"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={
                "data:image/jpeg;base64,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"
              }
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
