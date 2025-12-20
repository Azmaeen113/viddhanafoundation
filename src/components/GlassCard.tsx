import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  goldBorder?: boolean;
}

export function GlassCard({ 
  children, 
  className,
  hoverEffect = true,
  goldBorder = false
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={hoverEffect ? { y: -5, scale: 1.02 } : undefined}
      className={cn(
        "relative rounded-xl p-6 backdrop-blur-xl transition-all duration-300",
        "bg-card/30 border border-secondary/10",
        hoverEffect && "hover:border-secondary/30 hover:shadow-lg hover:shadow-gold/10",
        goldBorder && "royal-border",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
