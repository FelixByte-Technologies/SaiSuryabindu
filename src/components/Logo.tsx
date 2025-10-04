import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts (user visits site)
    setHasAnimated(true);
  }, []);
  const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-16 w-16",
    lg: "h-20 w-20",
    xl: "h-24 w-24",
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Outer gradient circle with 3D coin flip animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-b from-[#a3d9f1] to-[#ebf2f8] p-0.5"
        animate={
          hasAnimated
            ? {
                rotateY: [0, 360],
                scale: [1, 1.15, 1],
              }
            : {}
        }
        transition={{
          duration: 1.8,
          ease: [0.25, 0.1, 0.25, 1],
          times: [0, 0.3, 1],
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Inner gradient circle */}
        <div className="h-full w-full rounded-full bg-gradient-to-b from-[#a3d9f1] to-[#ebf2f8] p-0.5">
          {/* Logo container */}
          <div className="h-full w-full rounded-full bg-white flex items-center justify-center overflow-hidden">
            <img
              src="./logo.png"
              alt="SAI SURYABINDU Logo"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Logo;
