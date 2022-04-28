import React from "react";
import mainteam from "../../assits/ourteam/mainteam.jpg";
import BookNow from "../Contact/BookNow";

// icons
import linkdin from "../../assits/ourteam/icons/linkdin.svg";
import sumit from "../../assits/ourteam/advisor-images/sumit.jpg";

import manishgupta from "../../assits/ourteam/advisor-images/manishgupta.jpg";
import mohitsorout from "../../assits/ourteam/advisor-images/mohitsorout.jpg";
import souravdutta from "../../assits/ourteam/advisor-images/souravdutta.jpg";
import Count from "./Counter/Count";
import Culture from "../Culture/Culture";

function Ourteam() {
  let data = [
    {
      id: "001",
      label: "Smart Minds",
      number: "125",
      duration: "1",
      type : "+"
    },
    {
      id: "002",
      label: "Countries",
      number: "12",
      duration: "1",
      type : "+"
    },
    {
      id: "003",
      label: "Happy Customers",
      number: "55",
      duration: "1",
      type : "+"
    },
    {
      id: "004",
      label: "CAGR",
      number: "78%",
      duration: "1",
      type : "%"
    },
  ];

  return (
    <div id="ourteam">

    <Culture />

      <div className="flex flex-col-reverse sm:flex sm:flex-row place-content-center place-items-center mt-16 py-5 sm:ml-5 lg:h-eighty-h  ">
        <div className="flex-col text-center sm:text-left place-content-center place-items-center lg:p-16 lg:mb-10">
          <h1 className="text-xl mt-2 sm:mt-0 font-bold sm:text-2xl md:text-4xl lg:text-4xl  ">
            One Team, One Goal
          </h1>
          <p className="md:mt-5 mt-2 sm:mt-0 md:xl lg:text-xl ">
            Individually, we are a drop; together, we are an ocean.
          </p>
        </div>

        <div className="lg:p-10">
          <img className="p-2" src={mainteam} alt="land-img" />
        </div>
      </div>

      <div className="bg-card py-5">
        <h1 className="text-xl mt-4 sm:mt-0 sm:text-4xl font-bold mb-5 text-center">
          Our Advisors
        </h1>

        <div className="flex flex-wrap place-content-center place-items-center ">

          <div className="flex flex-col place-content-center place-items-center  w-72 overflow-hidden bg-white pb-5  rounded-xl m-10 ">
            <img className="h-60 w-full  object-cover" src={sumit} alt="sumit" />
            <p className="text-lg font-semibold mt-5">Sumit</p>
            <p className="px-2 text-center italic">Sumita Solanki is a seasoned UX designer and has 10+ years of experience in UX designing for B2B and B2C digital products</p>

            <div className="flex place-content-center place-items-center mt-5 ">


              <div className="border-2 p-2 px-2  rounded-full border-bcolor m-2">
                <a href="https://www.linkedin.com/in/sumit-solanki-853a6ab7/" alt="lindin-profile-link" > <img className="h-5" src={linkdin} alt="linkdin-image" /> </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col place-content-center place-items-center  w-72 overflow-hidden bg-white pb-5  rounded-xl m-10 ">
            <img className="h-60 w-full  object-cover" src={souravdutta} alt="sourav-dutta-image" />
            <p className="text-lg font-semibold mt-5">Sourav Dutta</p>
            <p className="px-2 text-center italic">Sourav Dutta is an alumnus of IIM Bangalore and has more than 10 yrs of experience in Strategy & M&A for companies such as Tata Starbucks, PwC and others.</p>

            <div className="flex place-content-center place-items-center mt-5 ">


              <div className="border-2 p-2 px-2  rounded-full border-bcolor m-2">
              <a href="https://www.linkedin.com/in/souravadutta/" alt="lindin-profile-link" > <img className="h-5" src={linkdin} alt="linkdin-image" /> </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col place-content-center place-items-center  w-72 overflow-hidden bg-white pb-5  rounded-xl m-10 ">
            <img className="h-60 w-full  object-cover" src={manishgupta} alt="manish-gupta-image" />
            <p className="text-lg font-semibold mt-5">Manish Gupta</p>
            <p className="px-2 text-center italic">Manish is an alumnus of IIM Bangalore and has more than 10 yrs of experience in scaling B2B SaaS products</p>

            <div className="flex place-content-center place-items-center mt-5 ">


              <div className="border-2 p-2 px-2  rounded-full border-bcolor m-2">
              <a href="https://www.linkedin.com/in/manish86" alt="lindin-profile-link" > <img className="h-5" src={linkdin} alt="linkdin-image" /> </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col  place-content-center place-items-center  w-72 overflow-hidden bg-white pb-5  rounded-xl m-10 ">
            <img className="h-60 w-full  object-cover" src={mohitsorout} alt="mohit-sorout-image" />
            <p className="text-lg font-semibold mt-5">Mohit Sorout</p>
            <p className="px-2 text-center italic">Mohit Sorout is a serial entrepreneur and an angel investor with mutliple ventures in Blockchain and peripheral technologies. </p>

            <div className="flex place-content-center place-items-center mt-5 ">


              <div className="border-2 p-2 px-2  rounded-full border-bcolor m-2">
              <a href="https://www.linkedin.com/in/singhsoro" alt="lindin-profile-link" > <img className="h-5" src={linkdin} alt="linkdin-image" /> </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="flex flex-wrap place-content-center place-items-center">
        <Count data={data[0]} />
        <Count data={data[1]} />
        <Count data={data[2]} />
        <Count data={data[3]} />
      </div>

      <div id="contact">
        <BookNow />
      </div>

    </div>
  );
}

export default Ourteam;
