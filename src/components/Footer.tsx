// components/Footer.js
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const no_wa = '6281586571234'

  return (
    <>
    <footer className="bg-tetra-alt px-8 md:px-24">
      <div className="grid md:grid-cols-3 container py-6 gap-y-4 gap-x-6 text-xs md:text-sm text-white">
        {/* Address Section */}
        {/* <img className="h-[320px] w-auto object-contain max-md:pb-8" src="/img/logo.png" alt="Logo" /> */}
        <div className="space-y-4">
          <section className="space-y-2">
            <div className="text-tetra font-semibold text-xl">
              Address
            </div>
            <div className="flex gap-x-2">
              <FontAwesomeIcon icon={faLocationDot} className="!h-5" style={{ color: '#BB985E' }} />
              <Link href="https://maps.app.goo.gl/iUXMuyNvvt76v5nM9" target="_blank" rel="noopener">
                <div className="flex-col font-normal hover:underline text-md">
                  <p>
                  Sudirman 7.8 Tower Level 16 Unit 1 & 2<br/>
                  Jl. Jend. Sudirman Kav. 7-8 <br/>
                  Kel. Karet Tengsin, Kec. Tanah Abang,<br/>
                  Jakarta Pusat, DKI Jakarta - Indonesia<br/>
                  10220
                  </p>
                </div>
              </Link>
            </div>
          </section>

          {/* Contact Section */}
          <section className="space-y-2 pb-2">
            <div className="text-tetra font-semibold text-xl">
              Contact
            </div>
            <a href='mailto:sales@tetralogistik.com' target='_blank'>
              <div className="flex gap-x-2 py-2">
                <FontAwesomeIcon icon={faEnvelope} className="!h-5" style={{ color: '#BB985E' }} />
                <div className="flex-col font-normal hover:underline text-md">
                  <p>sales@tetralogistik.com</p>
                </div>
              </div>
            </a>
            <div className="flex gap-x-2">
              <FontAwesomeIcon icon={faWhatsapp} className="!h-6" style={{ color: '#BB985E' }} />
              <Link href={"https://wa.me/"+no_wa} target="_blank" rel="noopener">
                <div className="flex-col font-normal hover:underline text-md">
                  <p>{"+" + no_wa}</p>
                </div>
              </Link>
            </div>
          </section>
        </div>
        {/* Services Section */}
        <div className="space-y-2">
          <div className="text-tetra font-semibold text-xl">Services</div>
          <div className="flex flex-col space-y-3">
          <Link href="/services/#strategy-solutions">
              <div className="text-md flex-col font-base hover:underline">
                <p>Strategy Solutions</p>
              </div>
            </Link>
            <Link href="/services/#operation-solutions">
              <div className="text-md flex-col font-base hover:underline">
                <p>Operation Solutions</p>
              </div>
            </Link> 
            {/* <Link href="/services/#custom-consultation">
              <div className="text-md flex-col font-base hover:underline">
                <p>Custom Consultation</p>
              </div>
            </Link>
            <Link href="/services/#international-freight-forwarding">
              <div className="text-md flex-col font-base hover:underline">
                <p>International Freight Forwarding</p>
              </div>
            </Link>
            <Link href="/services/#custom-clearance">
              <div className="text-md flex-col font-base hover:underline">
                <p>Custom Clearance</p>
              </div>
            </Link>
            <Link href="/services/#domestic-interisland">
              <div className="text-md flex-col font-base hover:underline">
                <p>Domestic Interisland</p>
              </div>
            </Link> */}
          </div>
        </div>
        {/* About Section */}
        <div className="space-y-2">
          <div className="text-tetra font-semibold text-xl">About</div>
          <div className="flex flex-col space-y-3">
            <Link href="/about/#tetra_about">
              <div className="text-md flex-col font-base hover:underline">
                <p>Company</p>
              </div>
            </Link>
            <Link href="/about/#vision&mission">
              <div className="text-md flex-col font-base hover:underline md:pb-16">
                <p>Vision & Mission</p>
              </div>
            </Link>
            {/* <div className="bg-tetra-alt text-tetra text-base p-1 border-tetra border-t">
            Copyright © 2024 PT Tetra Mitra Logistic
            </div> */}
          </div>
        </div>
      </div>
    </footer>
    <div className="bg-tetra text-tetra-alt text-center text-base p-1 border-tetra-alt border-t">
     Copyright © 2024 PT Tetra Mitra Logistic
    </div>
    </>
  );
};

export default Footer;
