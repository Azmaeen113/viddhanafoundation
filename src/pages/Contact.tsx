import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Building, User } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/GlassCard';
import { SectionHeading } from '@/components/SectionHeading';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { openEmailClient, WEBSITE_EMAIL } from '@/lib/emailUtils';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields (Name, Email, Subject, and Message)');
      return;
    }

    // Open email client with form data
    openEmailClient(formData, `Contact Form: ${formData.subject}`, 'Contact Inquiry');
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
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions about VIDDHANA? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8">
                <h2 className="font-serif text-2xl text-gradient-gold mb-6">
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
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

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company" className="text-white mb-2 flex items-center gap-2">
                        <Building size={16} className="text-gold" />
                        Company (Optional)
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="bg-green-dark/30 border-gold/20 focus:border-gold text-white"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-white mb-2 flex items-center gap-2">
                        <Phone size={16} className="text-gold" />
                        Phone (Optional)
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="bg-green-dark/30 border-gold/20 focus:border-gold text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-white mb-2 flex items-center gap-2">
                      <MessageSquare size={16} className="text-gold" />
                      Subject <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      className="bg-green-dark/30 border-gold/20 focus:border-gold text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white mb-2 flex items-center gap-2">
                      <Mail size={16} className="text-gold" />
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                      className="bg-green-dark/30 border-gold/20 focus:border-gold text-white resize-none"
                    />
                  </div>

                  <Button type="submit" variant="gold" size="lg" className="w-full">
                    <Send className="mr-2" size={18} />
                    Send Message
                  </Button>

                  <p className="text-xs text-gray-light text-center mt-4">
                    * Clicking "Send Message" will open your email client with the form data pre-filled.
                  </p>
                </form>
              </GlassCard>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="font-serif text-2xl text-gradient-gold mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-light mb-8">
                  Reach out to us through any of these channels. We typically respond within 24-48 hours.
                </p>
              </div>

              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-light text-sm mb-2">General Inquiries:</p>
                    <a href={`mailto:${WEBSITE_EMAIL}`} className="text-gold hover:text-gold-bright transition-colors">
                      {WEBSITE_EMAIL}
                    </a>
                    <p className="text-gray-light text-sm mt-3 mb-2">Press & Media:</p>
                    <a href="mailto:press@viddhana.io" className="text-gold hover:text-gold-bright transition-colors">
                      press@viddhana.io
                    </a>
                    <p className="text-gray-light text-sm mt-3 mb-2">Support:</p>
                    <a href="mailto:support@viddhana.io" className="text-gold hover:text-gold-bright transition-colors">
                      support@viddhana.io
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Location</h3>
                    <p className="text-gray-light text-sm">
                      VIDDHANA Foundation<br />
                      Global Operations<br />
                      Decentralized Network
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6 bg-gradient-to-br from-gold/5 to-transparent border-2 border-gold/30">
                <h3 className="font-serif text-xl text-gold mb-4">Looking to Partner?</h3>
                <p className="text-gray-light text-sm mb-4">
                  We're always interested in strategic partnerships, integrations, and collaborations that align with our mission to democratize wealth management.
                </p>
                <a href="mailto:partnerships@viddhana.io">
                  <Button variant="goldOutline" size="sm" className="w-full">
                    partnerships@viddhana.io
                  </Button>
                </a>
              </GlassCard>

              <GlassCard className="p-6 bg-gradient-to-br from-primary/5 to-transparent border-2 border-primary/30">
                <h3 className="font-serif text-xl text-primary mb-4">Join Our Team</h3>
                <p className="text-gray-light text-sm mb-4">
                  We're building the future of finance. If you're passionate about blockchain, AI, and financial inclusion, we'd love to hear from you.
                </p>
                <a href="mailto:careers@viddhana.io">
                  <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    careers@viddhana.io
                  </Button>
                </a>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-24 bg-green-darkest">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions"
          />
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "When will VIDDHANA platform launch?",
                a: "We're targeting Q1-Q2 2026 for testnet launch and Q3 2026 for mainnet."
              },
              {
                q: "How can I participate in the early access?",
                a: "Stay tuned to our announcements. We'll be opening early access programs closer to launch."
              },
              {
                q: "Is VIDDHANA available in my country?",
                a: "VIDDHANA is designed to be globally accessible, though some features may vary by jurisdiction."
              },
              {
                q: "How do I become a developer partner?",
                a: "Contact us at partnerships@viddhana.io with details about your project or integration idea."
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <GlassCard className="p-6">
                  <h3 className="font-semibold text-gold mb-2">{faq.q}</h3>
                  <p className="text-gray-light text-sm">{faq.a}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
