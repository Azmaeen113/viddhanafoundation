import { motion } from 'framer-motion';
import { 
  Vote, 
  FileText, 
  Brain,
  CheckCircle,
  ArrowRight,
  Users,
  Zap,
  Shield,
  BarChart3
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/GlassCard';
import { SectionHeading } from '@/components/SectionHeading';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { Link } from 'react-router-dom';

const daoSteps = [
  { step: 1, title: 'Proposal Submission', description: 'Any BTCD holder can submit proposals', icon: FileText },
  { step: 2, title: 'AI Impact Analysis', description: 'AI evaluates proposal implications', icon: Brain },
  { step: 3, title: 'Community Voting', description: '1 BTCD = 1 Vote for 7 days', icon: Vote },
  { step: 4, title: 'Automatic Execution', description: 'Smart contracts implement results', icon: CheckCircle },
];

const proposalTypes = [
  { title: 'Protocol Upgrades', description: 'Technical improvements and new features', icon: Zap },
  { title: 'Treasury Allocation', description: 'Community fund distribution decisions', icon: BarChart3 },
  { title: 'Fee Structure', description: 'Transaction and service fee adjustments', icon: Shield },
  { title: 'Partnership Approvals', description: 'Strategic integration decisions', icon: Users },
];

const sampleProposals = [
  { id: 'BIP-001', title: 'Reduce DEX Trading Fees', status: 'Active', votes: 75, daysLeft: 3 },
  { id: 'BIP-002', title: 'Add Solana Bridge Support', status: 'Passed', votes: 92, daysLeft: 0 },
  { id: 'BIP-003', title: 'Increase AI Bot Capabilities', status: 'Pending', votes: 45, daysLeft: 5 },
];

export default function DAO() {
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
              True Decentralization Through Community Governance
            </h1>
            <p className="text-xl text-muted-foreground">
              1 BTCD = 1 Vote | Your Voice Matters
            </p>
          </motion.div>
        </div>
      </section>

      {/* How DAO Works */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="How Governance Works"
            subtitle="A transparent, AI-assisted decision-making process"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {daoSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < daoSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-secondary/50 to-transparent transform translate-x-1/2" />
                )}
                <GlassCard className="h-full text-center relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="font-serif text-xl text-secondary">{item.step}</span>
                  </div>
                  <item.icon className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <h3 className="font-serif text-lg text-secondary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Voting Power Calculator */}
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
                Your Voting Power
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                Every BTCD token represents one vote in governance decisions. 
                The more BTCD you hold, the greater your influence on the 
                project's direction.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-foreground/80">No minimum holding required to vote</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-foreground/80">Votes are weighted equally per token</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-foreground/80">Delegation supported for passive holders</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard goldBorder>
                <h3 className="font-serif text-xl text-secondary text-center mb-6">
                  Voting Power Calculator
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-muted-foreground text-sm mb-2">
                      Your BTCD Holdings
                    </label>
                    <input
                      type="number"
                      placeholder="Enter amount"
                      className="w-full px-4 py-3 bg-card/50 border border-secondary/20 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary/50"
                    />
                  </div>
                  <div className="p-4 bg-primary/20 rounded-lg text-center">
                    <p className="text-muted-foreground text-sm mb-1">Your Voting Power</p>
                    <p className="font-serif text-3xl text-secondary">1 BTCD = 1 Vote</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proposal Types */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="What Can Be Voted On"
            subtitle="Community decides on all major protocol decisions"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {proposalTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <type.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-serif text-lg text-secondary mb-2">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {type.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Assisted Voting */}
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
              <GlassCard className="p-8">
                <Brain className="w-16 h-16 text-secondary mb-6" />
                <h3 className="font-serif text-2xl text-secondary mb-4">
                  AI-Assisted Decision Making
                </h3>
                <p className="text-muted-foreground mb-6">
                  Before voting begins, our AI analyzes each proposal to provide:
                </p>
                <ul className="space-y-3">
                  {[
                    'Impact prediction on ecosystem',
                    'Risk assessment and mitigation',
                    'Historical comparison with similar proposals',
                    'Potential unintended consequences'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold mb-6">
                Informed Voting
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                AI analysis helps voters understand the full implications of 
                each proposal, enabling more informed decision-making while 
                maintaining complete decentralization.
              </p>
              <p className="text-muted-foreground">
                The AI provides analysis only — all decisions are made by 
                the community through voting. No AI can override or influence 
                the voting outcome.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sample Proposals */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Active Proposals"
            subtitle="See what the community is currently deciding"
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {sampleProposals.map((proposal, index) => (
              <motion.div
                key={proposal.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard>
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-secondary font-mono text-sm">{proposal.id}</span>
                        <span className={`px-2 py-1 rounded text-xs uppercase ${
                          proposal.status === 'Active' ? 'bg-gold/20 text-gold' :
                          proposal.status === 'Passed' ? 'bg-green-500/20 text-green-400' :
                          'bg-secondary/20 text-secondary'
                        }`}>
                          {proposal.status}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg text-foreground">
                        {proposal.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="font-serif text-2xl text-secondary">{proposal.votes}%</div>
                      <p className="text-muted-foreground text-sm">
                        {proposal.daysLeft > 0 ? `${proposal.daysLeft} days left` : 'Completed'}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 h-2 bg-card rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-gold rounded-full transition-all duration-500"
                      style={{ width: `${proposal.votes}%` }}
                    />
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {[
              { label: 'Total Proposals', value: 156 },
              { label: 'Active Voters', value: 45000 },
              { label: 'Avg Participation', value: 68, suffix: '%' },
              { label: 'Proposals Passed', value: 89, suffix: '%' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="text-center">
                  <div className="font-serif text-3xl text-secondary mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix || ''} />
                  </div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
