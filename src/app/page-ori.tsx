"use client"

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faShippingFast, faBoxes, faGlobeAsia, faUsers } from '@fortawesome/free-solid-svg-icons';
import styles from './page.module.css';
import Footer from "@/components/Footer";

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

  const marqueeData = [
    { id: 1, text: "PT. Indah Bersama Tbk.", logo: "/img/logo.jpeg" },
    { id: 2, text: "PT. Harmoni Nusantara", logo: "/img/logo.jpeg" },
    { id: 3, text: "PT. Sejahtera Mandiri", logo: "/img/logo.jpeg" },
    { id: 4, text: "PT. Bersama Kita", logo: "/img/logo.jpeg" },
  ];

  // Duplicate the data to make the marquee seamless
  const loopedData = [...marqueeData, ...marqueeData]; // Duplicating data for seamless loop
  const no_wa = '628123456789'

  const services = [
    {
      icon: faHandshake,
      title: 'Custom Consultation',
      description: 'Unlock the full potential of your supply chain with our Custom Consultation services. At PT Tetra Mitra Logistic, we take the time to understand your unique business needs, offering tailored solutions that streamline your logistics processes. From optimizing routes to reducing costs, our expert consultants are here to guide you every step of the way, ensuring your operations run smoothly and efficiently.'
    },
    {
      icon: faGlobeAsia,
      title: 'International Freight Forwarding',
      description: 'Expand your business horizons with our International Freight Forwarding services. We manage the complexities of global shipping, providing reliable and efficient transportation solutions that connect your products to markets around the world. With a global network of partners and cutting-edge tracking technology, we ensure your cargo arrives safely, on time, and within budget.'
    },
    {
      icon: faBoxes,
      title: 'Customs Clearance',
      description: 'Navigate the complexities of international trade with ease through our Customs Clearance services. Our team of seasoned professionals simplifies the custom clearance process, ensuring your goods comply with all regulations and reach their destination without delays. Trust us to handle the paperwork, so you can focus on what matters most—growing your business.'
    },
    {
      icon: faShippingFast,
      title: 'Domestic Interisland',
      description: 'Seamlessly connect Indonesia’s vast archipelago with our Domestic Interisland services. Whether you need to move goods between islands or within regions, PT Tetra Mitra Logistic offers reliable and cost-effective transportation solutions that ensure your products reach even the most remote locations. From planning to delivery, we provide end-to-end support, making domestic logistics hassle-free.'
    }
  ];

  return (
    <div>
      {/* Navbar with animation */}
      <div
        className={`fixed top-0 left-0 w-full z-[100] transition-transform duration-500 ease-in-out ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'
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
          <h1 className="text-white text-5xl sm:text-6xl font-bold text-center">Driving Global Connections,<br/>Delivering Excellence.</h1>
        </div>
      </div>
      {/* New Container After the Video */}
      <div className="bg-white min-h-[480px] flex p-8 md:p-20">
        <div className="space-y-8 flex flex-col min-w-full">
          <div className="text-tetra-alt text-4xl sm:text-5xl font-bold max-sm:text-center">Who We Are</div>
          <div className="flex flex-col md:flex-row md:space-x-10">
            <img className="h-[320px] w-auto object-contain max-md:pb-8" src="/img/logo.png" alt="Logo" />
            <div className="flex flex-col justify-between">
              <div className="text-tetra-alt pb-4 max-sm:text-center text-xl">
              At PT Tetra Mitra Logistic, we are more than just a logistics provider; we are your strategic partner in delivering seamless and innovative forwarding solutions. With a passion for excellence and a commitment to your success, our experienced team works tirelessly to ensure that your cargo reach their destination safely, efficiently, and on time. We blend cutting-edge technology with personalized service to create tailored logistics solutions that drive your business forward. Trust us to handle your logistics needs so you can focus on what you do best—growing your business. Leveraging advanced technology and a team of experienced professionals, the company ensures seamless operations, timely delivery, and cost-effective logistics solutions that drive business success. Whether it's local or international shipping, PT Tetra Mitra Logistic is your trusted partner in navigating the complexities of the global supply chain.
              </div>
              {/* <div>
                test
              </div> */}
              <a href={"https://wa.me/"+no_wa} target="_blank">
                <div className="flex max-sm:items-center max-sm:justify-center">
                  <button className="bg-tetra max-w-36 min-w-36 min-h-12 rounded-lg hover:bg-opacity-90">
                    <span className="text-white font-semibold text-lg">Contact Us</span>
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Services Section*/}
      <div className="bg-tetra min-h-screen flex flex-col p-8 md:p-20">
        <div className="text-white text-4xl sm:text-5xl font-bold text-center pb-16">
          Our Core Services
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-24">
          {services.map((service, index) => (
            <div key={index} className="bg-white text-center p-6 pb-8 rounded-lg relative shadow-md">
              <div className="rounded-full bg-tetra-alt w-24 h-24 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -top-12">
                <FontAwesomeIcon icon={service.icon} className='!w-12 !h-12' color="#BB985E" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-tetra-alt pt-12 pb-4">
                {service.title}
              </div>
              <div className="text-tetra-alt">
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Marquee Title Section */}
      <div className="bg-white flex flex-col p-8 md:p-20">
        <div className="flex flex-col text-tetra-alt text-4xl sm:text-5xl font-bold ">
          Customer Satisfaction at Its Best: <a className="text-tetra">Our Valued Clients</a>
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
        <div className="max-w-2xl flex flex-col items-center space-y-6">
          <div className="rounded-full bg-tetra-alt w-24 h-24 flex items-center justify-center">
            <FontAwesomeIcon icon={faUsers} className='!w-12 !h-12' color="#BB985E" />
          </div>
          <div className="flex flex-col text-tetra-alt text-4xl sm:text-5xl font-bold">
            Partner with Our Team – We’re Here to Elevate Your Success!
          </div>
          <div className="text-tetra-alt">
          Partner with our dedicated team for expert insights and customized solutions.<br/>We’re here to support you at every stage of your journey.
          </div>
          <div className="">
          <a href={"https://wa.me/"+no_wa} target="_blank">
            <button className="bg-tetra max-w-36 min-w-36 min-h-12 rounded-lg hover:bg-opacity-90">
              <span className="text-white font-semibold text-lg">Contact Us</span>
            </button>
          </a>
          </div>
        </div>
      </div>
      { /*Footer */ }
      <Footer></Footer>
    </div>
  );
}
