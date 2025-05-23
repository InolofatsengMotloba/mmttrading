import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const links = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-56 h-56 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-4 px-3">
            <div className="group">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/MMT2.png"
                  alt="Mangemahle Trading Logo"
                  className="w-10 h-10 rounded-xl transform group-hover:scale-105 transition-transform duration-300 object-contain"
                  height={20}
                  width={20}
                />
                <div>
                  <h2 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Mangemahle Trading
                  </h2>
                  <p className="text-yellow-400 text-xs font-medium">
                    Excellence in Every Print
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-sm mb-6">
                Transforming your vision into stunning reality through
                <span className="text-yellow-400 font-semibold">
                  {" "}
                  innovative digital printing
                </span>{" "}
                and
                <span className="text-yellow-400 font-semibold">
                  {" "}
                  premium branding solutions
                </span>
                .
              </p>

              {/* Social Media */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold text-xs uppercase tracking-wider">
                  Connect With Us
                </h4>
                <div className="flex gap-3">
                  {[
                    {
                      Icon: FaFacebook,
                      color: "hover:bg-blue-600",
                      url: "https://www.facebook.com",
                    },
                    {
                      Icon: FaInstagram,
                      color: "hover:bg-pink-600",
                      url: "https://www.instagram.com",
                    },
                    {
                      Icon: FaTwitter,
                      color: "hover:bg-blue-400",
                      url: "https://twitter.com",
                    },
                    {
                      Icon: FaLinkedin,
                      color: "hover:bg-blue-700",
                      url: "https://www.linkedin.com",
                    },
                  ].map(({ Icon, color, url }, index) => (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative w-7 h-7 bg-gray-800 ${color} rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110`}
                    >
                      <Icon
                        size={14}
                        className="text-gray-300 group-hover:text-white transition-colors"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6 px-3">
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white relative">
                Quick Links
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
              </h3>
              <ul className="space-y-2">
                {links.map(({ label, path }) => (
                  <li key={label}>
                    <Link
                      href={path}
                      className="group flex items-center text-gray-300 hover:text-white transition-all duration-700 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform"></div>
                      <span className="group-hover:translate-x-1 transition-transform">
                        {label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white relative">
                Our Services
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
              </h3>
              <ul className="space-y-2">
                {[
                  "Business Cards",
                  "Promotional Banners",
                  "Clothing Branding",
                  "Vehicle Wraps",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform"></div>
                      <span className="group-hover:translate-x-1 transition-transform">
                        {service}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white relative">
                Get In Touch
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
              </h3>

              <div className="space-y-3">
                {/* Address */}
                <a
                  className="group flex items-start gap-2 p-2 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors w-full max-w-xs"
                  href="https://maps.app.goo.gl/6WEKLBpKbC6UK78c6"
                  target="_blank"
                >
                  <div className="w-7 h-7 bg-yellow-400/20 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaMapMarkerAlt className="text-yellow-400" size={11} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs leading-relaxed break-words">
                      No 77 John Beer Street
                      <br />
                      Northcrest, Mthatha
                      <br />
                      Eastern Cape
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <div className="group flex items-start gap-2 p-2 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors w-full max-w-xs">
                  <div className="w-7 h-7 bg-yellow-400/20 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaPhone className="text-yellow-400" size={11} />
                  </div>
                  <div className="text-xs text-gray-300 leading-snug break-words">
                    <a
                      href="tel:+27787244418"
                      className="block hover:text-yellow-400 transition-colors"
                    >
                      078 724 4418
                    </a>
                    <a
                      href="tel:+27825094582"
                      className="block hover:text-yellow-400 transition-colors"
                    >
                      082 509 4582
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="group flex items-start gap-2 p-2 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors w-full max-w-xs">
                  <div className="w-7 h-7 bg-yellow-400/20 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaEnvelope className="text-yellow-400" size={11} />
                  </div>
                  <div className="text-xs text-gray-300 leading-snug break-all">
                    <a
                      href="mailto:vuvuhesewu2@gmail.com"
                      className="block hover:text-yellow-400 transition-colors"
                    >
                      vuvuhesewu2@gmail.com
                    </a>
                    <a
                      href="mailto:mmttrading8@gmail.com"
                      className="block hover:text-yellow-400 transition-colors"
                    >
                      mmttrading8@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="relative mt-12 pt-6 mx-3">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} Mangemahle Trading. Crafted for
              excellence.
            </p>

            <div className="flex items-center gap-4 text-xs text-gray-400">
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <span className="w-0.5 h-0.5 bg-gray-600 rounded-full"></span>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 opacity-50"></div>
    </footer>
  );
}
