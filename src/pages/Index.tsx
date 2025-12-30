import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Users, 
  TrendingUp, 
  Shield,
  ArrowRight,
  Cpu,
  Brain,
  Globe,
  Wallet,
  MessageSquare,
  BarChart3,
  ArrowRightLeft,
  Youtube,
  BadgeCheck,
  Store,
  Building
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { GlassCard } from '@/components/GlassCard';
import { SectionHeading } from '@/components/SectionHeading';
import { CountdownTimer } from '@/components/CountdownTimer';
import { FlowDiagram } from '@/components/FlowDiagram';
import { SplitCard } from '@/components/SplitCard';

const viddhanLogo = '/Viddhana Logo.jpg';

const stats = [
  { value: 3.3, suffix: 'B', label: 'Underbanked People Worldwide', icon: Users, decimals: 1 },
  { value: 100000, suffix: '+', label: 'Transactions Per Second', icon: Zap },
  { value: 100, suffix: 'B', label: 'AUM Target by 2030', prefix: '$', icon: TrendingUp },
  { value: 8, suffix: '-15% APY', label: 'Average Returns', icon: Shield },
];

const problems = [
  {
    problem: 'Loss of Control',
    solution: 'True Asset Ownership',
    description: 'Your money in banks isn\'t truly yours - banks use it for profit while you earn minimal interest. With VIDDHANA, you own and control everything.',
    icon: Wallet
  },
  {
    problem: 'Geographic Barriers',
    solution: 'Borderless Access',
    description: 'Cross-border transfers cost 5-10% and take days. High-yield investments require $100K+ minimums. VIDDHANA removes all barriers.',
    icon: Globe
  },
  {
    problem: 'Inflation Erosion',
    solution: '8-15% APY Returns',
    description: 'Traditional 3% savings rates lose money against 5-10% inflation. VIDDHANA offers AI-optimized returns that outpace inflation.',
    icon: TrendingUp
  }
];

const corePillars = [
  { 
    title: 'Atlas Chain (Layer 3)', 
    description: '100,000+ TPS, <$0.001 fees, <1 second confirmation', 
    icon: Cpu,
    features: [
      'Lightning-fast transaction processing',
      'Near-zero transaction costs',
      'Instant settlement finality',
      'EVM compatible infrastructure',
      'Cross-chain interoperability'
    ]
  },
  { 
    title: 'Prometheus AI Core', 
    description: '24/7 self-learning quantitative financial brain', 
    icon: Brain,
    features: [
      'Multi-model AI architecture',
      'Real-time market analysis',
      'Dynamic portfolio optimization',
      'Risk management automation',
      'Continuous learning system'
    ]
  },
  { 
    title: 'DeFi Integration', 
    description: '8-15% APY with AI-optimized strategies', 
    icon: BarChart3,
    features: [
      'Automated yield farming',
      'Liquidity pool optimization',
      'Cross-protocol arbitrage',
      'Risk-adjusted returns',
      'Multi-chain DeFi access'
    ]
  },
  { 
    title: 'RWA Tokenization', 
    description: 'Invest in real estate, solar farms, bonds with $50', 
    icon: BadgeCheck,
    features: [
      'Fractional real estate ownership',
      'Renewable energy investments',
      'Tokenized corporate bonds',
      'Low minimum investment ($50)',
      'Legal compliance framework'
    ]
  },
  { 
    title: 'SocialFi & DePIN', 
    description: 'Community-driven wealth building with passive income', 
    icon: Users,
    features: [
      'Engage-to-earn rewards',
      'Decentralized infrastructure',
      'Community governance',
      'Data ownership rights',
      'Passive income streams'
    ]
  },
];

const ecosystemComponents = [
  { icon: <ArrowRightLeft size={24} />, label: 'DeFi Hub', description: 'Decentralized exchange' },
  { icon: <Brain size={24} />, label: 'Prometheus AI', description: 'AI advisor' },
  { icon: <Users size={24} />, label: 'SocialFi', description: 'Social network' },
  { icon: <MessageSquare size={24} />, label: 'Webcall', description: 'Web3 communication' },
  { icon: <Store size={24} />, label: 'AI Marketplace', description: 'App store' },
  { icon: <Wallet size={24} />, label: 'Asset Dashboard', description: 'Portfolio tracker' },
  { icon: <Building size={24} />, label: 'RWA Platform', description: 'Real assets' },
];

// Launch date: Q1 2026
const launchDate = new Date('2026-03-01T00:00:00');

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ background: 'linear-gradient(180deg, #12251f 0%, #1a3a2e 100%)' }}>
        {/* Animated Background Layers */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-pattern-circuit" style={{ backgroundSize: '60px 60px' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#12251f]/30 via-transparent to-[#1a3a2e]/20 animate-gradient-pulse" />
        
        {/* Animated orbs with logo-matching green */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-float" style={{ background: 'radial-gradient(circle, rgba(74, 124, 89, 0.2) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl animate-float" style={{ background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)', animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl animate-pulse" style={{ background: 'radial-gradient(circle, rgba(18, 37, 31, 0.4) 0%, transparent 70%)', animationDelay: '2s' }} />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-full animate-pulse" />
                <img
                  src={viddhanLogo}
                  alt="VIDDHANA"
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl border-4 border-secondary/50 shadow-xl"
                />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-serif text-3xl md:text-5xl lg:text-6xl text-gradient-gold mb-6 leading-tight glow-text"
            >
              VIDDHANA: THE WEALTH MANAGEMENT REVOLUTION
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl md:text-2xl text-foreground/90 mb-4"
            >
              Your Personal Wealth Operating System (PWOS) - Powered by AI, Secured by Blockchain
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto"
            >
              The first comprehensive ecosystem combining Blockchain Layer 3, Quantitative AI, DeFi, SocialFi, and DePIN to democratize wealth management for the global middle class.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Button variant="hero" size="xl" className="min-w-[200px]">
                Start Your Journey
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <a href="/VIDDHANA WHITEPAPERE.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="heroOutline" size="xl" className="min-w-[200px]">
                  Read Whitepaper
                </Button>
              </a>
            </motion.div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <CountdownTimer targetDate={launchDate} label="Platform Launch: Q1 2026" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-green-dark/20 to-background" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="text-center h-full">
                  <stat.icon className="w-8 h-8 text-secondary mx-auto mb-4" />
                  <div className="font-serif text-3xl md:text-4xl text-secondary font-bold mb-2">
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      decimals={stat.decimals}
                    />
                  </div>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">
                    {stat.label}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What is VIDDHANA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-green" />
        <div className="absolute inset-0 bg-pattern-circuit opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gradient-gold mb-6">
                Your Personal Wealth Operating System
              </h2>
              <p className="text-xl text-foreground/90 mb-4">
                Democratizing Finance for 3.3 Billion People
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                VIDDHANA combines cutting-edge blockchain technology with advanced AI to create 
                a revolutionary wealth management platform. Led by MIT Professor of AI & DeFi, 
                we're building the financial infrastructure for the global middle class.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Atlas Chain Layer 3 - 100,000+ TPS blockchain',
                  'Prometheus AI - Self-learning quantitative brain',
                  'DeFi Integration - 8-15% APY returns',
                  'RWA Tokenization - Real-world assets from $50',
                  'SocialFi & DePIN - Community-driven wealth'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <BadgeCheck className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-foreground/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link to="/technology">
                <Button variant="gold">
                  Explore Technology
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto flex items-center justify-center">
                {/* Central logo - 2x bigger */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full animate-pulse" />
                  <img
                    src={viddhanLogo}
                    alt="VIDDHANA Ecosystem"
                    className="relative w-96 h-96 rounded-2xl border-4 border-secondary/30"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Solved Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            title="The Current System Is Failing You"
            subtitle="VIDDHANA solves the three biggest barriers to wealth creation"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((item, index) => (
              <motion.div
                key={item.problem}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <GlassCard className="h-full text-center" goldBorder>
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary/50 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-secondary" />
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-muted-foreground line-through mb-2">
                      {item.problem}
                    </p>
                    <ArrowRight className="w-4 h-4 text-secondary mx-auto mb-2" />
                    <p className="font-serif text-xl text-secondary">
                      {item.solution}
                    </p>
                  </div>

                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Preview */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-green-darkest" />
        <div className="absolute inset-0 bg-pattern-circuit opacity-10" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            title="Complete Ecosystem at Your Fingertips"
            subtitle="7 integrated platforms working together for your financial success"
          />

          {/* Ecosystem Flow Diagram */}
          <FlowDiagram steps={ecosystemComponents} size="md" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/ecosystem">
              <Button variant="gold" size="lg">
                Explore Full Ecosystem
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Core Pillars - Redesigned with Alternating Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Five Core Pillars of Financial Freedom"
            subtitle="Revolutionary technology powering the future of wealth management"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corePillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SplitCard
                  title={pillar.title}
                  icon={<pillar.icon size={32} />}
                  className="h-full"
                >
                  <p className="text-gold mb-4 font-semibold">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-sm">
                        <BadgeCheck className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </SplitCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/technology">
              <Button variant="goldOutline" size="lg">
                Deep Dive Into Technology
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-green" />
        <div className="absolute inset-0 bg-pattern-circuit opacity-20" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gradient-gold mb-6">
              Start Your Wealth Journey Today
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              Join the revolution democratizing finance for 3.3 billion people. Investment starts from just $50.
            </p>
            <Button variant="hero" size="xl">
              Get Started Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* MIT Professor Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-green-dark/5 to-background" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-green rounded-full">
                <BadgeCheck className="w-12 h-12 text-gold" />
              </div>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gradient-gold mb-4">
              Led by MIT Professor
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              A specialized project by a Professor of Artificial Intelligence & Decentralized Finance, 
              Massachusetts Institute of Technology (MIT)
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/about">
                <Button variant="goldOutline" size="lg" className="group">
                  Learn More About Our Team
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
