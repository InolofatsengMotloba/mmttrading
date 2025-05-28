import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaUsers,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";

export default function About() {
  return (
    <section className="relative py-14 bg-gradient-to-b from-black via-gray-900 to-black px-16 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-yellow-300/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Header */}
        <div className="text-center mb-20 pt-32">
          {/* <span className="inline-block bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-yellow-400/30">
            Our Journey
          </span> */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Mangemahle
            </span>
          </h1>
          <div className="flex items-center justify-center max-w-2xl mx-auto space-x-4">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-yellow-400/50"></div>
            <span className="text-gray-300 italic">
              Where Ideas Come to Life
            </span>
            <div className="flex-grow h-px bg-gradient-to-r from-yellow-400/50 via-yellow-400/50 to-transparent"></div>
          </div>
        </div>

        {/* Founding Story */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20 items-center">
          <div className="lg:w-1/2">
            <div className="relative h-96 rounded-2xl overflow-hidden border-2 border-yellow-400/20 shadow-2xl">
              <img
                src="/images/employee.JPG"
                alt="Mangemahle Trading Founders"
                fill="true"
                className="object-cover"
                priority="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-yellow-400">
                    Our Founders
                  </h3>
                  <p className="text-white">
                    Vuyelwa Hesewu & Bongelwa Patricia Ntsonge
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-yellow-400">
              Founded in 2014
            </h2>
            <p className="text-gray-300 text-lg">
              Mangemahle Trading was established by two visionary women who
              share a passion for entrepreneurship and creativity. From humble
              beginnings, we've grown into a trusted provider of digital
              printing and branding services across South Africa.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <div className="text-yellow-400 mb-2">
                  <FaUsers className="text-2xl" />
                </div>
                <h4 className="font-semibold">6+ Employees</h4>
                <p className="text-gray-400 text-sm">Dedicated team members</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <div className="text-yellow-400 mb-2">
                  <FaMapMarkerAlt className="text-2xl" />
                </div>
                <h4 className="font-semibold">2 Locations</h4>
                <p className="text-gray-400 text-sm">Mthatha & East London</p>
              </div>
            </div>
            <p className="text-gray-300">
              As a 100% South African black women-owned business, we're
              committed to building the economy and creating job opportunities
              across Africa. Our journey has been fueled by innovation, quality
              service, and a dedication to empowering our community.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center text-yellow-400">
                <FaLightbulb className="text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            </div>
            <blockquote className="text-gray-300 italic pl-2 border-l-2 border-yellow-400">
              "To be a leading provider of innovative digital printing and
              branding solutions, empowering businesses and individuals while
              driving social impact through technology and skills development"
            </blockquote>
            <p className="mt-4 text-gray-300">
              We envision setting new industry standards through projects like
              our smart shopping solution while creating opportunities for youth
              and women in tech and design.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center text-yellow-400">
                <FaHandshake className="text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            </div>
            <blockquote className="text-gray-300 italic pl-2 border-l-2 border-yellow-400">
              "To deliver exceptional, customized branding and printing services
              that meet the diverse needs of our clients while empowering young
              people and women through skill development and innovation"
            </blockquote>
            <p className="mt-4 text-gray-300">
              From business cards to vehicle wraps, we combine quality
              craftsmanship with community impact, fostering economic growth and
              reducing unemployment through skills transfer.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our <span className="text-yellow-400">Core Values</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The principles that guide every decision and interaction at
              Mangemahle Trading
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Innovation",
                desc: "We embrace creativity and continuously seek innovative solutions to stay ahead in the industry.",
                icon: <FaLightbulb className="text-yellow-400 text-xl" />,
              },
              {
                name: "Quality Excellence",
                desc: "Uncompromising standards in every product and service we deliver to our clients.",
                icon: (
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                name: "Community Empowerment",
                desc: "Creating opportunities for youth and women through training and skills development.",
                icon: <FaUsers className="text-yellow-400 text-xl" />,
              },
              {
                name: "Customer Centric",
                desc: "Building lasting relationships by putting our clients' needs at the forefront.",
                icon: (
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                ),
              },
              {
                name: "Integrity",
                desc: "Operating with honesty, transparency and ethical business practices.",
                icon: (
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
              },
              {
                name: "Economic Impact",
                desc: "Contributing to poverty alleviation and infrastructure development through our work.",
                icon: (
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-yellow-400/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">{value.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg text-yellow-400 mb-2">
                      {value.name}
                    </h3>
                    <p className="text-gray-300">{value.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Details */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-yellow-400">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Our Locations</h4>
                    <p className="text-gray-300">
                      77 John Beer Street, Northcrest, Mthatha
                    </p>
                    <p className="text-gray-300">
                      East London Branch (Coming Soon)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-yellow-400">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Contact Numbers</h4>
                    <p className="text-gray-300">078 724 4418</p>
                    <p className="text-gray-300">082 509 4582</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-yellow-400">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email Addresses</h4>
                    <p className="text-gray-300">vuvuhesewu2@gmail.com</p>
                    <p className="text-gray-300">mmttrading8@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-yellow-400/10 p-8 md:p-12 border-t md:border-t-0 md:border-l border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">
                Our Partners
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Printing Materials Suppliers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Technology & Equipment Providers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Marketing & Advertising Agencies
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Smart Solution Investors
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Kuyasa Registered Auditors
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
