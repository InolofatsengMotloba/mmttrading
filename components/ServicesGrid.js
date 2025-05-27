import React from "react";
import {
  FiPrinter,
  FiPenTool,
  FiFeather,
  FiCamera,
  FiLayers,
  FiMonitor,
  FiTruck,
  FiGift,
  FiAward,
} from "react-icons/fi";
import { GiRolledCloth } from "react-icons/gi";
import { FaArrowRight, FaStar } from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Business Cards",
    description:
      "Premium business cards that make lasting first impressions with elegant design and superior quality materials.",
    tagline: "Your first impression matters",
    icon: FiPrinter,
  },
  {
    id: 2,
    title: "Promotional Banners",
    description:
      "Eye-catching banners and signage that command attention and effectively communicate your brand message.",
    tagline: "Stand out from the crowd",
    icon: FiPenTool,
  },
  {
    id: 3,
    title: "Clothing Branding",
    description:
      "Custom embroidery and printing on apparel that transforms clothing into powerful brand ambassadors.",
    tagline: "Wear your brand with pride",
    icon: GiRolledCloth,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden ">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-yellow-400/5"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-yellow-300/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Services Section Header - Enhanced Version */}
        <div className="text-center mb-12">
          {/* Main Section Title - More Dominant */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>

          {/* Subheading with Visual Divider */}
          <div className="flex items-center justify-center max-w-2xl mx-auto space-x-4">
            {/* Left divider */}
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-yellow-400/50"></div>

            {/* Text */}
            <span className="text-lg text-gray-300 italic whitespace-nowrap">
              Premium Branding Solutions
            </span>

            {/* Right divider */}
            <div className="flex-grow h-px bg-gradient-to-r from-yellow-400/50 via-yellow-400/50 to-transparent"></div>
          </div>

          {/* Descriptive Paragraph */}
          <p className="mt-6 text-gray-300 leading-relaxed max-w-3xl mx-auto text-base md:text-lg">
            We specialize in{" "}
            <span className="text-yellow-400 font-medium">
              high-impact visual solutions
            </span>{" "}
            that elevate your brand presence. From corporate identity to
            large-format printing, each service is crafted to
            <span className="text-yellow-400 font-medium">
              {" "}
              maximize your brand's potential
            </span>
            .
          </p>
        </div>

        {/* Services Grid - Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 px-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <div
                key={service.id}
                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 hover:border-yellow-400/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className="relative mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-yellow-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-3 border-t border-white/10">
                    <p className="text-yellow-400 font-medium italic text-xs mb-2">
                      "{service.tagline}"
                    </p>

                    <button className="group/btn flex items-center gap-1 text-white hover:text-yellow-400 text-sm font-medium transition-all">
                      <span>Learn more</span>
                      <FaArrowRight
                        size={12}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact CTA Section */}
        <div className="text-center space-y-6">
          {/* <div className="flex justify-center items-center gap-8 mb-6">
            {[
              { number: "500+", label: "Clients" },
              { number: "1000+", label: "Projects" },
              { number: "24/7", label: "Support" },
            ].map(({ number, label }) => (
              <div key={label} className="text-center">
                <div className="text-xl font-bold text-yellow-400">
                  {number}
                </div>
                <div className="text-gray-400 text-xs">{label}</div>
              </div>
            ))}
          </div> */}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/services">
              <button className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:scale-[1.02] transition-all flex items-center gap-2">
                Explore Services
                <FaArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={12}
                />
              </button>
            </Link>

            <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-white/20 transition-all flex items-center gap-2">
              <span className="text-yellow-400 text-xs">💬</span>
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
