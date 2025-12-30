import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FlowStep {
  icon: ReactNode;
  label: string;
  description?: string;
}

interface FlowDiagramProps {
  steps: FlowStep[];
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function FlowDiagram({ steps, size = 'md', className }: FlowDiagramProps) {
  const sizeClasses = {
    sm: 'w-14 h-14',
    md: 'w-20 h-20',
    lg: 'w-24 h-24'
  };

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flow-diagram-wrapper w-full py-8 ${className || ''}`}>
      {/* Desktop: Horizontal Layout */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Progress Bar Background */}
          <div className="absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" 
               style={{ 
                 left: `${100 / (steps.length * 2)}%`, 
                 right: `${100 / (steps.length * 2)}%` 
               }}
          />
          
          {/* Grid Container */}
          <div className="grid gap-8" style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}>
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center relative"
              >
                {/* Circular Node */}
                <div className="relative z-10 mb-6">
                  <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-gold-bright to-gold border-4 border-green-dark shadow-[0_0_30px_rgba(212,175,55,0.6)] flex items-center justify-center hover:scale-110 transition-transform duration-300`}>
                    <div className={`${iconSizes[size]} text-green-dark flex items-center justify-center`}>
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Connector Line to Next Node */}
                  {idx < steps.length - 1 && (
                    <div className="absolute top-1/2 left-full w-full h-1 bg-gradient-to-r from-gold to-gold/50 -translate-y-1/2" 
                         style={{ width: 'calc(100% + 2rem)' }}
                    />
                  )}
                </div>

                {/* Label and Description */}
                <div className="text-center space-y-2 max-w-[180px]">
                  <h3 className="font-bold text-white text-base leading-tight">
                    {step.label}
                  </h3>
                  {step.description && (
                    <p className="text-sm text-gray-light leading-snug">
                      {step.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: Vertical Layout */}
      <div className="md:hidden space-y-6 px-4">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex gap-4 items-start"
          >
            {/* Node */}
            <div className="flex-shrink-0 relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-bright to-gold border-4 border-green-dark shadow-[0_0_30px_rgba(212,175,55,0.6)] flex items-center justify-center">
                <div className="w-8 h-8 text-green-dark flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              
              {/* Vertical Connector */}
              {idx < steps.length - 1 && (
                <div className="absolute top-full left-1/2 w-1 h-6 bg-gradient-to-b from-gold to-gold/50 -translate-x-1/2" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pt-2">
              <h3 className="font-bold text-white text-base mb-2 leading-tight">
                {step.label}
              </h3>
              {step.description && (
                <p className="text-sm text-gray-light leading-snug">
                  {step.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
