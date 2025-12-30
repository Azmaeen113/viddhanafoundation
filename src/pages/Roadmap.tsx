import { motion } from 'framer-motion';
import { 
  BadgeCheck, 
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
import { HorizontalTimeline } from '@/components/HorizontalTimeline';
import { Link } from 'react-router-dom';

const roadmapPhases = [
  {
    quarter: 'Q1 2026',
    date: 'Feb 15',
    title: 'Testnet Launch',
    status: 'upcoming' as const,
    icon: <Rocket size={24} />,
    milestones: [
      'Public testnet launch',
      'Bug bounty program',
      'Developer grants',
      'Community building'
    ]
  },
  {
    quarter: 'Q3 2026',
    date: 'July 2026',
    title: 'Full Platform',
    status: 'upcoming' as const,
    icon: <BadgeCheck size={24} />,
    milestones: [
      'All components ready',
      'Asset Management OS',
      'Mainnet preparation',
      'Complete testing'
    ]
  },
  {
    quarter: 'Q4 2026',
    date: 'Aug 15',
    title: 'Mainnet Launch',
    status: 'upcoming' as const,
    icon: <BadgeCheck size={24} />,
    milestones: [
      'Genesis block',
      'DeFi Hub live',
      'AI Marketplace',
      'Mining rewards'
    ]
  },
  {
    quarter: '2026-2027',
    date: '',
    title: 'Ecosystem Growth',
    status: 'planned' as const,
    icon: <Users size={24} />,
    milestones: [
      '10M+ users',
      '100+ dApps',
      'Cross-chain bridges',
      'Exchange listings'
    ]
  },
  {
    quarter: '2027-2029',
    date: '',
    title: 'Mass Adoption',
    status: 'planned' as const,
    icon: <Globe size={24} />,
    milestones: [
      '50M+ users',
      'Merchant programs',
      'DeFi dominance',
      'Mobile ecosystem'
    ]
  },
  {
    quarter: '2030+',
    date: '',
    title: 'Global Reserve',
    status: 'vision' as const,
    icon: <Building size={24} />,
    milestones: [
      '100M+ users',
      'Reserve asset',
      'Institutional',
      'Full maturity'
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
          {/* Current Status Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <GlassCard goldBorder className="p-8">
              <h2 className="font-serif text-2xl md:text-3xl text-gradient-gold text-center mb-6">
                Development Progress: On Track
              </h2>
              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <div className="text-center">
                  <BadgeCheck className="w-10 h-10 text-secondary mx-auto mb-2" />
                  <p className="text-sm font-semibold text-secondary">Layer 1 Blockchain</p>
                  <p className="text-xs text-foreground/60">Completed</p>
                </div>
                <div className="text-center">
                  <BadgeCheck className="w-10 h-10 text-secondary mx-auto mb-2" />
                  <p className="text-sm font-semibold text-secondary">Swap Platform</p>
                  <p className="text-xs text-foreground/60">Completed</p>
                </div>
                <div className="text-center">
                  <BadgeCheck className="w-10 h-10 text-secondary mx-auto mb-2" />
                  <p className="text-sm font-semibold text-secondary">DEX Platform</p>
                  <p className="text-xs text-foreground/60">Completed</p>
                </div>
                <div className="text-center">
                  <BadgeCheck className="w-10 h-10 text-secondary mx-auto mb-2" />
                  <p className="text-sm font-semibold text-secondary">AI Bot Trade</p>
                  <p className="text-xs text-foreground/60">Completed</p>
                </div>
              </div>
              <div className="text-center pt-6 border-t border-secondary/20">
                <p className="text-foreground/80 mb-2">
                  <Clock className="inline w-5 h-5 mr-2 text-gold" />
                  <strong className="text-secondary">Expected Completion: July 2026</strong>
                </p>
                <p className="text-sm text-foreground/60">
                  ~15 dedicated professionals working continuously on remaining components
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Horizontal Timeline */}
          <HorizontalTimeline phases={roadmapPhases} />
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
