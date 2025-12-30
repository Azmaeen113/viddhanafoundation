import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CircularNodeProps {
  icon: ReactNode;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showLabel?: boolean;
}

export function CircularNode({ 
  icon, 
  label, 
  size = 'md', 
  className,
  showLabel = true 
}: CircularNodeProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className="circular-node-container flex flex-col items-center gap-3">
      <div 
        className={cn(
          'circular-node',
          sizeClasses[size],
          className
        )}
      >
        <div className={cn('text-white', iconSizes[size])}>
          {icon}
        </div>
      </div>
      {showLabel && label && (
        <p className="text-center font-semibold text-sm md:text-base max-w-[120px]">
          {label}
        </p>
      )}
    </div>
  );
}
