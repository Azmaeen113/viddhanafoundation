import { motion } from 'framer-motion';
import { 
  ArrowRightLeft, 
  Brain, 
  Users, 
  MessageSquare,
  Store,
  Wallet,
  RefreshCw,
  ArrowRight,
  Zap,
  Shield,
  Globe,
  BadgeCheck,
  Sparkles,
  Building
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/GlassCard';
import { SectionHeading } from '@/components/SectionHeading';
import { FlowDiagram } from '@/components/FlowDiagram';
import { SplitCard } from '@/components/SplitCard';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Ecosystem() {
  const { t } = useTranslation();
  
  const ecosystemComponents = [
    {
      id: 'dex',
      title: t('ecosystem.dex.title'),
      icon: ArrowRightLeft,
      description: t('ecosystem.dex.description'),
      features: [
        t('ecosystem.dex.feature1'),
        t('ecosystem.dex.feature2'),
        t('ecosystem.dex.feature3'),
        t('ecosystem.dex.feature4'),
      ],
      gradient: 'from-green-dark to-primary'
    },
    {
      id: 'prometheus-ai',
      title: t('ecosystem.prometheusAI.title'),
      icon: Brain,
      description: t('ecosystem.prometheusAI.description'),
      features: [
        t('ecosystem.prometheusAI.feature1'),
        t('ecosystem.prometheusAI.feature2'),
        t('ecosystem.prometheusAI.feature3'),
        t('ecosystem.prometheusAI.feature4'),
      ],
      gradient: 'from-primary to-green-light'
    },
    {
      id: 'socialfi',
      title: t('ecosystem.socialfi.title'),
      icon: Users,
      description: t('ecosystem.socialfi.description'),
      features: [
        t('ecosystem.socialfi.feature1'),
        t('ecosystem.socialfi.feature2'),
        t('ecosystem.socialfi.feature3'),
        t('ecosystem.socialfi.feature4'),
      ],
      gradient: 'from-green-light to-gold-dark'
    },
    {
      id: 'webcall',
      title: t('ecosystem.webcall.title'),
      icon: MessageSquare,
      description: t('ecosystem.webcall.description'),
      features: [
        t('ecosystem.webcall.feature1'),
        t('ecosystem.webcall.feature2'),
        t('ecosystem.webcall.feature3'),
        t('ecosystem.webcall.feature4'),
      ],
      gradient: 'from-gold-dark to-gold'
    },
    {
      id: 'marketplace',
      title: t('ecosystem.marketplace.title'),
      icon: Store,
      description: t('ecosystem.marketplace.description'),
      features: [
        t('ecosystem.marketplace.feature1'),
        t('ecosystem.marketplace.feature2'),
        t('ecosystem.marketplace.feature3'),
        t('ecosystem.marketplace.feature4'),
      ],
      gradient: 'from-gold to-gold-light'
    },
    {
      id: 'dashboard',
      title: t('ecosystem.dashboard.title'),
      icon: Wallet,
      description: t('ecosystem.dashboard.description'),
      features: [
        t('ecosystem.dashboard.feature1'),
        t('ecosystem.dashboard.feature2'),
        t('ecosystem.dashboard.feature3'),
        t('ecosystem.dashboard.feature4'),
      ],
      gradient: 'from-gold-light to-secondary'
    },
    {
      id: 'rwa',
      title: t('ecosystem.rwa.title'),
      icon: Building,
      description: t('ecosystem.rwa.description'),
      features: [
        t('ecosystem.rwa.feature1'),
        t('ecosystem.rwa.feature2'),
        t('ecosystem.rwa.feature3'),
        t('ecosystem.rwa.feature4'),
      ],
      gradient: 'from-secondary to-gold'
    }
  ];

  const flowSteps = ecosystemComponents.map(comp => ({
    icon: <comp.icon size={24} />,
    label: comp.title,
    description: comp.description.split(' ').slice(0, 3).join(' ')
  }));

  const benefits = [
    { icon: Zap, title: t('ecosystem.benefits.fast'), description: t('ecosystem.benefits.fastDesc') },
    { icon: Shield, title: t('ecosystem.benefits.secure'), description: t('ecosystem.benefits.secureDesc') },
    { icon: Globe, title: t('ecosystem.benefits.accessible'), description: t('ecosystem.benefits.accessibleDesc') }
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
              {t('ecosystem.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('ecosystem.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Flow Diagram */}
      <section className="py-24 bg-green-darkest">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title={t('ecosystem.integratedEcosystem')}
            subtitle={t('ecosystem.integratedSubtitle')}
          />
          <FlowDiagram steps={flowSteps} size="md" />
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-primary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-secondary">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Components */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {ecosystemComponents.map((component, index) => (
              <motion.div
                key={component.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${component.gradient} mb-6`}>
                    <component.icon className="w-5 h-5 text-foreground" />
                    <span className="text-foreground font-medium text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold mb-4">
                    {component.title}
                  </h2>
                  
                  <p className="text-xl text-foreground/80 mb-6">
                    {component.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {component.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <GlassCard className="aspect-video flex items-center justify-center" goldBorder>
                    <div className="text-center">
                      <div className={`w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${component.gradient} flex items-center justify-center`}>
                        <component.icon className="w-12 h-12 text-foreground" />
                      </div>
                      <p className="text-secondary font-serif text-xl">{component.title}</p>
                      <p className="text-muted-foreground text-sm mt-2">{t('ecosystem.comingMainnet')}</p>
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Diagram */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-green" />
        <div className="absolute inset-0 bg-pattern-circuit opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            title={t('ecosystem.unifiedEcosystem')}
            subtitle={t('ecosystem.unifiedSubtitle')}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <GlassCard className="p-8">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {ecosystemComponents.slice(0, 6).map((component, index) => (
                  <motion.div
                    key={component.id}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square flex flex-col items-center justify-center p-4 rounded-xl bg-card/50 border border-secondary/20"
                  >
                    <component.icon className="w-8 h-8 text-secondary mb-2" />
                    <p className="text-xs text-center text-muted-foreground">{component.title}</p>
                  </motion.div>
                ))}
                <div className="col-span-3 md:col-span-1 aspect-square flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-gold">
                  <span className="font-serif text-2xl text-background font-bold">VDH</span>
                  <p className="text-xs text-background/80">{t('ecosystem.centralToken')}</p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square flex flex-col items-center justify-center p-4 rounded-xl bg-card/50 border border-secondary/20"
                >
                  <RefreshCw className="w-8 h-8 text-secondary mb-2" />
                  <p className="text-xs text-center text-muted-foreground">{t('ecosystem.simpleSwap')}</p>
                </motion.div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Web2 vs Web3 vs VIDDHANA Comparison */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title={t('ecosystem.comparisonTitle')}
            subtitle={t('ecosystem.comparisonSubtitle')}
          />

          <div className="space-y-8">
            {/* Example 1: Financial Trading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard goldBorder>
                <h3 className="font-serif text-2xl text-secondary mb-6">
                  {t('ecosystem.example1.title')}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground/80">{t('ecosystem.example1.web2Title')}</h4>
                    <p className="text-sm text-foreground/60">
                      {t('ecosystem.example1.web2Desc')}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground/80">{t('ecosystem.example1.web3Title')}</h4>
                    <p className="text-sm text-foreground/60">
                      {t('ecosystem.example1.web3Desc')}
                    </p>
                  </div>
                  <div className="space-y-3 bg-gold/10 p-4 rounded-lg border border-gold/30">
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="w-5 h-5 text-gold" />
                      <h4 className="font-semibold text-gold">{t('ecosystem.example1.viddhanaTit')}</h4>
                    </div>
                    <p className="text-sm text-foreground/80">
                      {t('ecosystem.example1.viddhanaDesc')}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Example 2: Asset Management */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard goldBorder>
                <h3 className="font-serif text-2xl text-secondary mb-6">
                  {t('ecosystem.example2.title')}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground/80">{t('ecosystem.example2.web2Title')}</h4>
                    <p className="text-sm text-foreground/60">
                      {t('ecosystem.example2.web2Desc')}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground/80">{t('ecosystem.example2.web3Title')}</h4>
                    <p className="text-sm text-foreground/60">
                      {t('ecosystem.example2.web3Desc')}
                    </p>
                  </div>
                  <div className="space-y-3 bg-gold/10 p-4 rounded-lg border border-gold/30">
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="w-5 h-5 text-gold" />
                      <h4 className="font-semibold text-gold">{t('ecosystem.example2.viddhanaTitle')}</h4>
                    </div>
                    <p className="text-sm text-foreground/80">
                      {t('ecosystem.example2.viddhanaDesc')}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Example 3: Multi-Asset Trading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard goldBorder>
                <h3 className="font-serif text-2xl text-secondary mb-6">
                  Example 3: Multi-Asset Trading Platforms
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground/80">Web2 (TradingView)</h4>
                    <p className="text-sm text-foreground/60">
                      Only analysis, no direct trading capabilities.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground/80">Web3 (1inch, Matcha)</h4>
                    <p className="text-sm text-foreground/60">
                      Multi-chain trading, but lacks optimization AI.
                    </p>
                  </div>
                  <div className="space-y-3 bg-gold/10 p-4 rounded-lg border border-gold/30">
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="w-5 h-5 text-gold" />
                      <h4 className="font-semibold text-gold">VIDDHANA</h4>
                    </div>
                    <p className="text-sm text-foreground/80">
                      Multi-asset trading + strategy optimization AI + automation → A "comprehensive financial assistant".
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Example 4: Financial Messaging */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard goldBorder>
                <h3 className="font-serif text-2xl text-secondary mb-6">
                  {t('ecosystem.example4.title')}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground/80">{t('ecosystem.example4.web2Title')}</h4>
                    <p className="text-sm text-foreground/60">
                      {t('ecosystem.example4.web2Desc')}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground/80">{t('ecosystem.example4.web3Title')}</h4>
                    <p className="text-sm text-foreground/60">
                      {t('ecosystem.example4.web3Desc')}
                    </p>
                  </div>
                  <div className="space-y-3 bg-gold/10 p-4 rounded-lg border border-gold/30">
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="w-5 h-5 text-gold" />
                      <h4 className="font-semibold text-gold">{t('ecosystem.example4.viddhanaTitle')}</h4>
                    </div>
                    <p className="text-sm text-foreground/80">
                      {t('ecosystem.example4.viddhanaDesc')}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Example 5: SocialFi */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard goldBorder>
                <h3 className="font-serif text-2xl text-secondary mb-6">
                  {t('ecosystem.example5.title')}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground/80">{t('ecosystem.example5.web2Title')}</h4>
                    <p className="text-sm text-foreground/60">
                      {t('ecosystem.example5.web2Desc')}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground/80">{t('ecosystem.example5.web3Title')}</h4>
                    <p className="text-sm text-foreground/60">
                      {t('ecosystem.example5.web3Desc')}
                    </p>
                  </div>
                  <div className="space-y-3 bg-gold/10 p-4 rounded-lg border border-gold/30">
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="w-5 h-5 text-gold" />
                      <h4 className="font-semibold text-gold">{t('ecosystem.example5.viddhanaTitle')}</h4>
                    </div>
                    <p className="text-sm text-foreground/80">
                      {t('ecosystem.example5.viddhanaDesc')}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <GlassCard className="max-w-3xl mx-auto p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-gold" />
                <p className="text-xl text-secondary font-semibold">
                  {t('ecosystem.conclusion')}
                </p>
              </div>
              <p className="text-lg text-foreground/80">
                {t('ecosystem.conclusionText')}
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link to="/tokenomics">
              <Button variant="gold" size="lg">
                {t('ecosystem.viewTokenomics')}
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
