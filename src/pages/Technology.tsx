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
  ArrowRightLeft
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/GlassCard';
import { SectionHeading } from '@/components/SectionHeading';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { Link } from 'react-router-dom';

const metrics = [
  { label: 'Throughput', value: '65,000+ TPS', icon: Gauge },
  { label: 'Block Time', value: '15 seconds', icon: Zap },
  { label: 'Consensus', value: 'Hybrid PoW/PoS', icon: Shield },
  { label: 'Smart Contracts', value: 'EVM Plus Compatible', icon: Code },
];

const layers = [
  { 
    name: 'Base Layer', 
    description: 'High-performance blockchain with 65,000+ TPS',
    icon: Layers,
    color: 'from-burgundy-dark to-primary'
  },
  { 
    name: 'Smart Contract Layer', 
    description: 'EVM Plus with gas fee abstraction',
    icon: Code,
    color: 'from-primary to-burgundy-light'
  },
  { 
    name: 'AI Integration Layer', 
    description: 'Native AI at protocol level',
    icon: Brain,
    color: 'from-burgundy-light to-gold-dark'
  },
  { 
    name: 'Social Network Layer', 
    description: 'Engage-to-Earn social infrastructure',
    icon: Shield,
    color: 'from-gold-dark to-gold'
  },
  { 
    name: 'Application Layer', 
    description: 'DEX, Marketplace, Dashboard, and more',
    icon: Cpu,
    color: 'from-gold to-gold-light'
  },
];

const evmFeatures = [
  {
    title: 'Gas Fee Abstraction',
    description: 'Users never worry about gas. The protocol handles fee optimization automatically.',
    icon: Zap
  },
  {
    title: 'AI-Optimized Contracts',
    description: 'Smart contracts that learn and adapt based on usage patterns and market conditions.',
    icon: Brain
  },
  {
    title: 'Modular via DAO',
    description: 'Community-governed upgrades allow smart contract evolution without hard forks.',
    icon: Lock
  }
];

const aiCapabilities = [
  'AI-Powered Trading Bots with 10M+ transaction training',
  'Market Sentiment Analysis from 2,000+ sources',
  'Dynamic Risk Management algorithms',
  'Predictive analytics for DeFi opportunities',
  'Automated portfolio rebalancing',
  'Natural language trading commands'
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
              Advanced Architecture for Mass Adoption
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              First blockchain with native AI integration at protocol level
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Development Status Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <GlassCard goldBorder className="p-8 text-center">
              <h2 className="font-serif text-2xl md:text-3xl text-gradient-gold mb-4">
                Real Technology, Real Products
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                BTCD has completed foundational components that are rare in new blockchain projects. 
                Completing all four main components (Layer 1, Swap, DEX, AI Trade) is usually seen 
                only in large-scale projects like Solana, Cosmos, or Ethereum.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-secondary" />
                  <span className="text-foreground">Layer 1 Blockchain</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-secondary" />
                  <span className="text-foreground">Swap Platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-secondary" />
                  <span className="text-foreground">DEX Platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-secondary" />
                  <span className="text-foreground">AI Bot Trade</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

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

      {/* Completed Components Details */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            title="Completed Core Components"
            subtitle="Operational platforms built by our ~15 person technical team"
          />

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard goldBorder className="h-full">
                <div className="flex items-start gap-4 mb-4">
                  <Layers className="w-10 h-10 text-secondary flex-shrink-0" />
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-serif text-xl text-secondary">
                        BTCD Layer 1 Blockchain
                      </h3>
                      <BadgeCheck className="w-5 h-5 text-gold" />
                    </div>
                    <p className="text-gold font-semibold text-sm mb-3">COMPLETED</p>
                  </div>
                </div>
                <p className="text-foreground/80 mb-4">
                  An independent Layer 1 blockchain is a significant achievement requiring deep knowledge 
                  of consensus, security, and networking. This indicates a highly capable technical team.
                </p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>• Own blockchain infrastructure</li>
                  <li>• Runs independently from other networks</li>
                  <li>• Hybrid PoW/PoS consensus mechanism</li>
                </ul>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <GlassCard goldBorder className="h-full">
                <div className="flex items-start gap-4 mb-4">
                  <ArrowRightLeft className="w-10 h-10 text-secondary flex-shrink-0" />
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-serif text-xl text-secondary">
                        Swap Platform
                      </h3>
                      <BadgeCheck className="w-5 h-5 text-gold" />
                    </div>
                    <p className="text-gold font-semibold text-sm mb-3">COMPLETED</p>
                  </div>
                </div>
                <p className="text-foreground/80 mb-4">
                  Supports cross-chain transactions, low fees, and fast processing. Tested and operational, 
                  showing excellent integration capabilities across multiple blockchain networks.
                </p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>• Cross-chain token exchanges</li>
                  <li>• AI-optimized routing for best prices</li>
                  <li>• Transaction fees under $0.001</li>
                </ul>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <GlassCard goldBorder className="h-full">
                <div className="flex items-start gap-4 mb-4">
                  <Code className="w-10 h-10 text-secondary flex-shrink-0" />
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-serif text-xl text-secondary">
                        DEX Platform
                      </h3>
                      <BadgeCheck className="w-5 h-5 text-gold" />
                    </div>
                    <p className="text-gold font-semibold text-sm mb-3">COMPLETED</p>
                  </div>
                </div>
                <p className="text-foreground/80 mb-4">
                  Decentralized exchange operational, similar to Uniswap but on BTCD's own platform. 
                  Decentralized transactions with no intermediaries using liquidity pools—this is core to DeFi.
                </p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>• Fully decentralized with no custody</li>
                  <li>• Liquidity pool-based trading</li>
                  <li>• No KYC required</li>
                </ul>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <GlassCard goldBorder className="h-full">
                <div className="flex items-start gap-4 mb-4">
                  <Brain className="w-10 h-10 text-secondary flex-shrink-0" />
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-serif text-xl text-secondary">
                        AI Bot Trade
                      </h3>
                      <BadgeCheck className="w-5 h-5 text-gold" />
                    </div>
                    <p className="text-gold font-semibold text-sm mb-3">COMPLETED</p>
                  </div>
                </div>
                <p className="text-foreground/80 mb-4">
                  Automated trading system with real AI model (machine learning, market data processing). 
                  Not just "automated" but learns and adjusts strategies according to the market.
                </p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>• Trained on 10M+ transactions</li>
                  <li>• Sentiment analysis from 2,000+ sources</li>
                  <li>• Self-adjusting strategies</li>
                </ul>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Architecture Layers */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            title="Multi-Layer Architecture"
            subtitle="Purpose-built layers for performance, flexibility, and innovation"
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {layers.map((layer, index) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="flex items-center gap-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center flex-shrink-0`}>
                    <layer.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-secondary mb-1">
                      {layer.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {layer.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EVM Plus */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="EVM Plus Innovations"
            subtitle="Beyond standard Ethereum Virtual Machine capabilities"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {evmFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full text-center" goldBorder>
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary/50 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-secondary" />
                  </div>
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
        </div>
      </section>

      {/* Native AI Integration */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-burgundy" />
        <div className="absolute inset-0 bg-pattern-circuit opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold mb-6">
                Native AI Integration
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                BTCD is the first blockchain to integrate AI capabilities directly 
                at the protocol level, enabling intelligent automation across the 
                entire ecosystem.
              </p>
              <ul className="space-y-4">
                {aiCapabilities.map((capability, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <BadgeCheck className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground/80">{capability}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <GlassCard className="p-8">
                <div className="text-center mb-8">
                  <Brain className="w-20 h-20 text-secondary mx-auto mb-4" />
                  <h3 className="font-serif text-2xl text-secondary">AI Processing Power</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="font-serif text-3xl text-secondary mb-1">
                      <AnimatedCounter end={10} suffix="M+" />
                    </div>
                    <p className="text-muted-foreground text-sm">Training Transactions</p>
                  </div>
                  <div className="text-center">
                    <div className="font-serif text-3xl text-secondary mb-1">
                      <AnimatedCounter end={5000} suffix="+" />
                    </div>
                    <p className="text-muted-foreground text-sm">Market Indicators</p>
                  </div>
                  <div className="text-center">
                    <div className="font-serif text-3xl text-secondary mb-1">
                      <AnimatedCounter end={2000} suffix="+" />
                    </div>
                    <p className="text-muted-foreground text-sm">Data Sources</p>
                  </div>
                  <div className="text-center">
                    <div className="font-serif text-3xl text-secondary mb-1">
                      24/7
                    </div>
                    <p className="text-muted-foreground text-sm">Active Monitoring</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consensus Deep Dive */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Hybrid Consensus Mechanism"
            subtitle="The best of Proof of Work and Proof of Stake combined"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <GlassCard>
              <Shield className="w-12 h-12 text-secondary mb-4" />
              <h3 className="font-serif text-xl text-secondary mb-3">
                ASIC-Resistant Mining
              </h3>
              <p className="text-muted-foreground">
                Our mining algorithm ensures fair distribution by being resistant 
                to specialized hardware, allowing anyone to participate.
              </p>
            </GlassCard>

            <GlassCard>
              <Zap className="w-12 h-12 text-secondary mb-4" />
              <h3 className="font-serif text-xl text-secondary mb-3">
                Energy Efficient
              </h3>
              <p className="text-muted-foreground">
                Hybrid consensus uses 99.9% less energy than pure PoW while 
                maintaining decentralization and security.
              </p>
            </GlassCard>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/whitepaper">
              <Button variant="gold" size="lg">
                Read Technical Details
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
