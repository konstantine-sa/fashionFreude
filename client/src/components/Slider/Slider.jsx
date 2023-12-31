import classes from "./Slider.module.scss";

import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 4 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 4 ? 0 : (prev) => prev + 1);
  };

  const data = [
    "../../../public/img/hero_1.jpg",
    "../../../public/img/hero_2.jpg",
    "../../../public/img/hero_3.jpg",
    "../../../public/img/hero_4.jpg",
    "../../../public/img/hero_5.jpg",
  ];

  return (
    <div className={classes.slider}>
      <div
        className={classes.container}
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {/* images */}
        <img className={classes.img} src={data[0]} alt="photo" />
        <img className={classes.img} src={data[1]} alt="photo" />
        <img className={classes.img} src={data[2]} alt="photo" />
        <img className={classes.img} src={data[3]} alt="photo" />
        <img className={classes.img} src={data[4]} alt="photo" />
      </div>

      {/* arrow icons */}
      <div className={classes.icons}>
        <div className={classes.icon} onClick={prevSlide}>
          <ArrowBackIosNewOutlinedIcon
            className={classes.arrowLeft}
            fontSize="large"
          />
        </div>
        <div className={classes.icon} onClick={nextSlide}>
          <ArrowForwardIosOutlinedIcon
            className={classes.arrowRight}
            fontSize="large"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
