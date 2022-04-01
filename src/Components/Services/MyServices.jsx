import React from "react";
import { useLocation } from "react-router-dom";
import BookNow from "../Contact/BookNow";
import NotFound from "../../NotFound";
import main from "../../assits/services/webdev/main.jpg"
import first from "../../assits/services/webdev/first.jpg"
import sec from "../../assits/services/webdev/sec.jpg"
import appmain from "../../assits/services/appdev/appmain.jpg"
import appfirst from "../../assits/services/appdev/appfirst.jpg"
import appsec from "../../assits/services/appdev/appsec.jpg"
import devmain from "../../assits/services//devops/devmain.jpg"




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
         <img className="absolute -top-12" src="data:image/png;base64,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"/>
            <h1 className="mt-10 md:mt-0 text-lg font-semibold ">Cloud Consulting</h1>
            <p className="text-xs md:text-sm">Experience expert advisory and seamless cloud integration, cloud migration and architecture through our managed cloud services. Ensure cost optimization and automation with Saas, Iaas and Paas deployment services</p>
          </div>

          <div className="flex flex-col place-items-center place-content-center md:p-10 h-fit m-7 md:m-5 bg-card rounded-md text-center relative xl:h-60 ">
         <img className="absolute -top-12" src="data:image/png;base64,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"/>
            <h1 className="mt-10 md:mt-0 text-lg font-semibold">Cloud Migration</h1>
            <p className="text-xs md:text-sm">Seamlessly migrate your entire application workload to Cloud, including databases & applications from any existing cloud platform or in-premise data center</p>
          </div>

          <div className="flex flex-col place-items-center place-content-center md:p-10 h-fit m-7 md:m-5 bg-card rounded-md text-center relative xl:h-60 ">
         <img className="absolute -top-12" src="data:image/png;base64,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"/>
            <h1 className="mt-10 md:mt-0 text-lg font-semibold">DevOps On Cloud</h1>
            <p className="text-xs md:text-sm">Optimize your infrastructure using cloud-native DevOps with tools like GCP DevOps services, Azure DevOps services, and AWS DevOps services. These tools help make the process more smooth and reliable through automation.</p>
          </div>

          <div className="flex flex-col place-items-center place-content-center md:p-10 h-fit m-7 md:m-5 bg-card rounded-md text-center relative xl:h-60 ">
         <img className="absolute -top-12" src="data:image/png;base64,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"/>
            <h1 className="mt-10 md:mt-0 text-lg font-semibold">Cloud Native Development</h1>
            <p className="text-xs md:text-sm">Design cloud-native application architecture, microservices, and serverless architecture design enabling High Scalability (HS) and High Availability (HA) for business-critical applications. This results in a faster, easily scalable and cost-efficient approach towards application development and maintenance.</p>
          </div>

          <div className="flex flex-col place-items-center place-content-center md:p-10 h-fit m-7 md:m-5 bg-card rounded-md text-center relative xl:h-60 ">
         <img className="absolute -top-12" src="data:image/png;base64,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"/>
            <h1 className="mt-10 md:mt-0 text-lg font-semibold">Cloud Infrastructure Optimization</h1>
            <p className="text-xs md:text-sm">Optimize the scalability and agility of your cloud infrastructure. Reduce the cost of your IT ecosystem and create a resilient IT environment.</p>
          </div>

          <div className="flex flex-col place-items-center place-content-center md:p-10 h-fit m-7 md:m-5 bg-card rounded-md text-center relative xl:h-60 ">
         <img className="absolute -top-12" src="data:image/png;base64,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"/>
            <h1 className="mt-10 md:mt-0 text-lg font-semibold">Cloud Integration And Software Solutions</h1>
            <p className="text-xs md:text-sm">Optimize your infrastructure using cloud-native DevOps with tools like GCP DevOps services, Azure DevOps services, and AWS DevOps services. These tools help make the process more smooth and reliable through automation.</p>
          </div>



          




        </div>


        </>
      );
    } 
    
    
    
    
    else {
      return <NotFound />;
    }
  };

  return (
    <>
      <ShowingData />
      <BookNow />
    </>
  );
}

export default MyServices;
