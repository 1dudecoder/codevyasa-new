import React from "react";
import { useLocation } from "react-router-dom";
import NotFound from "../../NotFound";
import BookNow from "../Contact/BookNow";

//engineerning mobile images
import maineng from "../../assits/eng/mobile/maineng.jpg";
import seceng from "../../assits/eng/mobile/seceng.jpg";
import thirdeng from "../../assits/eng/mobile/thirdeng.jpg";
import reacticon from "../../assits/eng/mobile/icons/reacticon.svg";
import fluttericon from "../../assits/eng/mobile/icons/fluttericon.svg";
import ionicicon from "../../assits/eng/mobile/icons/ionicicon.svg";
import xamaxin from "../../assits/eng/mobile/icons/xamaxin.svg";

//engineerning web images
import mainweb from "../../assits/eng/web/mainweb.jpg";
import secweb from "../../assits/eng/web/secweb.jpg";
import angular from "../../assits/eng/web/webicons/angular.svg";
import electronjs from "../../assits/eng/web/webicons/electronjs.svg";
import html from "../../assits/eng/web/webicons/html.svg";
import mean from "../../assits/eng/web/webicons/mean.svg";
import mern from "../../assits/eng/web/webicons/mern.svg";
import nextjs from "../../assits/eng/web/webicons/nextjs.svg";
import nuxtjs from "../../assits/eng/web/webicons/nuxtjs.svg";
import reactjs from "../../assits/eng/web/webicons/reactjs.svg";
import renative from "../../assits/eng/web/webicons/renative.svg";
import typescript from "../../assits/eng/web/webicons/typescript.svg";
import vue from "../../assits/eng/web/webicons/vue.svg";
import webdesigner from "../../assits/eng/web/webicons/webdesigner.svg";

//cloud images
import maincloud from "../../assits/eng/cloud/maincloud.jpg";
import seccloud from "../../assits/eng/cloud/seccloud.jpg";
import aws from "../../assits/eng/cloud/icons/aws.svg";
import azure from "../../assits/eng/cloud/icons/azure.svg";
import gcp from "../../assits/eng/cloud/icons/gcp.svg";

//ecommerce images
import mainecom from "../../assits/eng/ecommerce/mainecom.jpg";
import sececom from "../../assits/eng/ecommerce/sececom.jpg";
import drupal from "../../assits/eng/ecommerce/icons/drupal.svg";
import kentico from "../../assits/eng/ecommerce/icons/kentico.svg";
import magento from "../../assits/eng/ecommerce/icons/magento.svg";
import opencart from "../../assits/eng/ecommerce/icons/opencart.svg";
import sharepoint from "../../assits/eng/ecommerce/icons/sharepoint.svg";
import shopify from "../../assits/eng/ecommerce/icons/shopify.svg";
import sitecore from "../../assits/eng/ecommerce/icons/sitecore.svg";
import sitefinity from "../../assits/eng/ecommerce/icons/sitefinity.svg";
import umbraco from "../../assits/eng/ecommerce/icons/umbraco.svg";
import vtex from "../../assits/eng/ecommerce/icons/vtex.svg";
import woocommerce from "../../assits/eng/ecommerce/icons/woocommerce.svg";
import wordpress from "../../assits/eng/ecommerce/icons/wordpress.svg";

function MyEngineering() {
  let location = useLocation();

  function Showdata() {
    if (location.pathname === "/engineering/mobile") {
      return (
        <>
          <div className="flex flex-col-reverse sm:flex sm:flex-row text-center sm:text-left place-content-center place-items-center  ml-5 lg:h-eighty-h ">
            <div className="flex-col place-content-center place-items-center lg:p-16 lg:mb-10">
              <h1 className="text-xl font-bold sm:text-2xl md:text-4xl lg:text-4xl  ">
                Half Of The Internet <br /> Is Served On Mobile Devices.
              </h1>
              <p className="text-sm mt-2 sm:mt-0 sm:text-base md:mt-5 md:xl lg:text-xl ">
                It’s time to become a part of this revolution
              </p>
            </div>

            <div className="lg:p-10">
              <img className="p-2" src={maineng} alt="land-img" />
            </div>
          </div>

          <div className=" fflex flex-col-reverse sm:flex sm:flex-row mt-5 sm:mt-0 justify-center items-center sm:px-10 lg:my-16">
            <div className="p-2 flex flex-1 flex-col lg:px-20 ">
              <h1 className=" text-lg sm:text-3xl font-bold my-2  ">
                We Build Android, IOS And PWA's That Work Great Across Multiple
                Devices, Screen Sizes And Resolutions.
              </h1>
              <p className="text-xs sm:text-sm">
                Whether you require native or cross platform apps, our mobile
                application development services are designed to deliver
                cutting-edge, customized mobility solutions for your unique
                business requirements. Our highly experienced developers have
                built a range of secured and scalable apps for clients in
                diverse industry verticals. So, you can avail our mobile app
                development services to leverage the best of it.
              </p>
            </div>

            <div className="flex justify-center">
              <img className=" h-64 sm:h-auto " src={seceng} alt="expert-image" />
            </div>
          </div>

          <div id="mob" className="flex-col flex place-items-center place-content-center px-5 pt-16">
            <h1 className="text-lg md:text-3xl  lg:text-4xl font-bold">
              Our Expertise
            </h1>
            <p className="text-lg md:text-2xl  lg:text-3xl font-semibold py-3">
              Native App Development
            </p>
            <p className="text-sm sm:text-base">
              We are dedicated to offering you high-end native Android and iOS
              mobile App development
            </p>

            <img src={thirdeng} alt="phone-image" />

            <h1 className="text-lg md:text-2xl  lg:text-3xl font-semibold py-3 ">
              Here is what Code Vyasa brings to the table:
            </h1>
            <p className="text-center text-sm sm:text-base">
              We are empowering all the shape and size of businesses with hybrid
              mobile app <br />
              development services. We can help you build robust, reliable, and
              scalable hybrid <br />
              mobile applications with efficiency and speed. <br />
            </p>

            <div  className="flex flex-wrap mt-10 place-content-center palce-items-center">
              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img
                  className="h-10 w-10 mx-2"
                  src={reacticon}
                  alt="react-image"
                />
                <p>React Native</p>
              </div>

              <div className="flex place-content-center place-items-center  border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img
                  className="h-10 w-10 mx-2"
                  src={fluttericon}
                  alt="flutter-icon"
                />
                <p>Flutter</p>
              </div>

              <div className="flex place-content-center place-items-center  border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img
                  className="h-10 w-10 mx-2"
                  src={ionicicon}
                  alt="ionic-icon"
                />
                <p>Ionic</p>
              </div>

              <div className="flex place-content-center place-items-center  border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img className="h-10 w-10 mx-2" src={xamaxin} alt="xamaxin" />
                <p>Xamarin</p>
              </div>
            </div>
          </div>
        </>
      );
    }
    if (location.pathname === "/engineering/web") {
      return (
        <>
          <div className="flex flex-col-reverse sm:flex sm:flex-row-reverse text-center sm:text-left  place-content-center place-items-center  sm:ml-5 lg:h-eighty-h ">
            <div className="flex-col place-content-center place-items-center lg:p-16 lg:mb-16">
              <h1 className="text-xl font-bold sm:text-2xl md:text-4xl lg:text-4xl mt-2 sm:mt-0  ">
                Be a part of www <br className="hidden sm:block" /> revolution and digitise <br /> your
                existing business
              </h1>
              <p className="md:mt-5 md:xl lg:text-xl ">or make a new one</p>
            </div>

            <div className="lg:p-10">
              <img className="p-2" src={mainweb} alt="land-img" />
            </div>
          </div>

          <div className="flex flex-col sm:flex sm:flex-row-reverse mt-10 sm:mt-0 justify-center items-center sm:px-10 lg:my-16">
            <div className="p-2 flex flex-1 flex-col lg:px-20 ">
              <h1 className="text-lg sm:text-3xl font-bold my-2  ">
                We Build Beautiful, Responsive And Feature-Rich Web Based
                Applications That Solve Real Customer Problems
              </h1>
              <p className="text-xs sm:text-sm">
                Whether you require native or cross platform apps, our mobile
                application development services are designed to deliver
                cutting-edge, customized mobility solutions for your unique
                business requirements. Our highly experienced developers have
                built a range of secured and scalable apps for clients in
                diverse industry verticals. So, you can avail our mobile app
                development services to leverage the best of it.
              </p>
            </div>

            <div className="">
              <img className="" src={secweb} alt="expert-image" />
            </div>
          </div>

          <div className="flex-col flex place-items-center place-content-center px-5 lg:mt-10 pt-10">
            <h1 className="text-xl md:text-3xl  lg:text-4xl font-bold">
              Our Expertise
            </h1>
            <p className="text-lg  md:text-2xl  lg:text-3xl font-semibold py-3">
              Web Development
            </p>
            <p className="text-center text-sm sm:text-base">
              Get quality-rich web development services at the world’s best web{" "}
              <br className="hidden sm:block" />
              development company providing you high end web products with
              astute planning and next to perfection execution.
            </p>

            <div className="flex flex-wrap mt-10 place-content-center palce-items-center lg:px-28">
              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img
                  className="h-10 w-10 mx-2"
                  src={reacticon}
                  alt="react-image"
                />
                <p>React Native</p>
              </div>

              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img
                  className="h-10 w-10 mx-2"
                  src={angular}
                  alt="react-image"
                />
                <p>Angular</p>
              </div>

              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img className="h-10 w-10 mx-2" src={vue} alt="react-image" />
                <p>Vue.JS</p>
              </div>

              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img
                  className="h-10 w-10 mx-2"
                  src={reactjs}
                  alt="react-image"
                />
                <p>React.JS</p>
              </div>

              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img className="h-10 w-10 mx-2" src={mean} alt="react-image" />
                <p>MEAN</p>
              </div>

              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img className="h-10 w-10 mx-2" src={mern} alt="react-image" />
                <p>MERN</p>
              </div>

              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img
                  className="h-10 w-10 mx-2"
                  src={nuxtjs}
                  alt="react-image"
                />
                <p>NuxtJS</p>
              </div>

              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img
                  className="h-10 w-10 mx-2"
                  src={electronjs}
                  alt="react-image"
                />
                <p>ElectronJS</p>
              </div>

              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img
                  className="h-10 w-10 mx-2"
                  src={nextjs}
                  alt="react-image"
                />
                <p>NextJS</p>
              </div>

              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img
                  className="h-10 w-10 mx-2"
                  src={renative}
                  alt="react-image"
                />
                <p>ReNative</p>
              </div>

              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img
                  className="h-10 w-10 mx-2"
                  src={webdesigner}
                  alt="react-image"
                />
                <p>Web Designers</p>
              </div>

              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img className="h-10 w-10 mx-2" src={html} alt="react-image" />
                <p>HTML</p>
              </div>

              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img
                  className="h-10 w-10 mx-2"
                  src={typescript}
                  alt="react-image"
                />
                <p>TypeScript</p>
              </div>
            </div>
          </div>
        </>
      );
    }
    if (location.pathname === "/engineering/cloud") {
      return (
        <>
          <div className="flex flex-col-reverse sm:flex sm:flex-row-reverse  place-content-center place-items-center sm:ml-5 lg:h-eighty-h ">
            <div className="flex-col place-content-center place-items-center lg:p-16 lg:mb-16">
              <h1 className="text-lg font-bold sm:text-2xl md:text-4xl lg:text-4xl  ">
                Time to think beyond <br /> the surface and adopt the cloud
              </h1>
              <p className=" md:mt-5 md:xl lg:text-xl ">or make a new one</p>
            </div>

            <div className="lg:p-10">
              <img className="p-2" src={maincloud} alt="land-img" />
            </div>
          </div>

          <div id="cloud" className="flex flex-col sm:flex sm:flex-row-reverse  justify-center items-center sm:px-10 lg:my-10 ">
            <div className="p-2 flex flex-1 flex-col lg:px-20 mt-5 sm:mt-0 ">
              <h1 className="text-lg sm:text-3xl font-bold my-2  ">
                We Infuse Solutions For Addressing The Distinctive
                Infrastructure, Database, Computation, And Storage Requirements.
              </h1>
              <p className="text-xs sm:text-sm">
                Our DevOps as a service offering leverages collaboration,
                monitoring, tool-chain pipelines, automation, and cloud adoption
                to achieve higher efficiency, faster time to market, and better
                quality of software builds.
              </p>
            </div>

            <div className="">
              <img className="" src={seccloud} alt="expert-image" />
            </div>
          </div>

          <div  className="flex-col flex place-items-center place-content-center px-5 pt-10 lg:mt-10 ">
            <h1 className="text-lg md:text-3xl  lg:text-4xl font-bold">
              Our Expertise
            </h1>
            <p className="text-lg md:text-2xl  lg:text-3xl font-semibold py-3">
              Devops
            </p>
            <p className="text-sm text-center">
              Accelerate your cloud operations and workloads by minimizing
              costs, increase the efficiency and <br />
              speed up the release management cycle with our DevOps consulting
              services
            </p>

            <div className="flex flex-wrap mt-10 place-content-center palce-items-center lg:px-28">
              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img className="h-10 w-10 mx-2" src={aws} alt="react-image" />
                <p>AWS</p>
              </div>

              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img className="h-10 w-10 mx-2" src={gcp} alt="react-image" />
                <p>GCP</p>
              </div>

              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img className="h-10 w-10 mx-2" src={azure} alt="react-image" />
                <p>Azure</p>
              </div>
            </div>
          </div>
        </>
      );
    }
    if (location.pathname === "/engineering/ecommerce") {
      return (
        <>
          <div className="flex flex-col-reverse sm:flex sm:flex-row-reverse place-content-center place-items-center  sm:ml-5 lg:h-eighty-h ">
            <div className="flex-col place-content-center place-items-center text-center sm:text-left lg:p-16 lg:mb-10">
              <h1 className="text-xl font-bold sm:text-2xl md:text-4xl lg:text-4xl  ">
                The global ecommerce <br className="hidden sm:block" /> market is expected to total <br />{" "}
                $4.89 trillion in 2022
              </h1>
              <p className="mt-2 sm:mt-0 md:mt-5 md:xl lg:text-xl ">
                What are you waiting for
              </p>
            </div>

            <div className="lg:p-10">
              <img className="p-2" src={mainecom} alt="land-img" />
            </div>
          </div>

          <div  className=" flex flex-col sm:flex sm:flex-row-reverse justify-center items-center mt-5 sm:mt-0 sm:px-10 lg:my-10">
            <div className="p-2 flex flex-1 flex-col lg:px-20 ">
              <h1 className="text-xl sm:text-3xl font-bold my-2  ">
                We Help In Driving Customer Satisfaction, Expanding Audiences,
                And Boosting Sales.
              </h1>
              <p className="text-xs sm:text-sm">
                Create an interactive, robust and user-friendly multi-vendor
                e-commerce store for your retail business. Sell ​​products
                worldwide and increase revenue upto 10 times with your own
                e-commerce marketplace. We assure that your website is developed
                with a robust business strategy and the advanced top-notch
                development technologies.
              </p>
            </div>

            <div className="">
              <img className="p-2" src={sececom} alt="expert-image" />
            </div>
          </div>

          <div id="eco" className="flex-col flex place-items-center place-content-center px-5 pt-10 lg:mt-10">
            <h1 className="text-lg md:text-3xl  lg:text-4xl font-bold">
              Our Expertise
            </h1>
            <p className="text-lg md:text-2xl  lg:text-3xl font-semibold py-3">
              Ecommerce
            </p>
            <p className="text-sm sm:text-base text-center">
              Ecommerce website design and development covers all the activities
              aimed at the creation, maintenance, and evolution of a web store.
              <br className="hidden sm:block" />
              Team up with CodeVyasa to find all the competencies needed for
              your ecommerce project success under one roof.
            </p>

            <div  className="flex flex-wrap mt-10 place-content-center palce-items-center lg:px-28">
              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img className="h-10 w-10 mx-2" src={aws} alt="react-image" />
                <p>AWS</p>
              </div>

              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img
                  className="h-10 w-10 mx-2"
                  src={drupal}
                  alt="react-image"
                />
                <p>Drupal</p>
              </div>

              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img
                  className="h-10 w-10 mx-2"
                  src={kentico}
                  alt="react-image"
                />
                <p>Kentico</p>
              </div>

              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img
                  className="h-10 w-10 mx-2"
                  src={magento}
                  alt="react-image"
                />
                <p>Magento</p>
              </div>

              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img
                  className="h-10 w-10 mx-2"
                  src={opencart}
                  alt="react-image"
                />
                <p>Opencart</p>
              </div>

              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img
                  className="h-10 w-10 mx-2"
                  src={sharepoint}
                  alt="react-image"
                />
                <p>SharePoint</p>
              </div>

              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img
                  className="h-10 w-10 mx-2"
                  src={shopify}
                  alt="react-image"
                />
                <p>Shopify</p>
              </div>

              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img
                  className="h-10 w-10 mx-2"
                  src={sitecore}
                  alt="react-image"
                />
                <p>Sitecore</p>
              </div>

              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img
                  className="h-10 w-10 mx-2"
                  src={sitefinity}
                  alt="react-image"
                />
                <p>Sitefinity</p>
              </div>

              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img
                  className="h-10 w-10 mx-2"
                  src={umbraco}
                  alt="react-image"
                />
                <p>Umbraco</p>
              </div>

              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img className="h-10 w-10 mx-2" src={vtex} alt="react-image" />
                <p>VTEX</p>
              </div>

              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img
                  className="h-10 w-10 mx-2"
                  src={woocommerce}
                  alt="react-image"
                />
                <p>Woocommerce</p>
              </div>

              <div className="flex place-content-center place-items-center border-2 shadow-lg px-3 py-1 rounded-md m-3">
                <img
                  className="h-10 w-10 mx-2"
                  src={wordpress}
                  alt="react-image"
                />
                <p>WordPress</p>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          {" "}
          <NotFound />{" "}
        </>
      );
    }
  }

  return (
    <div>
      <Showdata />
      <div id="contact">
        <BookNow />
      </div>
    </div>
  );
}

export default MyEngineering;
