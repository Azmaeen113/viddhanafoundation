import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Send, 
  User, 
  Mail, 
  Briefcase, 
  Link as LinkIcon,
  FileUp,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/GlassCard';
import { SectionHeading } from '@/components/SectionHeading';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { openEmailWithInstructions } from '@/lib/emailUtils';
import { useTranslation } from 'react-i18next';

export default function SubmitWork() {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    portfolio: '',
    role: '',
    experience: '',
    description: '',
    availability: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.role || !formData.description) {
      alert('Please fill in all required fields (Name, Email, Role, and Description)');
      return;
    }

    const attachmentInstructions = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IMPORTANT: PLEASE ATTACH YOUR WORK SAMPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Please attach the following to this email:
✓ Resume/CV (PDF format preferred)
✓ Portfolio files or work samples
✓ Any relevant certifications
✓ GitHub/LinkedIn profiles (if not provided above)
✓ Code samples or project repositories (for developers)
✓ Design mockups or case studies (for designers)

Supported formats: PDF, DOC, DOCX, ZIP (max 10MB per file)

If your files are larger than 10MB, please upload them to:
- Google Drive, Dropbox, or WeTransfer
- Then share the link in this email

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We review all submissions within 5-7 business days.
You'll hear back from us at: support@btcd.foundation

Thank you for your interest in joining BTCD/VIDDHANA Foundation!
`;

    // Open email client with form data and attachment instructions
    openEmailWithInstructions(
      formData,
      `Job Application: ${formData.role} - ${formData.name}`,
      'Job Application / Work Submission',
      attachmentInstructions
    );

    setSubmitted(true);
  };

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
              {t('submitWork.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              {t('submitWork.subtitle')}
            </p>
            <p className="text-gray-light">
              We're looking for talented developers, designers, marketers, and blockchain experts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {!submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8">
                  <h2 className="font-serif text-2xl text-gradient-gold mb-2">
                    Submit Your Application
                  </h2>
                  <p className="text-gray-light mb-8 text-sm">
                    Fill out the form below. After submission, you'll be prompted to attach your work samples via email.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-white mb-2 flex items-center gap-2">
                          <User size={16} className="text-gold" />
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-green-dark/30 border-gold/20 focus:border-gold text-white"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-white mb-2 flex items-center gap-2">
                          <Mail size={16} className="text-gold" />
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="bg-green-dark/30 border-gold/20 focus:border-gold text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="role" className="text-white mb-2 flex items-center gap-2">
                        <Briefcase size={16} className="text-gold" />
                        Position Applying For <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="e.g., Blockchain Developer, UI/UX Designer, Marketing Manager"
                        required
                        className="bg-green-dark/30 border-gold/20 focus:border-gold text-white"
                      />
                    </div>

                    <div>
                      <Label htmlFor="portfolio" className="text-white mb-2 flex items-center gap-2">
                        <LinkIcon size={16} className="text-gold" />
                        Portfolio/LinkedIn/GitHub URL (Optional)
                      </Label>
                      <Input
                        id="portfolio"
                        name="portfolio"
                        type="url"
                        value={formData.portfolio}
                        onChange={handleChange}
                        placeholder="https://github.com/yourusername or https://linkedin.com/in/yourusername"
                        className="bg-green-dark/30 border-gold/20 focus:border-gold text-white"
                      />
                    </div>

                    <div>
                      <Label htmlFor="experience" className="text-white mb-2 flex items-center gap-2">
                        <CheckCircle size={16} className="text-gold" />
                        Years of Experience (Optional)
                      </Label>
                      <Input
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        placeholder="e.g., 5 years"
                        className="bg-green-dark/30 border-gold/20 focus:border-gold text-white"
                      />
                    </div>

                    <div>
                      <Label htmlFor="availability" className="text-white mb-2 flex items-center gap-2">
                        <AlertCircle size={16} className="text-gold" />
                        Availability (Optional)
                      </Label>
                      <Input
                        id="availability"
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        placeholder="e.g., Immediate, 2 weeks notice, Part-time"
                        className="bg-green-dark/30 border-gold/20 focus:border-gold text-white"
                      />
                    </div>

                    <div>
                      <Label htmlFor="description" className="text-white mb-2 flex items-center gap-2">
                        <FileText size={16} className="text-gold" />
                        Why You'd Be a Great Fit <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Tell us about your relevant experience, skills, and why you're interested in VIDDHANA..."
                        rows={6}
                        required
                        className="bg-green-dark/30 border-gold/20 focus:border-gold text-white resize-none"
                      />
                    </div>

                    <div className="bg-gold/10 border border-gold/30 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <FileUp className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white font-semibold mb-2">Next Step: Attach Your Work</p>
                          <p className="text-sm text-gray-light">
                            After clicking "Submit Application", your email client will open with this form data pre-filled. 
                            You'll then be able to attach your resume, portfolio, and work samples before sending.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button type="submit" variant="gold" size="lg" className="w-full">
                      <Send className="mr-2" size={18} />
                      Submit Application
                    </Button>
                  </form>
                </GlassCard>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <GlassCard className="p-12 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-gold" />
                  </div>
                  <h2 className="font-serif text-3xl text-gradient-gold mb-4">
                    Email Client Opened!
                  </h2>
                  <p className="text-gray-light mb-6 max-w-md mx-auto">
                    Your email client should have opened with the form data pre-filled. Please attach your resume, 
                    portfolio, and work samples, then send the email to complete your application.
                  </p>
                  <div className="space-y-3 text-left max-w-md mx-auto mb-8 bg-green-dark/30 p-4 rounded-lg">
                    <p className="text-sm text-gray-light">
                      <strong className="text-gold">Don't see your email client?</strong>
                    </p>
                    <p className="text-xs text-gray-light">
                      • Check if pop-ups are blocked<br />
                      • Manually email your application to: <span className="text-gold">careers@viddhana.io</span><br />
                      • Include all the information from the form
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => setSubmitted(false)}
                    className="border-gold text-gold hover:bg-gold hover:text-green-dark"
                  >
                    Submit Another Application
                  </Button>
                </GlassCard>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-green-darkest">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Open Positions"
            subtitle="Current opportunities at VIDDHANA Foundation"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Senior Blockchain Developer',
                type: 'Full-Time',
                location: 'Remote',
                skills: ['Solidity', 'Rust', 'Web3.js', 'Layer 2/3']
              },
              {
                title: 'AI/ML Engineer',
                type: 'Full-Time',
                location: 'Remote',
                skills: ['Python', 'TensorFlow', 'NLP', 'Quantitative Analysis']
              },
              {
                title: 'UI/UX Designer',
                type: 'Full-Time',
                location: 'Remote',
                skills: ['Figma', 'Web3 Design', 'User Research', 'Prototyping']
              },
              {
                title: 'Smart Contract Auditor',
                type: 'Contract',
                location: 'Remote',
                skills: ['Security', 'Solidity', 'Auditing', 'Cryptography']
              },
              {
                title: 'Marketing Manager',
                type: 'Full-Time',
                location: 'Remote',
                skills: ['Content', 'Social Media', 'Community', 'Growth']
              },
              {
                title: 'Community Manager',
                type: 'Part-Time',
                location: 'Remote',
                skills: ['Discord', 'Telegram', 'Engagement', 'Support']
              }
            ].map((position, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <GlassCard className="p-6 h-full">
                  <h3 className="font-serif text-xl text-gold mb-2">{position.title}</h3>
                  <div className="flex items-center gap-3 mb-4 text-sm">
                    <span className="text-gray-light">{position.type}</span>
                    <span className="text-gray-light">•</span>
                    <span className="text-gray-light">{position.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-gold/10 text-gold text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
