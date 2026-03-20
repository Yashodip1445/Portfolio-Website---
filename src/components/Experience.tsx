"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { staggerContainer, staggerItem } from "@/utils/animations";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-text-muted text-lg">My professional journey</p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={staggerItem}
              className="relative pl-8 pb-8 border-l-2 border-accent/30 hover:border-accent/70 transition-all duration-300"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-13px] top-0 w-6 h-6 bg-accent rounded-full border-4 border-primary"></div>

              {/* Content */}
              <div className="p-6 rounded-lg border border-accent/20 hover:border-accent/50 transition-all duration-300 bg-secondary/30">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-text mb-1">
                      {exp.position}
                    </h3>
                    <p className="text-accent font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:text-right mt-2 md:mt-0">
                    <p className="text-text-muted text-sm">
                      {exp.startDate} - {exp.endDate}
                    </p>
                    <p className="text-text-muted text-sm">{exp.location}</p>
                    {exp.isCurrent && (
                      <span className="inline-block mt-1 px-2 py-1 bg-accent/20 border border-accent/50 rounded text-xs text-accent font-semibold w-fit">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-text-muted text-sm flex gap-2">
                      <span className="text-accent">▪</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
