'use client';

import { motion } from 'framer-motion';

interface MarqueeProps {
  className?: string;
    children?: React.ReactNode;
}

export const Marquee = ({ className, children }: MarqueeProps) => {
  return (
    <div className={`overflow-hidden bg-[#9400FF] py-2 ${className}`}>
      <motion.div
        className="flex gap-10 whitespace-nowrap animate-marquee px-4"
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        {children}
      </motion.div>
    </div>
  );
};