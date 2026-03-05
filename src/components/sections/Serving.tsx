// components/sections/Serving.tsx
import { motion } from "framer-motion";
import { GlassWater, Droplets, Snowflake, Flame } from "lucide-react";

const servingMethods = [
  {
    name: "Neat",
    icon: <GlassWater className="w-8 h-8" />,
    temp: "18-20°C",
    glass: "Glencairn or Copita",
    description: "The purist's choice. Straight from the bottle to the glass, no interference, no apology. This is how the distiller intended you to taste their work—every flaw, every triumph, every note laid bare.",
    perfectFor: "A 25-year-old single malt you've been saving. Something that deserves your full attention.",
    quote: "The whiskey reveals its true character when you stop trying to change it."
  },
  {
    name: "With Water",
    icon: <Droplets className="w-8 h-8" />,
    temp: "18-20°C",
    glass: "Glencairn",
    description: "A few drops—literally, three to five—unlock aromas you didn't know existed. The water molecules release guaiacol (that's the smoky, peaty compound) from the ethanol. Science, but make it delicious.",
    perfectFor: "Cask-strength whiskies (55%+ ABV). They need a little help to open up.",
    quote: "Water doesn't dilute the whisky. It liberates it."
  },
  {
    name: "On the Rocks",
    icon: <Snowflake className="w-8 h-8" />,
    temp: "4-8°C",
    glass: "Old Fashioned (Tumbler)",
    description: "Controversial? Maybe. Delicious? Absolutely. A single large ice cube—never crushed, never small cubes that melt in seconds—cools the whisky and softens the edges. As it slowly melts, the flavor evolves. A journey in a glass.",
    perfectFor: "Bourbon, rye, or a younger, feistier single malt that needs taming.",
    quote: "One large sphere. Anything else is just dilution."
  },
  {
    name: "The Godfather",
    icon: <Flame className="w-8 h-8" />,
    temp: "With ice",
    glass: "Old Fashioned",
    description: "Two parts whisky, one part amaretto. Served over ice. Born in the 1970s, named for Marlon Brando, and still one of the most elegant whisky cocktails ever created. The almond sweetness doesn't mask the whisky—it dances with it.",
    perfectFor: "A Tuesday evening. Or a Friday. Actually, any day ending in 'y'.",
    quote: "It's not a cocktail. It's a handshake between Scotland and Italy."
  }
];

export function Serving() {
  return (
    <section id="serving" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-['Old_Standard_TT'] mb-4">
            <span className="text-(--color-gold)">The </span>
            <span className="text-(--color-white-off)">Pour</span>
          </h2>
          <p className="text-(--color-white-off)/70 max-w-2xl mx-auto">
            There's no wrong way to drink whisky. But some ways are more right than others.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {servingMethods.map((method, index) => (
            <motion.div
              key={method.name}
              className="bg-black/40 backdrop-blur-sm border border-(--color-gold)/20 rounded-xl p-6 group hover:border-(--color-gold)/60 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-(--color-gold) mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {method.icon}
              </div>
              
              <h3 className="text-xl font-bold text-(--color-white-off) mb-2 font-['Old_Standard_TT']">
                {method.name}
              </h3>
              
              <div className="space-y-2 mb-4 text-sm">
                <p className="text-(--color-gold)"><span className="text-(--color-white-off)/60">Temp:</span> {method.temp}</p>
                <p className="text-(--color-gold)"><span className="text-(--color-white-off)/60">Glass:</span> {method.glass}</p>
              </div>
              
              <p className="text-(--color-white-off)/70 text-sm mb-4">
                {method.description}
              </p>
              
              <p className="text-(--color-white-off)/50 text-xs italic border-t border-(--color-gold)/20 pt-3">
                {method.quote}
              </p>
              
              <p className="text-(--color-white-off)/40 text-xs mt-3">
                <span className="text-(--color-gold)">Best for:</span> {method.perfectFor}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p 
          className="text-center text-(--color-white-off)/40 text-sm mt-12 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          * The ice sphere is not decoration. It's engineering. 2.5 inches of frozen water melts 30% slower than cubes. 
          You're welcome.
        </motion.p>
      </div>
    </section>
  );
}