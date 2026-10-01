import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, Github, Linkedin, Twitter, ArrowRight, ShieldCheck, Terminal, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  onNotify: (title: string, message: string, type: 'success' | 'error' | 'info') => void;
}

function useFadeInOnScroll(threshold = 0.1, rootMargin = '0px 0px -40px 0px') {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible] as const;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNotify }) => {
  const [headerRef, headerVisible] = useFadeInOnScroll(0.1);
  const [leftColRef, leftColVisible] = useFadeInOnScroll(0.08, '0px 0px -30px 0px');
  const [formRef, formVisible] = useFadeInOnScroll(0.08, '0px 0px -30px 0px');

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      onNotify('Copied to Clipboard', `Email address ${PERSONAL_INFO.email} is ready to paste.`, 'info');
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      onNotify('Copy Failed', 'Please manually select and copy the email address.', 'error');
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = 'Email address is required.';
    else if (!emailRegex.test(formData.email.trim())) newErrors.email = 'Please provide a valid email format.';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message body cannot be empty.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      onNotify('Validation Error', 'Please complete the required fields before transmitting.', 'error');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onNotify(
        'Telemetry Dispatched',
        `Thank you ${formData.name}! Your message regarding "${formData.subject}" has been logged. Savar will reply within 24 hours.`,
        'success'
      );
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 700);
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-transparent relative overflow-hidden border-t border-white/5 text-white">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header (Velos Join the Vanguard Style) */}
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8 transition-all duration-700 ease-out transform ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[1px] bg-[#E5E7EB]" />
              <span className="text-[#E5E7EB] text-xs font-mono-code uppercase tracking-widest">
                Direct Channels // Open Comms
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bricolage font-medium tracking-tighter text-white leading-[0.9]">
              Engage <span className="text-white">Engineering.</span>
            </h2>
          </div>
          <p className="text-white text-base max-w-md font-light leading-relaxed mb-2">
            Seeking an AI/ML Engineer role, research collaboration, or high-stakes hackathon sprint? Direct communication lines are active.
          </p>
        </div>

        {/* 2-Column Grid: Communication Channels Left + Transmit Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Glassmorphic Direct Channel Cards */}
          <div
            ref={leftColRef}
            style={{ transitionDelay: '100ms' }}
            className={`lg:col-span-6 flex flex-col gap-4 transition-all duration-700 ease-out transform ${
              leftColVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Email Card (Velos Job Card Style) */}
            <div className="group p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-white/0 hover:from-white/20 hover:to-white/5 transition-all duration-500 shadow-xl">
              <div className="bg-neutral-900/80 backdrop-blur-xl rounded-[23px] p-6 sm:p-7 flex items-center justify-between border border-white/10 shadow-2xl">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E5E7EB] group-hover:scale-105 group-hover:bg-white/10 transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#E5E7EB] block mb-0.5">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-base sm:text-lg font-bricolage text-white font-medium hover:text-[#E5E7EB] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                    <span className="text-xs text-white block mt-0.5 font-mono-code">
                      Response SLA &lt; 24h
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email"
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#E5E7EB]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Telephone Card */}
            <div className="group p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-white/0 hover:from-white/20 hover:to-white/5 transition-all duration-500 shadow-xl">
              <div className="bg-neutral-900/80 backdrop-blur-xl rounded-[23px] p-6 sm:p-7 flex items-center justify-between border border-white/10 shadow-2xl">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:scale-105 group-hover:bg-indigo-500/10 transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-code uppercase tracking-wider text-indigo-400 block mb-0.5">
                      Telephone &amp; SMS
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-base sm:text-lg font-bricolage text-white font-medium hover:text-indigo-400 transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                    <span className="text-xs text-white block mt-0.5 font-mono-code">
                      Available for Recruiter Inquiries
                    </span>
                  </div>
                </div>

                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-neutral-900/80 border border-white/10 flex items-center justify-center gap-2 text-xs font-mono-code text-white hover:border-white/30 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-neutral-900/80 border border-white/10 flex items-center justify-center gap-2 text-xs font-mono-code text-white hover:border-white/30 transition-all"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-neutral-900/80 border border-white/10 flex items-center justify-center gap-2 text-xs font-mono-code text-white hover:border-white/30 transition-all"
              >
                <Twitter className="w-4 h-4" />
                <span>Twitter/X</span>
              </a>
            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div
            ref={formRef}
            style={{ transitionDelay: '200ms' }}
            className={`lg:col-span-6 transition-all duration-700 ease-out transform ${
              formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-neutral-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-2">
                <span className="font-bricolage text-xl text-white font-medium">
                  Dispatch Message
                </span>
                <span className="text-[10px] font-mono-code text-[#E5E7EB] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5E7EB] animate-pulse" />
                  SECURE PROTOCOL
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono-code uppercase text-white mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Vance"
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-neutral-950/80 text-white text-xs font-sans placeholder-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  />
                  {errors.name && <p className="text-[10px] text-rose-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-[11px] font-mono-code uppercase text-white mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-neutral-950/80 text-white text-xs font-sans placeholder-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  />
                  {errors.email && <p className="text-[10px] text-rose-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono-code uppercase text-white mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="AI/ML Engineer Role or Collaboration"
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-neutral-950/80 text-white text-xs font-sans placeholder-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                />
                {errors.subject && <p className="text-[10px] text-rose-400 mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label className="block text-[11px] font-mono-code uppercase text-white mb-1">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Savar, we would like to interview you for our applied ML & systems team..."
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-neutral-950/80 text-white text-xs font-sans placeholder-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 resize-y"
                />
                {errors.message && <p className="text-[10px] text-rose-400 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-full bg-white text-black font-semibold text-xs font-mono-code uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <span>Transmit Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
