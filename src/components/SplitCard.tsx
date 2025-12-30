import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SplitCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'gray';
}

export function SplitCard({ 
  title, 
  icon, 
  children, 
  className,
  variant = 'default'
}: SplitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn('split-card', className)}
    >
      {/* Gold Header */}
      <div className="split-card-header flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-green-dark flex items-center justify-center text-white">
          {icon}
        </div>
        <h3 className="text-2xl font-cinzel font-bold text-green-dark flex-1">
          {title}
        </h3>
      </div>
      
      {/* Dark Green Content */}
      <div className={cn(
        'split-card-content',
        variant === 'gray' && 'bg-gray-light text-green-dark'
      )}>
        {children}
      </div>
      
      {/* Gold Bottom Tab */}
      <div className="split-card-footer-tab" />
    </motion.div>
  );
}
