import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import ritika from "../../assits/culture/ritika.png";
import pankhudi from "../../assits/culture/pankhudi.png";
import khushi from "../../assits/culture/khushi.png";

import bgicon from "../../assits/culture/icons/bgicon.svg";
import linkdin from "../../assits/ourteam/icons/linkdin.svg";
import { Link } from "react-router-dom";

function PeopleSay() {

    const reviews = [
        {
          first: "The journey has been both enlightening and difficult.",
          sec:"The nicest bonus is that everyone here gets a chance ",
          third:" to be heard and make an impact,",
          forth:"regardless of their age or length of service.",
          img: ritika,
          name:"Ritika Negi, HR Manager",
          profile:"https://www.linkedin.com/in/ritika-negi-0527191aa/"
        },
        {
        first: "The work environment at the organisation is fantastic, and everyone is ",
        sec:"extremely helpful. Working for the organisation has taught me a lot,",
        third:"social skills have greatly increased. This company provides a platform for you to ",
        forth:"give it your all and have an unforgettable experience.",
        img: khushi,
        name:"Khushi Dhankhola, Marketing Manager",
        profile:"https://www.linkedin.com/in/khushi-dhankhola-73b923214/"
        },
        {
        first: "The amount of enthusiasm, inventiveness, and ingenuity I've seen is unrivalled.  ",
        sec:"This is a company where everyone is allowed to fulfil their full potential.",
        third:"The organisation employs a large number of talented ",
        forth:"individuals who are all extremely industrious.",
        img: pankhudi,
        name:"Pankhuri Choudhary, Project Manager",
        profile:"https://www.linkedin.com/in/pankhuri-choudhary/"
        },

      ];

      var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
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
    


  return (
      <div>
        <Slider {...settings}>
            {reviews.map((item)=>{
                return (<>
                
                <div>
                    <div className="flex flex-col-reverse sm:flex-row place-content-center place-items-center mt-16 text-center">
                    <div className="relative mt-10 sm:mt-0">
                        <img className="" src={bgicon} alt="" />
                        <img
                        className="absolute -top-24 mt-1 "
                        src={item.img}      //this is the error
                        alt=""
                        />
                    </div>

                    <div className=" pb-10 sm:p-10">
                        <p className="text-base font-semibold">
                        {item.first}
                        </p>
                        <p className="text-base font-semibold">
                        {item.sec}
                        </p>

                        <p className="text-base font-semibold">
                        {item.third}
                        </p>

                        <p className="text-base font-semibold">
                        {item.forth}
                        </p>

                        <p className="text-red-400 font-semibold">{item.name}</p>
                        
                        <div className="flex place-content-center m-5">
                        <a href={item.profile}> <img className="h-8 w-8" src={linkdin} alt="lindin-image" /></a>
                        </div>

                        <Link to="/about"><button className="btn py-3 px-10">Work With Us</button></Link>
                    </div>

                </div>
                </div>
                
                </>);
            })}

        
        </Slider>
      </div>

  );
}

export default PeopleSay;
