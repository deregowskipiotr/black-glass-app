// components/sections/Hero.tsx
import { motion } from "framer-motion";
import ButtonGold from "@/components/ui/ButtonGold";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Title - appears from top */}
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-10 md:mb-12 -mt-60 md:-mt-20 leading-relaxed md:leading-28"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.1, 0.15, 1], // custom easing for smooth movement
            delay: 0.35, 
            staggerChildren: 0.3
          }}
        >
          <span className="text-(--color-white-off)">Whisky on Ice </span> <br />
          <span className="text-(--color-gold)">to Meet </span>
          <span className="text-(--color-white-off)">You </span>
        </motion.h1>

        {/* Description - no animation (constant) */}
        <div className="max-w-3xl mx-auto">
          {/* Desktop version - 3-4 sentences */}
          <p className="hidden md:block text-lg md:text-xl text-(--color-white-off)/80 leading-relaxed mb-10">
            They say never trust a person who doesn't appreciate the sound of ice clinking against glass. 
            We agree. Whether you're a peat-headed enthusiast or just discovered that whisky tastes better 
            when you're not in college anymore, pull up a chair. The ice is cold, the welcome is warm, 
            and the whisky? Always perfectly aged.
          </p>
          
          {/* Mobile version - 2 sentences */}
          <p className="block md:hidden text-base text-(--color-white-off)/80 leading-relaxed mb-8">
           For those who appreciate ice clinking against glass. The welcome is warm, the whisky perfectly aged.
          </p>
        </div>

        {/* Buttons - appear from bottom */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.1, 0.15, 1],
            delay: 0.4,
            staggerChildren: 0.9 // subtle stagger between buttons
          }}
        >
          <motion.div
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
          >
            <ButtonGold
              variant="subtle"
              size="default"
              defaultText="Products"
              hoverText="View Portfolio →"
              className="w-full sm:w-84 md:w-72 h-12 md:h-14"
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
          >
            <ButtonGold
              variant="outline"
              size="default"
              defaultText="Get in Touch"
              hoverText="Let's Talk →"
              className="w-full sm:w-84 md:w-72 h-12 md:h-14"
            />
          </motion.div>
        </motion.div>

        {/* Optional subtle decorative element - gold line */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-24 h-px bg-(--color-gold)/30"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </div>
    </section>
  );
}