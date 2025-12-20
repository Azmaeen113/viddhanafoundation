import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Circle, 
  Clock,
  Rocket,
  Users,
  Globe,
  Building,
  ArrowRight
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/GlassCard';
import { SectionHeading } from '@/components/SectionHeading';
import { Link } from 'react-router-dom';

const roadmapPhases = [
  {
    quarter: 'Q1 2026',
    date: 'Feb 15',
    title: 'Testnet Launch',
    status: 'upcoming',
    icon: Rocket,
    milestones: [
      'Public testnet launch',
      'Bug bounty program',
      'Developer grants',
      'Community building initiatives'
    ]
  },
  {
    quarter: 'Q3 2026',
    date: 'Aug 15',
    title: 'Mainnet Launch',
    status: 'upcoming',
    icon: CheckCircle2,
    milestones: [
      'Genesis block mined',
      'BTCD DEX goes live',
      'First AI Marketplace apps',
      'Initial mining rewards'
    ]
  },
  {
    quarter: '2026-2027',
    date: '',
    title: 'Ecosystem Growth',
    status: 'planned',
    icon: Users,
    milestones: [
      'Target: 10M+ users',
      'Goal: 100+ dApps',
      'Cross-chain bridges',
      'Exchange listings'
    ]
  },
  {
    quarter: '2027-2029',
    date: '',
    title: 'Mass Adoption',
    status: 'planned',
    icon: Globe,
    milestones: [
      'Target: 50M+ users',
      'Merchant acceptance programs',
      'AI-driven DeFi dominance',
      'Mobile app ecosystem'
    ]
  },
  {
    quarter: '2030+',
    date: '',
    title: 'Global Reserve Asset',
    status: 'vision',
    icon: Building,
    milestones: [
      'Target: 100M+ users',
      'BTCD as reserve asset',
      'Institutional adoption',
      'Full ecosystem maturity'
    ]
  }
];

const getStatusStyles = (status: string) => {
  switch (status) {
    case 'upcoming':
      return { bg: 'bg-gold/20', border: 'border-gold', text: 'text-gold' };
    case 'planned':
      return { bg: 'bg-secondary/10', border: 'border-secondary/50', text: 'text-secondary' };
    case 'vision':
      return { bg: 'bg-primary/20', border: 'border-primary', text: 'text-foreground' };
    default:
      return { bg: 'bg-muted', border: 'border-muted', text: 'text-muted-foreground' };
  }
};

export default function Roadmap() {
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
              The Path to Global Financial Transformation
            </h1>
            <p className="text-xl text-muted-foreground">
              From Launch to 100M+ Users
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-secondary to-primary transform md:-translate-x-1/2" />

            <div className="space-y-16">
              {roadmapPhases.map((phase, index) => {
                const styles = getStatusStyles(phase.status);
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={phase.quarter}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex flex-col md:flex-row items-start gap-8 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline node */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                      <div className={`w-16 h-16 rounded-full ${styles.bg} border-4 ${styles.border} flex items-center justify-center`}>
                        <phase.icon className={`w-8 h-8 ${styles.text}`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`flex-1 pl-24 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className={`inline-block mb-4 ${isEven ? 'md:float-right md:clear-right' : ''}`}>
                        <GlassCard className="inline-block" goldBorder={phase.status === 'upcoming'}>
                          <div className={`${isEven ? 'md:text-right' : ''}`}>
                            <div className="flex items-center gap-3 mb-2">
                              {!isEven && <Clock className="w-4 h-4 text-secondary" />}
                              <span className="font-serif text-lg text-secondary">
                                {phase.quarter}
                                {phase.date && ` - ${phase.date}`}
                              </span>
                              {isEven && <Clock className="w-4 h-4 text-secondary" />}
                            </div>
                            
                            <h3 className="font-serif text-2xl text-foreground mb-4">
                              {phase.title}
                            </h3>

                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-wider ${styles.bg} ${styles.text} border ${styles.border} mb-4`}>
                              {phase.status === 'upcoming' && <Circle className="w-3 h-3 fill-current" />}
                              {phase.status}
                            </div>

                            <ul className={`space-y-2 ${isEven ? 'md:text-right' : ''}`}>
                              {phase.milestones.map((milestone, i) => (
                                <li key={i} className={`flex items-center gap-2 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                  <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                                  <span className="text-muted-foreground text-sm">{milestone}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </GlassCard>
                      </div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold mb-6">
              Be Part of History
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              Join us on this journey to revolutionize global finance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/about">
                <Button variant="gold" size="lg">
                  Learn About Our Vision
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link to="/dao">
                <Button variant="goldOutline" size="lg">
                  Join Governance
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
