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
  BarChart3,
  Wallet,
  MessageSquare
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/GlassCard';
import { SectionHeading } from '@/components/SectionHeading';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { CircularDiagram } from '@/components/CircularDiagram';
import { HorizontalTimeline } from '@/components/HorizontalTimeline';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function DAO() {
  const { t } = useTranslation();

  const daoSteps = [
    { step: 1, title: t('dao.steps.step1.title'), description: t('dao.steps.step1.description'), icon: FileText },
    { step: 2, title: t('dao.steps.step2.title'), description: t('dao.steps.step2.description'), icon: Brain },
    { step: 3, title: t('dao.steps.step3.title'), description: t('dao.steps.step3.description'), icon: Vote },
    { step: 4, title: t('dao.steps.step4.title'), description: t('dao.steps.step4.description'), icon: CheckCircle },
  ];

  const governancePhases = [
    {
      icon: <FileText size={24} />,
      quarter: t('dao.phases.phase1.quarter'),
      title: t('dao.phases.phase1.title'),
      status: 'upcoming' as const,
      milestones: [t('dao.phases.phase1.milestone1'), t('dao.phases.phase1.milestone2'), t('dao.phases.phase1.milestone3')]
    },
    {
      icon: <MessageSquare size={24} />,
      quarter: t('dao.phases.phase2.quarter'),
      title: t('dao.phases.phase2.title'),
      status: 'upcoming' as const,
      milestones: [t('dao.phases.phase2.milestone1'), t('dao.phases.phase2.milestone2'), t('dao.phases.phase2.milestone3')]
    },
    {
      icon: <Vote size={24} />,
      quarter: t('dao.phases.phase3.quarter'),
      title: t('dao.phases.phase3.title'),
      status: 'planned' as const,
      milestones: [t('dao.phases.phase3.milestone1'), t('dao.phases.phase3.milestone2'), t('dao.phases.phase3.milestone3')]
    },
    {
      icon: <BarChart3 size={24} />,
      quarter: t('dao.phases.phase4.quarter'),
      title: t('dao.phases.phase4.title'),
      status: 'planned' as const,
      milestones: [t('dao.phases.phase4.milestone1'), t('dao.phases.phase4.milestone2'), t('dao.phases.phase4.milestone3')]
    },
    {
      icon: <CheckCircle size={24} />,
      quarter: t('dao.phases.phase5.quarter'),
      title: t('dao.phases.phase5.title'),
      status: 'vision' as const,
      milestones: [t('dao.phases.phase5.milestone1'), t('dao.phases.phase5.milestone2'), t('dao.phases.phase5.milestone3')]
    }
  ];

  const daoNodes = [
    { icon: <Users size={32} />, label: t('dao.nodes.tokenHolders.label'), description: t('dao.nodes.tokenHolders.description') },
    { icon: <FileText size={32} />, label: t('dao.nodes.proposals.label'), description: t('dao.nodes.proposals.description') },
    { icon: <Vote size={32} />, label: t('dao.nodes.voting.label'), description: t('dao.nodes.voting.description') },
    { icon: <Wallet size={32} />, label: t('dao.nodes.treasury.label'), description: t('dao.nodes.treasury.description') },
    { icon: <Shield size={32} />, label: t('dao.nodes.governance.label'), description: t('dao.nodes.governance.description') },
    { icon: <Zap size={32} />, label: t('dao.nodes.execution.label'), description: t('dao.nodes.execution.description') },
  ];

  const proposalTypes = [
    { title: t('dao.proposalTypes.protocolUpgrades.title'), description: t('dao.proposalTypes.protocolUpgrades.description'), icon: Zap },
    { title: t('dao.proposalTypes.treasuryAllocation.title'), description: t('dao.proposalTypes.treasuryAllocation.description'), icon: BarChart3 },
    { title: t('dao.proposalTypes.feeStructure.title'), description: t('dao.proposalTypes.feeStructure.description'), icon: Shield },
    { title: t('dao.proposalTypes.partnershipApprovals.title'), description: t('dao.proposalTypes.partnershipApprovals.description'), icon: Users },
  ];

  const sampleProposals = [
    { id: 'BIP-001', title: t('dao.sampleProposals.proposal1.title'), status: t('dao.sampleProposals.proposal1.status'), votes: 75, daysLeft: 3 },
    { id: 'BIP-002', title: t('dao.sampleProposals.proposal2.title'), status: t('dao.sampleProposals.proposal2.status'), votes: 92, daysLeft: 0 },
    { id: 'BIP-003', title: t('dao.sampleProposals.proposal3.title'), status: t('dao.sampleProposals.proposal3.status'), votes: 45, daysLeft: 5 },
  ];
  
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
              {t('dao.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('dao.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* DAO Structure - Grid Layout */}
      <section className="py-32 bg-green-darkest relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-circuit opacity-10" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            title={t('dao.structure.title')}
            subtitle={t('dao.structure.subtitle')}
          />
          
          <div className="mt-16 max-w-6xl mx-auto">
            {/* Center DAO Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <GlassCard className="p-8 text-center bg-gradient-to-br from-gold/10 to-transparent border-2 border-gold">
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-gold-bright to-gold border-4 border-green-dark shadow-[0_0_40px_rgba(212,175,55,0.7)] flex items-center justify-center">
                  <Shield className="w-12 h-12 text-green-dark" />
                </div>
                <h3 className="font-serif text-3xl text-gradient-gold mb-2">VIDDHANA DAO</h3>
                <p className="text-gray-light">{t('dao.structure.daoCard')}</p>
              </GlassCard>
            </motion.div>

            {/* Connecting Lines Container */}
            <div className="relative mb-8">
              {/* Vertical Line from Center */}
              <div className="absolute left-1/2 top-0 w-1 h-8 bg-gradient-to-b from-gold to-transparent -translate-x-1/2"></div>
              {/* Horizontal Line */}
              <div className="absolute left-0 right-0 top-8 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            </div>

            {/* DAO Components Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {daoNodes.map((node, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard className="p-6 h-full hover:border-gold/50 transition-all duration-300 group cursor-pointer">
                    <div className="flex flex-col items-center text-center">
                      {/* Icon */}
                      <div className="w-20 h-20 mb-4 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold/30 flex items-center justify-center group-hover:scale-110 group-hover:border-gold transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]">
                        <div className="text-gold">
                          {node.icon}
                        </div>
                      </div>
                      
                      {/* Label */}
                      <h4 className="font-bold text-white text-lg mb-2 group-hover:text-gold transition-colors">
                        {node.label}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-light">
                        {node.description}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* Flow Explanation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gold/10 border border-gold/30 rounded-full">
                <ArrowRight className="w-5 h-5 text-gold" />
                <p className="text-sm text-gray-light">
                  {t('dao.structure.flowExplanation')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Governance Process - Horizontal Timeline */}
      <section className="py-32 bg-gradient-to-b from-background to-green-dark/20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title={t('dao.governanceProcess.title')}
            subtitle={t('dao.governanceProcess.subtitle')}
          />
          
          <div className="mt-16">
            <HorizontalTimeline phases={governancePhases} />
          </div>
        </div>
      </section>

      {/* How DAO Works */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title={t('dao.keyFeatures.title')}
            subtitle={t('dao.keyFeatures.subtitle')}
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
                {t('dao.votingPower.title')}
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                {t('dao.votingPower.description')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-foreground/80">{t('dao.votingPower.feature1')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-foreground/80">{t('dao.votingPower.feature2')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-foreground/80">{t('dao.votingPower.feature3')}</span>
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
                  {t('dao.calculator.title')}
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-muted-foreground text-sm mb-2">
                      {t('dao.calculator.label')}
                    </label>
                    <input
                      type="number"
                      placeholder={t('dao.calculator.placeholder')}
                      className="w-full px-4 py-3 bg-card/50 border border-secondary/20 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary/50"
                    />
                  </div>
                  <div className="p-4 bg-primary/20 rounded-lg text-center">
                    <p className="text-muted-foreground text-sm mb-1">{t('dao.calculator.result')}</p>
                    <p className="font-serif text-3xl text-secondary">{t('dao.calculator.formula')}</p>
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
            title={t('dao.proposalTypesSection.title')}
            subtitle={t('dao.proposalTypesSection.subtitle')}
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
        <div className="absolute inset-0 bg-gradient-green" />
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
                  {t('dao.aiAssisted.title')}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {t('dao.aiAssisted.description')}
                </p>
                <ul className="space-y-3">
                  {[
                    t('dao.aiAssisted.feature1'),
                    t('dao.aiAssisted.feature2'),
                    t('dao.aiAssisted.feature3'),
                    t('dao.aiAssisted.feature4')
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
                {t('dao.informedVoting.title')}
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                {t('dao.informedVoting.description')}
              </p>
              <p className="text-muted-foreground">
                {t('dao.informedVoting.disclaimer')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sample Proposals */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title={t('dao.activeProposals.title')}
            subtitle={t('dao.activeProposals.subtitle')}
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
                          proposal.status === t('dao.sampleProposals.proposal1.status') ? 'bg-gold/20 text-gold' :
                          proposal.status === t('dao.sampleProposals.proposal2.status') ? 'bg-green-500/20 text-green-400' :
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
                        {proposal.daysLeft > 0 ? `${proposal.daysLeft} ${t('dao.activeProposals.daysLeft')}` : t('dao.activeProposals.completed')}
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
              { label: t('dao.stats.totalProposals'), value: 156 },
              { label: t('dao.stats.activeVoters'), value: 45000 },
              { label: t('dao.stats.avgParticipation'), value: 68, suffix: '%' },
              { label: t('dao.stats.proposalsPassed'), value: 89, suffix: '%' }
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
