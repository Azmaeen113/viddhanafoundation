import { motion } from 'framer-motion';
import { 
  Download, 
  FileText, 
  Code,
  Shield,
  Users,
  BarChart3,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/GlassCard';
import { SectionHeading } from '@/components/SectionHeading';

const sections = [
  { 
    title: 'Executive Summary', 
    description: 'Vision, problems solved, and market opportunity',
    icon: FileText 
  },
  { 
    title: 'Technical Architecture', 
    description: 'Consensus, smart contracts, and AI integration',
    icon: Code 
  },
  { 
    title: 'Economic Model', 
    description: 'Tokenomics, distribution, and value accrual',
    icon: BarChart3 
  },
  { 
    title: 'Ecosystem Details', 
    description: 'Deep dive into all 7 ecosystem components',
    icon: Users 
  },
  { 
    title: 'Security Analysis', 
    description: 'Audits, risks, and mitigation strategies',
    icon: Shield 
  },
];

const resources = [
  { title: 'Full Whitepaper', format: 'PDF', size: '4.2 MB' },
  { title: 'Technical Specs', format: 'PDF', size: '2.1 MB' },
  { title: 'Tokenomics Model', format: 'XLSX', size: '890 KB' },
  { title: 'Brand Assets', format: 'ZIP', size: '15 MB' },
];

export default function Whitepaper() {
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
              Complete Technical Documentation
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Deep dive into BTCD's architecture, economics, and vision
            </p>
            <Button variant="hero" size="xl">
              <Download className="mr-2" size={20} />
              Download Full Whitepaper
            </Button>
            <p className="text-muted-foreground text-sm mt-4">
              Version 2.1 | Last Updated: December 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Document Sections */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Documentation Overview"
            subtitle="Comprehensive coverage of every aspect of BTCD"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-secondary mb-2">
                        {section.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-burgundy" />
        <div className="absolute inset-0 bg-pattern-circuit opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard goldBorder>
                <h2 className="font-serif text-3xl text-gradient-gold mb-6 text-center">
                  Executive Summary
                </h2>
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-foreground/90 mb-6">
                    BTCD Foundation introduces a revolutionary approach to 
                    decentralized finance — a complete financial operating system 
                    designed to serve 8 billion people regardless of their technical 
                    expertise or financial background.
                  </p>

                  <h3 className="font-serif text-xl text-secondary mt-8 mb-4">The Problem</h3>
                  <p className="text-muted-foreground mb-6">
                    Traditional cryptocurrencies suffer from three fundamental barriers 
                    to mass adoption: technical complexity, financial exclusivity, and 
                    limited real-world utility. BTCD solves all three.
                  </p>

                  <h3 className="font-serif text-xl text-secondary mt-8 mb-4">Our Solution</h3>
                  <p className="text-muted-foreground mb-6">
                    By integrating native AI at the protocol level, implementing 
                    zero-cost entry mechanisms, and building a comprehensive ecosystem 
                    of seven interconnected applications, BTCD creates a frictionless 
                    path from traditional finance to the decentralized future.
                  </p>

                  <h3 className="font-serif text-xl text-secondary mt-8 mb-4">Market Opportunity</h3>
                  <p className="text-muted-foreground">
                    With 2 billion unbanked individuals and growing distrust in 
                    traditional financial systems, the opportunity for a truly 
                    accessible, utility-rich cryptocurrency has never been greater. 
                    BTCD is positioned to capture this market with its unique 
                    combination of technology and accessibility.
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Downloadable Resources"
            subtitle="All documentation and brand assets in one place"
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{resource.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {resource.format} • {resource.size}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="w-5 h-5 text-secondary" />
                  </Button>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-burgundy" />
        <div className="absolute inset-0 bg-pattern-circuit opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <GlassCard>
              <h3 className="font-serif text-xl text-secondary mb-4">
                Legal Disclaimer
              </h3>
              <div className="space-y-4 text-muted-foreground text-sm">
                <p>
                  This whitepaper is for informational purposes only and does not 
                  constitute investment advice, financial advice, trading advice, 
                  or any other sort of advice.
                </p>
                <p>
                  BTCD tokens are utility tokens and are not intended to be securities. 
                  Participation in the BTCD ecosystem involves risk, and participants 
                  should conduct their own research before making any decisions.
                </p>
                <p>
                  The information contained herein is subject to change without notice. 
                  BTCD Foundation makes no representations about the accuracy or 
                  completeness of this information.
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
