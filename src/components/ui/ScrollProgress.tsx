// components/ui/ScrollProgress.tsx
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * A thin gold bar fixed at the very top of the viewport that grows from 0 to 100%
 * as the user scrolls down the page. Provides a visual scroll-depth indicator.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Map scroll progress (0–1) to width percentage (0–100%)
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-100 bg-(--color-gold)/10">
      <motion.div
        className="h-full bg-(--color-gold)"
        style={{ width }}
      />
    </div>
  );
}
