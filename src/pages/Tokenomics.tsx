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

const tokenParams = [
  { label: 'Token Name', value: 'VIDDHANA Token' },
  { label: 'Symbol', value: '$VDH' },
  { label: 'Total Supply', value: '1,000,000,000 VDH' },
  { label: 'Type', value: 'Utility & Governance' },
];

const distribution = [
  { label: 'Community', percentage: 40, color: 'bg-green-medium', strokeColor: 'hsl(122, 39%, 41%)', icon: Users },
  { label: 'Development Team', percentage: 20, color: 'bg-secondary', strokeColor: 'hsl(45, 73%, 52%)', icon: Code },
  { label: 'Ecosystem Fund', percentage: 15, color: 'bg-green-light', strokeColor: 'hsl(122, 39%, 60%)', icon: Zap },
  { label: 'Founding Team', percentage: 15, color: 'bg-gold', strokeColor: 'hsl(45, 73%, 52%)', icon: Heart },
  { label: 'Seed & Series A', percentage: 10, color: 'bg-green-dark', strokeColor: 'hsl(150, 39%, 18%)', icon: TrendingDown },
];

const utilities = [
  { title: 'Fee Discounts', description: 'Stake VDH for 20-50% platform fee reduction', icon: Zap },
  { title: 'Governance Rights', description: '1 VDH = 1 Vote in DAO decisions', icon: Vote },
  { title: 'Premium Access', description: 'Unlock AI Pro features and exclusive DeFi pools', icon: BarChart3 },
  { title: 'Community Rewards', description: 'Earn VDH for contributions, education, referrals', icon: Coins },
  { title: 'RWA Collateral', description: 'Use as supplementary collateral for loans', icon: Wallet },
  { title: 'Staking Rewards', description: 'Earn passive income through token staking', icon: Shield },
];

const revenueModel = [
  { source: 'Platform Fee', description: '0.25-0.5% annual AUM management fee', icon: BarChart3 },
  { source: 'Performance Fee', description: '10% on profits exceeding 8% APY benchmark', icon: TrendingDown },
  { source: 'Protocol Fees', description: '~$0.001 per Atlas Chain transaction', icon: Zap },
  { source: 'DePIN Marketplace', description: '1-2% commission on NFT transactions', icon: Building },
];

export default function Tokenomics() {
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
              $VDH Token Economics
            </h1>
            <p className="text-xl text-muted-foreground">
              1 Billion Total Supply | Utility & Governance Token
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
                Token Overview
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
            title="Token Utility"
            subtitle="Multiple use cases driving real demand for VDH"
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
            title="Token Distribution"
            subtitle="Fair allocation designed for sustainable growth"
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
                    <p className="text-secondary uppercase text-xs tracking-wider font-semibold">Total Supply</p>
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
                              {item.percentage === 40 && 'Gradual unlock via activity & rewards'}
                              {item.percentage === 20 && '3-year lock, linear monthly vesting'}
                              {item.percentage === 15 && item.label === 'Ecosystem Fund' && 'DAO-managed allocation'}
                              {item.percentage === 15 && item.label === 'Founding Team' && '4-year lock, linear vesting'}
                              {item.percentage === 10 && '2-year lock, linear vesting'}
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
            title="Revenue Model"
            subtitle="Multiple streams supporting ecosystem growth"
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
                Projected Revenue Growth
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-secondary/20">
                      <th className="py-3 px-4 text-secondary">Year</th>
                      <th className="py-3 px-4 text-secondary">AUM</th>
                      <th className="py-3 px-4 text-secondary">Platform Fee</th>
                      <th className="py-3 px-4 text-secondary">Performance Fee</th>
                      <th className="py-3 px-4 text-secondary">Total Revenue</th>
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
                Deflationary Mechanism
              </h2>
              <p className="text-xl text-foreground/80 mb-6">
                5% of platform fees used for quarterly VDH buyback & burn
              </p>
              <ul className="space-y-4">
                {[
                  'Quarterly token burns reduce circulating supply',
                  'Deflationary pressure increases token value over time',
                  'Transparent on-chain burn transactions',
                  'Community-governed burn schedule'
                ].map((item, index) => (
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
                  Sustainable Growth Model
                </h3>
                <p className="text-center text-foreground/80">
                  Token burns combined with growing utility ensure long-term value appreciation 
                  for all VDH holders.
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
              Join the VIDDHANA Ecosystem
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Acquire VDH tokens and participate in the wealth management revolution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/VIDDHANA WHITEPAPERE.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg">
                  Read Full Tokenomics
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </a>
              <Link to="/dao">
                <Button variant="goldOutline" size="lg">
                  Explore DAO Governance
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
