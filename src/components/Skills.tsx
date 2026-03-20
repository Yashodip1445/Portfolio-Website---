"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { staggerContainer, staggerItem } from "@/utils/animations";

export default function Skills() {
  const stats = [
    { number: "15+", label: "Technologies" },
    { number: "30+", label: "Projects" },
    { number: "100%", label: "Commitment" },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-text-muted text-lg">Technologies and tools I work with</p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="p-6 rounded-lg border border-accent/20 hover:border-accent/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-accent mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-text text-sm hover:bg-accent/20 hover:border-accent/60 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="p-6 rounded-lg border border-accent/20 text-center hover:border-accent/50 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
              <p className="text-text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
