import { motion } from 'framer-motion';
import { 
  Target, 
  Heart, 
  Shield,
  Globe,
  Lightbulb,
  Users,
  Sparkles,
  ArrowRight,
  BadgeCheck,
  Clock,
  Rocket,
  Loader2
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/GlassCard';
import { SectionHeading } from '@/components/SectionHeading';
import { Link } from 'react-router-dom';

const viddhanLogo = '/Viddhana Logo.jpg';

const values = [
  { title: 'Decentralization', description: 'No central authority controls VIDDHANA', icon: Globe },
  { title: 'Accessibility', description: 'Zero barriers to entry for everyone', icon: Users },
  { title: 'Innovation', description: 'Pushing boundaries of what blockchain can do', icon: Lightbulb },
  { title: 'Community-First', description: 'Every decision prioritizes user benefits', icon: Heart },
  { title: 'Transparency', description: 'Open source and fully auditable', icon: Shield },
  { title: 'Sustainability', description: 'Built for generational impact', icon: Sparkles },
];

const impactGoals = [
  { year: '2026', goal: 'Empower early adopters with free mining', users: '1M+' },
  { year: '2030', goal: 'Become top 10 cryptocurrency by users', users: '100M+' },
  { year: '2035', goal: 'Standard financial infrastructure globally', users: '500M+' },
  { year: '2040+', goal: 'Global reserve asset consideration', users: '1B+' },
];

export default function About() {
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
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-full" />
                <img
                  src={viddhanLogo}
                  alt="VIDDHANA"
                  className="relative w-28 h-28 rounded-2xl border-4 border-secondary/50"
                />
              </div>
            </motion.div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gradient-gold mb-6">
              When the Future Meets Reality
            </h1>
            <p className="text-xl text-muted-foreground">
              Democratizing wealth management for 3.3 billion underbanked people globally
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <GlassCard goldBorder className="p-8 md:p-12">
              <Target className="w-16 h-16 text-secondary mx-auto mb-6" />
              <blockquote className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed mb-6">
                "VIDDHANA was born to solve the crisis of wealth democratization. We are creating a 
                Personal Wealth Operating System (PWOS) that allows every individual, regardless of 
                who or where they are, to fully master their assets, optimize returns with advanced AI, 
                and connect with a global community."
              </blockquote>
              <p className="text-secondary uppercase tracking-widest text-sm">
                VIDDHANA Mission Statement
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Development Status Section - NEW */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-green-dark/5 to-background" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            title="Real Technology, Real Progress"
            subtitle="VIDDHANA is actively being built by world-class experts"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: BadgeCheck, label: 'Atlas Chain L3', status: 'In Development', color: 'text-gold' },
              { icon: BadgeCheck, label: 'Prometheus AI Core', status: 'In Development', color: 'text-gold' },
              { icon: BadgeCheck, label: 'DeFi Integration', status: 'In Development', color: 'text-gold' },
              { icon: BadgeCheck, label: 'RWA Tokenization', status: 'Planning', color: 'text-muted-foreground' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="text-center h-full">
                  <item.icon className={`w-12 h-12 mx-auto mb-4 ${item.color}`} />
                  <h3 className="font-serif text-lg text-secondary mb-2">
                    {item.label}
                  </h3>
                  <p className={`text-sm font-semibold ${item.color}`}>
                    {item.status}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard goldBorder className="h-full">
                <Clock className="w-10 h-10 text-gold mb-4" />
                <h3 className="font-serif text-2xl text-secondary mb-3">
                  Viddhana Asset Management OS
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <Loader2 className="w-5 h-5 text-gold animate-spin" />
                  <p className="text-gold font-semibold">In Development</p>
                </div>
                <p className="text-foreground/80 mb-4">
                  AI-powered asset management operating system currently under active development. 
                  This revolutionary platform will predict risks and automatically adjust portfolios, 
                  representing a significant advancement over current tools.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard goldBorder className="h-full">
                <Rocket className="w-10 h-10 text-gold mb-4" />
                <h3 className="font-serif text-2xl text-secondary mb-3">
                  Platform Development Timeline
                </h3>
                <div className="space-y-3 text-foreground/80">
                  <p className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-secondary" />
                    <strong>Led by:</strong> MIT Professor of AI & Decentralized Finance
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-secondary" />
                    <strong>Target Launch:</strong> Q1-Q2 2026
                  </p>
                  <p className="flex items-center gap-2">
                    <BadgeCheck className="w-5 h-5 text-secondary" />
                    <strong>Status:</strong> Testnet Q1 2026, Mainnet Q3 2026
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
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
                VIDDHANA is <strong className="text-secondary">no longer just an idea</strong>—it is becoming a 
                real technological ecosystem, with foundational components already in place and a team 
                working continuously toward completion.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Professor's Note */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard goldBorder className="max-w-4xl mx-auto p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-secondary mb-2">Professor's Note</h3>
                  <p className="text-sm text-muted-foreground">MIT Professor of AI & Decentralized Finance</p>
                </div>
              </div>
              <blockquote className="text-lg text-foreground/90 italic mb-6 border-l-4 border-secondary/30 pl-6">
                "Throughout my two decades researching AI and decentralized finance at MIT, I've witnessed many technological waves. VIDDHANA represents the convergence of everything we've learned - a revolutionary leap that will empower billions to determine their own financial future."
              </blockquote>
              <p className="text-right text-secondary font-semibold">
                - Prof. Dr. Ethan V., MIT
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-green" />
        <div className="absolute inset-0 bg-pattern-circuit opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            title="The Problem We're Solving"
            subtitle="Three fundamental barriers prevent cryptocurrency mass adoption"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Traditional Finance Exclusion',
                stat: '2B+',
                description: 'Over 2 billion adults remain unbanked, excluded from the global financial system.'
              },
              {
                title: 'Crypto Complexity',
                stat: '90%',
                description: '90% of people find cryptocurrency too complex, technical, or risky to use.'
              },
              {
                title: 'Limited Utility',
                stat: '< 5%',
                description: 'Less than 5% of crypto holders use their assets for anything beyond speculation.'
              }
            ].map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full text-center">
                  <div className="font-serif text-5xl text-secondary mb-4">
                    {problem.stat}
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {problem.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold mb-6">
                The VIDDHANA Difference
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-secondary">01</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-secondary mb-2">Bitcoin Gave Us Digital Gold</h3>
                    <p className="text-muted-foreground">The foundation of decentralized value storage.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-secondary">02</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-secondary mb-2">Ethereum Gave Us Smart Contracts</h3>
                    <p className="text-muted-foreground">The ability to program money and build dApps.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0 border-2 border-secondary">
                    <span className="font-serif text-secondary">03</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-secondary mb-2">VIDDHANA Gives Us a Complete Financial Life</h3>
                    <p className="text-muted-foreground">
                      A unified ecosystem where anyone can earn, trade, communicate, 
                      and manage their entire financial existence.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8" goldBorder>
                <h3 className="font-serif text-2xl text-secondary text-center mb-6">
                  Our Philosophy
                </h3>
                <ul className="space-y-4">
                  {[
                    'Accessibility over exclusivity',
                    'Utility over speculation',
                    'Community ownership over corporate control',
                    'Long-term sustainability over short-term gains',
                    'Innovation through collaboration'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-green" />
        <div className="absolute inset-0 bg-pattern-circuit opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide every decision we make"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-serif text-lg text-secondary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Goals */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Our Impact Timeline"
            subtitle="The journey from launch to global financial infrastructure"
          />

          <div className="max-w-4xl mx-auto">
            {impactGoals.map((goal, index) => (
              <motion.div
                key={goal.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-8 mb-8"
              >
                <div className="w-24 text-right">
                  <span className="font-serif text-2xl text-secondary">{goal.year}</span>
                </div>
                <div className="w-4 h-4 rounded-full bg-secondary flex-shrink-0" />
                <GlassCard className="flex-1">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <p className="text-foreground">{goal.goal}</p>
                    <span className="font-serif text-xl text-secondary">{goal.users} users</span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold mb-6">
              Join Us in Building the Future
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              Be part of the movement that will define the next era of finance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl">
                Start Your Wealth Journey
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Link to="/whitepaper">
                <Button variant="heroOutline" size="xl">
                  Read Our Whitepaper
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-muted-foreground text-sm max-w-3xl mx-auto">
            <strong>Disclaimer:</strong> This website is for informational purposes only. 
            VDH tokens are utility tokens and do not represent investment contracts. 
            Cryptocurrency investments carry risk, and past performance is not indicative 
            of future results. Please conduct your own research.
          </p>
        </div>
      </section>
    </Layout>
  );
}
