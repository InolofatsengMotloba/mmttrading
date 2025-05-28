import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

export default function TeamSection() {
  return (
    <section className="bg-[#1c1c1c] text-white py-14 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-yellow-300/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title - Consistent with other sections */}
        <div className="text-center mb-16">
          {/* Main Title - consistent gradient treatment */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Our Founders
            </span>
          </h2>

          {/* Divider - similar style but slightly different implementation */}
          <div className="flex items-center justify-center max-w-2xl mx-auto space-x-4 mb-4">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-yellow-400/50"></div>
            <span className="text-lg text-gray-300 italic whitespace-nowrap">
              Leadership & Innovation
            </span>
            <div className="flex-grow h-px bg-gradient-to-r from-yellow-400/50 via-yellow-400/50 to-transparent"></div>
          </div>

          {/* Description - matching text style */}
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto text-base md:text-lg">
            The passionate women who bring
            <span className="text-yellow-400 font-medium">
              {" "}
              creative vision
            </span>{" "}
            and
            <span className="text-yellow-400 font-medium">
              {" "}
              strategic excellence
            </span>{" "}
            to Mangemahle Trading
          </p>
        </div>

        {/* Creative Founder Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
          {/* Founder 1 */}
          <div className="relative group max-w-md">
            {/* Image with creative border */}
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-transparent group-hover:border-yellow-400 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src="/images/employee.jpg"
                alt="Vuyelwa Hesewu"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                priority
                height={30}
                width={30}
              />
            </div>

            {/* Quote with decorative icon */}
            <div className="relative px-6 py-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
              <FaQuoteLeft className="absolute -top-3 -left-3 text-yellow-400/30 text-4xl" />
              <p className="italic text-gray-300 relative z-10">
                "Vuyelwa's unwavering creativity and attention to detail have
                shaped our brand's foundation. She brings a calming, insightful
                presence to the team."
              </p>
            </div>

            {/* Name and title */}
            <div className="text-center mt-6">
              <h3 className="text-white font-semibold text-xl">
                Vuyelwa Hesewu
              </h3>
              <span className="text-yellow-400 text-sm font-medium">
                Co-Founder & Creative Director
              </span>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="relative group max-w-md">
            {/* Initial with creative background */}
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-yellow-400 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
              <span className="text-yellow-400 text-6xl font-bold">B</span>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full opacity-100"></div>
            </div>

            {/* Quote with decorative icon */}
            <div className="relative px-6 py-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
              <FaQuoteLeft className="absolute -top-3 -left-3 text-yellow-400/30 text-4xl" />
              <p className="italic text-gray-300 relative z-10">
                "Bongelwa's strategic insight and care for community continue to
                inspire our team and grow our reach."
              </p>
            </div>

            {/* Name and title */}
            <div className="text-center mt-6">
              <h3 className="text-white font-semibold text-xl">
                Bongelwa Patricia Ntsonge
              </h3>
              <span className="text-yellow-400 text-sm font-medium">
                Co-Founder & Operations Director
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2b2b2b]/30 to-[#1c1c1c] pointer-events-none" />
    </section>
  );
}
