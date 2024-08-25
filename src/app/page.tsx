"use client"

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

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

  return (
    <div>
      {/* Navbar with animation */}
      <div
        className={`fixed top-0 left-0 w-full z-[100] transition-transform duration-500 ease-in-out ${
          showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'
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
          <h1 className="text-white text-4xl sm:text-6xl font-bold text-center">Connecting Your Business to the World</h1>
        </div>
      </div>  

      {/* New Container After the Video */}
      <div className="bg-white min-h-screen flex p-8 md:p-24">
        <div className="space-y-8 flex flex-col min-w-full">
          <div className="text-tetra-alt text-3xl sm:text-5xl font-bold">Who We Are</div>
          <div className="flex flex-col md:flex-row md:space-x-10">
            <img className="h-[320px] w-auto object-contain" src="/img/logo.jpeg" alt="Logo"/>
            <div className="flex flex-col">
              <div className="text-tetra-alt"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam arcu, gravida laoreet nisi vel, rutrum tempor justo. Cras venenatis eget justo sed fringilla. Maecenas faucibus eu nulla id sagittis. Nam viverra, sem eu pretium scelerisque, magna massa cursus ligula, in pellentesque libero magna in magna. Nullam quis consectetur orci. Sed vel lacus sed diam maximus vestibulum. Integer tortor tellus, sollicitudin ac purus quis, maximus blandit felis. Integer in gravida justo. 
              </div>
              {/* <div>
                test
              </div> */}
            </div>

          </div>

        </div>
        <div className="flex flex-col">
       
        </div>
      </div>
      
      <div className="bg-tetra min-h-screen flex items-center justify-center">
        <div className="text-black text-3xl">Another Container Content</div>
      </div>
    </div>
  );
}
