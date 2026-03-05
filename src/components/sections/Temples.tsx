// components/sections/Temples.tsx
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const distilleries = [
  {
    name: "The Dalmore",
    location: "Highlands, Scotland",
    established: "1839",
    signature: "Twelve-point stag, sherry cask masters",
    description: "Where the Mackenzie family shaped whisky history. Their stills have flat tops and wide necks—unique in Scotland—creating that rich, heavy style. The current manager's family has worked here for four generations. Four.",
    bgClass: "bg-dalmore", // you'll need to add this image
    color: "from-amber-900/30"
  },
  {
    name: "Yamazaki",
    location: "Kyoto, Japan",
    established: "1923",
    signature: "Mizunara oak, zen precision",
    description: "Japan's first malt distillery, hidden in a bamboo forest. The water runs through ancient rock, filtered by nature. Their Mizunara casks—made from 200-year-old oaks—add sandalwood and coconut you'll find nowhere else on Earth.",
    bgClass: "bg-yamazaki",
    color: "from-emerald-900/30"
  },
  {
    name: "Buffalo Trace",
    location: "Frankfort, Kentucky",
    established: "1792",
    signature: "Warehouse H, single barrel legends",
    description: "The oldest continuously operating distillery in America. They've never stopped—not during Prohibition (they made 'medicinal' whiskey), not during war, not ever. Walk into Warehouse H and the ghost of Colonel E.H. Taylor is still there, checking barrels.",
    bgClass: "bg-buffalo-trace",
    color: "from-amber-500/30"
  },
  {
    name: "Bushmills",
    location: "Antrim, Northern Ireland",
    established: "1608",
    signature: "Triple distillation, 415 years of water from Saint Columb's Rill",
    description: "The world's oldest licensed whiskey distillery. King James I granted the license in 1608, and they've been making whiskey on the same spot ever since. The water still comes from the same tributary—Saint Columb's Rill—filtered through ancient basalt.",
    bgClass: "bg-bushmills",
    color: "from-blue-900/30"
  }
];

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
            Pilgrimage sites for the whisky faithful. You haven't lived until you've stood where the angels take their share.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {distilleries.map((distillery, index) => (
            <motion.div
              key={distillery.name}
              className={`relative flex flex-col h-full bg-linear-to-br ${distillery.color} to-black/90 backdrop-blur-sm border border-(--color-gold)/20 rounded-xl overflow-hidden group`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Background image overlay */}
              <div 
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-cover bg-center ${distillery.bgClass}`}
              />
              
              <div className="relative p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-(--color-gold) font-['Old_Standard_TT']">
                    {distillery.name}
                  </h3>
                  <span className="text-(--color-white-off)/40 text-sm italic">{distillery.established}</span>
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-(--color-white-off)/60 text-sm">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {distillery.location}</span>
                </div>
                
                <p className="text-(--color-white-off)/80 mb-4 italic border-l-2 border-(--color-gold)/30 pl-4">
                  "{distillery.signature}"
                </p>
                
                <p className="text-(--color-white-off)/70 text-base leading-relaxed">
                  {distillery.description}                </p>
                
                <div className="mt-auto pt-6 border-t border-(--color-gold)/20 w-full">
                  <button type="button" className="text-(--color-gold) transition-colors text-sm flex items-center gap-2 group cursor-pointer">
                    <span>Plan your pilgrimage</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
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