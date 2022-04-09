import React from "react";
import landimg from "./assits/landimg.jpg";
import globe from "./assits/globe.jpg";
import projectbased from "./assits/projectbased.svg";
import virtualteam from "./assits/virtualteam.svg";
import mvppack from "./assits/mvppack.svg";
import Review from "./Review/Review";
import BookNow from "./Components/Contact/BookNow";

function Home() {
  return (
    <div>
      <div className="flex-col justify-center mb-28">
        <div className="flex place-content-center place-items-center mt-10 ml-5 ">
          <div className="flex-col place-content-center place-items-center lg:ml-5 mb-10">
            <h1 className="text-xl mr-10 font-semibold sm:text-2xl md:text-4xl lg:text-5xl ">
              Your Technology <br /> Partner for <br /> Software Engineering
            </h1>
            <p className="mt-5 md:xl lg:text-xl ">
              Offering Special Consulting For Y-Combinator
            </p>
            <button className="hidden sm:flex btn mt-5 px-4 py-2 text-2xl">
              Learn More
            </button>
          </div>

          <div className="">
            <img className="p-2 " src={landimg} alt="land-img" />
          </div>
        </div>

        <div className="mx-5">
          <button className="flex btn py-2 w-full justify-center items-center sm:hidden">
            Learn More
          </button>
        </div>
      </div>

      <div class="relative w-full">
        <img
          src={globe}
          alt="globe-image"
          class="object-none w-full h-fourty-rem sm:h-eighty-h md:h-fit lg:h-full xl:h-fit brightness-50"
        />
        <div class="absolute w-full py-1.5 lg:py-10 top-0 inset-x-0 text-white text-xs text-center leading-4">
          <div className="">
            <h1 className="text-lg sm:text-2xl text-start ml-5 mb-2  font-semibold text-white text-start md:text-2xl lg:text-4xl md:mb-10 lg-mb-2 md:text-center md:mt-10 ">
              Leverage Our Experts To Gain Competitive-Advantage
            </h1>

            <p className="text-xs sm:text-xs lg:text-lg text-white px-5 md:text-sm md:text-center lg:px-20 ">
              Want to kickstart an idea, scale your existing business or do
              digital transformation in your organization we are there to help.
              Choose from the below offerings and sit back while we get it done
              for you
            </p>

            <div className="mt-5 sm:mt-0">
              <div className=" md:flex lg:mt-10 xl:mt-20 ">
                <div className="relative text-white text-center p-5 md:p-10">
                  <div className=" bg-bcolor w-8 h-8 md:w-12 md:h-12  p-2 rounded-full  flex place-items-center justify-center absolute top-0 right-fouthy-five bottom-20 md:top-4  ">
                    <img
                      className="w-8 h-8 p-1 "
                      src={virtualteam}
                      alt="project-image"
                    />
                  </div>

                  <div className="bg-bcolor bg-opacity-50 rounded-lg p-2 pt-4  ">
                    <h1 className="text-sm md:text-xl mt-2">Project-Based</h1>
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
                  <div className=" bg-bcolor  w-8 h-8 md:w-12 md:h-12  p-2 rounded-full flex place-items-center justify-center absolute top-0 right-fouthy-five bottom-20 md:top-4">
                    <img
                      className="w-8 h-8 p-1"
                      src={projectbased}
                      alt="project-image"
                    />
                  </div>
                  <div className="bg-bcolor bg-opacity-50 rounded-lg p-2 pt-4  ">
                    <h1 className="text-sm md:text-xl mt-2">Virtual Team</h1>
                    <p className="text-xs md:text-xs lg:text-sm lg:p-2">
                      Get dedicated developers assigned to your team with 100%
                      transparency on the throughput. This gives you a 5X faster
                      team scale-up at 40% cost-savings. Just tell us the
                      skill-set that you need & pay for what you use.
                    </p>
                  </div>
                </div>

                <div className="relative text-white text-center p-5 md:p-10">
                  <div className=" bg-bcolor w-8 h-8 md:w-12 md:h-12  p-2 rounded-full flex place-items-center justify-center absolute top-0 right-fouthy-five bottom-20 md:top-4">
                    <img
                      className="w-8 h-8 p-1"
                      src={mvppack}
                      alt="mvp-image"
                    />
                  </div>
                  <div className="bg-bcolor bg-opacity-50 rounded-lg p-2 pt-4  ">
                    <h1 className="text-sm md:text-xl mt-2">MVP Pack</h1>
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

      <div className="">
        <div className="flex justify-between p-10">
          <h1 className="text-xl font-semibold">What Clients Say About Us</h1>
          <p>View all testimonials</p>
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
