import Image from "next/image";

export default function About() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Story</h1>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/images/employee.jpg"
                alt="Mangemahle Trading Founders"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Founded in 2014</h2>
            <p className="text-gray-700 mb-4">
              Mangemahle Trading was established by two business-minded women,
              Vuyelwa Hesewu and Bongelwa Patricia Ntsonge, who share a passion
              for entrepreneurship and creativity.
            </p>
            <p className="text-gray-700">
              The company was born out of a desire to provide high-quality
              digital printing and branding services that cater to businesses
              and individuals looking for professional and customized marketing
              materials.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <blockquote className="bg-primary/10 p-6 rounded-xl border-l-4 border-primary">
            <p className="text-lg italic">
              "To be a leading provider of innovative digital printing and
              branding solutions, empowering businesses and individuals while
              driving social impact through technology and skills development"
            </p>
          </blockquote>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <blockquote className="bg-secondary/10 p-6 rounded-xl border-l-4 border-secondary">
            <p className="text-lg italic">
              "To deliver exceptional, customized branding and printing services
              that meet the diverse needs of our clients while empowering young
              people and women through skill development and innovation"
            </p>
          </blockquote>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: "Innovation",
                desc: "We embrace creativity and continuously seek innovative solutions",
              },
              {
                name: "Quality",
                desc: "We are committed to delivering high-quality products and services",
              },
              {
                name: "Empowerment",
                desc: "We believe in empowering young people and women through opportunities",
              },
              {
                name: "Customer Centricity",
                desc: "Our clients are at the heart of everything we do",
              },
              {
                name: "Integrity",
                desc: "We operate with honesty, transparency, and ethical practices",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
              >
                <h3 className="font-bold text-lg mb-2">{value.name}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
