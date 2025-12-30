import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TimelinePhase {
  icon: ReactNode;
  quarter: string;
  title: string;
  date?: string;
  milestones: string[];
  status: 'upcoming' | 'planned' | 'vision';
}

interface HorizontalTimelineProps {
  phases: TimelinePhase[];
  className?: string;
}

export function HorizontalTimeline({ phases, className }: HorizontalTimelineProps) {
  return (
    <div className={cn("horizontal-timeline-container w-full", className)}>
      {/* Desktop: Horizontal Layout */}
      <div className="hidden lg:block relative py-20">
        {/* Baseline */}
        <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20" />
        
        {/* Grid Layout for Even Spacing */}
        <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${phases.length}, 1fr)` }}>
          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center"
            >
              {/* Node */}
              <div className="relative z-10 mb-8">
                <div
                  className={cn(
                    'w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300',
                    phase.status === 'upcoming' && 'bg-gradient-to-br from-gold-bright to-gold border-4 border-green-dark shadow-[0_0_30px_rgba(212,175,55,0.6)]',
                    phase.status === 'planned' && 'bg-green-dark/30 border-4 border-primary shadow-[0_0_20px_rgba(74,124,89,0.4)]',
                    phase.status === 'vision' && 'bg-green-dark/20 border-4 border-gray-medium shadow-[0_0_15px_rgba(184,184,184,0.3)]'
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 flex items-center justify-center",
                    phase.status === 'upcoming' ? 'text-green-dark' : 'text-white'
                  )}>
                    {phase.icon}
                  </div>
                </div>
              </div>

              {/* Info Below Node */}
              <div className="text-center space-y-2 px-2">
                <p className="text-gold font-bold text-base tracking-wide">{phase.quarter}</p>
                {phase.date && (
                  <p className="text-xs text-gray-light">{phase.date}</p>
                )}
                <h3 className="font-serif font-bold text-lg text-white min-h-[3rem] flex items-center justify-center">
                  {phase.title}
                </h3>
                
                <ul className="text-xs space-y-1.5 text-left pt-2">
                  {phase.milestones.map((milestone, mIdx) => (
                    <li key={mIdx} className="text-gray-light leading-relaxed">
                      <span className="text-gold mr-1">•</span> {milestone}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: Vertical Layout */}
      <div className="lg:hidden space-y-6 px-4">
        {phases.map((phase, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-4 items-start"
          >
            {/* Node */}
            <div className="flex-shrink-0">
              <div
                className={cn(
                  'w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300',
                  phase.status === 'upcoming' && 'bg-gradient-to-br from-gold-bright to-gold border-4 border-green-dark shadow-[0_0_30px_rgba(212,175,55,0.6)]',
                  phase.status === 'planned' && 'bg-green-dark/30 border-4 border-primary shadow-[0_0_20px_rgba(74,124,89,0.4)]',
                  phase.status === 'vision' && 'bg-green-dark/20 border-4 border-gray-medium shadow-[0_0_15px_rgba(184,184,184,0.3)]'
                )}
              >
                <div className={cn(
                  "w-8 h-8 flex items-center justify-center",
                  phase.status === 'upcoming' ? 'text-green-dark' : 'text-white'
                )}>
                  {phase.icon}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pt-1">
              <p className="text-gold font-bold text-sm mb-1">{phase.quarter}</p>
              {phase.date && (
                <p className="text-xs text-gray-light mb-2">{phase.date}</p>
              )}
              <h3 className="font-serif font-bold text-lg text-white mb-3">{phase.title}</h3>
              
              <ul className="text-sm space-y-1.5">
                {phase.milestones.map((milestone, mIdx) => (
                  <li key={mIdx} className="text-gray-light leading-relaxed">
                    <span className="text-gold mr-1">•</span> {milestone}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
