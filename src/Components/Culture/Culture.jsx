import React from "react";
import group from "../../assits/culture/group.jpg";
import { Link } from "react-router-dom";

import one from "../../assits/culture/images/one.jpeg";
import two from "../../assits/culture/images/two.jpeg";
import four from "../../assits/culture/images/four.jpeg";
import five from "../../assits/culture/images/five.jpeg";
import six from "../../assits/culture/images/six.jpeg";
import seven from "../../assits/culture/images/seven.jpeg";
import eight from "../../assits/culture/images/eight.jpeg";
import nine from "../../assits/culture/images/nine.jpeg";
import ten from "../../assits/culture/images/ten.jpeg";
import PeopleSay from "./PeopleSay";

import decision from "../../assits/culture/icons/decision.png";
import decisionmaking from "../../assits/culture/icons/decisionmaking.png";
import investment from "../../assits/culture/icons/investment.png";
import sign from "../../assits/culture/icons/sign.png";
import success from "../../assits/culture/icons/success.png";
import team from "../../assits/culture/icons/team.png";

import healthcare from "../../assits/culture/secicons/healthcare.png";
import timing from "../../assits/culture/secicons/timing.png";
import policy from "../../assits/culture/secicons/policy.png";
import growth from "../../assits/culture/secicons/growth.png";
import environment from "../../assits/culture/secicons/environment.png";
import ownership from "../../assits/culture/secicons/ownership.png";
import freemeals from "../../assits/culture/secicons/freemeals.png";
import learning from "../../assits/culture/secicons/learning.png";
import greateteam from "../../assits/culture/secicons/greateteam.png";

// import Gallery from "./Gallery.jsx"

function Culture() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 892,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          marginLeft: "10rem",
          height: "2rem",
          placeContent: "start",
          width: "4rem",
          paddingTop: "0.5rem",
          paddingLeft: "0.5rem",
          background: "black",
          borderRadius: "20px 20px 20px 20px ",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          height: "2rem",
          placeContent: "end",
          width: "5rem",
          paddingTop: "0.5rem",
          paddingRight: "0.5rem",
          marginLeft: "-4rem",
          background: "black",
          borderRadius: "20px 20px 20px 20px ",
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <div>
      <div className="">
        <img className="" src={group} alt="codevyasa-culture-image " />
      </div>

      <div id="culture">
        <div className="flex flex-col place-items-center place-content-center py-10">
          <h1 className="text-center text-3xl font-bold mb-2  ">
            We Believe In
          </h1>
          <div className="h-1 w-24 bg-bcolor "></div>
        </div>

        <div className="flex flex-wrap  place-content-center place-items-center py-10  xl:mx-56">
          <div className="bg-bcolor lg:h-72 text-white w-64 flex flex-col  place-content-center py-5 px-5 m-5 rounded-2xl">
            <img className="w-16 h-16 p-2" src={decision} alt="" />
            <h1 className="text-base sm:text-lg font-semibold">Temerity</h1>
            <p className="py-2 text-sm sm:text-base">
              We've set big ambitions for ourselves.
            </p>
            <p className="pb-2 text-sm sm:text-base italic">
              "Temerity is the mother of success."
            </p>
          </div>

          <div className="bg-bcolor lg:h-72 text-white w-64 flex flex-col  place-content-center py-5 px-5 m-5 rounded-2xl">
            <img className="w-16 h-16 p-2" src={decisionmaking} alt="" />
            <h1 className="text-base sm:text-lg font-semibold">
              Steady Growth
            </h1>
            <p className="py-2 text-sm sm:text-base">
              The goal is to constantly improve and innovate.
            </p>
            <p className="pb-2 text-sm sm:text-base italic">
              "Dreaming must be accompanied by action."
            </p>
          </div>

          <div className="bg-bcolor lg:h-72 text-white w-64 flex flex-col  place-content-center py-5 px-5 m-5 rounded-2xl">
            <img className="w-16 h-16 p-2" src={investment} alt="" />
            <h1 className="text-base sm:text-lg font-semibold">
              Rate of Investment (ROI)
            </h1>
            <p className="py-2 text-sm sm:text-base">
              A tight-knit group in which everyone contributes.
            </p>
            <p className="pb-2 text-sm sm:text-base italic">
              "Art is the act of creating something out of nothing and selling
              it."
            </p>
          </div>

          <div className="bg-bcolor lg:h-72 text-white w-64 flex flex-col  place-content-center py-5 px-5 m-5 rounded-2xl">
            <img className="w-16 h-16 p-2" src={sign} alt="" />
            <h1 className="text-base sm:text-lg font-semibold">
              Make the proper decision
            </h1>
            <p className="py-2 text-sm sm:text-base">
              There will be no concessions in terms of legality, honesty, or
              openness.
            </p>
            <p className="pb-2 text-sm sm:text-base italic">
              "It will please some people while surprising others."
            </p>
          </div>

          <div className="bg-bcolor lg:h-72 text-white w-64 flex flex-col  place-content-center py-5 px-5 m-5 rounded-2xl">
            <img className="w-16 h-16 p-2" src={team} alt="" />
            <h1 className="text-base sm:text-lg font-semibold">
              We are a team
            </h1>
            <p className="py-2 text-sm sm:text-base">
              We're all in this together, and you can count on us to always have
              your back.
            </p>
            <p className="pb-2 text-sm sm:text-base italic">
              "Alone, we can accomplish so little; together, we can achieve so
              much."
            </p>
          </div>

          <div className="bg-bcolor lg:h-72 text-white w-64 flex flex-col  place-content-center py-5 px-5 m-5 rounded-2xl">
            <img className="w-16 h-16 p-2" src={success} alt="" />
            <h1 className="text-base sm:text-lg font-semibold">
              Get things done
            </h1>
            <p className="py-2 text-sm sm:text-base">
              Problem-solving and hands-on execution are important to us.
            </p>
            <p className="pb-2 text-sm sm:text-base italic">
              "You can either run the day or the day can run you."{" "}
            </p>
          </div>
        </div>

        <div className="flex place-items-center place-content-center py-5">
          <button className=" text-white rounded-md bg-bcolor px-5 py-4">
            View Job Opening
          </button>
        </div>
      </div>

      <div>
        <div className="flex flex-col place-items-center place-content-center py-10">
          <h1 className="text-center text-3xl font-bold mb-2 ">Who We Are</h1>
          <div className="h-1 w-24 bg-bcolor "></div>
        </div>

        <hr />

        <div className="flex-col lg:flex lg:flex-row place-content-center place-items-start px-10 my-24">
          <div className="w-full h-96 relative flex place-content-center place-items-center">
            <img
              className="relative mr-28 top-0 left-10 lg:left-0 w-36 sm:w-72 duration-700 hover:scale-125 hover:duration-700 rounded-2xl  	"
              src={one}
              alt=""
            />

            <img
              className="absolute top-12 ml-48 w-32 md:right-40 lg:right-16  xl:right-52 sm:w-56 hover:animate-bounce duration-700 ease-in rounded-2xl "
              src={two}
              alt=""
            />

            <img
              className="absolute bottom-10 sm:bottom-0 lg:left-5 xl:left-32   sm:w-56 mr-52  w-36  duration-700 hover:animate-bounce ease-in rounded-2xl  "
              src={five}
              alt=""
            />
          </div>

          <div className="flex flex-col place-items-start place-content-start px-16 ">
            <h1 className="text-center text-xl font-bold mb-2">Leaders</h1>
            <div className="h-1 w-14 bg-bcolor  "></div>

            <p>We have promoted 90% of our managers from within the company.</p>
          </div>
        </div>

        <hr />

        <div className="flex-col lg:flex lg:flex-row-reverse place-content-center place-items-start px-10 my-24">
          <div className="w-full h-96 relative flex place-content-center place-items-center">
            <img
              className="relative mr-28 top-0 left-10 lg:left-0 w-36 sm:w-72 duration-700 hover:scale-125 hover:duration-700 rounded-2xl  	"
              src={four}
              alt=""
            />

            <img
              className="absolute top-12 ml-48 w-32  md:right-56  lg:right-24 xl:right-56 sm:w-40 hover:animate-bounce duration-700 ease-in rounded-2xl "
              src={ten}
              alt=""
            />

            <img
              className="absolute bottom-10 sm:bottom-0  lg:left-5 xl:left-28 sm:w-40 mr-52  w-36  duration-700 hover:animate-bounce ease-in rounded-2xl  "
              src={six}
              alt=""
            />
          </div>

          <div className="flex flex-col place-items-start place-content-start px-16 ">
            <h1 className="text-center text-xl font-bold mb-2">Solvers</h1>
            <div className="h-1 w-14 bg-bcolor  "></div>

            <p>
              Participants from various teams join forces during our hackathons
              to solve difficult problems.
            </p>
          </div>
        </div>

        <hr />

        <div className="flex-col lg:flex lg:flex-row place-content-center place-items-start px-10 my-24">
          <div className="w-full h-96 relative flex place-content-center place-items-center">
            <img
              className="relative mr-28 top-0 left-10 w-36  sm:w-72 lg:left-0 duration-700 hover:scale-125 hover:duration-700 rounded-2xl  	"
              src={seven}
              alt=""
            />

            <img
              className="absolute top-12 ml-48 w-32  md:right-40 lg:right-16 xl:right-48 sm:w-44 hover:animate-bounce duration-700 ease-in rounded-2xl "
              src={eight}
              alt=""
            />

            <img
              className="absolute bottom-10 sm:bottom-0 lg:left-5 xl:left-14  sm:w-56 mr-52  w-36  duration-700 hover:animate-bounce ease-in rounded-2xl  "
              src={nine}
              alt=""
            />
          </div>

          <div className="flex flex-col place-items-start place-content-start px-16 ">
            <h1 className="text-center text-xl font-bold mb-2">Players</h1>
            <div className="h-1 w-14 bg-bcolor  "></div>

            <p>
              We have frequent game nights when we play counter-strike, FIFA,
              bowling, mafia, and other games.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col place-items-center place-content-center py-10">
          <h1 className="text-center text-3xl font-bold mb-2 ">
            At Codevyasa You Get
          </h1>
          <div className="h-1 w-24 bg-bcolor "></div>
        </div>

        <div className="grid sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3  lg:px-28 place-content-center place-items-center text-center  ">
          <div className="w-60 lg:h-52 text-sm  flex flex-col p-5 rounded-lg bg-green-100 mt-5 md:m-10 shadow-2xl ">
            <img
              className="place-self-center h-16 w-16"
              src={healthcare}
              alt="heart-image"
            />
            <h1 className="text-lg font-semibold text-bcolor">HEALTHCARE</h1>
            <p className="">We'll look after you like a grandmother would.</p>
          </div>

          <div className="w-60 lg:h-52 text-sm flex flex-col p-5 rounded-lg bg-green-100 mt-5 md:m-10 shadow-2xl">
            <img
              className="place-self-center h-16 w-16"
              src={timing}
              alt="heart-image"
            />
            <h1 className="text-lg font-semibold text-bcolor">
              FLEXIBLE TIMINGS
            </h1>
            <p className="">
              We understand that not everyone is a morning person.
            </p>
          </div>

          <div className="w-60 lg:h-52 text-sm flex flex-col p-5 rounded-lg bg-green-100 mt-5 md:m-10 shadow-2xl">
            <img
              className="place-self-center h-16 w-16"
              src={policy}
              alt="heart-image"
            />
            <h1 className="text-lg font-semibold text-bcolor">
              UNLIMITED LEAVE POLICY
            </h1>
            <p className="">
              As a result, you'll be able to recharge and relax whenever you
              need to.
            </p>
          </div>

          <div className="w-60 lg:h-52 text-sm flex flex-col p-5 rounded-lg bg-green-100 mt-5 md:m-10 shadow-2xl">
            <img
              className="place-self-center h-16 w-16"
              src={growth}
              alt="heart-image"
            />
            <h1 className="text-lg font-semibold text-bcolor">GROWTH</h1>
            <p className="">We'll take you from a seed to a tree.</p>
          </div>

          <div className="w-60 lg:h-52 text-sm flex flex-col p-5 rounded-lg bg-green-100 mt-5 md:m-10 shadow-2xl">
            <img
              className="place-self-center h-16 w-16"
              src={environment}
              alt="heart-image"
            />
            <h1 className="text-lg font-semibold text-bcolor">
              WORK ENVIRONMENT
            </h1>
            <p className="">Except on Halloween, there is no dress code.</p>
          </div>

          <div className="w-60 lg:h-52 text-sm flex flex-col p-5 rounded-lg bg-green-100 mt-5 md:m-10 shadow-2xl">
            <img
              className="place-self-center h-16 w-16"
              src={ownership}
              alt="heart-image"
            />
            <h1 className="text-lg font-semibold text-bcolor">OWNERSHIP</h1>
            <p className="">
              The only person you'll have to answer to is yourself.
            </p>
          </div>

          <div className="w-60 lg:h-52 text-sm flex flex-col p-5 rounded-lg bg-green-100 mt-5 md:m-10 shadow-2xl">
            <img
              className="place-self-center h-16 w-16"
              src={freemeals}
              alt="heart-image"
            />
            <h1 className="text-lg font-semibold text-bcolor">FREE MEALS</h1>
            <p className="">Everything is free, from breakfast to dinner.</p>
          </div>

          <div className="w-60 lg:h-52 text-sm flex flex-col p-5 rounded-lg bg-green-100 mt-5 md:m-10 shadow-2xl">
            <img
              className="place-self-center h-16 w-16"
              src={learning}
              alt="heart-image"
            />
            <h1 className="text-lg font-semibold text-bcolor">LEARNING</h1>
            <p className="">
              Mentors with a track record of success who push you to achieve
              your goals
            </p>
          </div>

          <div className="w-60 lg:h-52 text-sm flex flex-col p-5 rounded-lg bg-green-100 my-5  md:m-10 shadow-2xl">
            <img
              className="place-self-center h-16 w-16"
              src={greateteam}
              alt="heart-image"
            />
            <h1 className="text-lg font-semibold text-bcolor">A GREAT TEAM</h1>
            <p className="">
              Simply said, it's less about me and more about us.{" "}
            </p>
          </div>
        </div>
      </div>

      <div>


        <div className="flex flex-col place-items-center place-content-center sm:py-10 mt-5">
          <h1 className="text-center text-3xl font-bold mb-2  ">
            What Our People Say
          </h1>
          <div className="h-1 w-24 bg-bcolor "></div>
        </div>

        <div className="mt-10">
        <PeopleSay />
        </div>


        

      </div>


    </div>
  );
}

export default Culture;
