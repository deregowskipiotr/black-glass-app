// components/sections/Temples.tsx
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { DISTILLERIES } from "@/constants/temples";

export function Temples() {
  return (
    <section id="temples" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-(--color-white-off)">The Four </span>
            <span className="text-(--color-gold)">Temples</span>
          </h2>
          <p className="text-(--color-white-off)/70 max-w-2xl mx-auto">
            Pilgrimage sites for the whisky faithful. You haven't lived until
            you've stood where the angels take their share.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {DISTILLERIES.map((distillery, index) => (
            <motion.div
              key={distillery.name}
              className={`relative flex flex-col h-full bg-linear-to-br ${distillery.color} to-black/90 backdrop-blur-sm border border-(--color-gold)/20 rounded-md overflow-hidden group`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Background image overlay on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-cover bg-center ${distillery.bgClass}`}
              />

              <div className="relative p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-(--color-gold) font-['Old_Standard_TT']">
                    {distillery.name}
                  </h3>
                  <span className="text-(--color-white-off)/40 text-sm italic">
                    {distillery.established}
                  </span>
                </div>

                <div className="flex items-center gap-1 mb-4 text-(--color-white-off)/60 text-sm">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{distillery.location}</span>
                </div>

                <p className="text-(--color-white-off)/80 mb-4 italic border-l-2 border-(--color-gold)/30 pl-4">
                  "{distillery.signature}"
                </p>

                <p className="text-(--color-white-off)/70 text-base leading-relaxed">
                  {distillery.description}
                </p>

                <div className="mt-auto pt-6 border-t border-(--color-gold)/20 w-full">
                  <button
                    type="button"
                    className="text-(--color-gold) transition-colors text-sm flex items-center gap-2 group cursor-pointer"
                  >
                    <span>Plan your pilgrimage</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}