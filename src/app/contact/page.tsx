"use client";

import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Contact() {
  const no_wa = "6281586571234";
  const text_color = "#BB985E";
  const openMaps = () => {
    window.open("https://maps.app.goo.gl/SnreWWyNtGTdgs4X9", "_blank");
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
      <main className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between p-3 lg:p-18 sm:p-14">
        <section>
          <div className="w-full wrapper pb-7 space-y-6">
            <section className="space-y-6 text-sm sm:text-base px-6">
              <div className="flex gap-x-4 items-center">
                {/* <font-awesome-icon :icon="['far', 'envelope']" className="!h-8"/> */}
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="!w-12 !h-10"
                  color="#BB985E"
                />
                <div>
                  <div className="text-tetra-alt md:text-2xl text-xl font-semibold">
                    Address
                  </div>
                  <a
                    href="https://maps.app.goo.gl/iUXMuyNvvt76v5nM9"
                    target="_blank"
                    rel="noopener"
                  >
                    <div className="hover:underline font-normal text-base lg:text-lg text-tetra">
                      Sudirman 7.8 Tower Level 16 Unit 182
                      <br />
                      Jl. Jend. Sudirman Kav. 7-8 <br />
                      Kel. Karet Tengsin, Kec. Tanah Abang,
                      <br />
                      Jakarta Pusat, DKI Jakarta - Indonesia
                      <br />
                      10220
                    </div>
                  </a>
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
                    href={"https://wa.me/" + no_wa}
                    target="_blank"
                    rel="noopener"
                  >
                    <div className="hover:underline font-normal text-base lg:text-lg text-tetra">
                      {"+" + no_wa}
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex gap-x-4 items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="!w-12 !h-10"
                  color="#BB985E"
                />
                <div>
                  <div className="text-tetra-alt  md:text-2xl text-xl font-semibold">
                    Email
                  </div>
                  <a href="mailto:admin@tetralogistic.com">
                    <div className="hover:underline font-normal text-base lg:text-lg text-tetra">
                      admin@tetralogistik.com
                    </div>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section>
          <div className="" data-aos="fade-in" data-aos-duration="1000">
            <iframe
              className="w-full h-72 sm:h-96 lg:h-[500px]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.67173531245!2d106.8202529!3d-6.208477!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4031fe69b99%3A0x4987961ef4203d98!2sSudirman%207.8!5e0!3m2!1sen!2sid!4v1725127904923!5m2!1sen!2sid"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}
