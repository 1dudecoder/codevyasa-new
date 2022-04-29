import React from "react";
import group from "../../assits/culture/group.jpg";
import girl from "../../assits/culture/girl.png";
import { Link } from "react-router-dom";

import bgicon from "../../assits/culture/icons/bgicon.svg";
import linkdin from "../../assits/ourteam/icons/linkdin.svg";

import one from "../../assits/culture/images/one.jpeg"
import two from "../../assits/culture/images/two.jpeg"
import four from "../../assits/culture/images/four.jpeg"
import five from "../../assits/culture/images/five.jpeg"
import six from "../../assits/culture/images/six.jpeg"
import seven from "../../assits/culture/images/seven.jpeg"
import eight from "../../assits/culture/images/eight.jpeg"
import nine from "../../assits/culture/images/nine.jpeg"
import ten from "../../assits/culture/images/ten.jpeg"

function Culture() {
  return (
    <div>
      <div className="">
        <img
          className=""
          src={group}
          alt="codevyasa-culture-image "
        />
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
            <img
              className="w-16 h-16"
              src="https://www.squadstack.com/wp-content/uploads/2020/08/doc2.png"
              alt=""
            />
            <h1 className="text-base sm:text-lg font-semibold">Temerity</h1>
            <p className="py-2 text-sm sm:text-base">
            We've set big ambitions for ourselves. 
            </p>
            <p className="pb-2 text-sm sm:text-base italic">
            "Temerity is the mother of success."
            </p>
          </div>

          <div className="bg-bcolor lg:h-72 text-white w-64 flex flex-col  place-content-center py-5 px-5 m-5 rounded-2xl">
            <img
              className="w-16 h-16"
              src="https://www.squadstack.com/wp-content/uploads/2020/08/doc2.png"
              alt=""
            />
            <h1 className="text-base sm:text-lg font-semibold">Steady Growth</h1>
            <p className="py-2 text-sm sm:text-base">
            The goal is to constantly improve and innovate.
            </p>
            <p className="pb-2 text-sm sm:text-base italic">
            "Dreaming must be accompanied by action."
            </p>
          </div>

          <div className="bg-bcolor lg:h-72 text-white w-64 flex flex-col  place-content-center py-5 px-5 m-5 rounded-2xl">
            <img
              className="w-16 h-16"
              src="https://www.squadstack.com/wp-content/uploads/2020/08/doc2.png"
              alt=""
            />
            <h1 className="text-base sm:text-lg font-semibold">Rate of Investment (ROI)</h1>
            <p className="py-2 text-sm sm:text-base">
            A tight-knit group in which everyone contributes.
            </p>
            <p className="pb-2 text-sm sm:text-base italic">
            "Art is the act of creating something out of nothing and selling it."

            </p>
          </div>

          <div className="bg-bcolor lg:h-72 text-white w-64 flex flex-col  place-content-center py-5 px-5 m-5 rounded-2xl">
            <img
              className="w-16 h-16"
              src="https://www.squadstack.com/wp-content/uploads/2020/08/doc2.png"
              alt=""
            />
            <h1 className="text-base sm:text-lg font-semibold">Make the proper decision</h1>
            <p className="py-2 text-sm sm:text-base">
            There will be no concessions in terms of legality, honesty, or openness.
            </p>
            <p className="pb-2 text-sm sm:text-base italic">
            "It will please some people while surprising others."
            </p>
          </div>

          <div className="bg-bcolor lg:h-72 text-white w-64 flex flex-col  place-content-center py-5 px-5 m-5 rounded-2xl">
            <img
              className="w-16 h-16"
              src="https://www.squadstack.com/wp-content/uploads/2020/08/doc2.png"
              alt=""
            />
            <h1 className="text-base sm:text-lg font-semibold">We are a team</h1>
            <p className="py-2 text-sm sm:text-base">
            We're all in this together, and you can count on us to always have your back.
            </p>
            <p className="pb-2 text-sm sm:text-base italic">
            "Alone, we can accomplish so little; together, we can achieve so much."
            </p>
          </div>

          <div className="bg-bcolor lg:h-72 text-white w-64 flex flex-col  place-content-center py-5 px-5 m-5 rounded-2xl">
            <img
              className="w-16 h-16"
              src="https://www.squadstack.com/wp-content/uploads/2020/08/doc2.png"
              alt=""
            />
            <h1 className="text-base sm:text-lg font-semibold">Get things done</h1>
            <p className="py-2 text-sm sm:text-base">
            Problem-solving and hands-on execution are important to us.
            </p>
            <p className="pb-2 text-sm sm:text-base italic">
            "You can either run the day or the day can run you."            </p>
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
              className="relative mr-28 top-0 left-0 w-48 sm:w-72 duration-700 hover:scale-125 hover:duration-700 rounded-2xl  	"
              src={one}
              alt=""
            />

            <img
              className="absolute top-12 ml-48 w-32 md:right-40 lg:right-16  xl:right-52 sm:w-56 hover:animate-bounce duration-700 ease-in rounded-2xl "
              src={two}
              alt=""
            />

            <img
              className="absolute bottom-10  sm:bottom-0 lg:left-5 xl:left-32  sm:w-56 mr-52  w-36  duration-700 hover:animate-bounce ease-in rounded-2xl  "
              src={five}
              alt=""
            />
          </div>

          <div className="flex flex-col place-items-start place-content-start px-16 ">
            <h1 className="text-center text-xl font-bold mb-2">Leaders</h1>
            <div className="h-1 w-14 bg-bcolor  "></div>

            <p>We have promoted 90% of our managers from within the company.
</p>
          </div>
        </div>

        <hr />

        <div className="flex-col lg:flex lg:flex-row-reverse place-content-center place-items-start px-10 my-24">
        <div className="w-full h-96 relative flex place-content-center place-items-center">
            <img
              className="relative mr-28 top-0 left-0 w-48 sm:w-72 duration-700 hover:scale-125 hover:duration-700 rounded-2xl  	"
              src={four}
              alt=""
            />

            <img
              className="absolute top-12 ml-48 w-32 md:right-40 lg:right-16 xl:right-56 sm:w-40 hover:animate-bounce duration-700 ease-in rounded-2xl "
              src={ten}
              alt=""
            />

            <img
              className="absolute bottom-10  sm:bottom-0 lg:left-5 xl:left-28 sm:w-40 mr-52  w-36  duration-700 hover:animate-bounce ease-in rounded-2xl  "
              src={six}
              alt=""
            />
          </div>

          <div className="flex flex-col place-items-start place-content-start px-16 ">
            <h1 className="text-center text-xl font-bold mb-2">Solvers</h1>
            <div className="h-1 w-14 bg-bcolor  "></div>

            <p>Participants from various teams join forces during our hackathons to solve difficult problems.
</p>
          </div>
        </div>

        <hr />

        <div className="flex-col lg:flex lg:flex-row place-content-center place-items-start px-10 my-24">
        <div className="w-full h-96 relative flex place-content-center place-items-center">
            <img
              className="relative mr-28 top-0 left-0 w-48 sm:w-72 duration-700 hover:scale-125 hover:duration-700 rounded-2xl  	"
              src={seven}
              alt=""
            />

            <img
              className="absolute top-12 ml-48 w-32 md:right-40 lg:right-16 xl:right-48 sm:w-44 hover:animate-bounce duration-700 ease-in rounded-2xl "
              src={eight}
              alt=""
            />

            <img
              className="absolute bottom-10  sm:bottom-0 lg:left-5 xl:left-14  sm:w-56 mr-52  w-36  duration-700 hover:animate-bounce ease-in rounded-2xl  "
              src={nine}
              alt=""
            />
          </div>

          <div className="flex flex-col place-items-start place-content-start px-16 ">
            <h1 className="text-center text-xl font-bold mb-2">Players
</h1>
            <div className="h-1 w-14 bg-bcolor  "></div>

            <p>We have frequent game nights when we play counter-strike, FIFA, bowling, mafia, and other games.</p>
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
              className="place-self-center"
              src="https://www.squadstack.com/wp-content/uploads/2020/03/get9.svg"
              alt="heart-image"
            />
            <h1 className="text-lg font-semibold text-bcolor">HEALTHCARE</h1>
            <p className="">
            We'll look after you like a grandmother would.
            </p>
          </div>

          <div className="w-60 lg:h-52 text-sm flex flex-col p-5 rounded-lg bg-green-100 mt-5 md:m-10 shadow-2xl">
            <img
              className="place-self-center"
              src="https://www.squadstack.com/wp-content/uploads/2020/03/get9.svg"
              alt="heart-image"
            />
            <h1 className="text-lg font-semibold text-bcolor">FLEXIBLE TIMINGS</h1>
            <p className="">
            We understand that not everyone is a morning person.
            </p>
          </div>

          <div className="w-60 lg:h-52 text-sm flex flex-col p-5 rounded-lg bg-green-100 mt-5 md:m-10 shadow-2xl">
            <img
              className="place-self-center"
              src="https://www.squadstack.com/wp-content/uploads/2020/03/get9.svg"
              alt="heart-image"
            />
            <h1 className="text-lg font-semibold text-bcolor">UNLIMITED LEAVE POLICY
</h1>
            <p className="">
            As a result, you'll be able to recharge and relax whenever you need to.
            </p>
          </div>

          <div className="w-60 lg:h-52 text-sm flex flex-col p-5 rounded-lg bg-green-100 mt-5 md:m-10 shadow-2xl">
            <img
              className="place-self-center"
              src="https://www.squadstack.com/wp-content/uploads/2020/03/get9.svg"
              alt="heart-image"
            />
            <h1 className="text-lg font-semibold text-bcolor">GROWTH</h1>
            <p className="">
            We'll take you from a seed to a tree.
            </p>
          </div>

          <div className="w-60 lg:h-52 text-sm flex flex-col p-5 rounded-lg bg-green-100 mt-5 md:m-10 shadow-2xl">
            <img
              className="place-self-center"
              src="https://www.squadstack.com/wp-content/uploads/2020/03/get9.svg"
              alt="heart-image"
            />
            <h1 className="text-lg font-semibold text-bcolor">WORK ENVIRONMENT</h1>
            <p className="">
            Except on Halloween, there is no dress code.
            </p>
          </div>

          <div className="w-60 lg:h-52 text-sm flex flex-col p-5 rounded-lg bg-green-100 mt-5 md:m-10 shadow-2xl">
            <img
              className="place-self-center"
              src="https://www.squadstack.com/wp-content/uploads/2020/03/get9.svg"
              alt="heart-image"
            />
            <h1 className="text-lg font-semibold text-bcolor">OWNERSHIP</h1>
            <p className="">
            The only person you'll have to answer to is yourself.
            </p>
          </div>

          <div className="w-60 lg:h-52 text-sm flex flex-col p-5 rounded-lg bg-green-100 mt-5 md:m-10 shadow-2xl">
            <img
              className="place-self-center"
              src="https://www.squadstack.com/wp-content/uploads/2020/03/get9.svg"
              alt="heart-image"
            />
            <h1 className="text-lg font-semibold text-bcolor">FREE MEALS</h1>
            <p className="">
            Everything is free, from breakfast to dinner.
            </p>
          </div>

          <div className="w-60 lg:h-52 text-sm flex flex-col p-5 rounded-lg bg-green-100 mt-5 md:m-10 shadow-2xl">
            <img
              className="place-self-center"
              src="https://www.squadstack.com/wp-content/uploads/2020/03/get9.svg"
              alt="heart-image"
            />
            <h1 className="text-lg font-semibold text-bcolor">LEARNING</h1>
            <p className="">
            Mentors with a track record of success who push you to achieve your goals
            </p>
          </div>

          <div className="w-60 lg:h-52 text-sm flex flex-col p-5 rounded-lg bg-green-100 my-5  md:m-10 shadow-2xl">
            <img
              className="place-self-center"
              src="https://www.squadstack.com/wp-content/uploads/2020/03/get9.svg"
              alt="heart-image"
            />
            <h1 className="text-lg font-semibold text-bcolor">A GREAT TEAM
</h1>
            <p className="">
            Simply said, it's less about me and more about us.            </p>
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


        <div className="flex flex-col-reverse sm:flex-row place-content-center place-items-center mt-16 text-center">
          <div className="relative mt-10 sm:mt-0">
            <img className="" src={bgicon} alt="" />
            <img
              className="absolute -top-24 mt-1 w-96"
              src={girl}
              alt=""
            />
          </div>

          <div className=" pb-10 sm:p-10">
            <p className="text-lg font-semibold">
            The journey has been both enlightening and difficult.
            </p>
            <p className="text-lg font-semibold">
            The nicest bonus is that everyone here gets a chance <br /> to be heard and make an impact, <br /> regardless of their age or length of service.
            </p>
            
            <div className="flex place-content-center m-5">
               <img className="h-8 w-8" src={linkdin} alt="lindin-image" />
            </div>

            <Link to="/about"><button className="btn py-3 px-10">Work With Us</button></Link>
          </div>

        </div>

      </div>



    </div>
  );
}

export default Culture;
