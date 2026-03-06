// components/sections/Hero.tsx
import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ButtonGold from "@/components/ui/ButtonGold";

// Animation variants for sequential reveal
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.35,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-svh flex flex-col items-center justify-center relative"
    >
      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 md:mb-10 leading-tight md:leading-tight"
          variants={itemVariants}
        >
          <span className="text-(--color-white-off)">Hey Whisky, Ice </span>
          <br />
          <span className="text-(--color-gold)">to Meet </span>
          <span className="text-(--color-white-off)">You!</span>
        </motion.h1>

        {/* Description — animates between title and buttons */}
        <motion.div className="max-w-3xl mx-auto mb-10" variants={itemVariants}>
          {/* Desktop version */}
          <p className="hidden md:block text-lg md:text-xl text-(--color-white-off)/80 leading-relaxed">
            They say never trust a person who doesn't appreciate the sound of ice
            clinking against glass. We agree. Whether you're a peat-headed
            enthusiast or just discovered that whisky tastes better when you're
            not in college anymore, pull up a chair. The ice is cold, the welcome
            is warm, and the whisky? Always perfectly aged.
          </p>

          {/* Mobile version */}
          <p className="block md:hidden text-base text-(--color-white-off)/80 leading-relaxed">
            For those who appreciate ice clinking against glass. The welcome is
            warm, the whisky perfectly aged.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6"
          variants={itemVariants}
        >
          <ButtonGold
            variant="subtle"
            size="default"
            defaultText="Products"
            hoverText="View Portfolio →"
            className="w-full sm:w-72 h-12 md:h-14"
          />
          <ButtonGold
            variant="outline"
            size="default"
            defaultText="Get in Touch"
            hoverText="Let's Talk →"
            className="w-full sm:w-72 h-12 md:h-14"
          />
        </motion.div>
      </motion.div>

      {/* Scroll-down indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <span className="text-(--color-white-off)/30 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-(--color-gold)/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}