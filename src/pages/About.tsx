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
import { useTranslation } from 'react-i18next';

const viddhanLogo = '/Viddhana Logo.jpg';

export default function About() {
  const { t } = useTranslation();
  
  const values = [
    { title: t('about.values.decentralization'), description: t('about.values.decentralizationDesc'), icon: Globe },
    { title: t('about.values.accessibility'), description: t('about.values.accessibilityDesc'), icon: Users },
    { title: t('about.values.innovation'), description: t('about.values.innovationDesc'), icon: Lightbulb },
    { title: t('about.values.community'), description: t('about.values.communityDesc'), icon: Heart },
    { title: t('about.values.transparency'), description: t('about.values.transparencyDesc'), icon: Shield },
    { title: t('about.values.sustainability'), description: t('about.values.sustainabilityDesc'), icon: Sparkles },
  ];
  
  const impactGoals = [
    { year: '2025', goal: t('about.impactGoals.year2025'), users: '10,000' },
    { year: '2026', goal: t('about.impactGoals.year2026'), users: '100,000' },
    { year: '2027', goal: t('about.impactGoals.year2027'), users: '1M' },
    { year: '2028', goal: t('about.impactGoals.year2028'), users: '10M' },
    { year: '2030', goal: t('about.impactGoals.year2030'), users: '100M+' },
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
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('about.hero.subtitle')}
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
                {t('about.vision.quote')}
              </blockquote>
              <p className="text-secondary uppercase tracking-widest text-sm">
                {t('about.vision.title')}
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
            title={t('about.development.title')}
            subtitle={t('about.development.subtitle')}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: BadgeCheck, label: t('about.development.statusItem1.label'), status: t('about.development.statusItem1.status'), color: 'text-gold' },
              { icon: BadgeCheck, label: t('about.development.statusItem2.label'), status: t('about.development.statusItem2.status'), color: 'text-gold' },
              { icon: BadgeCheck, label: t('about.development.statusItem3.label'), status: t('about.development.statusItem3.status'), color: 'text-gold' },
              { icon: BadgeCheck, label: t('about.development.statusItem4.label'), status: t('about.development.statusItem4.status'), color: 'text-muted-foreground' },
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
                  {t('about.development.assetManagement.title')}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <Loader2 className="w-5 h-5 text-gold animate-spin" />
                  <p className="text-gold font-semibold">{t('about.development.assetManagement.status')}</p>
                </div>
                <p className="text-foreground/80 mb-4">
                  {t('about.development.assetManagement.description')}
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
                  {t('about.development.timeline.title')}
                </h3>
                <div className="space-y-3 text-foreground/80">
                  <p className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-secondary" />
                    {t('about.development.timeline.ledBy')}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-secondary" />
                    {t('about.development.timeline.targetLaunch')}
                  </p>
                  <p className="flex items-center gap-2">
                    <BadgeCheck className="w-5 h-5 text-secondary" />
                    <strong>Status:</strong> {t('about.development.timeline.status')}
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
                  {t('about.development.conclusion.label')}
                </p>
              </div>
              <p className="text-lg text-foreground/80">
                {t('about.development.conclusion.text')}
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
                  <h3 className="font-serif text-2xl text-secondary mb-2">{t('about.professorsNote.title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('about.professorsNote.subtitle')}</p>
                </div>
              </div>
              <blockquote className="text-lg text-foreground/90 italic mb-6 border-l-4 border-secondary/30 pl-6">
                {t('about.professorsNote.quote')}
              </blockquote>
              <p className="text-right text-secondary font-semibold">
                {t('about.professorsNote.name')}
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
            title={t('about.problem.title')}
            subtitle={t('about.problem.subtitle')}
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t('about.problem.problem1.title'),
                stat: t('about.problem.problem1.stat'),
                description: t('about.problem.problem1.description')
              },
              {
                title: t('about.problem.problem2.title'),
                stat: t('about.problem.problem2.stat'),
                description: t('about.problem.problem2.description')
              },
              {
                title: t('about.problem.problem3.title'),
                stat: t('about.problem.problem3.stat'),
                description: t('about.problem.problem3.description')
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
                {t('about.difference.title')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-secondary">{t('about.difference.step1.number')}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-secondary mb-2">{t('about.difference.step1.title')}</h3>
                    <p className="text-muted-foreground">{t('about.difference.step1.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-secondary">{t('about.difference.step2.number')}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-secondary mb-2">{t('about.difference.step2.title')}</h3>
                    <p className="text-muted-foreground">{t('about.difference.step2.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0 border-2 border-secondary">
                    <span className="font-serif text-secondary">{t('about.difference.step3.number')}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-secondary mb-2">{t('about.difference.step3.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('about.difference.step3.description')}
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
                  {t('about.philosophy.title')}
                </h3>
                <ul className="space-y-4">
                  {[
                    t('about.philosophy.item1'),
                    t('about.philosophy.item2'),
                    t('about.philosophy.item3'),
                    t('about.philosophy.item4'),
                    t('about.philosophy.item5')
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
            title={t('about.impactTimeline.title')}
            subtitle={t('about.impactTimeline.subtitle')}
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
              {t('about.cta.title')}
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              {t('about.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl">
                {t('about.cta.button1')}
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <a href="/VIDDHANA WHITEPAPERE.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="heroOutline" size="xl">
                  {t('about.cta.button2')}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-muted-foreground text-sm max-w-3xl mx-auto">
            {t('about.disclaimer')}
          </p>
        </div>
      </section>
    </Layout>
  );
}
