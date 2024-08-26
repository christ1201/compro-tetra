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


  const services = [
    {
      icon: faHandshake,
      title: 'Custom Consultation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam arcu, gravida laoreet nisi vel, rutrum tempor justo. Cras venenatis eget justo sed fringilla. Maecenas faucibus eu nulla id sagittis.'
    },
    {
      icon: faGlobeAsia,
      title: 'International Freight Forwarding',
      description: 'Cras venenatis eget justo sed fringilla. Maecenas faucibus eu nulla id sagittis. Integer et orci non urna tempus fermentum. Cras venenatis eget justo sed fringilla. Maecenas faucibus eu nulla id sagittis.'
    },
    {
      icon: faBoxes,
      title: 'Customs Brokerage',
      description: 'Suspendisse potenti. Nullam sit amet turpis quis ligula ultricies eleifend non nec urna. Fusce non velit augue. Cras venenatis eget justo sed fringilla. Maecenas faucibus eu nulla id sagittis.'
    },
    {
      icon: faShippingFast,
      title: 'Domestic Interisland',
      description: 'Pellentesque eget nunc nec velit suscipit vehicula. Curabitur euismod, sem nec venenatis feugiat, augue arcu aliquam leo. Cras venenatis eget justo sed fringilla. Maecenas faucibus eu nulla id sagittis.'
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
          <h1 className="text-white text-5xl sm:text-6xl font-bold text-center">Connecting Your Business to the World</h1>
        </div>
      </div>
      {/* New Container After the Video */}
      <div className="bg-white min-h-[480px] flex p-8 md:p-20">
        <div className="space-y-8 flex flex-col min-w-full">
          <div className="text-tetra-alt text-4xl sm:text-5xl font-bold max-sm:text-center">Who We Are</div>
          <div className="flex flex-col md:flex-row md:space-x-10">
            <img className="h-[320px] w-auto object-contain max-md:pb-8" src="/img/logo.jpeg" alt="Logo" />
            <div className="flex flex-col justify-between">
              <div className="text-tetra-alt pb-4 max-sm:text-center text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam arcu, gravida laoreet nisi vel, rutrum tempor justo. Cras venenatis eget justo sed fringilla. Maecenas faucibus eu nulla id sagittis. Nam viverra, sem eu pretium scelerisque, magna massa cursus ligula, in pellentesque libero magna in magna. Nullam quis consectetur orci. Sed vel lacus sed diam maximus vestibulum. Integer tortor tellus, sollicitudin ac purus quis, maximus blandit felis. Integer in gravida justo.
              </div>
              {/* <div>
                test
              </div> */}
              <div className="flex max-sm:items-center max-sm:justify-center">
                <button className="bg-tetra max-w-36 min-w-36 min-h-12 rounded-lg hover:bg-opacity-90">
                  <span className="text-white font-semibold text-lg">Contact Us</span>
                </button>
              </div>
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
            Connect with Our Team 
            We're Ready to Assist You!
          </div>
          <div className="text-tetra-alt">
            Reach out to our dedicated team for expert assistance and personalized support. We're here to help you every step of the way.
          </div>
          <div className="">
            <button className="bg-tetra max-w-36 min-w-36 min-h-12 rounded-lg hover:bg-opacity-90">
              <span className="text-white font-semibold text-lg">Contact Us</span>
            </button>
          </div>
        </div>
      </div>
      { /*Footer */ }
      <Footer></Footer>
    </div>
  );
}
