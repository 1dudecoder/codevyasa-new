import React from "react";
import mainteam from "../../assits/ourteam/mainteam.jpg";
import BookNow from "../Contact/BookNow";

import geet from "../../assits/ourteam/founders-images/geet.png"
import shaifee from "../../assits/ourteam/founders-images/shaifee.png";
import AndyK from "../../assits/ourteam/founders-images/AndyK.png";
import joy from "../../assits/ourteam/founders-images/joy.png";
import priyanka from "../../assits/ourteam/founders-images/priyanka.png";
import subham from "../../assits/ourteam/founders-images/subham.png";


// icons
import fb from "../../assits/ourteam/icons/fb.svg";
import linkdin from "../../assits/ourteam/icons/linkdin.svg";
import twitter from "../../assits/ourteam/icons/twitter.svg";
import sumit from "../../assits/ourteam/advisor-images/sumit.jpg";
import mayank from "../../assits/ourteam/advisor-images/mayank.jpg";
import prateek from "../../assits/ourteam/advisor-images/prateek.jpg";
import akash from "../../assits/ourteam/advisor-images/akash.jpg";

function Ourteam() {
  return (
    <div>
      <div className="flex place-content-center place-items-center  ml-5 lg:h-eighty-h  ">
        <div className="flex-col place-content-center place-items-center lg:p-16 lg:mb-10">
          <h1 className="text-xl font-bold sm:text-2xl md:text-4xl lg:text-4xl  ">
            One Team, One Goal
          </h1>
          <p className="md:mt-5 md:xl lg:text-xl ">
            Individually, we are a drop; together, we are an ocean.
          </p>
        </div>

        <div className="lg:p-10">
          <img className="p-2" src={mainteam} alt="land-img" />
        </div>
      </div>

      <div className="text-center px-2 md:px-52 lg:px-64 xl:px-96">
        <h1 className="text-4xl font-bold mt-16 mb-5 ">Our Core Team</h1>
        <p className="py-5">
          On the clock, we’re technology experts and leaders that bring energy,
          passion, and knowledge to every project. Off the clock, we’re an
          eclectic bunch of foodies, music buffs, artists, sports fanatics,
          karaoke pros, and outdoor enthusiasts.
        </p>
      </div>

      <div className="flex place-content-center place-items-center flex-wrap w-full  mt-10 md:mt-24 ">
        <div className="flex place-content-center place-items-center bg-bcolor h-32 w-80 text-center relative mb-28 md:mb-32 lg:mb-48   ">
          <img
            className="absolute bottom-0 h-48 md:h-52 lg:h-64"
            src={shaifee}
            alt="geeta-Director Of Business, Americas-image"
          />
          <div className="absolute -bottom-14 ">
            <h1 className="text-2xl font-semibold ">Shaifee</h1>
            <p className="text-bcolor">Co-Founder</p>
          </div>
        </div>

        <div className="flex place-content-center place-items-center bg-bcolor h-32 w-80 text-center relative mb-28  md:mb-32 lg:mb-48  ">
          <img
            className="absolute -bottom-14 h-56 md:h-60 lg:h-72"
            src={priyanka}
            alt="geeta-Director Of Business, Americas-image"
          />
          <div className="absolute -bottom-14 ">
            <h1 className="text-2xl font-semibold ">Priyanka</h1>
            <p className="text-bcolor">Co-Founder</p>
          </div>
        </div>

        <div className="flex place-content-center place-items-center bg-bcolor h-32 w-80 text-center relative mb-28  md:mb-32 lg:mb-48  ">
          <img
            className="absolute bottom-0 h-48 md:h-52 lg:h-64"
            src={shaifee}
            alt="geeta-Director Of Business, Americas-image"
          />
          <div className="absolute -bottom-14 ">
            <h1 className="text-2xl font-semibold ">Erica</h1>
            <p className="text-bcolor">Solutions Manager</p>
          </div>
        </div>

        <div className="flex place-content-center place-items-center bg-bcolor h-32 w-80 text-center relative mb-28 md:mb-32 lg:mb-48  ">
          <img
            className="absolute bottom-0 h-40 md:h-48 lg:h-52"
            src={subham}
            alt="geeta-Director Of Business, Americas-image"
          />
          <div className="absolute -bottom-14 ">
            <h1 className="text-2xl font-semibold ">Shubham</h1>
            <p className="text-bcolor">Solutions Manager</p>
          </div>
        </div>

        <div className="flex place-content-center place-items-center bg-bcolor h-32 w-80 text-center relative mb-28 md:mb-32 lg:mb-48 ">
          <img
            className="absolute bottom-0 h-48 md:h-52 lg:h-60"
            src={AndyK}
            alt="geeta-Director Of Business, Americas-image"
          />
          <div className="absolute -bottom-14 ">
            <h1 className="text-2xl font-semibold ">Andy</h1>
            <p className="text-bcolor">Senior Solutions Architect</p>
          </div>
        </div>

        <div className="flex place-content-center place-items-center bg-bcolor h-32 w-80 text-center relative mb-28  md:mb-32 lg:mb-48  ">
          <img
            className="absolute bottom-0 h-48 md:h-52 lg:h-64"
            src={geet}
            alt="geeta-Director Of Business, Americas-image"
          />
          <div className="absolute -bottom-14 ">
            <h1 className="text-2xl font-semibold ">Geeta</h1>
            <p className="text-bcolor">Director Of Business, Americas</p>
          </div>
        </div>

        <div className="flex place-content-center place-items-center bg-bcolor h-32 w-80 text-center relative mb-28  md:mb-32 lg:mb-48 ">
          <img
            className="absolute bottom-0 h-48 md:h-52 lg:h-60"
            src={joy}
            alt="geeta-Director Of Business, Americas-image"
          />
          <div className="absolute -bottom-14 ">
            <h1 className="text-2xl font-semibold ">Joy</h1>
            <p className="text-bcolor">Head Of Revenue - Americas & EMEA</p>
          </div>
        </div>
      </div>

      <div className="bg-card py-5">
        <h1 className="text-4xl font-bold mb-5 text-center">Our Advisors</h1>

        <div className="flex flex-wrap place-content-center place-items-center ">
          <div className="flex flex-col place-content-center place-items-center  w-72 overflow-hidden bg-white pb-5  rounded-xl m-10 ">
            <img src={sumit} alt="sumit" />
            <p className="text-lg font-semibold mt-5">Sumit</p>
            <p>UI guru</p>

            <div className="flex place-content-center place-items-center mt-5 ">
              <div className="border-2 p-2 px-3  rounded-full border-bcolor m-2 ">
                <img className="h-5" src={fb} alt="fb-image" />
              </div>

              <div className="border-2 py-2 px-2  rounded-full border-bcolor m-2">
                <img className="h-5" src={twitter} alt="twitter-image" />
              </div>

              <div className="border-2 p-2 px-2  rounded-full border-bcolor m-2">
                <img className="h-5" src={linkdin} alt="linkdin-image" />
              </div>
            </div>
          </div>

          <div className="flex flex-col place-content-center place-items-center  w-72 overflow-hidden bg-white pb-5  rounded-xl m-10 ">
            <img src={mayank} alt="Mayank-image" />
            <p className="text-lg font-semibold mt-5">Mayank</p>
            <p>Startup guy</p>

            <div className="flex place-content-center place-items-center mt-5 ">
              <div className="border-2 p-2 px-3  rounded-full border-bcolor m-2 ">
                <img className="h-5" src={fb} alt="fb-image" />
              </div>

              <div className="border-2 py-2 px-2  rounded-full border-bcolor m-2">
                <img className="h-5" src={twitter} alt="twitter-image" />
              </div>

              <div className="border-2 p-2 px-2  rounded-full border-bcolor m-2">
                <img className="h-5" src={linkdin} alt="linkdin-image" />
              </div>
            </div>
          </div>

          <div className="flex flex-col place-content-center place-items-center  w-72 overflow-hidden bg-white pb-5  rounded-xl m-10 ">
            <img src={akash} alt="akash-image" />
            <p className="text-lg font-semibold mt-5">Akash Srivastava</p>
            <p>Scaling expert</p>

            <div className="flex place-content-center place-items-center mt-5 ">
              <div className="border-2 p-2 px-3  rounded-full border-bcolor m-2 ">
                <img className="h-5" src={fb} alt="fb-image" />
              </div>

              <div className="border-2 py-2 px-2  rounded-full border-bcolor m-2">
                <img className="h-5" src={twitter} alt="twitter-image" />
              </div>

              <div className="border-2 p-2 px-2  rounded-full border-bcolor m-2">
                <img className="h-5" src={linkdin} alt="linkdin-image" />
              </div>
            </div>
          </div>

          <div className="flex flex-col  place-content-center place-items-center  w-72 overflow-hidden bg-white pb-5  rounded-xl m-10 ">
            <img src={prateek} alt="sumit" />
            <p className="text-lg font-semibold mt-5">Prateek</p>
            <p>Cloud expert</p>

            <div className="flex place-content-center place-items-center mt-5 ">
              <div className="border-2 p-2 px-3  rounded-full border-bcolor m-2 ">
                <img className="h-5" src={fb} alt="fb-image" />
              </div>

              <div className="border-2 py-2 px-2  rounded-full border-bcolor m-2">
                <img className="h-5" src={twitter} alt="twitter-image" />
              </div>

              <div className="border-2 p-2 px-2  rounded-full border-bcolor m-2">
                <img className="h-5" src={linkdin} alt="linkdin-image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap place-content-center place-items-center">
        <div className="p-4 lg:p-10  flex flex-col place-items-center place-content-center">
          <p>Smart Minds</p>
          <h1 className="border-2 border-bcolor text-4xl mt-2  rounded-full w-fit px-5 py-10">
            125+
          </h1>
        </div>

        <div className="p-4 lg:p-10 flex flex-col place-items-center place-content-center">
          <p>Countries</p>
          <h1 className="border-2 border-bcolor text-4xl mt-2  rounded-full w-fit px-8 py-10">
            12+
          </h1>
        </div>

        <div className="p-4 lg:p-10 flex flex-col place-items-center place-content-center">
          <p>Happy Customers</p>
          <h1 className="border-2 border-bcolor text-4xl mt-2  rounded-full w-fit px-8 py-10">
            55+
          </h1>
        </div>

        <div className="p-4 lg:p-10 flex flex-col place-items-center place-content-center">
          <p>CAGR</p>
          <h1 className="border-2 border-bcolor text-4xl mt-2  rounded-full w-fit px-8 py-10">
            78%
          </h1>
        </div>
      </div>

      <div id="contact">
        <BookNow />
      </div>
    </div>
  );
}

export default Ourteam;
