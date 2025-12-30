import { motion } from 'framer-motion';
import { 
  Cpu, 
  Zap, 
  Shield, 
  Brain,
  Layers,
  Code,
  ArrowRight,
  BadgeCheck,
  Gauge,
  Lock,
  Building,
  Wifi,
  Database,
  Globe
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/GlassCard';
import { SectionHeading } from '@/components/SectionHeading';
import { SplitCard } from '@/components/SplitCard';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Technology() {
  const { t } = useTranslation();
  
  const metrics = [
    { label: t('technology.metrics.throughput'), value: '100,000+ TPS', icon: Gauge },
    { label: t('technology.metrics.transactionFee'), value: '<$0.001', icon: Zap },
    { label: t('technology.metrics.confirmationTime'), value: '<1 second', icon: Shield },
    { label: t('technology.metrics.crossChain'), value: 'Multi-Chain', icon: Code },
  ];

const quadCoreLayers = [
    { 
      name: t('technology.quadCore.layer1Name'), 
      description: t('technology.quadCore.layer1Desc'),
      icon: Brain,
      color: 'from-green-dark to-primary',
      features: [
        t('technology.quadCore.layer1Feature1'),
        t('technology.quadCore.layer1Feature2'),
        t('technology.quadCore.layer1Feature3'),
        t('technology.quadCore.layer1Feature4'),
        t('technology.quadCore.layer1Feature5'),
      ]
    },
    { 
      name: t('technology.quadCore.layer2Name'), 
      description: t('technology.quadCore.layer2Desc'),
      icon: Layers,
      color: 'from-primary to-green-medium',
      features: [
        t('technology.quadCore.layer2Feature1'),
        t('technology.quadCore.layer2Feature2'),
        t('technology.quadCore.layer2Feature3'),
        t('technology.quadCore.layer2Feature4'),
        t('technology.quadCore.layer2Feature5'),
      ]
    },
    { 
      name: t('technology.quadCore.layer3Name'), 
      description: t('technology.quadCore.layer3Desc'),
      icon: Building,
      color: 'from-green-medium to-gold-dark',
      features: [
        t('technology.quadCore.layer3Feature1'),
        t('technology.quadCore.layer3Feature2'),
        t('technology.quadCore.layer3Feature3'),
        t('technology.quadCore.layer3Feature4'),
        t('technology.quadCore.layer3Feature5'),
      ]
    },
    { 
      name: t('technology.quadCore.layer4Name'), 
      description: t('technology.quadCore.layer4Desc'),
      icon: Wifi,
      color: 'from-gold-dark to-gold',
      features: [
        t('technology.quadCore.layer4Feature1'),
        t('technology.quadCore.layer4Feature2'),
        t('technology.quadCore.layer4Feature3'),
        t('technology.quadCore.layer4Feature4'),
        t('technology.quadCore.layer4Feature5'),
      ]
    },
  ];

const rwaTypes = [
    { title: t('technology.rwa.realEstate'), description: t('technology.rwa.realEstateDesc'), icon: Building },
    { title: t('technology.rwa.corporateBonds'), description: t('technology.rwa.corporateBondsDesc'), icon: Shield },
    { title: t('technology.rwa.renewableEnergy'), description: t('technology.rwa.renewableEnergyDesc'), icon: Zap },
    { title: t('technology.rwa.telecom'), description: t('technology.rwa.telecomDesc'), icon: Wifi },
    { title: t('technology.rwa.carbonCredits'), description: t('technology.rwa.carbonCreditsDesc'), icon: Globe },
  ];

  const aiFeatures = [
    {
      title: t('technology.prometheusAI.feature1Title'),
      description: t('technology.prometheusAI.feature1Desc'),
      icon: Brain
    },
    {
      title: t('technology.prometheusAI.feature2Title'),
      description: t('technology.prometheusAI.feature2Desc'),
      icon: Gauge
    },
    {
      title: t('technology.prometheusAI.feature3Title'),
      description: t('technology.prometheusAI.feature3Desc'),
      icon: Shield
    },
    {
      title: t('technology.prometheusAI.feature4Title'),
      description: t('technology.prometheusAI.feature4Desc'),
      icon: Cpu
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
              {t('technology.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('technology.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="text-center h-full">
                  <metric.icon className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <div className="font-serif text-2xl text-secondary mb-2">
                    {metric.value}
                  </div>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">
                    {metric.label}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quad-Core Architecture - Redesigned as Split Card Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            title={t('technology.quadCore.title')}
            subtitle={t('technology.quadCore.subtitle')}
          />

          <div className="grid md:grid-cols-2 gap-8">
            {quadCoreLayers.map((layer, index) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <SplitCard
                  title={layer.name}
                  icon={<layer.icon size={32} />}
                  className="h-full"
                >
                  <p className="text-gray-light mb-6 leading-relaxed">
                    {layer.description}
                  </p>
                  
                  <div className="space-y-3">
                    {layer.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div className="numbered-badge w-8 h-8 text-sm flex-shrink-0">
                          {fIdx + 1}
                        </div>
                        <p className="text-white pt-1">{feature}</p>
                      </div>
                    ))}
                  </div>
                </SplitCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prometheus AI Deep Dive */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-green" />
        <div className="absolute inset-0 bg-pattern-circuit opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            title={t('technology.prometheusAI.title')}
            subtitle={t('technology.prometheusAI.subtitle')}
          />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <feature.icon className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="font-serif text-xl text-secondary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <GlassCard goldBorder className="max-w-3xl mx-auto">
              <h3 className="font-serif text-2xl text-secondary mb-4">
                {t('technology.prometheusAI.techStack')}
              </h3>
              <p className="text-lg text-foreground/80">
                {t('technology.prometheusAI.techStackDesc')}
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* RWA Tokenization */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title={t('technology.rwa.title')}
            subtitle={t('technology.rwa.subtitle')}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rwaTypes.map((rwa, index) => (
              <motion.div
                key={rwa.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <rwa.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-serif text-lg text-secondary mb-2">
                    {rwa.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {rwa.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Web3 & Security */}
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
                {t('technology.web3Security.title')}
              </h2>
              <ul className="space-y-4">
                {[
                  t('technology.web3Security.feature1'),
                  t('technology.web3Security.feature2'),
                  t('technology.web3Security.feature3'),
                  t('technology.web3Security.feature4'),
                  t('technology.web3Security.feature5'),
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Lock className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard goldBorder>
                <Shield className="w-20 h-20 text-secondary mx-auto mb-6" />
                <h3 className="font-serif text-2xl text-secondary text-center mb-4">
                  {t('technology.web3Security.securityTitle')}
                </h3>
                <p className="text-center text-foreground/80">
                  {t('technology.web3Security.securityDesc')}
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold mb-6">
              {t('technology.cta.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('technology.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/VIDDHANA WHITEPAPERE.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg">
                  {t('technology.cta.whitepaperButton')}
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </a>
              <Link to="/ecosystem">
                <Button variant="goldOutline" size="lg">
                  {t('technology.cta.ecosystemButton')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
