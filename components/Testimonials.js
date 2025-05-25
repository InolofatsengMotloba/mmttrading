import Link from "next/link";

export default function Testimonials() {
  return (
    <section className="bg-[#252525] text-white py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-yellow-300/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 space-y-20 relative z-10">
        {/* Differentiator Section */}
        <div className="text-center space-y-6">
          {/* Main Title - consistent gradient treatment */}
          <h2 className="text-4xl font-bold text-white">
            Why{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>

          {/* Divider - similar style but slightly different implementation */}
          <div className="flex items-center justify-center max-w-2xl mx-auto space-x-4 mb-10">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-yellow-400/50"></div>
            <span className="text-lg text-gray-300 italic whitespace-nowrap">
              Excellence in Innovation
            </span>
            <div className="flex-grow h-px bg-gradient-to-r from-yellow-400/50 via-yellow-400/50 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">
                Empowering Africa
              </h3>
              <p className="text-gray-300">
                100% South African black women-owned business committed to
                building our economy and empowering youth.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">
                Innovation Driven
              </h3>
              <p className="text-gray-300">
                Pioneering smart retail solutions and transforming shopping
                experiences through technology.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">
                Quality Commitment
              </h3>
              <p className="text-gray-300">
                Established reputation for excellence and customer satisfaction
                in every project.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              What{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Partners Say
              </span>
            </h2>
            <div className="flex items-center justify-center max-w-xs mx-auto">
              <div className="flex-grow h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-yellow-400/50"></div>
              <div className="flex-grow h-px bg-gradient-to-r from-yellow-400/50 via-yellow-400/50 to-transparent"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote:
                  "Mangemahle's team brought energy, clarity, and expertise to our branding journey. Their commitment to quality is unmatched.",
                author: "Bertie Norton",
                role: "Marketing Director, Naledi Holdings",
              },
              {
                quote:
                  "A forward-thinking company that delivers real results. We were impressed by their innovation and service delivery.",
                author: "Mike Perry",
                role: "CEO, TechBridge Africa",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-yellow-400/30 transition-all"
              >
                <svg
                  className="w-6 h-6 text-yellow-400/30 mb-3"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-300 italic text-sm mb-4">
                  {testimonial.quote}
                </p>
                <div>
                  <h4 className="text-yellow-400 font-semibold text-base">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-white">
            Let's{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Build Together
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Partner with Mangemahle to transform your brand and be part of our
            journey towards innovation and economic empowerment.
          </p>
          <div className="pt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 px-4 py-2 rounded-lg font-semibold transition-all hover:shadow-md"
            >
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
