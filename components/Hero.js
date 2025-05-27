import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
          <Image
            src="/images/BG1.jpg"
            alt="Mangemahle Backdrop"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/10 via-transparent to-transparent"></div>
      </div>

      {/* Header */}

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-24 px-10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-white">Transform Your</span>
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                  Brand Vision
                </span>
                <br />
                <span className="text-white">Into Reality</span>
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed">
                Elevate your business with our cutting-edge digital printing,
                professional branding, and innovative design solutions. From
                business cards to vehicle wraps, we deliver
                <span className="text-yellow-400 font-semibold">
                  {" "}
                  exceptional quality
                </span>{" "}
                that makes your brand unforgettable.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 my-8">
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "5+", label: "Years Experience" },
              ].map(({ number, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">
                    {number}
                  </div>
                  <div className="text-gray-300 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
