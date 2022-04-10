import React from "react";
import star from "../assits/stars.svg";
import location from "../assits/location.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Review() {

  const reviews = [
    {
      name: "Amit Chaubey",
      img: "https://www.codevyasa.com/img/amit_chou.jpg",
      smallmsg:
        "Their enthusiasm and communication have been top-notch throughout .",
      msg: "The app's fluid user interface and highly functional performance have won praise from top developers. CodeVyasa distinguished themselves with their responsive communication, impressive technical skill, and passion for the project. They deliver high-quality work and promptly address any flaws.",
      location: "Milton Keynes, England, United Kingdom",
    },
    {
      name: "Rishabh Prasad",
      img: "https://www.codevyasa.com/img/rishab.jpg",
      smallmsg:
        "Highly appreciate the younger leadership team of CodeVyasas and their Agile development model",
      msg: "Their expertise and communication have helped to keep things running smoothly throughout this complex development process, and reactions to the product during the beta phase have been extremely positive",
      location: "Stony Brook, New York, United States",
    },
    {
      name: "M. Sorout",
      img: "https://www.codevyasa.com/img/mohit.jpg",
      smallmsg: "Liked the commitment & the enthusiasm they bring to the table",
      msg: "Code Vyasa provided us with a great project manager and helped improve our trade execution efficiency. Our relationship with Code Vyasa has only been expanded due to the mutual success.",
      location: "Founder of a leading crypto hedge fund",
    },
    {
      name: "Amit Baweja",
      img: "https://www.codevyasa.com/img/amit.jpg",
      smallmsg:
        "Big fan of their MVP Pack & the value it delivered for my Product Idea",
      msg: "Code Vyasa delivered a smoothly running app & a web-panel that has received only great reviews. Assigned resources were proactive, hit all milestones, and were overall outstanding with project management and QA. They will definitely be a partner for future projects as we scale our existing product.",
      location: "London, United Kingdom",
    },
  ];

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow   />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 892,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", marginLeft:"10rem", height:"2rem", placeContent:"start" , width:"4rem", paddingTop:"0.5rem",paddingLeft:"0.5rem"  , background: "black", borderRadius:"20px 20px 20px 20px " }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", height:"2rem", placeContent:"end" , width:"5rem",  paddingTop:"0.5rem", paddingRight:"0.5rem", marginLeft:"-4rem", background: "black", borderRadius:"20px 20px 20px 20px " }}
        onClick={onClick}
      />
    );
  }

  return (


    <div className="pl-10 md:pl-10 overflow-hidden">
      <Slider {...settings}>

      {reviews.map((item) => {
        return (
          <>
            <div className="m-2">
            <div className="bg-bcolor rounded-md p-5 ml-5 h-sixty-h text-sm sm:text-sm md:text-sm md:h-96 lg:h-80 w-full">
              <div className="flex">
                <div className="w-24 m-2">
                  <div className="rounded-full overflow-hidden border-2 border-white flex justify-center items-center">
                    <img src={item.img} alt={`${item.name} image`} />
                  </div>
                </div>

                <div className="text-white">
                  <h2 className="text-white text-xl">{item.name}</h2>
                  <p className="text-xs ">{item.smallmsg}</p>
                  <div className="flex py-2">
                    <img className="h-4 w-4" src={star} alt="star_image" />
                    <img className="h-4 w-4" src={star} alt="star_image" />
                    <img className="h-4 w-4" src={star} alt="star_image" />
                    <img className="h-4 w-4" src={star} alt="star_image" />
                    <img className="h-4 w-4" src={star} alt="star_image" />
                  </div>
                  <div className="flex">
                    <img
                      className="h-5 w-5"
                      src={location}
                      alt="location img"
                    />
                    <h1 className="ml-1 text-xs">{item.location}</h1>
                  </div>
                </div>
              </div>
              <div className="text-sm text-white miniphone:p-2 p-4 text-start font-semibold italic  ">
                {item.msg}
              </div>

            </div>
            </div>
          </>
        );
      })}



      </Slider>
    </div>

  );
}

export default Review;
