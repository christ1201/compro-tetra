// components/Footer.js
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
    <footer className="bg-tetra-alt px-8 md:px-24">
      <div className="grid md:grid-cols-3 container py-6 gap-y-4 gap-x-6 text-xs md:text-sm text-white">
        {/* Address Section */}
        <div className="space-y-4">
          <section className="space-y-2">
            <div className="text-tetra font-semibold text-xl">
              Address
            </div>
            <div className="flex gap-x-2">
              <FontAwesomeIcon icon={faLocationDot} className="!h-5" style={{ color: '#BB985E' }} />
              <Link href="https://maps.app.goo.gl/" target="_blank" rel="noopener">
                <div className="flex-col font-normal hover:underline text-md">
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam arcu, gravida laoreet nisi vel, rutrum tempor justo.
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
            <div className="flex gap-x-2">
              <FontAwesomeIcon icon={faEnvelope} className="!h-5" style={{ color: '#BB985E' }} />
              <div className="flex-col font-normal hover:underline text-md">
                <p>tetra.logistic@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-x-2">
              <FontAwesomeIcon icon={faWhatsapp} className="!h-6" style={{ color: '#BB985E' }} />
              <Link href="https://wa.me/" target="_blank" rel="noopener">
                <div className="flex-col font-normal hover:underline text-md">
                  <p>+62 812 3456 789</p>
                </div>
              </Link>
            </div>
          </section>
        </div>
        {/* Services Section */}
        <div className="space-y-2">
          <div className="text-tetra font-semibold text-xl">Services</div>
          <div className="flex flex-col space-y-3">
            <Link href="/services/#">
              <div className="text-md flex-col font-base hover:underline">
                <p>Custom Consultation</p>
              </div>
            </Link>
            <Link href="/services/#">
              <div className="text-md flex-col font-base hover:underline">
                <p>International Freight Forwarding</p>
              </div>
            </Link>
            <Link href="/services/#">
              <div className="text-md flex-col font-base hover:underline">
                <p>Domestic Interisland</p>
              </div>
            </Link>
            <Link href="/services/#">
              <div className="text-md flex-col font-base hover:underline">
                <p>Domestic Interisland</p>
              </div>
            </Link>
          </div>
        </div>
        {/* About Section */}
        <div className="space-y-2">
          <div className="text-tetra font-semibold text-xl">About</div>
          <div className="flex flex-col space-y-3">
            <Link href="/about/#">
              <div className="text-md flex-col font-base hover:underline">
                <p>Company</p>
              </div>
            </Link>
            <Link href="/about/#">
              <div className="text-md flex-col font-base hover:underline md:pb-16">
                <p>Vision & Mission</p>
              </div>
            </Link>
            <div className="bg-tetra-alt text-tetra text-base p-1 border-tetra border-t">
            Copyright © 2024 PT Tetra Mitra Logistic
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* <div className="bg-tetra-alt text-tetra text-center text-base p-1 border-tetra border-t">© 2024 Copyright Tetra Logistic</div> */}
    </>
  );
};

export default Footer;
