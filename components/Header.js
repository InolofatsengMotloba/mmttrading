"use client";

import React, { useState, useEffect } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-lg shadow-2xl py-0"
          : "bg-transparent py-0"
      }`}
    >
      <div className="container mx-auto px-16">
        {/* Top Bar */}
        <div
          className={`border-b border-white/10 transition-all duration-300 ${
            isScrolled
              ? "opacity-0 h-0 py-0 overflow-hidden"
              : "opacity-100 py-2"
          }`}
        >
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <FaPhone className="text-yellow-400" size={12} />
                <span>078 724 4418</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-yellow-400" size={12} />
                <span>mmttrading8@gmail.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 text-gray-300">
              <FaMapMarkerAlt className="text-yellow-400" size={12} />
              <span>Northcrest, Mthatha, Eastern Cape</span>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <nav
          className={`transition-all duration-300 ${
            isScrolled ? "py-2" : "py-4"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/images/MMTLOGO2.png"
                alt="Mangemahle Trading Logo"
                className={`rounded-xl object-contain transition-all duration-300 ${
                  isScrolled ? "w-16 h-16" : "w-24 h-24"
                }`}
              />
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`text-white hover:text-yellow-400 font-medium transition-colors duration-300 relative group ${
                    isScrolled ? "text-base" : "text-lg"
                  }`}
                >
                  {item}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                className={`bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 ${
                  isScrolled ? "px-3 py-1.5 text-sm" : "px-4 py-2"
                }`}
              >
                Get Quote
                <FaArrowRight size={12} />
              </button>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden flex items-center justify-center text-white hover:bg-yellow-400/30 transition-colors ${
                isScrolled ? "w-8 h-8" : "w-10 h-10"
              } bg-yellow-400/20 rounded-lg`}
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {["Home", "About", "Services", "Portfolio", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-white hover:text-yellow-400 font-medium transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-lg font-semibold w-full">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
