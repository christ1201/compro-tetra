"use client";

import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Footer from "@/components/Footer";

export default function Contact() {
  const openMaps = () => {
    window.open("https://maps.app.goo.gl/sqtGeqN3VoHgjD8M6", "_blank");
  };

  return (
    <div className="bg-white">
      <Navbar></Navbar>
      <div
        className="bg-black bg-opacity-40 bg-cover bg-center h-40 w-full"
        style={{ backgroundImage: "url(/img/container.png)" }}
      >
        <div className="text-5xl text-center pt-14 text-white font-bold bg-black bg-opacity-30 h-full">
          Contact Us
        </div>
      </div>
      <main className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between p-6 lg:p-18 sm:p-14">
        <section>
          <div className="w-full wrapper pb-7 space-y-6">
            <section className="space-y-6 text-sm sm:text-base px-6">
              <div className="flex gap-x-4 items-center">
                {/* <font-awesome-icon :icon="['far', 'envelope']" className="!h-8"/> */}
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="!w-12 !h-12"
                  color="#BB985E"
                />
                <div>
                  <div className="text-tetra-alt  sm:text-2xl text-xl font-semibold">
                    Address
                  </div>
                  <div className="hover:underline font-normal text-xl">
                    Jalan Kemana saja no. 1, Kebon Jeruk, Jakarta Barat,
                    Indonesia 31313
                  </div>
                </div>
              </div>
              {/* <Separator /> */}
              <div className="flex gap-x-4 items-center">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="!w-12 !h-12"
                  color="#BB985E"
                />
                <div>
                  <div className="text-tetra-alt  sm:text-2xl text-xl font-semibold">
                    Whatsapp
                  </div>
                  <a
                    href="https://wa.me/6282211111111"
                    target="_blank"
                    rel="noopener"
                  >
                    <div className="hover:underline font-normal text-xl">
                      +62 822 1111 1111
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex gap-x-4 items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="!w-12 !h-12"
                  color="#BB985E"
                />
                <div>
                  <div className="text-tetra-alt  sm:text-2xl text-xl font-semibold">
                    Email
                  </div>
                  <a href="mailto:tetra.logistic@gmail.com">
                    <div className="hover:underline font-normal text-xl">
                      tetra.logistic@gmail.com
                    </div>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section>
          <div
            className="flex flex-grow justify-center"
            data-aos="fade-in"
            data-aos-duration="1000"
          >
            <div className="w-full group relative">
              <img
                src="/img/map.png"
                className="w-full h-[400px] md:h-[500px] object-cover object-center"
              />
              <button
                className="opacity-0 h-[400px] md:h-[500px] group-hover:opacity-100 transition-opacity absolute inset-0 bg-black/40 text-white font-bold text-xl"
                onClick={openMaps}
              >
                <p>Buka Maps</p>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}
