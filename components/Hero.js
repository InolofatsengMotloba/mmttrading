"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const stats = [
  { number: 500, suffix: "+", label: "Projects Completed" },
  { number: 98, suffix: "%", label: "Client Satisfaction" },
  { number: 5, suffix: "+", label: "Years Experience" },
];

function AnimatedNumber({ target, suffix }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, target, {
      duration: 2,
      ease: "easeOut",
    });

    return controls.stop;
  }, [target]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      setDisplay(v);
    });
    return () => unsubscribe();
  }, [rounded]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

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

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-24 px-10">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Main Heading */}
            <div className="space-y-6">
              <motion.h1
                className="text-4xl md:text-5xl font-bold leading-tight"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <span className="text-white">Transform Your</span>
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                  Brand Vision
                </span>
                <br />
                <span className="text-white">Into Reality</span>
              </motion.h1>

              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                Elevate your business with our cutting-edge digital printing,
                professional branding, and innovative design solutions. From
                business cards to vehicle wraps, we deliver
                <span className="text-yellow-400 font-semibold">
                  {" "}
                  exceptional quality
                </span>{" "}
                that makes your brand unforgettable.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-6 my-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {stats.map(({ number, suffix, label }, index) => (
                <motion.div
                  key={label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.2, duration: 0.5 }}
                >
                  <div className="text-2xl font-bold text-yellow-400">
                    <AnimatedNumber target={number} suffix={suffix} />
                  </div>
                  <div className="text-gray-300 text-sm">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
