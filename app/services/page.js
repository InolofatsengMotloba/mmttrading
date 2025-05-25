import { services } from "@/constants/services";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-gray-600">
          Comprehensive branding and printing solutions tailored to your needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.slice(0, 2).map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-primary font-medium mb-4">
                  "{service.tagline}"
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-primary hover:bg-secondary text-white px-6 py-2 rounded-lg font-medium transition"
                >
                  Get a quote
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.slice(2).map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href="/contact"
                  className="text-primary hover:text-secondary font-medium transition"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
