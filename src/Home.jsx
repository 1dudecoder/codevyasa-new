import React from "react";
import landimg from "./assits/landimg.jpg";
import globe from "./assits/globe.jpg";
import projectbased from "./assits/projectbased.svg";
import virtualteam from "./assits/virtualteam.svg";
import mvppack from "./assits/mvppack.svg";
import Review from "./Components/Review";
import Footer from "./Components/Footer";

function Home() {
  return (
    <div>
      <div className="flex-col justify-center mb-28">
        <div className="flex place-content-center place-items-center mt-16 ml-5 ">
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

      <div className="relative">
        <div className="h-fit relative ">
          <div className="h-sixty-h">
            <img
              className="absolute object-none h-screen w-screen z-0 brightness-50   "
              src={globe}
              alt="globe-image"
            />

            <div className="absolute top-50 right-50 md:top-72 lg:top-10 lg:top-50 lg:right-50 z-30">
              <div className="flex-col place-items-center place-content-center">
                <h1 className="text-xl sm:text-3xl md:text-4xl text-white text-center m-2  ">
                  Leverage Our Experts To Gain  Competitive-Advantage
                </h1>
                <p className="text-xs sm:text-xs text-white px-5  md:px-20 md:text-lg md:text-center ">
                  Want to kickstart an idea, scale your existing business or do
                  digital transformation in your <br /> organization we are there to
                  help. Choose from the below offerings and sit back while we <br />
                  get it done for you
                </p>

                <div className="md:flex lg:mt-20 ">
                  <div className="relative text-white text-center p-5 md:p-10">
                    <div className=" bg-bcolor w-8 h-8 md:w-12 md:h-12  p-2 rounded-full  flex place-items-center justify-center absolute top-0 right-fouthy-five bottom-20 md:top-4  ">
                      <img
                        className="w-8 h-8 "
                        src={virtualteam}
                        alt="project-image"
                      />
                    </div>
                    <div className="bg-bcolor bg-opacity-50 rounded-lg p-2 pt-4  ">
                      <h1 className="text-sm ninehund:text-xl md:text-2xl  md:mb-2 md:mt-2 ">
                        Project-Based
                      </h1>
                      <p className="text-xs md:text-sm lg:p-5">
                        Get your projects delivered at 3x the speed with a
                        minimum 40% reduction in price. Just let us know your
                        requirements in detail and sit back while we develop and
                        ship it. Ideal for clients where they have fairly clear
                        idea about the project
                      </p>
                    </div>
                  </div>

                  <div className="relative  text-white text-center p-5 md:p-10">
                    <div className=" bg-bcolor  w-8 h-8 md:w-12 md:h-12  p-2 rounded-full flex place-items-center justify-center absolute top-0 right-fouthy-five bottom-20 md:top-4">
                      <img
                        className="w-8 h-8"
                        src={projectbased}
                        alt="project-image"
                      />
                    </div>
                    <div className="bg-bcolor bg-opacity-50 rounded-lg p-2 pt-4  ">
                      <h1 className="text-sm ninehund:text-xl md:text-2xl  md:mb-2 md:mt-2">
                        Virtual Team
                      </h1>
                      <p className="text-xs md:text-sm lg:p-5">
                        Get dedicated developers assigned to your team with 100%
                        transparency on the throughput. This gives you a 5X
                        faster team scale-up at 40% cost-savings. Just tell us
                        the skill-set that you need & pay for what you use.
                      </p>
                    </div>
                  </div>

                  <div className="relative text-white text-center p-5 md:p-10">
                    <div className=" bg-bcolor w-8 h-8 md:w-12 md:h-12  p-2 rounded-full flex place-items-center justify-center absolute top-0 right-fouthy-five bottom-20 md:top-4">
                      <img className="w-8 h-8" src={mvppack} alt="mvp-image" />
                    </div>
                    <div className="bg-bcolor bg-opacity-50   rounded-lg p-2 pt-4  ">
                      <h1 className="text-sm ninehund:text-xlmd:text-2xl md:mb-2 md:mt-2">
                        MVP Pack
                      </h1>
                      <p className="text-xs lg:p-5 md:text-sm">
                        We are a start-up and we empathize with early-stage
                        Founders trying to test their Product Idea. Leverage our
                        MVP Pack to run a 2-week sprint & bring your ideas to
                        life without needing to worry about conceptualization,
                        design, development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="mt-80">
        <div className="flex justify-between p-10">
          <h1 className="text-xl font-semibold">What Clients Say About Us</h1>
          <p>View all testimonials</p>
        </div>

        <div>
          <Review />
        </div>



      </div>

      <div className="px-14 text-center md:text-left  md:flex justify-between place-items-center ">
        
        <div className="text-start my-14 mx-2 ">
          <p className="text-xs font-semibold pt-10">Get In Touch With Us Today!</p>
          <h1 className="text-3xl font-semibold py-2 text-bcolor ">Need Our Services? <br />
            Book Your Appointment</h1>
          <p className="text-xs font-semibold ">We hate spam as much as you do. And we never send unnecessary emails</p>

          <div className="mt-4">
          <h1 className="italic font-semibold">CALL US FOR SUPPORT</h1>
          <h1 className="text-3xl font-bold">+ 1 (386) 243-7944</h1>
          <p>support@codevyasa.com</p>
          </div>

        </div>

        <div className=" md:p-5 md:w-1/2">
           
          <div className=" w-full md:flex lg:flex  pt-5 ">
          <input placeholder="Your Name" className="w-full h-10 m-2 rounded-md border border-slate-300 outline-none p-2  hover:border-bcolor hover:border-2 " type="text" />
          <input placeholder="Work Email"  className="w-full h-10 m-2 rounded-md border border-slate-300 outline-none p-2 hover:border-bcolor hover:border-2 " type="text" />
          </div>

          <div className=" w-full md:flex lg:flex  ">
          <input placeholder="Phone"  className="w-full h-10 m-2 rounded-md border border-slate-300 outline-none p-2 hover:border-bcolor hover:border-2 " type="text" />
          <input placeholder="Designation"  className="w-full h-10 m-2 rounded-md border border-slate-300 outline-none p-2 hover:border-bcolor hover:border-2 " type="text" />
          </div>

          <div className="md:flex lg:flex justify-start px-2 ">
            <textarea placeholder="Specify your requirements"  className="w-full h-32 rounded-md border border-slate-300 outline-none p-2 hover:border-bcolor hover:border-2 " ></textarea>
          </div>
          
          <div className="mt-5 float:none md:float-right  pb-5 ">
          <button className="btn w-full px-20 py-2">Send</button>
          </div>

        </div>

      </div>

      <Footer />
      
    </div>
  );
}

export default Home;
