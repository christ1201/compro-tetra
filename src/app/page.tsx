"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxes,
  faBusinessTime,
  faTruck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./page.module.css";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
import Link from "next/link";
import { services } from "@/data/services";

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      // easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  const marqueeData = [
    { id: 1, text: "PT. Indah Bersama Tbk.", logo: "/img/logo.jpeg" },
    { id: 2, text: "PT. Harmoni Nusantara", logo: "/img/logo.jpeg" },
    { id: 3, text: "PT. Sejahtera Mandiri", logo: "/img/logo.jpeg" },
    { id: 4, text: "PT. Bersama Kita", logo: "/img/logo.jpeg" },
  ];

  const loopedData = [...marqueeData, ...marqueeData];
  const no_wa = "628123456789";

  return (
    <div className="bg-white">
      {/* Navbar with animation */}
      <div
        className={`fixed top-0 left-0 w-full z-[100] transition-transform duration-500 ease-in-out ${
          showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <Navbar />
      </div>

      {/* Video Section */}
      <div className="relative flex min-h-screen flex-col justify-between">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-screen object-cover"
          onContextMenu={(e) => e.preventDefault()}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noplaybackrate"
        >
          <source src="vid/tetra.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 z-[1]"></div>
        {/* Centered Text */}
        <div className="absolute w-full h-full flex flex-col items-center justify-end px-16 pb-32">
          <h1 className="text-white text-4xl sm:text-6xl font-bold text-center drop-shadow-2xl">
            Driving Global Connections,
            <br />
            Delivering Excellence.
          </h1>
        </div>
      </div>

      {/* New Container After the Video */}
      <div className="min-h-[480px] flex p-8 md:p-20">
        <div className="space-y-8 flex flex-col min-w-full">
          <div
            className="flex flex-col md:flex-row md:space-x-10"
            data-aos="fade-left"
          >
            <img
              className="h-[320px] w-auto object-contain max-md:pb-8"
              src="/img/logo.png"
              alt="Logo"
            />
            <div className="flex flex-col justify-between">
              <div
                className="text-tetra-alt text-3xl sm:text-4xl font-bold max-sm:text-center"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Trusted Hands to Ship Your Goods, Wherever They Need to be.
              </div>
              <div className="text-tetra-alt pb-4 max-sm:text-center text-xl pt-4">
                <div>
                  <b className="text-2xl">Tetra Mitra Logistic</b> is an end-to-end logistic service
                  company with clients across the globe and ranging in size,
                  what unites them is their trust and satisfaction in how our
                  services simplify and assist them with their supply chain
                  needs.
                </div>
                <div className="mt-4 mb-2">
                  We work with our clients to navigate the increasing complexity
                  and interconnectivy of the supply chain sectors, improve their
                  operation excellence, effectively expand their business reach
                  with efficiency, all while also comply with the latest
                  regulations and legislation.
                </div>
              </div>
              <a href="/contact">
                <div className="flex max-sm:items-center max-sm:justify-center">
                  <button className="bg-tetra max-w-40 min-w-40 min-h-14 rounded-lg hover:bg-opacity-90">
                    <span className="text-white font-semibold text-xl">
                      Contact Us
                    </span>
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-8 md:px-20">
        {/* <div className="h-auto flex items-center justify-center bg-gray-50 p-4">
          <div className="border-4 border-tetra-alt rounded-xl p-6 w-full max-w-5xl relative">
            <div className="text-center text-2xl font-bold text-gray-700 mb-4">
              2nd degree:{" "}
              <span className="text-tetra">
                Tetra Mitra Logistic Operations*
              </span>
            </div>
            <div className="border-2 border-tetra-alt rounded-xl p-6 max-w-3xl mx-auto relative">
              <div className="text-center text-xl font-bold text-gray-700 mb-4">
                1st degree:{" "}
                <span className="text-tetra">
                  Tetra Mitra Logistic Solutions*
                </span>
              </div>
              <div className="border border-tetra-alt rounded-xl p-6 max-w-xl mx-auto">
                <div className="text-center text-lg font-semibold text-gray-700">
                  0th degree: Your business needs
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="h-auto flex items-center justify-center bg-gray-50 lg:p-24 p-8 relative flex-col">
          <div className="z-10  text-3xl sm:text-4xl font-bold pb-6 text-start">
          Learn How Our Degree of Services Can Assist You to do All of These,
          Hassle-free, Safely, and Efficiently
        </div>
          <img
            src="/img/container.png"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            alt="Background"
          />
          <div className="border-4 border-tetra-alt rounded-xl p-6 w-full max-w-5xl relative shadow-lg">
            <div className="text-start text-2xl font-bold text-gray-700 mb-4">
              <FontAwesomeIcon icon={faTruck} className="text-tetra mr-2" />
              2nd degree:{" "}
              <span className="text-tetra">
                Tetra Mitra Logistic Operations*
              </span>
            </div>
            <div className="border-2 border-tetra-alt rounded-xl p-6 max-w-3xl mx-auto relative">
              <div className="text-start text-xl font-bold text-gray-700 mb-4">
                <FontAwesomeIcon
                  icon={faBoxes}
                  className="text-tetra mr-2"
                />
                1st degree:{" "}
                <span className="text-tetra">
                  Tetra Mitra Logistic Solutions*
                </span>
              </div>
              <div className="border border-tetra-alt rounded-xl p-6 max-w-xl mx-auto">
                <div className="text-start text-lg font-semibold text-gray-700">
                  <FontAwesomeIcon
                    icon={faBusinessTime}
                    className="text-tetra mr-2"
                  />
                  0th degree:{" "}
                  <span className="text-tetra-alt">Your business needs</span>
                </div>
              </div>
            </div>
          </div>
          <div className="font-bold text-xl mt-4"><span className="text-red-600">*</span>Our Solutions and Operations Service are also available independently</div>
      </div> */}
         <div className="flex flex-col items-center justify-center py-12 bg-gradient-to-t from-tetra to-tetra-alt">
      {/* <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Explore Our Services: Hassle-Free, Safe, and Efficient
      </h1> */}
      <h1 className="text-4xl font-bold text-white mb-8 text-start lg:px-24 px-8">
        Learn How Our Degree of Services Can Assist You to do All of These, Hassle-free, Safely, and Efficiently
      </h1>
    

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl px-6">
        {/* 2nd Degree */}
        <div className="rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 p-6 text-center max-md:order-3">
          <FontAwesomeIcon icon={faTruck} className="text-green-600 text-4xl mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">
            2nd Degree: <span className="text-green-600">Tetra Mitra Logistic Operations*</span>
          </h2>
        </div>
        
        {/* 1st Degree */}
        <div className="rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 p-6 text-center max-md:order-2">
          <FontAwesomeIcon icon={faBoxes} className="text-yellow-600 text-4xl mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">
            1st Degree: <span className="text-yellow-600">Tetra Mitra Logistic Solutions*</span>
          </h2>
        </div>

        {/* 0th Degree */}
        <div className="rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 p-6 text-center max-md:order-1">
          <FontAwesomeIcon icon={faBusinessTime} className="text-red-600 text-4xl mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">
            0th Degree: <span className="text-red-600">Your Business Needs</span>
          </h2>
        </div>
      </div>

      <p className="text-center mt-10 text-red-900 font-semibold px-4">
        * Our Solutions and Operations Services are also available independently
      </p>
    </div>
      {/* Services Section with Parallax Effect */}
      <div
        className={`${styles.parallax} min-h-screen flex flex-col p-8 md:p-20`}
      >
        <div
          className="text-white text-4xl sm:text-5xl font-bold text-center pb-16"
          data-aos="fade-up"
        >
          Our Core Services
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-24"
          data-aos="fade-up"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-center p-6 pb-8 rounded-lg relative shadow-md hover:scale-105 transition-all"
            >
              <Link href={service.ref}>
                <div className="rounded-full bg-tetra-alt w-24 h-24 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -top-12">
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="!w-12 !h-12"
                    color="#BB985E"
                  />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-tetra-alt pt-12 pb-4">
                  {service.title}
                </div>
                <div className="text-tetra-alt text-start px-6">
                  {service.description}
                </div>
                {service.option
                  ? service.option.map((option, index) => (
                      <ul key={index} className="list-disc text-start px-8">
                        <li>{option}</li>
                      </ul>
                    ))
                  : ""}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Title Section */}
      <div className="bg-white flex flex-col p-8 md:p-20" data-aos="fade-right">
        <div className="flex flex-col text-tetra-alt text-4xl sm:text-5xl font-bold">
          Customer Satisfaction at Its Best:{" "}
          <a className="text-tetra">Our Valued Clients</a>
        </div>
        {/* Marquee Section */}
        <div className={`${styles.marqueeContainer} bg-white max-h-[35vh] p-6`}>
          <div className={styles.marqueeContent}>
            {loopedData.map((item) => (
              <div key={item.id} className={styles.card}>
                <img
                  className="object-contain"
                  src={item.logo}
                  alt={item.text}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Connect Section */}
      <div className="bg-white min-h-[60vh] flex flex-col p-8 md:p-20 text-center items-center">
        <div
          className="max-w-2xl flex flex-col items-center space-y-6"
          data-aos="fade-down"
          data-aos-easing="ease-out"
          data-aos-duration="1000"
        >
          <div className="rounded-full bg-tetra-alt w-24 h-24 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faUsers}
              className="!w-12 !h-12"
              color="#BB985E"
            />
          </div>
          <div className="flex flex-col text-tetra-alt text-4xl sm:text-5xl font-bold">
            Partner with Our Team – We’re Here to Elevate Your Success!
          </div>
          <div className="text-tetra-alt">
            Partner with our dedicated team for expert insights and customized
            solutions.
            <br />
            We’re here to support you at every stage of your journey.
          </div>
          <div className="">
            <a href="/contact">
              <div className="flex max-sm:items-center max-sm:justify-center">
                <button className="bg-tetra max-w-40 min-w-40 min-h-14 rounded-lg hover:bg-opacity-90">
                  <span className="text-white font-semibold text-xl">
                    Contact Us
                  </span>
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
