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
        {/* <div className="absolute inset-0 bg-gradient-to-b from-tetra to-tetra-alt opacity-70"></div> */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/img/about.png')",
            backgroundSize: "cover", // Adjusts the image to cover the div
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat" // Prevents image repetition
          }}
        ></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Section */}
          <div className="text-start lg:text-end text-3xl md:text-5xl font-bold text-white lg:order-2 space-y-6 ">
            <div>
              <span className="bg-gradient-to-tl from-tetra to-tetra/80 bg-clip-text text-transparent">
                Years of Expertise
              </span>
              <span className="block">
                Wrapped in E2E Supply Chain and Logistic Management Service
              </span>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative text-white text-lg lg:text-xl max-sm:text-sm leading-relaxed space-y-8 lg:order-1 text-justify">
            <div>
            Tetra Mitra Logistic is an{" "}
                  <b>
                    end-to-end logistic service company founded by a group of
                    experienced supply chain experts
                  </b>
                  . In such short span of time, our high-performing team{" "}
                  <b>have managed logistics to more than 20 countries</b> -
                  shipping cargo from the farthest east to the west of the world
                  and{" "}
                  <b>
                    delivering more than 1.000 units of cargo for virtually all
                    industry lines operating globally
                  </b>
                  .
            </div>
            <div className="mt-4 mb-2">
            We work with our clients to{" "}
                  <b>
                    navigate the increasing complexity and interconnectivity of
                    the supply chain
                  </b>{" "}
                  sectors, improve their <b>operation excellence</b>, expand
                  their <b>business reach</b>{" "}
                  efficiently <b>through logistics advancement</b>, with deep
                  understanding of governance's custom process, while still
                  adhering to comply the regulation.
            </div>
            <div className="mt-4 mb-2 text-tetra font-semibold">
              We are powered by our dedicated experts, vast network of trusted delivery partners, and driven by our vision and mission.
            </div>
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
        <div className="text-tetra-alt text-lg max-sm:text-sm leading-relaxed space-y-6 text-justify">
          <p>
            Having delved in the industry for a long time, our founding partners
            and teams are more than familiar with the complexity and variety
            of the supply chain industry. Throughout those years, we have
            expanded our network with numerous leading freight companies and
            developed a good understanding with the custom authorities.
          </p>
          <p className="font-semibold text-tetra">
            {/* Our consistency and notable due diligence earns us a strong
            credibility with all parties involved in the shipping process. Our
            integral connection and involvement in the industry enable us to
            bring forth trailblazing solutions. */}
            Our understanding of custom governance, regulation, and notable compliance  earns us a strong credibility with all parties involved in the shipping process.
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
          <div className="text-lg max-sm:text-sm leading-relaxed space-y-6 text-justify">
            <p>
              We love to learn about what makes each of our clients unique. From
              shipping to and from countries unheard of, to delivering cargo
              restricted in most places, our clients vary in nature and business
              goals. When partnering with us, our team will cultivate a
              mutualistic relationship with you to understand more of what makes
              your business different; you bring your business 
              distinctness and challenges, while we tailor customized solutions 
              to match your unique supply chain requirements.
            </p>
          </div>
          {/* Right Section */}
          <div className="text-lg max-sm:text-sm leading-relaxed space-y-6 text-justify justify-start">
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
      <section
        className="relative overflow-hidden py-24 px-8 lg:px-24 bg-gradient-to-b from-blue-50 to-gray-100"
        id="vision&mission"
      >
        {/* Animated Background Shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-tr from-tetra-alt to-tetra rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-bl from-tetra to-tetra-alt rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-2000"></div>

        {/* Title */}
        <div
          className="text-center text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-tetra to-tetra-alt sm:pb-16 drop-shadow-lg"
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
            <p className="max-sm:text-sm text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
              To be the most trusted and innovative logistics partner, transforming the way businesses connect with global markets through seamless and efficient transportation solutions.
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
            <p className="max-sm:text-sm text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
              Support your business with the best-reliable services and cultivate a partnership that thrives for the long haul.
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
            <div className="md:text-xl text-base font-medium text-tetra-alt py-2 pt-6 text-justify">
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
