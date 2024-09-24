"use client";

import { useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

export default function About() {
  const no_wa = "6281586571234";
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      // easing: "ease-in-out", // Animation easing
      // once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="bg-white">
      <Navbar></Navbar>
      <section
        className="relative p-12 lg:p-24 text-tetra-alt"
        id="about_tetra"
        // style={{ backgroundImage: "url('/img/container.png')" }}
        data-aos="fade-zoom-in"
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-tetra to-tetra-alt opacity-70"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Section */}
          <div className="text-start lg:text-end text-3xl md:text-5xl font-bold text-white lg:order-2 space-y-6 ">
            <div>
              {/* <span className="bg-gradient-to-t from-tetra to-tetra-alt bg-clip-text text-transparent">
                A Decade of Expertise
              </span> */}
              <span className="bg-gradient-to-tl from-tetra to-tetra-alt bg-clip-text text-transparent">
                A Decade of Expertise
              </span>
              <span className="block">
                Wrapped in E2E Supply Chain and Logistic Management Service
              </span>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative text-white text-lg lg:text-xl max-sm:text-base leading-relaxed space-y-8 lg:order-1 text-justify">
            <p>
              Tetra Mitra Logistic is an end-to-end logistic service company
              established in 2024 by a group of supply chain experts of more
              than 10 years. We have managed logistics to more than 100
              countries, ship cargo from the farthest east to the farthest west
              of the nation, and delivered more than xxx [units] of various
              cargo in the span of two decades. Throughout those years, we
              learned that our passion for the industry and problem solving have
              naturally positioned us as the top of the supply chain landscape.
            </p>
          </div>
        </div>
      </section>

      <section
        className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-12 lg:p-24"
        id="integrity_innovation"
        data-aos="fade-up"
      >
        {/* Left Section */}
        <div className="text-start text-4xl md:text-5xl font-bold text-tetra-alt lg:pr-12 space-y-6">
          <span className="block">
            Running Our Business With Integrity and Innovation
          </span>
        </div>

        {/* Right Section */}
        <div className="text-tetra-alt text-lg max-sm:text-base leading-relaxed space-y-6 text-justify">
          <p>
            Having delved in the industry for a long time, our founding partners
            and teams are more than familiar with the complexity and advancement
            of the supply chain landscape. Throughout those years, we have
            expanded our network with numerous leading freight companies and
            developed a good understanding with the custom authorities.
          </p>
          <p>
            Our consistency and notable due diligence earns us a strong
            credibility with all parties involved in the shipping process. Our
            integral connection and involvement in the industry enable us to
            bring forth trailblazing solutions.
          </p>
        </div>
      </section>

      <section
        className="relative bg-gradient-to-r from-tetra-alt to-tetra p-12 lg:p-24 text-white"
        id="global_potential"
        data-aos="fade-zoom-in"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Title */}
          <div className="text-center lg:text-left text-4xl md:text-5xl font-bold space-y-6 lg:col-span-2 ">
            Unlocking Our Clients' Global Potential
          </div>

          {/* Left Section */}
          <div className="text-lg leading-relaxed space-y-6 text-justify">
            <p>
              We love to learn about what makes each of our clients unique. From
              shipping to and from countries unheard of, to delivering cargo
              restricted in most places, our clients vary in nature and business
              goals. When partnering with us, our team will cultivate a
              mutualistic relationship with you to understand more of what makes
              your business different; you bring your business landscape
              distinctness and challenges, while we tailor advances and
              possibilities specific for your supply chain needs.
            </p>
          </div>
          {/* Right Section */}
          <div className="text-lg leading-relaxed space-y-6 text-justify justify-start">
            <p>
              As years of experience have taught us, the intricate red tape and
              timing for these advancement and opportunities are best paired
              with the constant collaboration and guidance throughout our
              partnership. When partnering with us, feel empowered and confident
              that your logistics strategy and operations are in good hands at
              all times.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="bg-gray-100 py-8 " id="vision&mission">
        <div
          className="text-center text-4xl md:text-5xl font-bold text-tetra-alt pt-14"
          data-aos="fade-right"
          data-aos-easing="ease-in"
          data-aos-duration="1500"
        >
          Vision & Mission
        </div>
        <div className="flex flex-col p-6 lg:p-14 sm:p-6 md:p-12">
          <div
            className="flex md:flex-row flex-col max-lg:text-center"
            data-aos="fade-right"
            data-aos-easing="ease-in"
            data-aos-duration="1000"
          >
            <div className="pr-5 max-lg:hidden">
              <img src="/img/target.png" className="w-20 lg:h-fit h-16"></img>
            </div>
            <div className="font-bold">
              <div className="w-full flex items-center justify-center lg:hidden pb-4">
                <img src="/img/target.png" className="w-16 lg:h-fit h-16"></img>
              </div>
              <div className="text-tetra text-3xl md:text-4xl">Vision</div>
              <div className="text-tetra-alt text-xl md:text-2xl pt-2">
                "To be the most trusted and innovative logistics partner,
                transforming the way businesses connect with global markets
                through seamless and efficient transportation solutions."
              </div>
            </div>
          </div>
          <div
            className="flex flex-col md:flex-row pt-12 max-lg:text-center w-full"
            data-aos="fade-right"
            data-aos-easing="ease-in"
            data-aos-duration="1000"
          >
            <div className="pr-5 flex max-lg:hidden">
              <img src="/img/idea.png" className="w-24 lg:h-fit h-24"></img>
            </div>
            <div className="flex flex-col font-bold">
              <div className="w-full flex items-center justify-center lg:hidden pb-4">
                <img src="/img/idea.png" className="w-16 lg:h-fit h-16"></img>
              </div>
              <div className="text-tetra text-3xl md:text-4xl">Mission</div>
              <div className="text-tetra-alt text-xl md:text-2xl pt-2">
                “To build long-lasting relationships with our clients by
                offering expert consultation, transparent communication, and
                tailored solutions that align with their unique business needs.”
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section
        className="relative overflow-hidden py-24 px-8 lg:px-24 bg-gradient-to-b from-blue-50 to-gray-100"
        id="vision&mission"
      >
        {/* Animated Background Shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-tr from-tetra-alt to-tetra rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-bl from-tetra to-tetra-alt rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-2000"></div>

        {/* Title */}
        <div
          className="text-center text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-tetra to-tetra-alt pb-16 drop-shadow-lg"
          data-aos="fade-down"
        >
          Vision & Mission
        </div>

        {/* SVG Section Divider */}
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-24 text-gray-100"
          >
            <path
              fill="currentColor"
              d="M0,192L40,202.7C80,213,160,235,240,213.3C320,192,400,128,480,133.3C560,139,640,213,720,213.3C800,213,880,139,960,101.3C1040,64,1120,64,1200,96C1280,128,1360,192,1400,224L1440,256V320H0V192Z"
            ></path>
          </svg>
        </div>

        {/* Vision and Mission Cards */}
        <div className="flex flex-col lg:flex-row justify-center lg:space-x-12 space-y-12 lg:space-y-0">
          {/* Vision Card */}
          <div
            className="relative flex flex-col items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left rounded-3xl shadow-2xl p-12 bg-white/70 backdrop-blur-md hover:bg-white/90 hover:-translate-y-4 transform transition-all duration-700"
            data-aos="fade-up"
          >
            {/* 3D Effect Button */}
            <div className="absolute top-[-40px] left-[50%] lg:left-[10%] transform -translate-x-1/2 lg:-translate-x-0 lg:translate-y-0 rounded-full w-20 h-20 bg-tetra-alt flex items-center justify-center shadow-2xl hover:shadow-tetra transition-all duration-500">
              {/* <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <rect
                  x="9"
                  y="16"
                  width="6"
                  height="6"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <ellipse
                  cx="12"
                  cy="10"
                  rx="6"
                  ry="3"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <line
                  x1="12"
                  y1="4"
                  x2="12"
                  y2="1"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <line
                  x1="7"
                  y1="7"
                  x2="4"
                  y2="4"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <line
                  x1="17"
                  y1="7"
                  x2="20"
                  y2="4"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-tetra mb-6">
              Vision
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
              To be the most trusted and innovative logistics partner,
              transforming the way businesses connect with global markets
              through seamless and efficient transportation solutions.
            </p>
          </div>

          {/* Mission Card */}
          <div
            className="relative flex flex-col items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left rounded-3xl shadow-2xl p-12 bg-white/70 backdrop-blur-md hover:bg-white/90 hover:-translate-y-4 transform transition-all duration-700"
            data-aos="fade-up"
          >
            {/* 3D Effect Button */}
            <div className="absolute top-[-40px] left-[50%] lg:left-[10%] transform -translate-x-1/2 lg:-translate-x-0 lg:translate-y-0 rounded-full w-20 h-20 bg-tetra-alt flex items-center justify-center shadow-2xl hover:shadow-tetra transition-all duration-500">
              {/* <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="6"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="currentColor"
                  stroke-width="2"
                />
                {/* <line x1="12" y1="2" x2="12" y2="8" stroke="currentColor" stroke-width="2" />
          <polygon points="11,2 13,2 12,4" fill="currentColor" /> */}
              </svg>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-tetra mb-6">
              Mission
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
              Empower you with the right services for a resilient, long-lasting,
              and growing supply chain relationship
            </p>
          </div>
        </div>
      </section>

      <section
        className="flex flex-col p-6 lg:p-24 sm:p-14 my-5"
        data-aos="fade-zoom-in"
      >
        <div className="md:text-4xl text-3xl font-bold text-tetra-alt">
          Ready to Elevate Your Logistics Experience?
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div>
            <div className="md:text-xl text-lg font-medium text-tetra-alt py-2 pt-6 text-justify">
              Harness on our connectivity across the industry and around the globe to solve your logistics challenges
            </div>
          </div>
          <div className="h-full w-full flex justify-center items-center">
            <a href="/contact">
              <div className="flex items-center justify-center" data-aos="fade-in">
                <button className="bg-tetra max-w-fit min-w-40 min-h-14 rounded-lg hover:bg-opacity-90 p-2 hover:translate-x-2 transition-transform duration-700">
                  <span className="text-white font-semibold text-xl">
                    Contact Us
                  </span>
                </button>
              </div>
            </a>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
