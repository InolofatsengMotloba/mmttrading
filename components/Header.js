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
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Get current path

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Services", "Contact"];

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
              {navItems.map((item) => {
                const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                const isActive =
                  pathname === href ||
                  (pathname.startsWith(`/${item.toLowerCase()}`) &&
                    item !== "Home");

                return (
                  <Link
                    key={item}
                    href={href}
                    className={`font-medium relative group transition-colors duration-300 ${
                      isScrolled ? "text-base" : "text-lg"
                    } ${
                      isActive
                        ? "text-yellow-400"
                        : "text-white hover:text-yellow-400"
                    }`}
                  >
                    {item}
                    <div
                      className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></div>
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://wa.me/27787244418?text=Hello%2C%20I'm%20interested%20in%20your%20digital%20branding%20and%20printing%20services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className={`bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 ${
                    isScrolled ? "px-3 py-1.5 text-sm" : "px-4 py-2"
                  }`}
                >
                  Get Quote
                  <FaArrowRight size={12} />
                </button>
              </a>
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
              {[...navItems, "Portfolio"].map((item) => {
                const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                const isActive =
                  pathname === href ||
                  (pathname.startsWith(`/${item.toLowerCase()}`) &&
                    item !== "Home");

                return (
                  <Link
                    key={item}
                    href={href}
                    className={`font-medium transition-colors py-2 ${
                      isActive
                        ? "text-yellow-400"
                        : "text-white hover:text-yellow-400"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                );
              })}
              <a
                href="https://wa.me/27787244418?text=Hello%2C%20I'm%20interested%20in%20your%20digital%20branding%20and%20printing%20services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-lg font-semibold w-full">
                  Get Quote
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
