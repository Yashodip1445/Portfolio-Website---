"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/utils/animations";

export default function About() {
  const highlights = [
    "React & Next.js",
    "Full Stack Dev",
    "Clean Code",
    "Performance",
  ];

  const stats = [
    { number: "50+", label: "Projects" },
    { number: "2+", label: "Years Experience" },
    { number: "15+", label: "Technologies" },
    { number: "100%", label: "Dedicated" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-text-muted text-lg">Get to know me better</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Left - Text */}
          <motion.div variants={staggerItem} className="space-y-6">
            <div className="space-y-4 text-text-muted leading-relaxed text-justify">
              <p>
                I&apos;m Yashodip, a passionate full-stack developer with a keen interest
                in building scalable, user-friendly web applications.
              </p>
              <p>
                My journey started with curiosity and evolved into a commitment to writing clean, efficient code.
              </p>
              <p>
                When I&apos;m not coding, I explore new technologies and contribute to open-source projects.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="p-3 rounded-lg border border-accent/30 text-center hover:border-accent/70 transition-all duration-300"
                >
                  <p className="text-accent font-semibold text-sm">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            variants={staggerItem}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-lg border border-accent/20 text-center hover:border-accent/50 transition-all duration-300"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.number}</h3>
                <p className="text-text-muted text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
