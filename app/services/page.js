import {
  FaPrint,
  FaPaintBrush,
  FaTshirt,
  FaCarSide,
  FaTags,
  FaCogs,
  FaHandsHelping,
  FaRocket,
} from "react-icons/fa";

export default function Services() {
  return (
    <section className="relative py-14 bg-gradient-to-b from-black via-gray-900 to-black px-8 sm:px-16 text-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-yellow-300/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 pt-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-yellow-400">Services</span>
          </h1>
          <div className="flex items-center justify-center max-w-2xl mx-auto space-x-4">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-yellow-400/50"></div>
            <span className="text-gray-300 italic">
              Where Ideas Come to Life
            </span>
            <div className="flex-grow h-px bg-gradient-to-r from-yellow-400/50 via-yellow-400/50 to-transparent"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "Digital Printing",
              desc: "High-quality printing for flyers, business cards, student cards, and more.",
              icon: <FaPrint className="text-3xl text-yellow-400" />,
            },
            {
              title: "Custom Design",
              desc: "Tailored graphic design solutions that reflect your unique brand.",
              icon: <FaPaintBrush className="text-3xl text-yellow-400" />,
            },
            {
              title: "Clothing Branding",
              desc: "Professional branding on t-shirts, uniforms, and apparel for events or businesses.",
              icon: <FaTshirt className="text-3xl text-yellow-400" />,
            },
            {
              title: "Vehicle Wraps",
              desc: "Turn your vehicles into mobile billboards with stunning full-wrap designs.",
              icon: <FaCarSide className="text-3xl text-yellow-400" />,
            },
            {
              title: "Promotional Banners & Signage",
              desc: "Eye-catching signage and banners to amplify your business visibility.",
              icon: <FaTags className="text-3xl text-yellow-400" />,
            },
            {
              title: "Smart Shopping App",
              desc: "Innovative digital product helping shoppers manage lists and save smartly.",
              icon: <FaRocket className="text-3xl text-yellow-400" />,
            },
          ].map(({ title, desc, icon }) => (
            <div
              key={title}
              className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 shadow-xl hover:shadow-yellow-500/10 transition-shadow"
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
              <p className="text-gray-300">{desc}</p>
            </div>
          ))}
        </div>

        {/* Partnership & Activities */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Key Partners */}
          <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              Key Partners
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                Reliable suppliers of printing materials (paper, ink, vinyl)
              </li>
              <li>
                Technology and equipment providers for design & production
              </li>
              <li>Marketing and advertising agency collaborations</li>
              <li>Investors for our Smart Shopping App initiative</li>
            </ul>
          </div>

          {/* Key Activities */}
          <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              Key Activities
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Custom printing & branding (cards, flyers, banners, etc.)</li>
              <li>Design innovation & product development</li>
              <li>Client engagement & exceptional customer support</li>
              <li>Mentorship & training for youth and women in design/tech</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
