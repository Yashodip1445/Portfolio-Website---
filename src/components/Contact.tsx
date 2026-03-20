"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { staggerContainer, staggerItem } from "@/utils/animations";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "yashodip@example.com",
      link: "mailto:yashodip@example.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 XXXXX XXXXX",
      link: "tel:+91XXXXXXXXXX",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-text-muted text-lg">
            Let&apos;s connect and discuss your next project
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Contact Form */}
          <motion.form
            variants={staggerItem}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="block text-text mb-2 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-accent/30 text-text placeholder-text-muted focus:border-accent focus:outline-none transition-colors duration-300"
                required
              />
            </div>
            <div>
              <label className="block text-text mb-2 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-accent/30 text-text placeholder-text-muted focus:border-accent focus:outline-none transition-colors duration-300"
                required
              />
            </div>
            <div>
              <label className="block text-text mb-2 font-semibold">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-accent/30 text-text placeholder-text-muted focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-6 py-3 bg-accent text-primary rounded-lg font-semibold hover:bg-blue-400 transition-all duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Contact Information */}
          <motion.div
            variants={staggerItem}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  className="p-6 rounded-lg border border-accent/20 hover:border-accent/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-all duration-300">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text mb-1">
                        {info.title}
                      </h3>
                      <p className="text-text-muted">{info.value}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
