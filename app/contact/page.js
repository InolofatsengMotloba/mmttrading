"use client";

import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Get In Touch</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FiMapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Address</h3>
                  <p className="text-gray-600">No 77 John Beer Street</p>
                  <p className="text-gray-600">Northcrest, Mthatha</p>
                  <p className="text-gray-600">Eastern Cape</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FiPhone className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-gray-600">078 724 4418</p>
                  <p className="text-gray-600">082 509 4582</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FiMail className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-gray-600">vuvuhesewu2@gmail.com</p>
                  <p className="text-gray-600">mmttrading8@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-1 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg font-medium transition w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">
            Company Auditors/Accountants
          </h2>
          <p className="text-gray-600 mb-2">Kuyasa Registered Auditors</p>
          <p className="text-gray-600 mb-2">House 01, 23 Delville Road</p>
          <p className="text-gray-600 mb-2">Mthatha, Eastern Cape 5099</p>
          <p className="text-gray-600">info@kuyasaauditors.co.za</p>
        </div>
      </div>
    </section>
  );
}
