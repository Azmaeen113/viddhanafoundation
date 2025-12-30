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
import { useTranslation } from 'react-i18next';

export default function Whitepaper() {
  const { t } = useTranslation();

  const sections = [
    { 
      title: t('whitepaper.sections.executiveSummary.title'), 
      description: t('whitepaper.sections.executiveSummary.description'),
      icon: FileText 
    },
    { 
      title: t('whitepaper.sections.technicalArchitecture.title'), 
      description: t('whitepaper.sections.technicalArchitecture.description'),
      icon: Code 
    },
    { 
      title: t('whitepaper.sections.economicModel.title'), 
      description: t('whitepaper.sections.economicModel.description'),
      icon: BarChart3 
    },
    { 
      title: t('whitepaper.sections.ecosystemDetails.title'), 
      description: t('whitepaper.sections.ecosystemDetails.description'),
      icon: Users 
    },
    { 
      title: t('whitepaper.sections.securityAnalysis.title'), 
      description: t('whitepaper.sections.securityAnalysis.description'),
      icon: Shield 
    },
  ];

  const resources = [
    { title: 'VIDDHANA WHITEPAPERE.pdf', format: 'PDF', size: '4.2 MB', file: '/VIDDHANA WHITEPAPERE.pdf' },
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
              {t('whitepaper.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('whitepaper.subtitle')}
            </p>
            <a href="/VIDDHANA WHITEPAPERE.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl">
                <Download className="mr-2" size={20} />
                {t('whitepaper.download')}
              </Button>
            </a>
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
            title={t('whitepaper.overview.title')}
            subtitle={t('whitepaper.overview.subtitle')}
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
        <div className="absolute inset-0 bg-gradient-green" />
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
                  {t('whitepaper.executiveSummary.title')}
                </h2>
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-foreground/90 mb-6">
                    {t('whitepaper.executiveSummary.intro')}
                  </p>

                  <h3 className="font-serif text-xl text-secondary mt-8 mb-4">{t('whitepaper.executiveSummary.problemTitle')}</h3>
                  <p className="text-muted-foreground mb-6">
                    {t('whitepaper.executiveSummary.problemText')}
                  </p>

                  <h3 className="font-serif text-xl text-secondary mt-8 mb-4">{t('whitepaper.executiveSummary.solutionTitle')}</h3>
                  <p className="text-muted-foreground mb-6">
                    {t('whitepaper.executiveSummary.solutionText')}
                  </p>

                  <h3 className="font-serif text-xl text-secondary mt-8 mb-4">{t('whitepaper.executiveSummary.marketTitle')}</h3>
                  <p className="text-muted-foreground">
                    {t('whitepaper.executiveSummary.marketText')}
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
            title={t('whitepaper.downloadableResources.title')}
            subtitle={t('whitepaper.downloadableResources.subtitle')}
          />

          <div className="max-w-2xl mx-auto">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <a href={resource.file} target="_blank" rel="noopener noreferrer">
                  <GlassCard className="flex items-center justify-between hover:border-secondary/50 transition-colors cursor-pointer">
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
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-green" />
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
                {t('whitepaper.disclaimer.title')}
              </h3>
              <div className="space-y-4 text-muted-foreground text-sm">
                <p>{t('whitepaper.disclaimer.paragraph1')}</p>
                <p>{t('whitepaper.disclaimer.paragraph2')}</p>
                <p>{t('whitepaper.disclaimer.paragraph3')}</p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
