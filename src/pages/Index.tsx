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
  ArrowRightLeft
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { GlassCard } from '@/components/GlassCard';
import { SectionHeading } from '@/components/SectionHeading';
import { CountdownTimer } from '@/components/CountdownTimer';
import btcdLogo from '@/assets/btcd-logo.jpg';

const stats = [
  { value: 21, suffix: 'B', label: 'Total Supply', icon: TrendingUp },
  { value: 65000, suffix: '+', label: 'TPS', icon: Zap },
  { value: 2.5, suffix: ' Year', label: 'Halving Cycle', decimals: 1, icon: Shield },
  { value: 0, suffix: ' Cost', label: 'Zero Entry', prefix: '$', icon: Users },
];

const problems = [
  {
    problem: 'Technical Complexity',
    solution: 'Frictionless Access',
    description: 'No coding, no wallets to manage. Just pure financial freedom.',
    icon: Cpu
  },
  {
    problem: 'Financial Exclusivity',
    solution: 'Earn Through Participation',
    description: 'Free mining. Free claiming. No barriers to entry.',
    icon: Wallet
  },
  {
    problem: 'Lack of Utility',
    solution: 'All-in-One Ecosystem',
    description: 'DEX, AI bots, social network, messaging — all integrated.',
    icon: Globe
  }
];

const ecosystemHighlights = [
  { title: 'BTCD DEX', description: 'Decentralized exchange with cross-chain swaps', icon: ArrowRightLeft },
  { title: 'AI Trading Bots', description: 'Trained on 10M+ transactions', icon: Brain },
  { title: 'SocialFi Network', description: 'Engage-to-Earn with full data ownership', icon: Users },
  { title: 'Webcall', description: 'Web3 communication with in-chat payments', icon: MessageSquare },
  { title: 'AI Marketplace', description: 'Web3 AppStore for AI models', icon: BarChart3 },
  { title: 'Asset Dashboard', description: 'Multi-chain portfolio management', icon: Wallet },
];

// Launch date: February 15, 2026
const launchDate = new Date('2026-02-15T00:00:00');

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-pattern-circuit opacity-30" />
        
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-burgundy-light/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
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
                  src={btcdLogo}
                  alt="BTCD Foundation"
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl border-4 border-secondary/50 shadow-xl"
                />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-serif text-4xl md:text-5xl lg:text-7xl text-gradient-gold mb-6 leading-tight glow-text"
            >
              BTCD Foundation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl md:text-2xl text-foreground/90 mb-4"
            >
              The Future of Decentralized Finance
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto"
            >
              A Complete Financial Operating System for 8 Billion People
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Button variant="hero" size="xl" className="min-w-[200px]">
                Join the Revolution
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Link to="/whitepaper">
                <Button variant="heroOutline" size="xl" className="min-w-[200px]">
                  Read Whitepaper
                </Button>
              </Link>
            </motion.div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <CountdownTimer targetDate={launchDate} label="Mainnet Launch: February 15, 2026" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-secondary/50 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-secondary"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-burgundy-dark/20 to-background" />
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

      {/* What is BTCD Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gradient-gold mb-6">
                More Than Cryptocurrency
              </h2>
              <p className="text-xl text-foreground/90 mb-4">
                A Financial Universe
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                BTCD transcends traditional blockchain limitations by integrating 
                high-performance infrastructure with AI, social networking, and 
                automated financial tools. We're democratizing finance for the 
                next billion users.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Native AI integration at protocol level',
                  'Zero-cost entry for all users',
                  'Complete ecosystem: DEX, social, messaging, AI',
                  'Sustainable tokenomics with 2.5-year halving'
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
                      <div className="w-2 h-2 rounded-full bg-secondary" />
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
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Central logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full animate-pulse" />
                    <img
                      src={btcdLogo}
                      alt="BTCD Ecosystem"
                      className="relative w-48 h-48 rounded-2xl border-4 border-secondary/30"
                    />
                  </div>
                </div>
                
                {/* Orbiting icons */}
                {[Brain, Globe, Wallet, Shield].map((Icon, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-16 h-16 rounded-xl bg-card/50 border border-secondary/20 flex items-center justify-center backdrop-blur-sm"
                    style={{
                      top: `${50 + 40 * Math.sin((index * Math.PI) / 2)}%`,
                      left: `${50 + 40 * Math.cos((index * Math.PI) / 2)}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      delay: index * 0.3,
                      repeat: Infinity
                    }}
                  >
                    <Icon className="w-8 h-8 text-secondary" />
                  </motion.div>
                ))}
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
            title="The Impossible Trilemma Solved"
            subtitle="BTCD addresses the three biggest barriers to cryptocurrency adoption"
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
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Seven Pillars of Financial Freedom"
            subtitle="A complete, integrated financial operating system"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystemHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-secondary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/ecosystem">
              <Button variant="goldOutline" size="lg">
                Explore Full Ecosystem
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-burgundy" />
        <div className="absolute inset-0 bg-pattern-circuit opacity-20" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gradient-gold mb-6">
              Start Mining Free BTCD Today
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              No investment required. Join 10 minutes from now.
            </p>
            <Button variant="hero" size="xl">
              Get Started Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
