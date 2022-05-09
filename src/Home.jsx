import React, { useEffect, useState } from "react";
import landimg from "./assits/home_1.jpg";
import globe from "./assits/globe.jpg";
import projectbased from "./assits/projectbased.svg";
import virtualteam from "./assits/virtualteam.svg";
import mvppack from "./assits/mvppack.svg";
import Review from "./Review/Review";
import BookNow from "./Components/Contact/BookNow";
import { Link as Link2 } from "react-scroll";
import { Link } from "react-router-dom";
import rightarrow from "./assits/rightarrow.svg"
import shubhamceo from "./assits/shubhamceo.png"
import review from "./assits/review.jpg"


function Home() {
  return (
    <div className="" id="myhome">
      
      <div className="flex-col justify-center mb-10 sm:mb-28 ">
        <div className="flex flex-col-reverse sm:flex sm:flex-row  place-content-center place-items-center lg:px-10 md:px-10  md:flex-row lg:h-eighty-h text-center sm:text-left ">
          <div className="lg:mt-0 md:mt-36  flex-col place-content-center place-items-center mb-10 lg:ml-5">
            <h1 className="text-2xl p-2 sm:p-0 sm:mr-10 font-semibold sm:text-2xl md:text-2xl lg:text-4xl text-slate-800 ">
              Your Technology partner for software engineering.
            </h1>

            <p className="text-sm mt-1 sm:mt-3 md:lg lg:text-lg ">
              Offering Special Consulting For Y-Combinator
            </p>

            <p className="text-lg sm:text-2xl font-bold mt-5 text-slate-800 ">CodeVyasa GlassDoor Reviews</p>
            <div className="max-h-4 sm:mt-5 p-2">
              <img className="max-h-36" src={review} alt="codevyasa glassdoor review" />
            </div>

            {/* <button className="hidden sm:flex btn mt-5 px-4 py-2 text-2xl">
              <Link2
                to="experts"
                spy={true}
                smooth={true}
                duration={800}
                offset={-70}
              >
                Learn More
              </Link2>
            </button> */}


            {/* <img className="h-12 w-12 mt-10 hidden sm:block absolute ml-10 bottom-22 animate-bounce  ease-in" src={rightarrow} alt="down-arrow" /> */}


          </div>

          <div className="">
            <img
              className="p-2 lg:p-5 lg:max-w-lg md:max-w-lg"
              src={landimg}
              alt="land-img"
            />
          </div>
        </div>

        {/* <div className="mx-5">
          <button className="flex btn py-2 w-full justify-center items-center sm:hidden">
            <Link2
              to="experts"
              spy={true}
              smooth={true}
              duration={800}
              offset={-70}
            >
              Learn More
            </Link2>
          </button>
        </div> */}
      </div>

      <div id="experts" class="relative w-full mt-32 sm:mt-0">
        <img
          src={globe}
          alt="globe-image"
          class="object-none w-full h-fourty-rem sm:h-eighty-h md:h-fit lg:h-full xl:h-fit brightness-50"
        />
        <div class="absolute w-full py-1.5 lg:py-10 top-0 inset-x-0 text-white text-xs text-center leading-4">
          <div className="">
            <h1 className="text-lg mt-5 sm:mt-10 sm:text-2xl text-start ml-5 mb-2  font-semibold text-white text-start md:text-2xl lg:text-4xl md:mb-10 lg-mb-2 md:text-center md:mt-10 ">
              Leverage Our Experts To Gain Competitive-Advantage
            </h1>

            <p className="text-xs sm:text-xs lg:text-lg text-white px-2 sm:px-5  md:text-sm md:text-center lg:px-20 ">
              Want to kickstart an idea, scale your existing business or do 
              digital transformation in your organization we are there to help.
              Choose from the below offerings and sit back while we get it done
              for you
            </p>

            <div className="mt-2 sm:mt-0">
              <div className=" md:flex lg:mt-10 xl:mt-20 ">
                <div className="relative text-white text-center p-5 md:p-10 ">
                  <div className=" bg-bcolor w-10 h-10 md:w-12 md:h-12  p-2 rounded-full  flex place-items-center justify-center absolute top-0 right-fouthy-five bottom-20 md:top-4  ">
                    <img
                      className="w-8 h-8 p-1 "
                      src={virtualteam}
                      alt="project-image"
                    />
                  </div>

                  <div className="bg-bcolor bg-opacity-50 rounded-lg p-2 pt-4 xl:pb-14   ">
                    <h1 className="text-sm md:text-xl mt-3">Project-Based</h1>
                    <p className="text-xs md:text-xs lg:text-sm lg:p-2">
                      Get your projects delivered at 3x the speed with a minimum
                      40% reduction in price. Just let us know your requirements
                      in detail and sit back while we develop and ship it. Ideal
                      for clients where they have fairly clear idea about the
                      project
                    </p>
                  </div>
                </div>

                <div className="relative text-white text-center p-5 md:p-10">
                  <div className=" bg-bcolor  w-10 h-10 md:w-12 md:h-12  p-2 rounded-full flex place-items-center justify-center absolute top-0 right-fouthy-five bottom-20 md:top-4">
                    <img
                      className="w-8 h-8 p-1"
                      src={projectbased}
                      alt="project-image"
                    />
                  </div>
                  <div className="bg-bcolor bg-opacity-50 rounded-lg p-2 pt-4 xl:pb-14   ">
                    <h1 className="text-sm md:text-xl mt-3">Virtual Team</h1>
                    <p className="text-xs md:text-xs lg:text-sm lg:p-2">
                      Get dedicated developers assigned to your team with 100%
                      transparency on the throughput. This gives you a 5X faster
                      team scale-up at 40% cost-savings. Just tell us the
                      skill-set that you need & pay for what you use.
                    </p>
                  </div>
                </div>

                <div className="relative text-white text-center p-5 md:p-10">
                  <div className=" bg-bcolor w-10 h-10 md:w-12 md:h-12  p-2 rounded-full flex place-items-center justify-center absolute top-0 right-fouthy-five bottom-20 md:top-4">
                    <img
                      className="w-8 h-8 p-1"
                      src={mvppack}
                      alt="mvp-image"
                    />
                  </div>
                  <div className="bg-bcolor bg-opacity-50 rounded-lg p-2 pt-4 xl:pb-14   ">
                    <h1 className="text-sm md:text-xl mt-3">MVP Pack</h1>
                    <p className="text-xs md:text-xs lg:text-sm lg:p-2">
                      We are a start-up and we empathize with early-stage
                      Founders trying to test their Product Idea. Leverage our
                      MVP Pack to run a 2-week sprint & bring your ideas to life
                      without needing to worry about conceptualization, design,
                      development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" sm:flex py-10 place-content-center place-items-center lg:px-5">
        <div className=" px-2 sm:px-10">
          <h1 className="text-2xl font-semibold text-primaryColor">
            Meet the Captain
          </h1>
          <p className="mt-2 text-sm sm:text-base">
          Shubham is a product leader with a track record of scaling SaaS products. <br className="hidden sm:block" />
           He graduated from Delhi College of Engineering and has been a <br className="hidden sm:block" />
            founder member of several startups, including Haptik (acquired by Jio  for over $100 MN USD) and Moglix (Tata-backed unicorn). A true nerd at his core, <br className="hidden sm:block" /> 
             Shubham has a personal library that includes masterpieces on Philosophy, Business Management, and Self-help.
          </p>

          <Link to="/about"> <button className=" my-5 pb-2 pt-1 rounded-md px-5 shadow-md border-2 border-teal-400 text-primaryColor hover:bg-teal-400 hover:text-white hover:border-teal-400">
            Know more
          </button>
          </Link>
        </div>

        <div className="mt-5">
          <img className="max-h-200" src={shubhamceo} alt="subham-image" />
        </div>
      </div> */}

      <div className="">
        <div className="flex justify- sm:justify-between p-10">
          <h1 className="text-sm sm:text-xl font-semibold">
            What Clients Say About Us
          </h1>
          <p className="text-sm sm:text-base pl-2 underline">View all testimonials</p>
        </div>

        <div>
          <Review />
        </div>
      </div>

      <div id="contact">
        <BookNow />
      </div>
    </div>
  );
}

export default Home;
