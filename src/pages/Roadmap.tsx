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
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  const roadmapPhases = [
    {
      quarter: t('roadmap.q1.quarter'),
      date: t('roadmap.q1.date'),
      title: t('roadmap.q1.title'),
      status: 'upcoming' as const,
      icon: <Rocket size={24} />,
      milestones: [
        t('roadmap.q1.milestone1'),
        t('roadmap.q1.milestone2'),
        t('roadmap.q1.milestone3'),
        t('roadmap.q1.milestone4'),
      ]
    },
    {
      quarter: t('roadmap.q3.quarter'),
      date: t('roadmap.q3.date'),
      title: t('roadmap.q3.title'),
      status: 'upcoming' as const,
      icon: <BadgeCheck size={24} />,
      milestones: [
        t('roadmap.q3.milestone1'),
        t('roadmap.q3.milestone2'),
        t('roadmap.q3.milestone3'),
        t('roadmap.q3.milestone4'),
      ]
    },
    {
      quarter: t('roadmap.q4.quarter'),
      date: t('roadmap.q4.date'),
      title: t('roadmap.q4.title'),
      status: 'upcoming' as const,
      icon: <BadgeCheck size={24} />,
      milestones: [
        t('roadmap.q4.milestone1'),
        t('roadmap.q4.milestone2'),
        t('roadmap.q4.milestone3'),
        t('roadmap.q4.milestone4'),
      ]
    },
    {
      quarter: t('roadmap.ecosystem.quarter'),
      date: '',
      title: t('roadmap.ecosystem.title'),
      status: 'planned' as const,
      icon: <Users size={24} />,
      milestones: [
        t('roadmap.ecosystem.milestone1'),
        t('roadmap.ecosystem.milestone2'),
        t('roadmap.ecosystem.milestone3'),
        t('roadmap.ecosystem.milestone4'),
      ]
    },
    {
      quarter: t('roadmap.mass.quarter'),
      date: '',
      title: t('roadmap.mass.title'),
      status: 'planned' as const,
      icon: <Globe size={24} />,
      milestones: [
        t('roadmap.mass.milestone1'),
        t('roadmap.mass.milestone2'),
        t('roadmap.mass.milestone3'),
        t('roadmap.mass.milestone4'),
      ]
    },
    {
      quarter: t('roadmap.global.quarter'),
      date: '',
      title: t('roadmap.global.title'),
      status: 'vision' as const,
      icon: <Building size={24} />,
      milestones: [
        t('roadmap.global.milestone1'),
        t('roadmap.global.milestone2'),
        t('roadmap.global.milestone3'),
        t('roadmap.global.milestone4'),
      ]
    }
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
              {t('roadmap.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('roadmap.subtitle')}
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
                {t('roadmap.progressTitle')}
              </h2>
              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <div className="text-center">
                  <BadgeCheck className="w-10 h-10 text-secondary mx-auto mb-2" />
                  <p className="text-sm font-semibold text-secondary">{t('roadmap.progress.blockchain')}</p>
                  <p className="text-xs text-foreground/60">{t('roadmap.progress.completed')}</p>
                </div>
                <div className="text-center">
                  <BadgeCheck className="w-10 h-10 text-secondary mx-auto mb-2" />
                  <p className="text-sm font-semibold text-secondary">{t('roadmap.progress.swap')}</p>
                  <p className="text-xs text-foreground/60">{t('roadmap.progress.completed')}</p>
                </div>
                <div className="text-center">
                  <BadgeCheck className="w-10 h-10 text-secondary mx-auto mb-2" />
                  <p className="text-sm font-semibold text-secondary">{t('roadmap.progress.dex')}</p>
                  <p className="text-xs text-foreground/60">{t('roadmap.progress.completed')}</p>
                </div>
                <div className="text-center">
                  <BadgeCheck className="w-10 h-10 text-secondary mx-auto mb-2" />
                  <p className="text-sm font-semibold text-secondary">{t('roadmap.progress.aiBot')}</p>
                  <p className="text-xs text-foreground/60">{t('roadmap.progress.completed')}</p>
                </div>
              </div>
              <div className="text-center pt-6 border-t border-secondary/20">
                <p className="text-foreground/80 mb-2">
                  <Clock className="inline w-5 h-5 mr-2 text-gold" />
                  <strong className="text-secondary">{t('roadmap.expectedCompletion')}</strong>
                </p>
                <p className="text-sm text-foreground/60">
                  {t('roadmap.teamSize')}
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
              {t('roadmap.cta.title')}
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              {t('roadmap.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/about">
                <Button variant="gold" size="lg">
                  {t('roadmap.cta.visionButton')}
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link to="/dao">
                <Button variant="goldOutline" size="lg">
                  {t('roadmap.cta.governanceButton')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
