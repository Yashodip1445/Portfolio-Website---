"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/utils/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-primary/80 backdrop-blur-md border-b border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            Y<span className="text-text">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-muted hover:text-accent transition-colors duration-300 font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:yashodip@example.com"
              className="px-4 py-2 bg-accent text-primary rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-accent"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-text-muted hover:text-accent hover:bg-secondary/50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:yashodip@example.com"
              className="block w-full px-4 py-2 bg-accent text-primary rounded-lg font-semibold text-center"
            >
              Contact Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
