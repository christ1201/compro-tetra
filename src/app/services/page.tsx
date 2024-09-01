"use client";

import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from './page.module.css';
import Footer from "@/components/Footer";
import { services } from "@/data/services";

export default function Services() {

  return (
    <div className="bg-white">
      <Navbar />
      <div
        className="bg-cover bg-center h-auto w-full relative"
        style={{ backgroundImage: "url(/img/container.png)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-1">
          <div className="text-3xl sm:text-4xl md:text-5xl text-center pt-8 sm:pt-12 md:pt-16 text-white font-bold">
            Our Services
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 justify-center">
            {services.map((service, index) => (
              <div key={index} className="text-center p-8 sm:p-12 md:p-16 hover:scale-110 transition-all">
                <Link href={service.id} >
                  <div className="rounded-full bg-tetra-alt w-20 sm:w-22 md:w-24 h-20 sm:h-22 md:h-24 flex items-center justify-center mx-auto">
                    <FontAwesomeIcon
                      icon={service.icon}
                      className="!w-8 !h-8 sm:!w-10 sm:!h-10 md:!w-12 md:!h-12"
                      color="#BB985E"
                    />
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-tetra text-center mt-4">
                    {service.title}
                  </div>                   
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <main className="flex min-h-screen flex-col">
        <section>
          <div className="w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className={`min-h-screen flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center`}
              id={`${service.id.substring(1)}`}
            >
              <div className="md:w-1/2 relative">
                <div
                  className={`${styles.parallax} shadow-lg w-full lg:h-[600px] h-[400px] bg-contain bg-center -z-0 ${
                    index % 2 === 0 ? "rounded-r-full" : "rounded-l-full"
                  }`}
                  style={{
                    backgroundImage: `url(${service.image})`,
                  }}
                />
                {/* <div className="absolute w-3/4 h-1/4 bg-tetra inset-y-[500px] inset-x-[50px] rounded-br-3xl translate-x-6"></div> */}
              </div>
              <div className="md:w-1/2 md:px-8 mt-8 md:mt-0 p-12">
                <h2 className="text-tetra text-4xl font-bold">0{index+1}</h2>
                <h3 className="text-3xl font-bold text-tetra-alt mt-2">
                  {service.title}
                </h3>
                <p className="text-tetra-alt mt-4 text-lg">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
