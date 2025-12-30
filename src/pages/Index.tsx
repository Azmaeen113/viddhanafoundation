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
import { useTranslation } from 'react-i18next';

const viddhanLogo = '/Viddhana Logo.jpg';

// Launch date: Q1 2026
const launchDate = new Date('2026-03-01T00:00:00');

export default function Index() {
  const { t } = useTranslation();
  
  const stats = [
    { value: 3.3, suffix: 'B', label: t('home.stats.label1'), icon: Users, decimals: 1 },
    { value: 100000, suffix: '+', label: t('home.stats.label2'), icon: Zap },
    { value: 100, suffix: 'B', label: t('home.stats.label3'), prefix: '$', icon: TrendingUp },
    { value: 8, suffix: '-15% APY', label: t('home.stats.label4'), icon: Shield },
  ];

  const problems = [
    {
      problem: t('home.problems.problem1'),
      solution: t('home.problems.solution1'),
      description: t('home.problems.desc1'),
      icon: Wallet
    },
    {
      problem: t('home.problems.problem2'),
      solution: t('home.problems.solution2'),
      description: t('home.problems.desc2'),
      icon: Globe
    },
    {
      problem: t('home.problems.problem3'),
      solution: t('home.problems.solution3'),
      description: t('home.problems.desc3'),
      icon: TrendingUp
    }
  ];

  const corePillars = [
    { 
      title: t('home.corePillars.pillar1'), 
      description: t('home.corePillars.pillar1Desc'), 
      icon: Cpu,
      features: [
        t('home.corePillars.pillar1Feature1'),
        t('home.corePillars.pillar1Feature2'),
        t('home.corePillars.pillar1Feature3'),
        t('home.corePillars.pillar1Feature4'),
        t('home.corePillars.pillar1Feature5'),
      ]
    },
    { 
      title: t('home.corePillars.pillar2'), 
      description: t('home.corePillars.pillar2Desc'), 
      icon: Brain,
      features: [
        t('home.corePillars.pillar2Feature1'),
        t('home.corePillars.pillar2Feature2'),
        t('home.corePillars.pillar2Feature3'),
        t('home.corePillars.pillar2Feature4'),
        t('home.corePillars.pillar2Feature5'),
      ]
    },
    { 
      title: t('home.corePillars.pillar3'), 
      description: t('home.corePillars.pillar3Desc'), 
      icon: BarChart3,
      features: [
        t('home.corePillars.pillar3Feature1'),
        t('home.corePillars.pillar3Feature2'),
        t('home.corePillars.pillar3Feature3'),
        t('home.corePillars.pillar3Feature4'),
        t('home.corePillars.pillar3Feature5'),
      ]
    },
    { 
      title: t('home.corePillars.pillar4'), 
      description: t('home.corePillars.pillar4Desc'), 
      icon: BadgeCheck,
      features: [
        t('home.corePillars.pillar4Feature1'),
        t('home.corePillars.pillar4Feature2'),
        t('home.corePillars.pillar4Feature3'),
        t('home.corePillars.pillar4Feature4'),
        t('home.corePillars.pillar4Feature5'),
      ]
    },
    { 
      title: t('home.corePillars.pillar5'), 
      description: t('home.corePillars.pillar5Desc'), 
      icon: Users,
      features: [
        t('home.corePillars.pillar5Feature1'),
        t('home.corePillars.pillar5Feature2'),
        t('home.corePillars.pillar5Feature3'),
        t('home.corePillars.pillar5Feature4'),
        t('home.corePillars.pillar5Feature5'),
      ]
    },
  ];

  const ecosystemComponents = [
    { icon: <ArrowRightLeft size={24} />, label: t('home.ecosystem.defiHub'), description: t('home.ecosystem.defiHubDesc') },
    { icon: <Brain size={24} />, label: t('home.ecosystem.prometheusAI'), description: t('home.ecosystem.prometheusAIDesc') },
    { icon: <Users size={24} />, label: t('home.ecosystem.socialfi'), description: t('home.ecosystem.socialfiDesc') },
    { icon: <MessageSquare size={24} />, label: t('home.ecosystem.webcall'), description: t('home.ecosystem.webcallDesc') },
    { icon: <Store size={24} />, label: t('home.ecosystem.marketplace'), description: t('home.ecosystem.marketplaceDesc') },
    { icon: <Wallet size={24} />, label: t('home.ecosystem.dashboard'), description: t('home.ecosystem.dashboardDesc') },
    { icon: <Building size={24} />, label: t('home.ecosystem.rwa'), description: t('home.ecosystem.rwaDesc') },
  ];
  
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
              {t('home.hero.mainTitle')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl md:text-2xl text-foreground/90 mb-4"
            >
              {t('home.hero.subtitle')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto"
            >
              {t('home.hero.description')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Button variant="hero" size="xl" className="min-w-[200px]">
                {t('home.hero.cta')}
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <a href="/VIDDHANA WHITEPAPERE.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="heroOutline" size="xl" className="min-w-[200px]">
                  {t('home.hero.learnMore')}
                </Button>
              </a>
            </motion.div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <CountdownTimer targetDate={launchDate} label={t('home.countdown.label')} />
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
                {t('home.whatIs.title')}
              </h2>
              <p className="text-xl text-foreground/90 mb-4">
                {t('home.whatIs.subtitle')}
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {t('home.whatIs.description')}
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  t('home.whatIs.feature1'),
                  t('home.whatIs.feature2'),
                  t('home.whatIs.feature3'),
                  t('home.whatIs.feature4'),
                  t('home.whatIs.feature5'),
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
                  {t('home.whatIs.exploreButton')}
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
            title={t('home.problems.title')}
            subtitle={t('home.problems.subtitle')}
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
            title={t('home.ecosystem.title')}
            subtitle={t('home.ecosystem.subtitle')}
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
                {t('home.ecosystem.exploreButton')}
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
            title={t('home.corePillars.title')}
            subtitle={t('home.corePillars.subtitle')}
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
                {t('home.corePillars.deepDiveButton')}
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
              {t('home.cta.title')}
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              {t('home.cta.subtitle')}
            </p>
            <Button variant="hero" size="xl">
              {t('home.cta.button')}
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
              {t('home.mitProfessor.title')}
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              {t('home.mitProfessor.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/about">
                <Button variant="goldOutline" size="lg" className="group">
                  {t('home.mitProfessor.learnButton')}
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
