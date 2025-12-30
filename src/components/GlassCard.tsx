import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  goldBorder?: boolean;
  variant?: 'glass' | 'split' | 'gold' | 'gray';
}

export function GlassCard({ 
  children, 
  className,
  hoverEffect = true,
  goldBorder = false,
  variant = 'glass'
}: GlassCardProps) {
  const variantClasses = {
    glass: "bg-card/30 border border-secondary/10",
    split: "split-card",
    gold: "bg-gradient-to-br from-gold-bright to-gold text-green-dark",
    gray: "bg-gray-light text-green-dark border border-green-medium"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={hoverEffect ? { y: -5, scale: 1.02 } : undefined}
      className={cn(
        "relative rounded-xl p-6 backdrop-blur-xl transition-all duration-300",
        variantClasses[variant],
        hoverEffect && variant === 'glass' && "hover:border-secondary/30 hover:shadow-lg hover:shadow-gold/10",
        hoverEffect && (variant === 'gold' || variant === 'gray') && "hover:shadow-2xl hover:shadow-gold/20",
        goldBorder && "royal-border",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
