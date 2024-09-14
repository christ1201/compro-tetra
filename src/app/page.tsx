"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
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
    <div>
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
      <div className="bg-white min-h-[480px] flex p-8 md:p-20">
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
                className="text-tetra-alt text-4xl sm:text-5xl font-bold max-sm:text-center"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Who We Are
              </div>
              <div className="text-tetra-alt pb-4 max-sm:text-center text-xl pt-4">
                <div>
                  At <b>PT Tetra Mitra Logistic</b>, we are more than just a
                  logistics provider; we are your strategic partner in
                  delivering seamless and innovative forwarding solutions. With
                  a passion for excellence and a commitment to your success, our
                  experienced team works tirelessly to ensure that your goods
                  reach their destination safely.
                </div>
                <div className="mt-4 mb-2">
                  We blend cutting-edge technology with personalized service to
                  create tailored logistics solutions that drive your business
                  forward. Trust us to handle your logistics needs so you can
                  focus on what you do best—growing your business. Leveraging
                  advanced technology and a team of experienced professionals,
                  the company ensures seamless operations, timely delivery, and
                  cost-effective logistics solutions that drive business
                  success. Whether it's local or international shipping, PT
                  Tetra Mitra Logistic is your trusted partner in navigating the
                  complexities of the global supply chain.
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
                <div className="text-tetra-alt">{service.description}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Title Section */}
      <div className="bg-white flex flex-col p-8 md:p-20" data-aos="fade-right">
        <div className="flex flex-col text-tetra-alt text-4xl sm:text-5xl font-bold ">
          Customer Satisfaction at Its Best:{" "}
          <a className="text-tetra">Our Valued Clients</a>
        </div>
      </div>

      {/* Marquee Section */}
      <div className={`${styles.marqueeContainer} bg-white max-h-[35vh] p-6`}>
        <div className={styles.marqueeContent}>
          {loopedData.map((item) => (
            <div key={item.id} className={styles.card}>
              <img className="object-contain" src={item.logo} alt={item.text} />
            </div>
          ))}
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
