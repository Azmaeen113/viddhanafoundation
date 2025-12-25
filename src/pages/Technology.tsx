import { motion } from 'framer-motion';
import { 
  Cpu, 
  Zap, 
  Shield, 
  Brain,
  Layers,
  Code,
  ArrowRight,
  BadgeCheck,
  Gauge,
  Lock,
  Building,
  Wifi,
  Database,
  Globe
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/GlassCard';
import { SectionHeading } from '@/components/SectionHeading';
import { Link } from 'react-router-dom';

const metrics = [
  { label: 'Throughput', value: '100,000+ TPS', icon: Gauge },
  { label: 'Transaction Fee', value: '<$0.001', icon: Zap },
  { label: 'Confirmation Time', value: '<1 second', icon: Shield },
  { label: 'Cross-Chain', value: 'Multi-Chain', icon: Code },
];

const quadCoreLayers = [
  { 
    name: 'Layer 1: Prometheus AI Core', 
    description: 'Multi-Model Quantitative AI System trained on billions of financial data points',
    icon: Brain,
    color: 'from-green-dark to-primary',
    features: [
      'Holistic Financial Profile Analysis',
      'Dynamic Portfolio Optimization',
      'Early Warning & Risk Management',
      'Continuous Learning via RL',
      '24/7 Unbiased Financial Advisor'
    ]
  },
  { 
    name: 'Layer 2: Atlas Chain (L3)', 
    description: 'Application-specific blockchain optimized for wealth management',
    icon: Layers,
    color: 'from-primary to-green-medium',
    features: [
      '100,000+ TPS Speed',
      '<$0.001 Transaction Fees',
      '<1 Second Confirmation',
      'ZK-Rollups/Optimistic Rollups',
      'Cross-Chain Compatible'
    ]
  },
  { 
    name: 'Layer 3: DeFi & RWA Integration', 
    description: 'Real-world assets and decentralized finance protocols',
    icon: Building,
    color: 'from-green-medium to-gold-dark',
    features: [
      'Real Estate Tokenization',
      'Corporate Bond Tokens',
      'Renewable Energy Assets',
      'Lending/Borrowing Protocol',
      '8-15% APY Yield'
    ]
  },
  { 
    name: 'Layer 4: DePIN Oracles & IoT', 
    description: 'Physical infrastructure network with IoT verification',
    icon: Wifi,
    color: 'from-gold-dark to-gold',
    features: [
      'IoT Sensors for Assets',
      'Decentralized Oracles',
      'EV Charging Stations',
      'Decentralized WiFi/Hotspots',
      'Environmental Data Market'
    ]
  },
];

const rwaTypes = [
  { title: 'Real Estate', description: 'Fractional ownership via NFTs', icon: Building },
  { title: 'Corporate Bonds', description: 'Security token offerings', icon: Shield },
  { title: 'Renewable Energy', description: 'Solar farms, wind projects', icon: Zap },
  { title: 'Telecom Infrastructure', description: '5G/DePIN towers', icon: Wifi },
  { title: 'Carbon Credits', description: 'Environmental assets', icon: Globe },
];

const aiFeatures = [
  {
    title: 'Multi-Model System',
    description: 'Compact LLMs (7B parameters) with Reinforcement Learning and Deep Learning for comprehensive analysis',
    icon: Brain
  },
  {
    title: 'Portfolio Optimization',
    description: 'Goes beyond Modern Portfolio Theory with dynamic rebalancing based on real-time market conditions',
    icon: Gauge
  },
  {
    title: 'Risk Management',
    description: 'Proactive early warning system with continuous monitoring and adjustment',
    icon: Shield
  },
  {
    title: 'Continuous Learning',
    description: 'Self-improving through Reinforcement Learning, adapting to market changes 24/7',
    icon: Cpu
  }
];

export default function Technology() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-pattern-circuit opacity-20" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gradient-gold mb-6">
              Unified Quad-Core Architecture
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              First wealth management platform combining AI, Blockchain Layer 3, DeFi, RWA, and DePIN
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="text-center h-full">
                  <metric.icon className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <div className="font-serif text-2xl text-secondary mb-2">
                    {metric.value}
                  </div>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">
                    {metric.label}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quad-Core Architecture */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            title="Four Revolutionary Layers"
            subtitle="Integrated architecture for complete wealth management"
          />

          <div className="space-y-16">
            {quadCoreLayers.map((layer, index) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${layer.color} mb-6`}>
                    <layer.icon className="w-5 h-5 text-foreground" />
                    <span className="text-foreground font-medium text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold mb-4">
                    {layer.name}
                  </h2>
                  
                  <p className="text-xl text-foreground/80 mb-6">
                    {layer.description}
                  </p>

                  <ul className="space-y-3">
                    {layer.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <BadgeCheck className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <GlassCard goldBorder>
                    <layer.icon className="w-20 h-20 text-secondary mx-auto mb-4" />
                    <div className="h-2 bg-gradient-to-r ${layer.color} rounded-full w-full"></div>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prometheus AI Deep Dive */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-green" />
        <div className="absolute inset-0 bg-pattern-circuit opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            title="Prometheus AI: Your 24/7 Financial Brain"
            subtitle="Self-learning quantitative AI trained on billions of data points"
          />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <feature.icon className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="font-serif text-xl text-secondary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <GlassCard goldBorder className="max-w-3xl mx-auto">
              <h3 className="font-serif text-2xl text-secondary mb-4">
                Tech Stack
              </h3>
              <p className="text-lg text-foreground/80">
                Compact LLMs (7B parameters) • Reinforcement Learning • Deep Learning • 
                Real-time Market Data Processing • Sentiment Analysis Engine
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* RWA Tokenization */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Real-World Asset Tokenization"
            subtitle="Invest in physical assets starting from just $50"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rwaTypes.map((rwa, index) => (
              <motion.div
                key={rwa.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <rwa.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-serif text-lg text-secondary mb-2">
                    {rwa.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {rwa.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Web3 & Security */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold mb-6">
                Web3 & Digital Identity
              </h2>
              <ul className="space-y-4">
                {[
                  'Non-Custodial Wallets - "Not your keys, not your crypto"',
                  'Decentralized Identity (DID) with social recovery',
                  'Asset NFTs for instant, seamless trading',
                  'Full transparency and on-chain verification',
                  'Military-grade encryption and security'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Lock className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard goldBorder>
                <Shield className="w-20 h-20 text-secondary mx-auto mb-6" />
                <h3 className="font-serif text-2xl text-secondary text-center mb-4">
                  Bank-Level Security
                </h3>
                <p className="text-center text-foreground/80">
                  Multi-signature wallets, hardware security modules, and continuous 
                  audits ensure your assets are always protected.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold mb-6">
              Experience the Future of Wealth Management
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the revolution and take control of your financial future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/whitepaper">
                <Button variant="hero" size="lg">
                  Read Technical Whitepaper
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link to="/ecosystem">
                <Button variant="goldOutline" size="lg">
                  Explore Ecosystem
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
