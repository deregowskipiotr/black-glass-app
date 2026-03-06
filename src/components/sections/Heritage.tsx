// components/sections/Heritage.tsx
import { motion } from "framer-motion";
import { Clock, Wheat, Droplet, Flame } from "lucide-react";

const timelineCards = [
  { year: "1494", label: "First written record", Icon: Wheat },
  { year: "1824", label: "First legal distilleries", Icon: Flame },
  { year: "1909", label: "Blended Scotch defined", Icon: Droplet },
  { year: "Today", label: "Your turn to taste", Icon: Clock },
];

export function Heritage() {
  return (
    <section id="heritage" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-['Old_Standard_TT'] mb-4">
            <span className="text-(--color-gold)">Heritage</span>
            <span className="text-(--color-white-off)"> in Every Drop</span>
          </h2>
          <div className="w-24 h-px bg-(--color-gold)/50 mx-auto" />
        </motion.div>

        {/* The Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-(--color-white-off)/80 text-lg leading-relaxed mb-6">
              It starts with water—soft, ancient, trickling through peat and
              granite for thousands of years before it ever touches barley.
              That's the secret they don't put on labels. The land remembers.
            </p>
            <p className="text-(--color-white-off)/80 text-lg leading-relaxed mb-6">
              In 1494, King James IV of Scotland commissioned Friar John Cor to
              make "aqua vitae"—eight bolls of malt enough to produce 500
              bottles. That's the first written record of Scotch whisky. We've
              been perfecting it ever since.
            </p>
            <p className="text-(--color-white-off)/80 text-lg leading-relaxed">
              Today, the process hasn't changed much. Barley is malted, mashed,
              fermented, distilled, and aged—sometimes for decades. The angels
              take their share (about 2% each year), and what remains is liquid
              history.
            </p>

            {/* Mobile-only gold separator before cards */}
            <div className="md:hidden mt-10 w-full h-px bg-(--color-gold)/20" />
          </motion.div>

          {/* Heritage Timeline Cards — each staggered individually */}
          <div className="grid grid-cols-2 gap-4">
            {timelineCards.map(({ year, label, Icon }, index) => (
              <motion.div
                key={year}
                className="bg-black/40 backdrop-blur-sm border border-(--color-gold)/20 rounded-md p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <Icon className="w-8 h-8 text-(--color-gold) mx-auto mb-3" />
                <span className="text-2xl font-bold text-(--color-white-off)">
                  {year}
                </span>
                <p className="text-(--color-white-off)/60 text-sm mt-1">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}