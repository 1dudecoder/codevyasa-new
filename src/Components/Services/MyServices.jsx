import React from "react";
import { useLocation } from "react-router-dom";
import BookNow from "../Contact/BookNow";
import NotFound from "../../NotFound";

import main from "../../assits/services/webdev/main.jpg";
import first from "../../assits/services/webdev/first.jpg";
import sec from "../../assits/services/webdev/sec.jpg";

import appmain from "../../assits/services/appdev/appmain.jpg";
import appfirst from "../../assits/services/appdev/appfirst.jpg";
import appsec from "../../assits/services/appdev/appsec.jpg";

import uiuxmain from "../../assits/services/uiux/ui-ux-main.jpg";
import uiuxcenter from "../../assits/services/uiux/ui-ux-center.jpg";
import uxfirsticon from "../../assits/services/uiux/icons/uxfirsticon.svg";
import uxsecicon from "../../assits/services/uiux/icons/uxsecicon.svg";
import uxthirdicon from "../../assits/services/uiux/icons/uxthirdicon.svg";
import uxfourthicon from "../../assits/services/uiux/icons/uxfourthicon.svg";
import uxfifthicon from "../../assits/services/uiux/icons/uxfifthicon.svg";
import uxsixthicon from "../../assits/services/uiux/icons/uxsixthicon.svg";

import devmain from "../../assits/services/devops/devmain.jpg";
import firsticon from "../../assits/services/devops/icons/firsticon.svg";
import secicon from "../../assits/services/devops/icons/secicon.svg";
import thirdicon from "../../assits/services/devops/icons/thirdicon.svg";
import fourthicon from "../../assits/services/devops/icons/fourthicon.svg";
import fifthicon from "../../assits/services/devops/icons/fifthicon.svg";
import sixthicon from "../../assits/services/devops/icons/sixthicon.svg";

import tickicon from "../../assits/services/sharedcto/icons/tickicon.svg";
import maincto from "../../assits/services/sharedcto/maincto.jpg";

function MyServices() {
  let location = useLocation();

  const ShowingData = () => {
    if (location.pathname === "/services/web-dev") {
      let mydata = [
        {
          title: "Have An Idea ?",
          msg: "Bring your idea to life using our Web development services",
          img: main,
        },
        {
          lilmsg: "Get Quality-Rich",
          title: "Web Development Services",
          msg: "We offer top-of-the-line web development services using emerging technologies for various industries.",
        },
      ];

      let services = [
        {
          name: "Expert Web Developers/Coders",
          msg: "CodeVyasa is Silicon Valley's top-rated custom web app development company with over 3+ years of experience building world-class B2B & B2C applications. Our clients range from startups to enterprises and we have worked with a variety of industry verticals including healthcare, adtech, eLearning, data analysis, Fintech & eCommerce.",
          img: first,
        },
        {
          name: "Web Solution Form E-Commerce Portals,CMS, ERP Solutions To Chatbots",
          msg: "If you desire to experience the best of web development to ensure growth-centric digital transformation for your business, our full-stack web application development services are perfect for you. From e-commerce portals, CMS, ERP solutions to chatbots, custom apps and more - our web development services include all major robust web solutions.",
          img: sec,
        },
      ];

      return (
        <>
          <div className="flex place-content-center place-items-center  ml-5 lg:h-eighty-h ">
            <div className="flex-col place-content-center place-items-center lg:p-16 lg:mb-10">
              <h1 className="text-xl  font-bold sm:text-2xl md:text-4xl lg:text-5xl ">
                {mydata[0].title}
              </h1>
              <p className="md:mt-5 md:xl lg:text-xl ">{mydata[0].msg}</p>
            </div>

            <div className="lg:p-10">
              <img className="p-2" src={mydata[0].img} alt="land-img" />
            </div>
          </div>

          <div className="px-10 md:px-0 text-center my-14 ">
            <p className="text-lg">{mydata[1].lilmsg}</p>
            <h1 className="text-2xl sm:text-5xl font-bold pb-2">
              {mydata[1].title}
            </h1>
            <p className="">{mydata[1].msg}</p>
          </div>

          {services.map((item, index) => {
            if (index / 2 === 0) {
              return (
                <>
                  <div className=" flex justify-center items-center sm:px-10 my-16">
                    <div className="p-2  flex flex-1 flex-col lg:px-5  ">
                      <h1 className="text-xl sm:text-3xl font-bold my-2 ">
                        {item.name}
                      </h1>
                      <p className="text-xs sm:text-sm">{item.msg}</p>
                    </div>

                    <div className="">
                      <img className="" src={item.img} alt="expert-image" />
                    </div>
                  </div>
                </>
              );
            } else {
              return (
                <>
                  <div className="flex flex-row-reverse justify-center items-center sm:px-10 my-16">
                    <div className="p-2 flex flex-1 flex-col lg:px-10  relative">
                      <h1 className="text-xl sm:text-3xl font-bold my-2  ">
                        {item.name}
                      </h1>
                      <p className="text-xs sm:text-sm">{item.msg}</p>
                    </div>

                    <div className="">
                      <img className="" src={item.img} alt="expert-image" />
                    </div>
                  </div>
                </>
              );
            }
          })}
        </>
      );
    }
    if (location.pathname === "/services/app-dev") {
      let mydata = [
        {
          title: "Have An Idea ?",
          msg: "Let us help you to kickstart your idea",
          img: appmain,
        },
        {
          lilmsg: "Get Quality-Rich",
          title: "App Development Services",
          msg: "We are dedicated to offering you high-end mobile app development services with a full cycle of app design, integration, and management.",
        },
      ];

      let services = [
        {
          name: "Expert Mobile App Developers/Coders",
          msg: "CodeVyasa is Silicon Valley's top-rated mobile app development company with over 3+ years of experience building world-class B2B & B2C applications.We offer end-to-end custom web development services including ground-up bespoke web development, migration, update, & ongoing maintenance services.",
          img: appfirst,
        },
        {
          name: "Cutting-Edge, Customized Mobility Solutions For Your Unique Business Requirements. ",
          msg: "Whether you require native or cross platform apps, our mobile application development services are designed to deliver cutting-edge, customized mobility solutions for your unique business requirements. Our highly experienced developers have built a range of secured and scalable apps for clients in diverse industry verticals. So, you can avail our mobile app development services to leverage the best of it.",
          img: appsec,
        },
      ];

      return (
        <>
          <div className="flex place-content-center place-items-center  ml-5 lg:h-eighty-h ">
            <div className="flex-col place-content-center place-items-center lg:p-16 lg:mb-10">
              <h1 className="text-xl  font-bold sm:text-2xl md:text-4xl lg:text-5xl ">
                {mydata[0].title}
              </h1>
              <p className="md:mt-5 md:xl lg:text-xl ">{mydata[0].msg}</p>
            </div>

            <div className="lg:p-10">
              <img className="p-2" src={mydata[0].img} alt="land-img" />
            </div>
          </div>

          <div className="px-10 md:px-0 text-center my-14 ">
            <p className="text-lg">{mydata[1].lilmsg}</p>
            <h1 className="text-2xl sm:text-5xl font-bold pb-2">
              {mydata[1].title}
            </h1>
            <p className="lg:px-96 lg:mt-2">{mydata[1].msg}</p>
          </div>

          {services.map((item, index) => {
            if (index / 2 === 0) {
              return (
                <>
                  <div className=" flex justify-center items-center sm:px-10 my-16">
                    <div className="p-2  flex flex-1 flex-col lg:px-20 ">
                      <h1 className="text-xl sm:text-3xl font-bold my-2  ">
                        {item.name}
                      </h1>
                      <p className="text-xs sm:text-sm">{item.msg}</p>
                    </div>

                    <div className="">
                      <img className="" src={item.img} alt="expert-image" />
                    </div>
                  </div>
                </>
              );
            } else {
              return (
                <>
                  <div className="flex flex-row-reverse justify-center items-center sm:px-10 my-16">
                    <div className="p-2 flex flex-1 flex-col lg:px-20  ">
                      <h1 className="text-xl sm:text-3xl font-bold my-2 ">
                        {item.name}
                      </h1>
                      <p className="text-xs sm:text-sm">{item.msg}</p>
                    </div>

                    <div className="">
                      <img className="" src={item.img} alt="expert-image" />
                    </div>
                  </div>
                </>
              );
            }
          })}
        </>
      );
    }
    if (location.pathname === "/services/dev-ops") {
      let mydata = [
        {
          title: "Focus On Your Core Business",
          msg: "Let us help you to kickstart your idea.",
          img: devmain,
        },
        {
          lilmsg: "",
          title: "Our Cloud Expertise",
          msg: "Our DevOps as a service offering leverages collaboration, monitoring, tool-chain pipelines, automation, and cloud adoption to achieve higher efficiency, faster time to market, and better quality of software builds.",
        },
      ];

      return (
        <>
          <div className="flex place-content-center place-items-center  ml-5 lg:h-eighty-h ">
            <div className="flex-col place-content-center place-items-center lg:p-16 lg:mb-10">
              <h1 className="text-xl font-bold sm:text-2xl md:text-4xl lg:text-5xl ">
                {mydata[0].title}
              </h1>
              <p className="md:mt-5 md:xl lg:text-xl ">{mydata[0].msg}</p>
            </div>

            <div className="lg:p-10">
              <img className="p-2" src={mydata[0].img} alt="land-img" />
            </div>
          </div>

          <div className="px-10 md:px-0 text-center my-14 ">
            <p className="text-lg">{mydata[1].lilmsg}</p>
            <h1 className="text-2xl sm:text-5xl font-bold pb-2">
              {mydata[1].title}
            </h1>
            <p className="lg:px-96 lg:mt-2">{mydata[1].msg}</p>
          </div>

          <div className="grid grid-rows-1 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 p-5 ">
            <div className="flex flex-col place-items-center place-content-center md:p-10 h-fit m-7 md:m-5 text-center bg-card rounded-md relative xl:h-60   ">
              <div className="absolute -top-12 bg-bcolor p-5 rounded-full flex justify-center items-center mt-5 ">
                <img src={firsticon} />
              </div>

              <h1 className="mt-10 md:mt-0 text-lg font-semibold ">
                Cloud Consulting
              </h1>
              <p className="text-xs md:text-sm">
                Experience expert advisory and seamless cloud integration, cloud
                migration and architecture through our managed cloud services.
                Ensure cost optimization and automation with Saas, Iaas and Paas
                deployment services
              </p>
            </div>

            <div className="flex flex-col place-items-center place-content-center md:p-10 h-fit m-7 md:m-5 bg-card rounded-md text-center relative xl:h-60 ">
              <div className="absolute -top-12 bg-bcolor p-5 rounded-full  flex justify-center items-center  mt-5  ">
                <img src={secicon} />
              </div>{" "}
              <h1 className="mt-10 md:mt-0 text-lg font-semibold">
                Cloud Migration
              </h1>
              <p className="text-xs md:text-sm">
                Seamlessly migrate your entire application workload to Cloud,
                including databases & applications from any existing cloud
                platform or in-premise data center
              </p>
            </div>

            <div className="flex flex-col place-items-center place-content-center md:p-10 h-fit m-7 md:m-5 bg-card rounded-md text-center relative xl:h-60 ">
              <div className="absolute -top-12 bg-bcolor p-5 rounded-full mt-5 ">
                <img src={thirdicon} />
              </div>{" "}
              <h1 className="mt-10 md:mt-0 text-lg font-semibold">
                DevOps On Cloud
              </h1>
              <p className="text-xs md:text-sm">
                Optimize your infrastructure using cloud-native DevOps with
                tools like GCP DevOps services, Azure DevOps services, and AWS
                DevOps services. These tools help make the process more smooth
                and reliable through automation.
              </p>
            </div>

            <div className="flex flex-col place-items-center place-content-center md:p-10 h-fit m-7 md:m-5 bg-card rounded-md text-center relative xl:h-60 ">
              <div className="absolute -top-12 bg-bcolor p-5 rounded-full flex justify-center items-center mt-5 ">
                <img src={fourthicon} />
              </div>{" "}
              <h1 className="mt-10 md:mt-0 text-lg font-semibold">
                Cloud Native Development
              </h1>
              <p className="text-xs md:text-sm">
                Design cloud-native application architecture, microservices, and
                serverless architecture design enabling High Scalability (HS)
                and High Availability (HA) for business-critical applications.
                This results in a faster, easily scalable and cost-efficient
                approach towards application development and maintenance.
              </p>
            </div>

            <div className="flex flex-col place-items-center place-content-center md:p-10 h-fit m-7 md:m-5 bg-card rounded-md text-center relative xl:h-60 ">
              <div className="absolute -top-12 bg-bcolor p-5 rounded-full flex justify-center items-center mt-5 ">
                <img src={fifthicon} />
              </div>{" "}
              <h1 className="mt-10 md:mt-0 text-lg font-semibold">
                Cloud Infrastructure Optimization
              </h1>
              <p className="text-xs md:text-sm">
                Optimize the scalability and agility of your cloud
                infrastructure. Reduce the cost of your IT ecosystem and create
                a resilient IT environment.
              </p>
            </div>

            <div className="flex flex-col place-items-center place-content-center md:p-10 h-fit m-7 md:m-5 bg-card rounded-md text-center relative xl:h-60 ">
              <div className="absolute -top-12 bg-bcolor p-5 rounded-full flex justify-center items-center mt-5 ">
                <img src={sixthicon} />
              </div>{" "}
              <h1 className="mt-10 md:mt-0 text-lg font-semibold">
                Cloud Integration And Software Solutions
              </h1>
              <p className="text-xs md:text-sm">
                Optimize your infrastructure using cloud-native DevOps with
                tools like GCP DevOps services, Azure DevOps services, and AWS
                DevOps services. These tools help make the process more smooth
                and reliable through automation.
              </p>
            </div>
          </div>
        </>
      );
    }
    if (location.pathname === "/services/ui-ux") {
      let mydata = [
        {
          title: "Humanising Technology",
          msg: "with Impactful User Experiences.",
          img: uiuxmain,
        },
        {
          lilmsg: "",
          title: "Visually Stunning User Experience Design Is Crafted Here!",
          msg: "",
        },
      ];

      return (
        <>
          <div className="flex place-content-center place-items-center  ml-5 lg:h-eighty-h ">
            <div className="flex-col place-content-center place-items-center lg:p-16 lg:mb-10">
              <h1 className="text-xl font-bold sm:text-2xl md:text-4xl lg:text-5xl md:whitespace-nowrap ">
                {mydata[0].title}
              </h1>
              <p className="md:mt-5 md:xl lg:text-xl ">{mydata[0].msg}</p>
            </div>

            <div className="lg:p-10">
              <img className="p-2" src={mydata[0].img} alt="land-img" />
            </div>
          </div>

          <div className="px-10 md:px-0 text-center mt-14 mx-10">
            <h1 className="text-2xl sm:text-5xl font-bold ">
              Visually Stunning User Experience <br /> Design Is Crafted Here!
            </h1>
          </div>

          <div className=" flex justify-center items-center sm:px-10 my-16">
            <div className="p-2 flex flex-1 flex-col lg:px-20 ">
              <h1 className="text-xl sm:text-3xl font-bold my-2  ">
                We Are Specialized In Crafting <br /> Awe-Inspiring Stunning
                User Experiences."
              </h1>
              <p className="text-xs sm:text-sm">
                Utilize our top team of UI/UX researchers and designers who will
                make your digital screams more human. We follow Industry
                recognized best processes, keeping it Simple & Optimized for
                Remote execution - across Ideation, Design & User Review.
              </p>
            </div>

            <div className="">
              <img className="" src={uiuxcenter} alt="expert-image" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-center my-10">How we Help</h1>

          <div className="grid grid-rows-1 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 p-5 ">
            <div className="flex flex-col place-items-center place-content-center md:p-10 h-fit m-7 md:m-5 text-center bg-card rounded-md relative xl:h-60   ">
              <div className="absolute -top-12 bg-bcolor p-5 rounded-full flex justify-center items-center mt-5 ">
                <img src={uxfirsticon} />
              </div>
              <h1 className="mt-10 md:mt-0 text-lg font-semibold ">
                Remote Ideation Workshops
              </h1>
              <p className="text-xs md:text-sm">
                Immersing in your business with a structured approach, taking
                step back on ``Why``
              </p>
            </div>

            <div className="flex flex-col place-items-center place-content-center md:p-10 h-fit m-7 md:m-5 bg-card rounded-md text-center relative xl:h-60 ">
              <div className="absolute -top-12 bg-bcolor p-5 rounded-full flex justify-center items-center mt-5 ">
                <img src={uxsecicon} />
              </div>
              <h1 className="mt-10 md:mt-0 text-lg font-semibold">
                Product Design Concept
              </h1>
              <p className="text-xs md:text-sm">
                Applying your Strategic Landscape & User needs to your User
                Journeys
              </p>
            </div>

            <div className="flex flex-col place-items-center place-content-center md:p-10 h-fit m-7 md:m-5 bg-card rounded-md text-center relative xl:h-60 ">
              <div className="absolute -top-12 bg-bcolor p-5 rounded-full flex justify-center items-center mt-5 ">
                <img src={uxthirdicon} />
              </div>
              <h1 className="mt-10 md:mt-0 text-lg font-semibold">
                UX Strategy & Management
              </h1>
              <p className="text-xs md:text-sm">
                We evaluate your current UX practices and provide a long term UX
                Strategy & Process
              </p>
            </div>

            <div className="flex flex-col place-items-center place-content-center md:p-10 h-fit m-7 md:m-5 bg-card rounded-md text-center relative xl:h-60 ">
              <div className="absolute -top-12 bg-bcolor p-5 rounded-full flex justify-center items-center mt-5 ">
                <img src={uxfourthicon} />
              </div>
              <h1 className="mt-10 md:mt-0 text-lg font-semibold">
                Ongoing Design Partners
              </h1>
              <p className="text-xs md:text-sm">
                Why not continue the holistic Design Approach with a specialized
                extended team?
              </p>
            </div>

            <div className="flex flex-col place-items-center place-content-center md:p-10 h-fit m-7 md:m-5 bg-card rounded-md text-center relative xl:h-60 ">
              <div className="absolute -top-12 bg-bcolor p-5 rounded-full flex justify-center items-center mt-5 ">
                <img src={uxfifthicon} />
              </div>
              <h1 className="mt-10 md:mt-0 text-lg font-semibold">
                Human Factor Analysis
              </h1>
              <p className="text-xs md:text-sm">
                Human factor analysis is done at Codevyasa to determine the
                necessary changes needed in designs.
              </p>
            </div>

            <div className="flex flex-col place-items-center place-content-center md:p-10 h-fit m-7 md:m-5 bg-card rounded-md text-center relative xl:h-60 ">
              <div className="absolute -top-12 bg-bcolor p-5 rounded-full flex justify-center items-center mt-5 ">
                <img src={uxsixthicon} />
              </div>
              <h1 className="mt-10 md:mt-0 text-lg font-semibold">
                User Experience Evaluation
              </h1>
              <p className="text-xs md:text-sm">
                We do a complete evaluation on the factors to understand how
                your websites and apps are being perceived graphically by your
                users.
              </p>
            </div>
          </div>
        </>
      );
    }
    if (location.pathname === "/services/shared-cto") {
      return (
        <>
          <div className="flex place-content-center place-items-center  ml-5 lg:h-eighty-h ">
            <div className="flex-col place-content-center place-items-center lg:p-16 lg:mb-10">
              <h1 className="text-xl font-bold sm:text-2xl md:text-4xl lg:text-5xl md:whitespace-nowrap ">
                Shared CTO
              </h1>
              <p className="md:mt-5 md:xl lg:text-xl ">
                Leverage the Best Possible Tech Leadership for your Business
              </p>
            </div>

            <div className="lg:p-10">
              <img className="p-2" src={maincto} alt="land-img" />
            </div>
          </div>

          <div className="flex-col flex place-content-center place-items-center px-3 lg:mt-10 ">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center my-4">
              Get Access To Ex-CTOs, Senior Solutions <br /> Architect On A
              Shared Basis
            </h1>

            <div className="flex-col flex place-items-start place-content-start">
              <h1 className=" text-xl md:text-2xl lg:text-3xl  font-semibold py-5">
                Having worked with hundreds of customers, we have realized that:
              </h1>
              <div className="flex place-items-center place-content-start p-2">
                <img className="pr-2" src={tickicon} alt="tickicon" />
                <p>
                  Having worked with hundreds of customers, we have realized
                  that:
                </p>
              </div>
              <div className="flex place-items-center place-content-start p-2">
                <img className="pr-2" src={tickicon} alt="tickicon" />
                <p>
                  Business-oriented Founders require Technology Leadership at
                  various stages in their journey
                </p>
              </div>
              <div className="flex place-items-center place-content-start p-2">
                <img className="pr-2" src={tickicon} alt="tickicon" />
                <p>
                  Even the best Technology Leaders want senior Solutions
                  Architect/EMs to play the second fiddle
                </p>
              </div>
            </div>
          </div>

          <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-bold py-14">
            Here is what Code Vyasa brings to the table:
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-1 place-content-center place-items-center xl:px-60 ">
            <div className="p-10 border-2 shadow-2xl w-screen  sm:w-sixty-h h-1/2 flex place-items-center place-content-center text-bcolor font-semibold text-sm text-center ">
              <p>Technology Leaders with {">7"} years of experience</p>
            </div>

            <div className="p-10 border-2 shadow-2xl w-screen sm:w-sixty-h h-1/2 flex place-items-center place-content-center text-bcolor font-semibold text-sm text-center  ">
              <p>
                Industry leaders with work experience in companies such as
                Facebook, Salesforce, Slack & others
              </p>
            </div>

            <div className="p-10 border-2 shadow-2xl  w-screen sm:w-sixty-h h-1/2 flex place-items-center place-content-center text-bcolor font-semibold text-sm text-center  ">
              <p>Get Consultancy/services as low as 50 hours a month</p>
            </div>

            <div className="p-10 border-2 shadow-2xl w-screen  sm:w-sixty-h h-1/2 flex place-items-center place-content-center text-bcolor font-semibold text-sm text-center  ">
              <p>Avoid Technical Debts</p>
            </div>
          </div>
        </>
      );
    } else {
      return <NotFound />;
    }
  };

  return (
    <>
      <ShowingData />

      <div id="contact">
        <BookNow />
      </div>
    </>
  );
}

export default MyServices;
