import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface DiagramNode {
  icon: ReactNode;
  label: string;
  description?: string;
}

interface CircularDiagramProps {
  centerIcon: ReactNode;
  centerLabel: string;
  nodes: DiagramNode[];
  className?: string;
}

export function CircularDiagram({ 
  centerIcon, 
  centerLabel, 
  nodes,
  className 
}: CircularDiagramProps) {
  const radius = 38; // Percentage-based radius for better scaling
  const angleStep = (2 * Math.PI) / nodes.length;
  const centerX = 50;
  const centerY = 50;

  return (
    <div className={`circular-diagram-wrapper w-full ${className || ''}`}>
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="relative w-full max-w-4xl mx-auto" style={{ paddingBottom: '100%' }}>
          <div className="absolute inset-0">
            {/* SVG for Connection Lines */}
            <svg 
              viewBox="0 0 100 100" 
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="goldConnectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E8B84D" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.9" />
                </linearGradient>
                <filter id="connectionGlow">
                  <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Connection Lines */}
              {nodes.map((_, idx) => {
                const angle = idx * angleStep - Math.PI / 2;
                const nodeX = centerX + radius * Math.cos(angle);
                const nodeY = centerY + radius * Math.sin(angle);
                
                return (
                  <motion.line
                    key={`line-${idx}`}
                    x1={centerX}
                    y1={centerY}
                    x2={nodeX}
                    y2={nodeY}
                    stroke="url(#goldConnectionGradient)"
                    strokeWidth="0.4"
                    strokeLinecap="round"
                    filter="url(#connectionGlow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 + idx * 0.08, ease: "easeOut" }}
                  />
                );
              })}
            </svg>

            {/* Center Node */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
            >
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-bright to-gold rounded-full blur-xl opacity-60 animate-pulse"></div>
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-gold-bright via-gold to-gold-dark border-4 border-green-dark shadow-[0_0_50px_rgba(212,175,55,0.8)] flex items-center justify-center">
                    <div className="w-16 h-16 text-green-dark flex items-center justify-center">
                      {centerIcon}
                    </div>
                  </div>
                </div>
                <p className="text-center font-bold text-xl text-white mt-4 tracking-wider drop-shadow-lg">
                  {centerLabel}
                </p>
              </div>
            </motion.div>

            {/* Surrounding Nodes */}
            {nodes.map((node, idx) => {
              const angle = idx * angleStep - Math.PI / 2;
              const x = centerX + radius * Math.cos(angle);
              const y = centerY + radius * Math.sin(angle);

              return (
                <motion.div
                  key={`node-${idx}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.5 + idx * 0.1,
                    type: "spring",
                    stiffness: 150
                  }}
                  className="absolute z-20"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="flex flex-col items-center max-w-[160px]">
                    {/* Node Circle */}
                    <motion.div 
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative mb-3"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-gold-bright to-gold rounded-full blur-lg opacity-50"></div>
                      <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-gold-bright to-gold border-4 border-green-dark shadow-[0_0_35px_rgba(212,175,55,0.6)] flex items-center justify-center cursor-pointer">
                        <div className="w-12 h-12 text-green-dark flex items-center justify-center">
                          {node.icon}
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Label */}
                    <div className="text-center">
                      <p className="font-bold text-white text-sm mb-1 leading-tight drop-shadow-md">
                        {node.label}
                      </p>
                      {node.description && (
                        <p className="text-xs text-gray-light leading-snug">
                          {node.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile View - Vertical List */}
      <div className="md:hidden space-y-6 px-4">
        {/* Center Node - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold-bright to-gold border-4 border-green-dark shadow-[0_0_40px_rgba(212,175,55,0.7)] flex items-center justify-center mb-3">
            <div className="w-12 h-12 text-green-dark flex items-center justify-center">
              {centerIcon}
            </div>
          </div>
          <p className="text-center font-bold text-lg text-white tracking-wide">
            {centerLabel}
          </p>
        </motion.div>

        {/* Nodes - Mobile */}
        <div className="grid grid-cols-2 gap-4">
          {nodes.map((node, idx) => (
            <motion.div
              key={`mobile-node-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center p-4 bg-green-dark/20 rounded-xl border border-gold/20"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-bright to-gold border-3 border-green-dark shadow-[0_0_25px_rgba(212,175,55,0.5)] flex items-center justify-center mb-3">
                <div className="w-8 h-8 text-green-dark flex items-center justify-center">
                  {node.icon}
                </div>
              </div>
              <p className="font-semibold text-white text-xs text-center mb-1">
                {node.label}
              </p>
              {node.description && (
                <p className="text-[10px] text-gray-light text-center leading-tight">
                  {node.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
