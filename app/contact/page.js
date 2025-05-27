"use client";

import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-black via-gray-900 to-black px-8 sm:px-16 text-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-yellow-300/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10 px-4 pt-32">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-yellow-400">Touch</span>
          </h1>
          <div className="flex items-center justify-center max-w-2xl mx-auto space-x-4">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-yellow-400/50"></div>
            <span className="text-gray-300 italic">
              We'd love to hear from you
            </span>
            <div className="flex-grow h-px bg-gradient-to-r from-yellow-400/50 via-yellow-400/50 to-transparent"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-yellow-400">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400/10 p-3 rounded-full">
                  <FiMapPin className="text-yellow-400" size={20} />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-white">Address</h3>
                  <p className="text-gray-300">No 77 John Beer Street</p>
                  <p className="text-gray-300">Northcrest, Mthatha</p>
                  <p className="text-gray-300">Eastern Cape</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-400/10 p-3 rounded-full">
                  <FiPhone className="text-yellow-400" size={20} />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-white">Phone</h3>
                  <p className="text-gray-300">078 724 4418</p>
                  <p className="text-gray-300">082 509 4582</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-400/10 p-3 rounded-full">
                  <FiMail className="text-yellow-400" size={20} />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-white">Email</h3>
                  <p className="text-gray-300">vuvuhesewu2@gmail.com</p>
                  <p className="text-gray-300">mmttrading8@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form / WhatsApp */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-yellow-400">
              Send Us a Message
            </h2>

            <a
              href="https://wa.me/27787244418?text=Hello%2C%20I'm%20interested%20in%20your%20digital%20branding%20and%20printing%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-4 rounded-lg font-medium transition w-full mb-6"
            >
              <FaWhatsapp size={20} />
              Chat with us on WhatsApp
            </a>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Business Hours
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 1:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Auditors Section */}
        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">
            Company Auditors/Accountants
          </h2>
          <p className="text-gray-300 mb-2">Kuyasa Registered Auditors</p>
          <p className="text-gray-300 mb-2">House 01, 23 Delville Road</p>
          <p className="text-gray-300 mb-2">Mthatha, Eastern Cape 5099</p>
          <p className="text-gray-300">info@kuyasaauditors.co.za</p>
        </div>
      </div>
    </section>
  );
}
