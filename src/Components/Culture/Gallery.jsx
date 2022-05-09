import React, { useState, useEffect } from "react";
import "./Gallery.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import gfirst from "../../assits/gallery/images/gfirst.jpeg"
import gsec from "../../assits/gallery/images/gsec.jpeg"
import gthree from "../../assits/gallery/images/gthree.jpeg"
import gfour from "../../assits/gallery/images/gfour.jpeg"
import gfive from "../../assits/gallery/images/gfive.jpeg"
import gsix from "../../assits/gallery/images/gsix.jpeg"
import gseven from "../../assits/gallery/images/gseven.jpeg"
import geight from "../../assits/gallery/images/geight.jpeg"
import gnine from "../../assits/gallery/images/gnine.jpeg"
import gten from "../../assits/gallery/images/gten.jpeg"
import geleven from "../../assits/gallery/images/geleven.jpeg"
import gtwel from "../../assits/gallery/images/gtwel.jpeg"




function Gallery() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
    infinite: true,
    autoplay: true,
  };

  const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    centerMode: false,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "10px",
    infinite: true,
    autoplay: true,
  };

  const slidesData = [
    {
      id: 1,
      img: gfirst,
    },
    {
      id: 2,
      img: gsec,
    },
    {
      id: 3,
      img: gthree,
    },
    {
      id: 4,
      img: gfour,
    },
    {
      id: 5,
      img: gfive,
    },
    {
      id: 6,
      img: gsix,
    },
    {
      id: 7,
      img: gseven,
    },
    {
      id: 8,
      img: geight,
    },
    {
      id: 9,
      img: gnine,
    },
    {
      id: 10,
      img: gten,
    },
    {
      id: 11,
      img: geleven,
    },
    {
      id: 12,
      img: gtwel,
    },
  ];

  return (
    <div className="">
      <div className="slider-wrapper">
        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={(slider) => setSlider1(slider)}
        >
          {slidesData.map((slide) => (
            <div className="slick-slide">
              <img
                className="slick-slide-image md:w-1/3 px-10"
                src={slide.img}
              />
            </div>
          ))}
        </Slider>
        <div className="thumbnail-slider-wrap md:w-1/3 ">
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={(slider) => setSlider2(slider)}
          >
            {slidesData.map((slide) => (
              <div className="slick-slide slick-slide-small p-5">
                <img
                  className="slick-slide-image slick-slide-small"
                  src={slide.img}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
