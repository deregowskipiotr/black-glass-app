// components/ui/ButtonGold.tsx
import { cn } from "@/lib/utils";
import React from "react";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "outline" | "subtle";
  size?: "default" | "lg" | "sm";
  isLoading?: boolean;
  defaultText?: string;
  hoverText?: string;
}

const ButtonGold: React.FC<ButtonProps> = ({
  className,
  size = "default",
  isLoading = false,
  disabled,
  defaultText = "Apply Now",
  hoverText = "Go Ahead",
  variant = "gold",
  ...props
}) => {
  return (
    <div className="relative block group">
      {/* Subtle gold glow at bottom */}
      <div
        className={cn(
          "absolute bottom-0 left-1/2 -translate-x-1/2",
          "bg-linear-to-r from-transparent via-[#544317] to-transparent",
          "z-10",
          "group-hover:via-[#544317]",
          variant === "gold" && "shadow-[0_1px_8px_rgba(84,67,23,0.3)] group-hover:shadow-[0_1px_12px_rgba(84,67,23,0.5)]",
          variant === "outline" && "shadow-[0_1px_8px_rgba(248,247,244,0.15)] group-hover:shadow-[0_1px_12px_rgba(248,247,244,0.25)]",
          variant === "subtle" && "shadow-[0_1px_8px_rgba(84,67,23,0.15)] group-hover:shadow-[0_1px_12px_rgba(84,67,23,0.3)]",
          
          // Size variations
          size === "lg" && "w-[55%] h-0.75",
          size === "sm" && "w-[50%] h-px",
          size === "default",
          
          disabled && "opacity-20",
        )}
      />

      <button
        className={cn(
          "relative inline-flex items-center justify-center font-secondary tracking-wide rounded-md transition-colors duration-400 cursor-pointer",
          // Base dimensions
          "h-12 px-8",

          // Base background - deep oxidized gold with texture
          variant === "gold" && [
            "bg-[#544317]", // Base gold
            "bg-linear-to-br from-[#6B5620] via-[#544317] to-[#3D2F10]", // Gradient for depth
            "border border-[#7D6730]/40", // Warm border
            "shadow-[0_4px_12px_rgba(84,67,23,0.25)]", // Gold shadow
            "hover:shadow-[0_6px_16px_rgba(84,67,23,0.4)]",
            "hover:border-[#9E8840]/50",
          ],

          // Outline variant
          variant === "outline" && [
            "bg-transparent",
            "border border-[#544317]/60",
            "text-[#F8F7F4]",
            "shadow-[0_4px_12px_rgba(84,67,23,0.15)]",
            "hover:bg-[#544317]/10",
            "hover:border-[#544317]",
            "hover:shadow-[0_6px_16px_rgba(84,67,23,0.3)]",
          ],

          // Subtle variant
          variant === "subtle" && [
            "bg-[#544317]/30",
            "border border-[#544317]/30",
            "backdrop-blur-sm",
            "text-[#F8F7F4]",
            "shadow-[0_4px_12px_rgba(84,67,23,0.1)]",
            "hover:bg-[#544317]/30",
            "hover:border-[#544317]/50",
            "hover:shadow-[0_6px_16px_rgba(84,67,23,0.2)]",
            "hover:bg-[#544317]/50",
          ],

          // Inner texture effect (applies to all variants)
          "relative overflow-hidden",
          
          // Subtle metallic sheen overlay
          "before:absolute before:inset-0 before:bg-linear-to-br before:from-white/5 before:via-transparent before:to-black/20",
          "before:pointer-events-none",

          // Active state
          "active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] active:translate-y-px",

          // Focus ring - using your off-white
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F8F7F4] focus-visible:ring-offset-2",
          variant === "gold" && "focus-visible:ring-offset-[#544317]",
          variant === "outline" && "focus-visible:ring-offset-black",
          variant === "subtle" && "focus-visible:ring-offset-black/50",

          // Disabled
          disabled && "opacity-40 cursor-not-allowed hover:shadow-none",

          // Sizes
          size === "lg" && "h-16 px-12 min-w-[320px] text-lg",
          size === "sm" && "h-10 px-6 min-w-40 text-sm",

          className,
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <svg
            className="w-5 h-5 animate-spin text-[#F8F7F4] drop-shadow-lg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-30"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-80"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          <span
            className={cn(
              "relative z-10 font-extralight drop-shadow-md",
              "text-base md:text-lg tracking-wide",
              variant === "gold" && "text-[#F8F7F4]",
              variant === "outline" && "text-[#F8F7F4]",
              variant === "subtle" && "text-[#F8F7F4]",
              size === "lg" && "text-xl md:text-2xl",
              size === "sm" && "text-sm md:text-base",
            )}
          >
            <span className="relative block overflow-hidden w-full h-[1.2em]">
              {/* Stack that moves up slowly on hover */}
              <span className="flex flex-col transition-transform duration-1000 ease-in-out group-hover:-translate-y-1/2">
                <span className="h-[1.2em] flex items-center justify-center">
                  {defaultText}
                </span>
                <span className="h-[2.5em] flex items-center justify-center">
                  {hoverText}
                </span>
              </span>
            </span>
          </span>
        )}
      </button>
    </div>
  );
};

ButtonGold.displayName = 'ButtonGold';

export default ButtonGold;