import { motion } from 'framer-motion';
import { 
  ArrowRightLeft, 
  Brain, 
  Users, 
  MessageSquare,
  Store,
  Wallet,
  RefreshCw,
  ArrowRight,
  Zap,
  Shield,
  Globe
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/GlassCard';
import { SectionHeading } from '@/components/SectionHeading';
import { Link } from 'react-router-dom';

const ecosystemComponents = [
  {
    id: 'dex',
    title: 'BTCD DEX',
    icon: ArrowRightLeft,
    description: 'Fully decentralized exchange with no custody',
    features: [
      'Cross-chain swaps (BTC, ETH, BSC, Solana)',
      'AI-optimized routing for best prices',
      'Transaction fees under $0.001',
      'No KYC required'
    ],
    gradient: 'from-burgundy-dark to-primary'
  },
  {
    id: 'ai-bots',
    title: 'AI Trading Bots',
    icon: Brain,
    description: 'Trained on 10M+ transactions, 5,000 indicators',
    features: [
      'Automated portfolio rebalancing',
      'Sentiment analysis from 2,000+ sources',
      'Dynamic risk management',
      'Natural language trading'
    ],
    gradient: 'from-primary to-burgundy-light'
  },
  {
    id: 'socialfi',
    title: 'SocialFi Network',
    icon: Users,
    description: 'Engage-to-Earn model with full data ownership',
    features: [
      'Direct monetization of content',
      'Zero advertising interference',
      'Creator reward distribution',
      'Community governance'
    ],
    gradient: 'from-burgundy-light to-gold-dark'
  },
  {
    id: 'webcall',
    title: 'Webcall',
    icon: MessageSquare,
    description: 'Web3 communication protocol',
    features: [
      'End-to-end encryption',
      'In-chat crypto payments',
      'AI assistant integration',
      'Real-time translation'
    ],
    gradient: 'from-gold-dark to-gold'
  },
  {
    id: 'marketplace',
    title: 'AI App Marketplace',
    icon: Store,
    description: "Web3's AppStore for AI models",
    features: [
      '80/20 revenue split for developers',
      'Rent or buy AI agents',
      'Developer SDK and tools',
      'Community-rated apps'
    ],
    gradient: 'from-gold to-gold-light'
  },
  {
    id: 'dashboard',
    title: 'Asset Dashboard',
    icon: Wallet,
    description: 'Multi-chain asset management',
    features: [
      'Track all crypto, DeFi, NFT assets',
      'Automated tax reporting',
      'Performance analytics',
      'Security monitoring'
    ],
    gradient: 'from-gold-light to-secondary'
  },
  {
    id: 'swap',
    title: 'Simple Swap',
    icon: RefreshCw,
    description: '3-step token exchange',
    features: [
      'Best price routing algorithm',
      'Multiple chain support',
      'Minimal transaction fees',
      'Instant confirmation'
    ],
    gradient: 'from-secondary to-gold'
  }
];

const benefits = [
  { icon: Zap, title: 'Lightning Fast', description: '65,000+ TPS for instant transactions' },
  { icon: Shield, title: 'Secure', description: 'Military-grade encryption and audited contracts' },
  { icon: Globe, title: 'Accessible', description: 'Zero-cost entry for everyone worldwide' }
];

export default function Ecosystem() {
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
              Seven Pillars of Financial Freedom
            </h1>
            <p className="text-xl text-muted-foreground">
              A complete, integrated financial operating system
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-primary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-secondary">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Components */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {ecosystemComponents.map((component, index) => (
              <motion.div
                key={component.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${component.gradient} mb-6`}>
                    <component.icon className="w-5 h-5 text-foreground" />
                    <span className="text-foreground font-medium text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold mb-4">
                    {component.title}
                  </h2>
                  
                  <p className="text-xl text-foreground/80 mb-6">
                    {component.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {component.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <GlassCard className="aspect-video flex items-center justify-center" goldBorder>
                    <div className="text-center">
                      <div className={`w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${component.gradient} flex items-center justify-center`}>
                        <component.icon className="w-12 h-12 text-foreground" />
                      </div>
                      <p className="text-secondary font-serif text-xl">{component.title}</p>
                      <p className="text-muted-foreground text-sm mt-2">Coming with Mainnet</p>
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Diagram */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-burgundy" />
        <div className="absolute inset-0 bg-pattern-circuit opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            title="Unified Ecosystem"
            subtitle="All components interconnected with BTCD as the central fuel"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <GlassCard className="p-8">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {ecosystemComponents.slice(0, 6).map((component, index) => (
                  <motion.div
                    key={component.id}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square flex flex-col items-center justify-center p-4 rounded-xl bg-card/50 border border-secondary/20"
                  >
                    <component.icon className="w-8 h-8 text-secondary mb-2" />
                    <p className="text-xs text-center text-muted-foreground">{component.title}</p>
                  </motion.div>
                ))}
                <div className="col-span-3 md:col-span-1 aspect-square flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-gold">
                  <span className="font-serif text-2xl text-background font-bold">BTCD</span>
                  <p className="text-xs text-background/80">Central Token</p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square flex flex-col items-center justify-center p-4 rounded-xl bg-card/50 border border-secondary/20"
                >
                  <RefreshCw className="w-8 h-8 text-secondary mb-2" />
                  <p className="text-xs text-center text-muted-foreground">Simple Swap</p>
                </motion.div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/tokenomics">
              <Button variant="gold" size="lg">
                View Tokenomics
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
