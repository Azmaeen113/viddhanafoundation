import { motion } from 'framer-motion';
import { 
  Coins, 
  TrendingDown, 
  Clock,
  Vote,
  Wallet,
  BarChart3,
  Shield,
  Zap,
  ArrowRight,
  Users,
  Building,
  Heart,
  Code
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/GlassCard';
import { SectionHeading } from '@/components/SectionHeading';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Tokenomics() {
  const { t } = useTranslation();

  const tokenParams = [
    { label: t('tokenomics.params.tokenName'), value: t('tokenomics.params.tokenNameValue') },
    { label: t('tokenomics.params.symbol'), value: t('tokenomics.params.symbolValue') },
    { label: t('tokenomics.params.totalSupply'), value: t('tokenomics.params.totalSupplyValue') },
    { label: t('tokenomics.params.type'), value: t('tokenomics.params.typeValue') },
  ];

  const distribution = [
    { label: t('tokenomics.distribution.community.label'), percentage: 40, color: 'bg-green-medium', strokeColor: 'hsl(122, 39%, 41%)', icon: Users, desc: t('tokenomics.distribution.community.desc') },
    { label: t('tokenomics.distribution.devTeam.label'), percentage: 20, color: 'bg-secondary', strokeColor: 'hsl(45, 73%, 52%)', icon: Code, desc: t('tokenomics.distribution.devTeam.desc') },
    { label: t('tokenomics.distribution.ecosystem.label'), percentage: 15, color: 'bg-green-light', strokeColor: 'hsl(122, 39%, 60%)', icon: Zap, desc: t('tokenomics.distribution.ecosystem.desc') },
    { label: t('tokenomics.distribution.founding.label'), percentage: 15, color: 'bg-gold', strokeColor: 'hsl(45, 73%, 52%)', icon: Heart, desc: t('tokenomics.distribution.founding.desc') },
    { label: t('tokenomics.distribution.seed.label'), percentage: 10, color: 'bg-green-dark', strokeColor: 'hsl(150, 39%, 18%)', icon: TrendingDown, desc: t('tokenomics.distribution.seed.desc') },
  ];

  const utilities = [
    { title: t('tokenomics.utility.feeDiscount.title'), description: t('tokenomics.utility.feeDiscount.desc'), icon: Zap },
    { title: t('tokenomics.utility.governance.title'), description: t('tokenomics.utility.governance.desc'), icon: Vote },
    { title: t('tokenomics.utility.premiumAccess.title'), description: t('tokenomics.utility.premiumAccess.desc'), icon: BarChart3 },
    { title: t('tokenomics.utility.rewards.title'), description: t('tokenomics.utility.rewards.desc'), icon: Coins },
    { title: t('tokenomics.utility.collateral.title'), description: t('tokenomics.utility.collateral.desc'), icon: Wallet },
    { title: t('tokenomics.utility.staking.title'), description: t('tokenomics.utility.staking.desc'), icon: Shield },
  ];

  const revenueModel = [
    { source: t('tokenomics.revenue.platformFee.title'), description: t('tokenomics.revenue.platformFee.desc'), icon: BarChart3 },
    { source: t('tokenomics.revenue.performanceFee.title'), description: t('tokenomics.revenue.performanceFee.desc'), icon: TrendingDown },
    { source: t('tokenomics.revenue.protocolFees.title'), description: t('tokenomics.revenue.protocolFees.desc'), icon: Zap },
    { source: t('tokenomics.revenue.marketplace.title'), description: t('tokenomics.revenue.marketplace.desc'), icon: Building },
  ];

  const burnFeatures = [
    t('tokenomics.burn.feature1'),
    t('tokenomics.burn.feature2'),
    t('tokenomics.burn.feature3'),
    t('tokenomics.burn.feature4'),
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
              {t('tokenomics.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('tokenomics.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Token Parameters */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="max-w-3xl mx-auto" goldBorder>
              <h2 className="font-serif text-2xl text-secondary text-center mb-8">
                {t('tokenomics.overview')}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {tokenParams.map((param) => (
                  <div key={param.label} className="flex justify-between items-center p-4 rounded-lg bg-card/30">
                    <span className="text-muted-foreground">{param.label}</span>
                    <span className="font-serif text-secondary font-semibold">{param.value}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Token Utility */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            title={t('tokenomics.utilityTitle')}
            subtitle={t('tokenomics.utilitySubtitle')}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {utilities.map((utility, index) => (
              <motion.div
                key={utility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <utility.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-serif text-lg text-secondary mb-2">
                    {utility.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {utility.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title={t('tokenomics.distributionTitle')}
            subtitle={t('tokenomics.distributionSubtitle')}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Pie Chart Representation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full max-w-lg mx-auto aspect-square">
                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="text-center">
                    <div className="font-serif text-5xl text-gradient-gold mb-2 font-bold">
                      <AnimatedCounter end={1} suffix="B" />
                    </div>
                    <p className="text-secondary uppercase text-xs tracking-wider font-semibold">{t('tokenomics.totalSupplyLabel')}</p>
                  </div>
                </div>
                
                {/* Donut Chart SVG */}
                <svg viewBox="0 0 200 200" className="w-full h-full" style={{ overflow: 'visible' }}>
                  {distribution.map((item, index) => {
                    const offset = distribution.slice(0, index).reduce((acc, i) => acc + i.percentage, 0);
                    const startAngle = (offset / 100) * 360;
                    const endAngle = ((offset + item.percentage) / 100) * 360;
                    
                    const startRad = (startAngle - 90) * (Math.PI / 180);
                    const endRad = (endAngle - 90) * (Math.PI / 180);
                    
                    const outerRadius = 85;
                    const innerRadius = 50;
                    const centerX = 100;
                    const centerY = 100;
                    
                    const x1Outer = centerX + outerRadius * Math.cos(startRad);
                    const y1Outer = centerY + outerRadius * Math.sin(startRad);
                    const x2Outer = centerX + outerRadius * Math.cos(endRad);
                    const y2Outer = centerY + outerRadius * Math.sin(endRad);
                    
                    const x1Inner = centerX + innerRadius * Math.cos(startRad);
                    const y1Inner = centerY + innerRadius * Math.sin(startRad);
                    const x2Inner = centerX + innerRadius * Math.cos(endRad);
                    const y2Inner = centerY + innerRadius * Math.sin(endRad);
                    
                    const largeArcFlag = item.percentage > 50 ? 1 : 0;
                    
                    const pathData = [
                      `M ${x1Outer} ${y1Outer}`,
                      `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x2Outer} ${y2Outer}`,
                      `L ${x2Inner} ${y2Inner}`,
                      `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x1Inner} ${y1Inner}`,
                      'Z'
                    ].join(' ');
                    
                    const midAngle = ((startAngle + endAngle) / 2 - 90) * (Math.PI / 180);
                    
                    return (
                      <motion.path
                        key={item.label}
                        d={pathData}
                        fill={item.strokeColor}
                        stroke="rgba(0, 0, 0, 0.3)"
                        strokeWidth="2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.15, duration: 0.8 }}
                        whileHover={{
                          x: Math.cos(midAngle) * 8,
                          y: Math.sin(midAngle) * 8,
                        }}
                        style={{ cursor: 'pointer' }}
                      />
                    );
                  })}
                </svg>
              </div>
            </motion.div>

            {/* Distribution List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                {distribution.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <GlassCard>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center`}>
                            <item.icon className="w-6 h-6 text-foreground" />
                          </div>
                          <div>
                            <h3 className="font-serif text-lg text-secondary">
                              {item.label}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-serif text-2xl text-secondary font-bold">
                            {item.percentage}%
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-green" />
        <div className="absolute inset-0 bg-pattern-circuit opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            title={t('tokenomics.revenueTitle')}
            subtitle={t('tokenomics.revenueSubtitle')}
          />

          <div className="grid md:grid-cols-2 gap-6">
            {revenueModel.map((revenue, index) => (
              <motion.div
                key={revenue.source}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <revenue.icon className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="font-serif text-xl text-secondary mb-2">
                    {revenue.source}
                  </h3>
                  <p className="text-muted-foreground">
                    {revenue.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <GlassCard goldBorder className="max-w-4xl mx-auto">
              <h3 className="font-serif text-2xl text-secondary text-center mb-6">
                {t('tokenomics.projectedRevenue')}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-secondary/20">
                      <th className="py-3 px-4 text-secondary">{t('tokenomics.table.year')}</th>
                      <th className="py-3 px-4 text-secondary">{t('tokenomics.table.aum')}</th>
                      <th className="py-3 px-4 text-secondary">{t('tokenomics.table.platformFee')}</th>
                      <th className="py-3 px-4 text-secondary">{t('tokenomics.table.performanceFee')}</th>
                      <th className="py-3 px-4 text-secondary">{t('tokenomics.table.totalRevenue')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-secondary/10">
                      <td className="py-3 px-4 text-foreground/80">2026</td>
                      <td className="py-3 px-4 text-foreground/80">$25M</td>
                      <td className="py-3 px-4 text-foreground/80">$62.5K</td>
                      <td className="py-3 px-4 text-foreground/80">$50K</td>
                      <td className="py-3 px-4 text-secondary font-semibold">$142.5K</td>
                    </tr>
                    <tr className="border-b border-secondary/10">
                      <td className="py-3 px-4 text-foreground/80">2027</td>
                      <td className="py-3 px-4 text-foreground/80">$500M</td>
                      <td className="py-3 px-4 text-foreground/80">$1.25M</td>
                      <td className="py-3 px-4 text-foreground/80">$1M</td>
                      <td className="py-3 px-4 text-secondary font-semibold">$2.75M</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-foreground/80">2028</td>
                      <td className="py-3 px-4 text-foreground/80">$10B</td>
                      <td className="py-3 px-4 text-foreground/80">$25M</td>
                      <td className="py-3 px-4 text-foreground/80">$8M</td>
                      <td className="py-3 px-4 text-secondary font-semibold">$36M</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Token Burn */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold mb-6">
                {t('tokenomics.burn.title')}
              </h2>
              <p className="text-xl text-foreground/80 mb-6">
                {t('tokenomics.burn.subtitle')}
              </p>
              <ul className="space-y-4">
                {burnFeatures.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Shield className="w-5 h-5 text-secondary flex-shrink-0" />
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
                <Coins className="w-20 h-20 text-secondary mx-auto mb-6" />
                <h3 className="font-serif text-2xl text-secondary text-center mb-4">
                  {t('tokenomics.sustainableGrowth.title')}
                </h3>
                <p className="text-center text-foreground/80">
                  {t('tokenomics.sustainableGrowth.desc')}
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
              {t('tokenomics.cta.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('tokenomics.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/VIDDHANA WHITEPAPERE.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg">
                  {t('tokenomics.cta.readButton')}
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </a>
              <Link to="/dao">
                <Button variant="goldOutline" size="lg">
                  {t('tokenomics.cta.daoButton')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
