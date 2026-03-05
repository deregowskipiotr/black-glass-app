// components/layout/Navbar.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import ButtonGold from "@/components/ui/ButtonGold";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("#home");

  // change style on scroll
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              (a.target as HTMLElement).offsetTop -
              (b.target as HTMLElement).offsetTop
          );

        if (visible[0]) {
          const id = visible[0].target.id;
          setActiveHash(`#${id}`);
        }
      },
      {
        root: null,
        threshold: 0.35,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Close mobile menu on link click
  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  // Toggle mobile menu
  const toggleMobile = () => setMobileOpen((prev) => !prev);

  return (
    <>
      {/* sticky navbar - stays inside the GlassContainer bounds */}
      <motion.header
        className="sticky top-0 z-50 w-full"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="mx-auto mt-3 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div 
            className={cn(
              "w-full rounded-md border transition-all duration-300",
              isScrolled 
                ? "bg-black/80 border-(--color-gold)/40 backdrop-blur-sm shadow-lg shadow-(--color-gold)/10" 
                : "bg-black/20 border-(--color-gold)/20"
            )}
          >
            {/* DESKTOP / TABLET */}
            <nav className="hidden md:flex items-center justify-between px-5 md:px-10 py-3">
              {/* Left: logo with gold accent */}
              <a href="#home" className="flex items-center gap-2">
                <span className="text-xl italic tracking-tight text-(--color-white-off)">
                  PD
                </span>
                <span className="text-(--color-gold) text-2xl font-light">✦</span>
              </a>

              {/* Center: links */}
              <div className="flex items-center gap-8 text-sm font-medium">
                {NAV_LINKS.map((link) => {
                  const isActive = activeHash === link.href;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "relative pb-1 transition-all duration-300 group",
                        isActive 
                          ? "text-(--color-white-off)" 
                          : "text-(--color-white-off)/70 hover:text-(--color-white-off)"
                      )}
                    >
                      {link.label}
                      <span
                        className={cn(
                          "absolute left-0 bottom-0 h-px w-full transition-all duration-500 ease-in-out",
                          isActive
                            ? "bg-(--color-gold) scale-x-100"
                            : "bg-(--color-gold)/40 scale-x-0 group-hover:scale-x-100"
                        )}
                      />
                    </a>
                  );
                })}
              </div>

              {/* Right: gold button */}
              <div className="flex items-center">
                <ButtonGold
                  variant="gold"
                  size="sm"
                  defaultText="Sign In"
                  hoverText="Welcome →"
                />
              </div>
            </nav>

            {/* MOBILE BAR */}
            <div className="flex items-center justify-between px-5 py-3 md:hidden">
              {/* Left: logo with gold accent */}
              <a href="#home" className="flex items-center gap-2">
                <span className="text-base italic tracking-tight text-(--color-white-off)">
                  PD
                </span>
                <span className="text-(--color-gold) text-xl font-light">✦</span>
              </a>

              {/* Right: hamburger menu */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={toggleMobile}
                  className="flex items-center justify-center w-10 h-10 rounded-md border border-(--color-gold)/30 bg-black/40 text-(--color-white-off) hover:bg-(--color-gold)/20 transition-all duration-300 cursor-pointer"
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                >
                  {mobileOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU PANEL */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="absolute inset-x-0 top-[72px] z-40 md:hidden pb-4"
          >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
              <div className="rounded-md bg-black/10 md:bg-black/10 backdrop-blur-3xl shadow-2xl shadow-(--color-gold)/10 mt-1">
                <div className="px-5 py-6">
                  {/* Mobile Navigation Links */}
                  <motion.ul
                    className="flex flex-col gap-2"
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={{
                      hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                      show: { transition: { staggerChildren: 0.08 } },
                    }}
                  >
                    {NAV_LINKS.map((link, index) => {
                      const isActive = activeHash === link.href;
                      return (
                        <motion.li
                          key={link.href}
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            show: { opacity: 1, x: 0, transition: { delay: index * 0.1 } },
                          }}
                        >
                          <a
                            href={link.href}
                            onClick={handleLinkClick}
                            className={cn(
                              "block px-4 py-3 rounded-md transition-all duration-300",
                              isActive
                                ? "bg-(--color-gold)/20 text-(--color-white-off)"
                                : "text-(--color-white-off)/70 hover:bg-(--color-gold)/10 hover:text-(--color-white-off)"
                            )}
                          >
                            {link.label}
                          </a>
                        </motion.li>
                      );
                    })}
                  </motion.ul>

                  {/* Mobile Sign In Button */}
                  <div className="mt-6 pt-4 border-t border-(--color-gold)/30">
                    <ButtonGold
                      variant="gold"
                      size="lg"
                      defaultText="Sign In"
                      hoverText="Get Started"
                      className="w-full h-12"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Helper function for conditional classes
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};