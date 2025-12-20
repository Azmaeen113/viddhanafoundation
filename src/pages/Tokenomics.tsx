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
  { label: 'Token Name', value: 'BTCD' },
  { label: 'Total Supply', value: '21,000,000,000' },
  { label: 'Smallest Unit', value: 'Satoshi-D' },
  { label: 'Network', value: 'BTCD Mainnet' },
];

const distribution = [
  { label: 'Mining', percentage: 40, color: 'bg-gold', strokeColor: 'hsl(43, 87%, 59%)', icon: Coins },
  { label: 'Ecosystem Rewards', percentage: 10, color: 'bg-secondary', strokeColor: 'hsl(43, 87%, 59%)', icon: Zap },
  { label: 'Operations & Marketing', percentage: 10, color: 'bg-burgundy-light', strokeColor: 'hsl(350, 50%, 40%)', icon: Building },
  { label: 'Charity', percentage: 10, color: 'bg-gold-light', strokeColor: 'hsl(45, 100%, 72%)', icon: Heart },
  { label: 'Investors', percentage: 10, color: 'bg-burgundy-dark', strokeColor: 'hsl(350, 70%, 20%)', icon: TrendingDown },
  { label: 'Dev Team & Advisors', percentage: 10, color: 'bg-primary', strokeColor: 'hsl(350, 70%, 32%)', icon: Code },
  { label: 'Founder', percentage: 10, color: 'bg-gold-dark', strokeColor: 'hsl(40, 80%, 45%)', icon: Users },
];

const utilities = [
  { title: 'Gas Fees', description: 'Pay for all network transactions', icon: Zap },
  { title: 'AI Services', description: 'Access AI bots and marketplace apps', icon: BarChart3 },
  { title: 'Governance', description: '1 BTCD = 1 Vote in DAO decisions', icon: Vote },
  { title: 'Staking Rewards', description: 'Earn passive income through staking', icon: Coins },
  { title: 'Marketplace', description: 'Currency for all ecosystem purchases', icon: Wallet },
  { title: 'Social Rewards', description: 'Earn from engagement on SocialFi', icon: Users },
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
              Designed for Long-Term Value
            </h1>
            <p className="text-xl text-muted-foreground">
              21 Billion BTCD | 2.5 Year Halving | 25 Year Vesting
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
                Token Parameters
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

      {/* Distribution */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            title="Fair Distribution Model"
            subtitle="Designed for sustainable growth and community ownership"
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
                      <AnimatedCounter end={21} suffix="B" />
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
                    
                    // Convert angles to radians
                    const startRad = (startAngle - 90) * (Math.PI / 180);
                    const endRad = (endAngle - 90) * (Math.PI / 180);
                    
                    // Donut chart parameters
                    const outerRadius = 85;
                    const innerRadius = 50;
                    const centerX = 100;
                    const centerY = 100;
                    
                    // Outer arc coordinates
                    const x1Outer = centerX + outerRadius * Math.cos(startRad);
                    const y1Outer = centerY + outerRadius * Math.sin(startRad);
                    const x2Outer = centerX + outerRadius * Math.cos(endRad);
                    const y2Outer = centerY + outerRadius * Math.sin(endRad);
                    
                    // Inner arc coordinates
                    const x1Inner = centerX + innerRadius * Math.cos(startRad);
                    const y1Inner = centerY + innerRadius * Math.sin(startRad);
                    const x2Inner = centerX + innerRadius * Math.cos(endRad);
                    const y2Inner = centerY + innerRadius * Math.sin(endRad);
                    
                    const largeArcFlag = item.percentage > 50 ? 1 : 0;
                    
                    // Create donut path
                    const pathData = [
                      `M ${x1Outer} ${y1Outer}`,
                      `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x2Outer} ${y2Outer}`,
                      `L ${x2Inner} ${y2Inner}`,
                      `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x1Inner} ${y1Inner}`,
                      'Z'
                    ].join(' ');
                    
                    // Calculate the middle angle for the slice to determine hover direction
                    const midAngle = ((startAngle + endAngle) / 2 - 90) * (Math.PI / 180);
                    
                    return (
                      <motion.g
                        key={item.label}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                        whileHover={{
                          x: Math.cos(midAngle) * 8,
                          y: Math.sin(midAngle) * 8,
                          transition: { type: "spring", stiffness: 400, damping: 25 }
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        <motion.path
                          d={pathData}
                          fill={item.strokeColor}
                          stroke="rgba(0, 0, 0, 0.3)"
                          strokeWidth="2"
                          initial={{ 
                            opacity: 0,
                            fill: 'rgba(0, 0, 0, 0.3)'
                          }}
                          animate={{ 
                            opacity: 1,
                            fill: item.strokeColor
                          }}
                          transition={{ 
                            delay: index * 0.15,
                            duration: 0.8,
                            ease: "easeOut"
                          }}
                        />
                      </motion.g>
                    );
                  })}
                </svg>
              </div>
            </motion.div>

            {/* Legend */}
            <div className="space-y-3">
              {distribution.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  <div className="relative flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-secondary/10 hover:border-secondary/30 transition-all backdrop-blur-sm shadow-lg hover:shadow-xl">
                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shadow-lg border-2 border-white/10 relative overflow-hidden group-hover:scale-110 transition-transform`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                      <item.icon className="w-6 h-6 text-foreground relative z-10" />
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground font-semibold text-sm mb-0.5">{item.label}</p>
                      <div className="h-1.5 bg-background/50 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                          className={`h-full ${item.color} rounded-full`}
                        />
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-serif text-2xl text-secondary font-bold block leading-none">{item.percentage}%</span>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Share</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Halving Mechanism */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="2.5-Year Halving Cycle"
            subtitle="Faster deflation than Bitcoin's 4-year cycle"
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard>
                <Clock className="w-12 h-12 text-secondary mb-6" />
                <h3 className="font-serif text-2xl text-secondary mb-4">
                  Halving Schedule
                </h3>
                <p className="text-muted-foreground mb-6">
                  Mining rewards reduce by 50% every 2.5 years, creating a predictable 
                  deflationary model that rewards early participants while ensuring 
                  long-term sustainability.
                </p>
                <div className="bg-card/50 p-4 rounded-lg font-mono text-sm">
                  <p className="text-secondary">Mining_Rate(t) = R₀ × (0.5)^⌊t/2.5⌋</p>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard>
                <TrendingDown className="w-12 h-12 text-secondary mb-6" />
                <h3 className="font-serif text-2xl text-secondary mb-4">
                  25-Year Vesting
                </h3>
                <p className="text-muted-foreground mb-6">
                  Team and founder tokens are vested equally over 25 years — the 
                  strongest anti-rug-pull commitment in the cryptocurrency industry.
                </p>
                <div className="flex items-center gap-4">
                  <Shield className="w-8 h-8 text-secondary" />
                  <p className="text-foreground font-medium">Maximum Trust Guarantee</p>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Token Utility */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-burgundy" />
        <div className="absolute inset-0 bg-pattern-circuit opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            title="Token Utility & Real Business Model"
            subtitle="BTCD powers the entire ecosystem with genuine value and utility"
          />

          {/* Core Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <GlassCard goldBorder className="p-8">
              <h3 className="font-serif text-2xl text-secondary text-center mb-6">
                Core Values of BTCD Token
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-gold font-semibold mb-3">Comprehensive Financial Services</h4>
                  <p className="text-foreground/80 text-sm">
                    A unified ecosystem where anyone can earn, trade, communicate, and manage 
                    their entire financial existence—all within a single platform.
                  </p>
                </div>
                <div>
                  <h4 className="text-gold font-semibold mb-3">AI-Powered Intelligence</h4>
                  <p className="text-foreground/80 text-sm">
                    The AI Bot Trade is not just "automated" but also learns and adjusts strategies 
                    according to the market—like a "virtual financial assistant".
                  </p>
                </div>
                <div>
                  <h4 className="text-gold font-semibold mb-3">100% Asset Ownership</h4>
                  <p className="text-foreground/80 text-sm">
                    Users control the private key, completely independent of intermediaries. 
                    True financial sovereignty.
                  </p>
                </div>
                <div>
                  <h4 className="text-gold font-semibold mb-3">Real Revenue Generation</h4>
                  <p className="text-foreground/80 text-sm">
                    Potential revenue from transaction fees, AI usage fees, and financial service 
                    fees—creating sustainable economic value.
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Utility Use Cases */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {utilities.map((utility, index) => (
              <motion.div
                key={utility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <utility.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-secondary mb-2">
                        {utility.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {utility.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Detailed Use Cases */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8">
              <h3 className="font-serif text-2xl text-secondary mb-6 text-center">
                How BTCD Token is Used Across the Ecosystem
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-card/30 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-2">Trading on DEX</h4>
                    <p className="text-foreground/70 text-sm">
                      BTCD is used for all trading operations on the decentralized exchange, 
                      including liquidity provision and cross-chain swaps.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card/30 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-2">Payment for AI Bot Trade</h4>
                    <p className="text-foreground/70 text-sm">
                      Access to AI-powered trading bots requires BTCD tokens, enabling automated 
                      portfolio management and intelligent trading strategies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card/30 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-2">Access to Premium Services (Viddhana OS)</h4>
                    <p className="text-foreground/70 text-sm">
                      Premium features of the Viddhana Asset Management OS and other ecosystem 
                      services are unlocked with BTCD tokens.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card/30 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-2">Rewards for User Engagement (Engage-to-Earn)</h4>
                    <p className="text-foreground/70 text-sm">
                      Participate in the SocialFi network, create content, engage with the community, 
                      and earn BTCD tokens that can be converted to real money or used for trading.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card/30 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-2">AI Marketplace Currency</h4>
                    <p className="text-foreground/70 text-sm">
                      Rent or purchase AI models and applications from the Web3 AppStore using 
                      BTCD tokens, with 80/20 revenue split for developers.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/whitepaper">
              <Button variant="gold" size="lg">
                Full Economic Model
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
