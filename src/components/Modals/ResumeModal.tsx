import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, SKILL_CATEGORIES } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl text-zinc-900 dark:text-zinc-100 p-6 sm:p-10 my-auto">
        {/* Top Controls */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-blue-600 hover:bg-blue-500 text-white transition-colors focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Interview%20Invitation%20for%20Savar%20Shetty`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Directly</span>
            </a>
          </div>

          <button
            onClick={onClose}
            aria-label="Close CV modal"
            className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Resume Content Sheet */}
        <div id="printable-cv" className="space-y-6">
          {/* Header */}
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-5">
            <h2 id="resume-title" className="text-3xl font-display font-bold tracking-tight text-zinc-900 dark:text-white">
              {PERSONAL_INFO.name}
            </h2>
            <p className="text-sm font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400 mt-1">
              AI/ML ENGINEER
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-3 text-xs text-zinc-600 dark:text-white font-mono-code">
              <a href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <span aria-hidden="true">|</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span aria-hidden="true">|</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
                github.com/Usebonded
              </a>
              <span aria-hidden="true">|</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
                linkedin.com/in/savar-shetty-usebonded
              </a>
            </div>
          </div>

          {/* Personal Profile */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-white">
              Personal Profile
            </h3>
            <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-zinc-600 dark:text-white leading-relaxed">
              <li>
                Second-year B.Tech (AI &amp; ML) student at Symbiosis Skills and Professional University with hands-on experience building applied machine learning systems — from a real-time, multi-model fraud detection engine to a multi-modal AI assistant that reasons across vision, audio, and language.
              </li>
              <li>
                Comfortable across the stack, from ML model design (ensembles, deep learning, reinforcement learning, computer vision) to backend APIs, security, and edge/IoT integration.
              </li>
              <li>
                Proven track record leading teams to ship working prototypes under hackathon deadlines, including Smart India Hackathon and Google Synapse Hackathon. Seeking an AI/ML Engineer role to apply this blend of applied ML, systems engineering, and rapid prototyping to real-world products.
              </li>
            </ul>
          </div>

          {/* Work Experience */}
          <div className="space-y-3 pt-2 border-t border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-white">
              Work Experience
            </h3>
            <div className="space-y-3">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {exp.role} — <span className="font-normal text-zinc-500 dark:text-white">{exp.company}</span>
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-white font-mono-code">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-zinc-600 dark:text-white leading-relaxed">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3 pt-2 border-t border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-white">
              Technical Skills
            </h3>
            <div className="space-y-1.5 text-xs text-zinc-600 dark:text-white">
              <p><strong className="text-zinc-900 dark:text-zinc-200">Languages:</strong> Python, C/C++, Java, JavaScript</p>
              <p><strong className="text-zinc-900 dark:text-zinc-200">AI &amp; Machine Learning:</strong> Machine Learning &amp; Deep Learning, LLMs &amp; Generative AI, Computer Vision Pipelines, Autonomous Agentic Systems, Data Analytics &amp; Statistics, Reinforcement Learning</p>
              <p><strong className="text-zinc-900 dark:text-zinc-200">Web &amp; Full-Stack:</strong> React, Full-Stack Web Development, UI/UX Design, REST APIs, Tailwind CSS</p>
              <p><strong className="text-zinc-900 dark:text-zinc-200">Tools &amp; Practices:</strong> Git &amp; GitHub, Data Structures, Rapid MVP Prototyping, Hardware/IoT (ESP32)</p>
              <p><strong className="text-zinc-900 dark:text-zinc-200">Leadership:</strong> Hackathon Sprint Leadership, Cross-Discipline Team Leadership, Continuous Self-Direction</p>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-3 pt-2 border-t border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-white">
              Education &amp; Certifications
            </h3>
            <div className="space-y-2 text-xs">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="flex flex-wrap items-baseline justify-between gap-1">
                  <div>
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">{edu.degree}</span>
                    <span className="text-zinc-500 dark:text-white"> — {edu.institution}</span>
                  </div>
                  <span className="text-zinc-500 dark:text-white font-mono-code">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3 pt-2 border-t border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-white">
              Key Projects
            </h3>
            <div className="space-y-3 text-xs">
              <div className="space-y-0.5">
                <div className="flex justify-between font-semibold text-zinc-900 dark:text-zinc-100">
                  <span>A.R.G.U.S. — Automated Risk Assessment &amp; Anomaly Detection System</span>
                  <span className="font-normal text-zinc-500 dark:text-white">Team Lead &amp; Developer</span>
                </div>
                <p className="text-zinc-600 dark:text-white">
                  Real-time fraud detection system for banking transactions and IoT POS terminals (ESP32).
                </p>
              </div>

              <div className="space-y-0.5">
                <div className="flex justify-between font-semibold text-zinc-900 dark:text-zinc-100">
                  <span>MMA — Multi-Model Assistant</span>
                  <span className="font-normal text-zinc-500 dark:text-white">Solo Project</span>
                </div>
                <p className="text-zinc-600 dark:text-white">
                  Multi-modal AI assistant integrating vision, audio, and language reasoning for dynamic, contextual, agentic workflows.
                </p>
              </div>

              <div className="space-y-0.5">
                <div className="flex justify-between font-semibold text-zinc-900 dark:text-zinc-100">
                  <span>V.A.L.I.D — Smart India Hackathon 2026</span>
                  <span className="font-normal text-zinc-500 dark:text-white">Team Leader &amp; UI/UX Designer</span>
                </div>
                <p className="text-zinc-600 dark:text-white">
                  AI-generated voice detection system built to identify synthetic speech and audio clones for audio forensics applications.
                </p>
              </div>

              <div className="space-y-0.5">
                <div className="flex justify-between font-semibold text-zinc-900 dark:text-zinc-100">
                  <span>Stock Trading Bot</span>
                  <span className="font-normal text-zinc-500 dark:text-white">ML Engineer &amp; Collaborator</span>
                </div>
                <p className="text-zinc-600 dark:text-white">
                  Automated trading system built using Reinforcement Learning, developed collaboratively with a 4-person team.
                </p>
              </div>

              <div className="space-y-0.5">
                <div className="flex justify-between font-semibold text-zinc-900 dark:text-zinc-100">
                  <span>MeshRoute Ops — Google Synapse Hackathon</span>
                  <span className="font-normal text-zinc-500 dark:text-white">AI &amp; Computer Vision</span>
                </div>
                <p className="text-zinc-600 dark:text-white">
                  AI-powered emergency dispatch command center designed to optimize disaster relief logistics in real time.
                </p>
              </div>

              <div className="space-y-0.5">
                <div className="flex justify-between font-semibold text-zinc-900 dark:text-zinc-100">
                  <span>HostelEase — Freelance, Symbiosis Hostel</span>
                  <span className="font-normal text-zinc-500 dark:text-white">Full-Stack Engineer</span>
                </div>
                <p className="text-zinc-600 dark:text-white">
                  Centralized hostel administrative system built to streamline operations and improve the day-to-day student experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
