// components/sections/Contact.tsx
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import ButtonGold from "@/components/ui/ButtonGold";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-(--color-white-off)">Drop Us a </span>
            <span className="text-(--color-gold)">Dram</span>
          </h2>
          <div className="w-24 h-px bg-(--color-gold)/50 mx-auto" />
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* LEFT SIDE - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-(--color-gold)/30 rounded-md p-6 md:p-8 bg-black/20 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-(--color-white-off) mb-6">
              Send a carrier pigeon<span className="text-(--color-gold)">.</span> Or use this form.
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-(--color-white-off)/80 mb-2">
                  Your Name <span className="text-(--color-gold)">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-(--color-gold)/30 rounded-md focus:outline-none focus:border-(--color-gold) focus:ring-1 focus:ring-(--color-gold) text-(--color-white-off) placeholder:text-(--color-white-off)/30 transition-all duration-300"
                  placeholder="e.g., William Grant's"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-(--color-white-off)/80 mb-2">
                  Email Address <span className="text-(--color-gold)">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-(--color-gold)/30 rounded-md focus:outline-none focus:border-(--color-gold) focus:ring-1 focus:ring-(--color-gold) text-(--color-white-off) placeholder:text-(--color-white-off)/30 transition-all duration-300"
                  placeholder="you@highlandpark.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-(--color-white-off)/80 mb-2">
                  Your Message <span className="text-(--color-gold)">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black/40 border border-(--color-gold)/30 rounded-md focus:outline-none focus:border-(--color-gold) focus:ring-1 focus:ring-(--color-gold) text-(--color-white-off) placeholder:text-(--color-white-off)/30 transition-all duration-300 resize-none"
                  placeholder="Tell us about your favorite dram, ask a question, or just say hello..."
                />
              </div>

              {/* Submit Button */}
              <div>
                <ButtonGold
                  variant="gold"
                  size="default"
                  defaultText="Send Message"
                  hoverText="Sláinte! "
                  className="w-full sm:w-84 md:w-72 h-12 md:pt-1"
                  type="submit"
                />
              </div>
            </form>

            {/* Contact Info - Below Form */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-(--color-white-off)/70">
                <Mail className="w-4 h-4 text-(--color-gold)" />
                <span className="text-sm">hello@whiskyice.com</span>
              </div>
              <div className="flex items-center gap-3 text-(--color-white-off)/70">
                <Phone className="w-4 h-4 text-(--color-gold)" />
                <span className="text-sm">+1 (800) 555-DRAM</span>
              </div>
              <div className="flex items-center gap-3 text-(--color-white-off)/70">
                <MapPin className="w-4 h-4 text-(--color-gold)" />
                <span className="text-sm">Islay, Scotland</span>
              </div>
              <div className="flex items-center gap-3 text-(--color-white-off)/70">
                <Clock className="w-4 h-4 text-(--color-gold)" />
                <span className="text-sm">Open 24/7 for drams</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Quote & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col"
          >
            {/* Quote Card */}
            <div className="bg-black/20 backdrop-blur-sm border border-(--color-gold)/30 rounded-md p-8 mb-8 relative overflow-hidden group">
              {/* Decorative ice cube effect */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-(--color-gold)/5 rounded-full blur-2xl group-hover:bg-(--color-gold)/10 transition-all duration-700" />
              
              <div className="relative">
                <span className="text-6xl text-(--color-gold)/20 font-serif absolute -top-4 -left-2">"</span>
                <p className="text-xl md:text-2xl text-(--color-white-off)/90 leading-relaxed mb-6 relative z-10 italic pl-4">
                  I'm not saying whisky solves all problems, but have you ever seen anyone drink whisky and argue about which ice cube tray is superior?
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-(--color-gold) font-bold">— Some Wise Distiller</p>
                    <p className="text-(--color-white-off)/40 text-sm mt-1">Probably after a long day</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Alternative quotes you can rotate (for fun) */}
            <div className="space-y-3 mb-8">
              <p className="text-(--color-white-off)/50 text-sm italic border-l-2 border-(--color-gold)/30 pl-3">
                "The proper drinking of Scotch whisky is more than indulgence: it is a toast to life, a gesture of friendship, a rite." — David Daiches
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-auto">
              <h4 className="text-sm font-medium text-(--color-white-off)/60 mb-4 tracking-wider uppercase">
                Find us where the ice never melts
              </h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full border border-(--color-gold)/30 bg-black/40 flex items-center justify-center text-(--color-white-off) hover:text-(--color-gold) hover:border-(--color-gold) hover:bg-(--color-gold)/10 transition-all duration-300 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full border border-(--color-gold)/30 bg-black/40 flex items-center justify-center text-(--color-white-off) hover:text-(--color-gold) hover:border-(--color-gold) hover:bg-(--color-gold)/10 transition-all duration-300 group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full border border-(--color-gold)/30 bg-black/40 flex items-center justify-center text-(--color-white-off) hover:text-(--color-gold) hover:border-(--color-gold) hover:bg-(--color-gold)/10 transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full border border-(--color-gold)/30 bg-black/40 flex items-center justify-center text-(--color-white-off) hover:text-(--color-gold) hover:border-(--color-gold) hover:bg-(--color-gold)/10 transition-all duration-300 group"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>

              {/* Footer note */}
              <p className="text-(--color-white-off)/30 text-xs mt-6">
                * We promise to respond faster than a 25-year-old single malt matures. Usually within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom separator with ice cube motif */}
        <div className="mt-16 pt-8 border-t border-(--color-gold)/20 text-center">
          <p className="text-(--color-white-off)/40 text-sm flex items-center justify-center gap-2">
            <span className="w-1 h-1 bg-(--color-gold) rounded-full" />
            Ice cold responses. Warm welcomes.
            <span className="w-1 h-1 bg-(--color-gold) rounded-full" />
          </p>
        </div>
      </div>
    </section>
  );
}