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
  Globe,
  BadgeCheck,
  Sparkles,
  Building
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/GlassCard';
import { SectionHeading } from '@/components/SectionHeading';
import { FlowDiagram } from '@/components/FlowDiagram';
import { SplitCard } from '@/components/SplitCard';
import { Link } from 'react-router-dom';

const ecosystemComponents = [
  {
    id: 'dex',
    title: 'DeFi Hub',
    icon: ArrowRightLeft,
    description: 'Optimized DeFi protocols with AI-powered strategies',
    features: [
      'Cross-chain swaps (BTC, ETH, BSC, Solana)',
      'AI-optimized routing for best prices',
      'Transaction fees under $0.001',
      'No KYC required'
    ],
    gradient: 'from-green-dark to-primary'
  },
  {
    id: 'prometheus-ai',
    title: 'Prometheus AI Core',
    icon: Brain,
    description: 'Personalized wealth advisor for the unbanked',
    features: [
      'Automated portfolio rebalancing',
      'Sentiment analysis from 2,000+ sources',
      'Dynamic risk management',
      'Natural language trading'
    ],
    gradient: 'from-primary to-green-light'
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
    gradient: 'from-green-light to-gold-dark'
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
    id: 'rwa',
    title: 'RWA Platform',
    icon: Building,
    description: 'Real-world asset tokenization',
    features: [
      'Fractional real estate',
      'Renewable energy projects',
      'Corporate bonds',
      'Low $50 minimum'
    ],
    gradient: 'from-secondary to-gold'
  }
];

const flowSteps = ecosystemComponents.map(comp => ({
  icon: <comp.icon size={24} />,
  label: comp.title,
  description: comp.description.split(' ').slice(0, 3).join(' ')
}));

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

      {/* Ecosystem Flow Diagram */}
      <section className="py-24 bg-green-darkest">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Integrated Ecosystem"
            subtitle="All components working seamlessly together"
          />
          <FlowDiagram steps={flowSteps} size="md" />
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
        <div className="absolute inset-0 bg-gradient-green" />
        <div className="absolute inset-0 bg-pattern-circuit opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            title="Unified Ecosystem"
            subtitle="All components interconnected with VDH as the central fuel"
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
                  <span className="font-serif text-2xl text-background font-bold">VDH</span>
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
        </div>
      </section>

      {/* Web2 vs Web3 vs VIDDHANA Comparison */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="VIDDHANA vs Traditional Solutions"
            subtitle="See how VIDDHANA surpasses both Web2 and current Web3 platforms"
          />

          <div className="space-y-8">
            {/* Example 1: Financial Trading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard goldBorder>
                <h3 className="font-serif text-2xl text-secondary mb-6">
                  Example 1: Financial Trading – Who Wins?
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground/80">Web2 (Robinhood)</h4>
                    <p className="text-sm text-foreground/60">
                      Fast trading, but the company controls everything. Can block orders, limit trades.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground/80">Web3 (Uniswap)</h4>
                    <p className="text-sm text-foreground/60">
                      Decentralized, but manual trading, no AI assistance.
                    </p>
                  </div>
                  <div className="space-y-3 bg-gold/10 p-4 rounded-lg border border-gold/30">
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="w-5 h-5 text-gold" />
                      <h4 className="font-semibold text-gold">VIDDHANA</h4>
                    </div>
                    <p className="text-sm text-foreground/80">
                      Has DEX + AI Bot Trade → Automates trading, optimizes profits, no intervention needed.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Example 2: Asset Management */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard goldBorder>
                <h3 className="font-serif text-2xl text-secondary mb-6">
                  Example 2: Personal Asset Management
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground/80">Web2 (Mint, Personal Capital)</h4>
                    <p className="text-sm text-foreground/60">
                      Gathers account data but does not allow control.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground/80">Web3 (DeBank, Zapper)</h4>
                    <p className="text-sm text-foreground/60">
                      Displays assets but lacks AI management.
                    </p>
                  </div>
                  <div className="space-y-3 bg-gold/10 p-4 rounded-lg border border-gold/30">
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="w-5 h-5 text-gold" />
                      <h4 className="font-semibold text-gold">VIDDHANA (Wealth OS)</h4>
                    </div>
                    <p className="text-sm text-foreground/80">
                      Developing an AI-based asset management OS that predicts risks and automatically adjusts portfolios.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Example 3: Multi-Asset Trading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard goldBorder>
                <h3 className="font-serif text-2xl text-secondary mb-6">
                  Example 3: Multi-Asset Trading Platforms
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground/80">Web2 (TradingView)</h4>
                    <p className="text-sm text-foreground/60">
                      Only analysis, no direct trading capabilities.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground/80">Web3 (1inch, Matcha)</h4>
                    <p className="text-sm text-foreground/60">
                      Multi-chain trading, but lacks optimization AI.
                    </p>
                  </div>
                  <div className="space-y-3 bg-gold/10 p-4 rounded-lg border border-gold/30">
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="w-5 h-5 text-gold" />
                      <h4 className="font-semibold text-gold">VIDDHANA</h4>
                    </div>
                    <p className="text-sm text-foreground/80">
                      Multi-asset trading + strategy optimization AI + automation → A "comprehensive financial assistant".
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Example 4: Financial Messaging */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard goldBorder>
                <h3 className="font-serif text-2xl text-secondary mb-6">
                  Example 4: Integrated Financial Messaging (Webcall)
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground/80">Web2 (WhatsApp)</h4>
                    <p className="text-sm text-foreground/60">
                      Sending money via e-wallet, but token integration missing.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground/80">Web3 (Status)</h4>
                    <p className="text-sm text-foreground/60">
                      Offers decentralized messaging, wallet integration.
                    </p>
                  </div>
                  <div className="space-y-3 bg-gold/10 p-4 rounded-lg border border-gold/30">
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="w-5 h-5 text-gold" />
                      <h4 className="font-semibold text-gold">VIDDHANA (Webcall)</h4>
                    </div>
                    <p className="text-sm text-foreground/80">
                      Integrate messaging + transfer VDH + trade directly within messages → A breakthrough feature not found in any current platform.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Example 5: SocialFi */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard goldBorder>
                <h3 className="font-serif text-2xl text-secondary mb-6">
                  Example 5: Generating Revenue from Content (SocialFi)
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground/80">Web2 (TikTok, YouTube)</h4>
                    <p className="text-sm text-foreground/60">
                      Create content, but the company retains 70-90% of revenue.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground/80">Web3 (Lens, Farcaster)</h4>
                    <p className="text-sm text-foreground/60">
                      Create content, earn tokens, but lacks real monetization mechanisms.
                    </p>
                  </div>
                  <div className="space-y-3 bg-gold/10 p-4 rounded-lg border border-gold/30">
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="w-5 h-5 text-gold" />
                      <h4 className="font-semibold text-gold">VIDDHANA</h4>
                    </div>
                    <p className="text-sm text-foreground/80">
                      Users create content → rewarded with VDH, can convert to real money, or use for wealth management. Building a genuinely valuable SocialFi model.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <GlassCard className="max-w-3xl mx-auto p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-gold" />
                <p className="text-xl text-secondary font-semibold">
                  Conclusion:
                </p>
              </div>
              <p className="text-lg text-foreground/80">
                VIDDHANA is building the first AI-powered wealth management platform on blockchain, 
                outperforming existing Web2 and Web3 options with intelligent automation, 
                comprehensive features, and genuine utility.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8"
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
