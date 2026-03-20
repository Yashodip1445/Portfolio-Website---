"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { staggerContainer, staggerItem } from "@/utils/animations";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          className="text-center space-y-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.p variants={staggerItem} className="text-accent font-semibold text-lg">
            Welcome to my portfolio
          </motion.p>

          <motion.h1 variants={staggerItem} className="text-5xl md:text-7xl font-bold">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Yashodip</span>
          </motion.h1>

          <motion.h2 variants={staggerItem} className="text-2xl md:text-4xl text-text-muted">
            Full Stack Developer
          </motion.h2>

          <motion.p variants={staggerItem} className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            I build scalable web applications using React, Next.js, and Java backend technologies. 
            Passionate about clean code, problem-solving, and continuous learning.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a
              href="#projects"
              className="px-8 py-3 bg-accent text-primary rounded-lg font-semibold hover:bg-blue-400 transition-all duration-300 text-center"
            >
              View My Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300 text-center"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={staggerItem} className="flex gap-6 justify-center pt-8">
            <a
              href="https://github.com/yashodip"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-accent/30 text-text-muted hover:text-accent hover:border-accent transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yashodip"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-accent/30 text-text-muted hover:text-accent hover:border-accent transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:yashodip@example.com"
              className="p-3 rounded-lg border border-accent/30 text-text-muted hover:text-accent hover:border-accent transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="pt-12"
          >
            <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center mx-auto">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 bg-accent rounded-full mt-2"
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
