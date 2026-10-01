import React from 'react';
import { ExternalLink, Github, Linkedin, ArrowRight, ArrowUpRight, Search, Layers, Radio, Shield, Bot, Brain, TrendingUp, Navigation, Building, FolderGit2 } from 'lucide-react';
import { PROJECTS, ADDITIONAL_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

function useFadeInOnScroll(threshold = 0.12, rootMargin = '0px 0px -40px 0px') {
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

const SecondaryProjectCard: React.FC<{
  project: Project;
  idx: number;
  onSelectProject: (p: Project) => void;
}> = ({ project, idx, onSelectProject }) => {
  const [cardRef, isVisible] = useFadeInOnScroll(0.12, '0px 0px -30px 0px');

  return (
    <div
      ref={cardRef}
      onClick={() => onSelectProject(project)}
      style={{
        transitionDelay: `${idx * 120}ms`
      }}
      className={`group relative rounded-3xl overflow-hidden bg-neutral-900/80 hover:bg-neutral-900/95 border border-white/10 p-6 flex flex-col justify-between hover:border-white/30 backdrop-blur-xl transition-all duration-700 ease-out cursor-pointer shadow-2xl transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8 pointer-events-none'
      } hover:-translate-y-1 hover:border-white/30`}
    >
      <div>
        <div className="flex items-center justify-between text-xs text-white mb-3 font-mono-code">
          <span className="text-white font-semibold">{project.category}</span>
          <span>{idx + 4 < 10 ? `0${idx + 4}` : `${idx + 4}`}</span>
        </div>
        <h4 className="text-xl font-bricolage font-medium text-white mb-2 group-hover:text-[#E5E7EB] transition-colors">
          {project.title}
        </h4>
        <p className="text-xs text-white leading-relaxed line-clamp-3">
          {project.shortDescription}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-code text-white">
        <span className="truncate pr-2">{project.tags.slice(0, 2).join(' · ')}</span>
        <div className="flex items-center gap-2 shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              title={`View ${project.title} on GitHub`}
              className="p-1.5 rounded-full bg-white/5 border border-white/15 text-white hover:bg-white hover:text-black transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
          <ArrowUpRight className="w-4 h-4 text-white group-hover:text-[#E5E7EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
};

const RelevantLearningCard: React.FC<{
  extra: (typeof ADDITIONAL_PROJECTS)[number];
  idx: number;
}> = ({ extra, idx }) => {
  const [cardRef, isVisible] = useFadeInOnScroll(0.12, '0px 0px -40px 0px');

  return (
    <div
      ref={cardRef}
      style={{
        transitionDelay: `${idx * 100}ms`
      }}
      className={`p-5 rounded-2xl border border-white/10 bg-neutral-900/80 hover:bg-neutral-900/95 backdrop-blur-xl shadow-xl flex flex-col justify-between transition-all duration-700 ease-out transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-6 pointer-events-none'
      } hover:-translate-y-1 hover:border-white/25`}
    >
      <div>
        <div className="flex items-center justify-between text-xs text-white mb-2 font-mono-code">
          <span>{extra.role}</span>
          <FolderGit2 className="w-3.5 h-3.5 text-white" />
        </div>
        <h4 className="text-sm font-bold text-white mb-1.5 font-bricolage">
          {extra.title}
        </h4>
        <p className="text-xs text-white leading-relaxed">
          {extra.description}
        </p>
      </div>
      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-code text-white">
        <span className="truncate pr-2">{extra.tech}</span>
        {extra.linkedinUrl && (
          <a
            href={extra.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View Certification on LinkedIn"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0077b5]/20 hover:bg-[#0077b5]/40 text-[#70b5f9] border border-[#0077b5]/40 text-[10px] font-mono-code transition-colors shrink-0"
          >
            <Linkedin className="w-3 h-3" />
            <span>Verify</span>
          </a>
        )}
      </div>
    </div>
  );
};

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const flagshipAres = PROJECTS.find((p) => p.id === 'argus-fraud-detection') || PROJECTS[0];
  const cardGateway = PROJECTS.find((p) => p.id === 'mma-multimodel-assistant') || PROJECTS[1];
  const cardTitan = PROJECTS.find((p) => p.id === 'valid-audio-forensics') || PROJECTS[2];
  const secondaryProjects = PROJECTS.filter(
    (p) => p.id !== flagshipAres.id && p.id !== cardGateway.id && p.id !== cardTitan.id
  );

  const [flagshipRef, flagshipVisible] = useFadeInOnScroll(0.1, '0px 0px -40px 0px');
  const [card2Ref, card2Visible] = useFadeInOnScroll(0.1, '0px 0px -40px 0px');
  const [card3Ref, card3Visible] = useFadeInOnScroll(0.1, '0px 0px -40px 0px');

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-transparent text-white overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-emerald-900/15 rounded-full blur-[140px] pointer-events-none opacity-40 mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[60vw] h-[500px] bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none opacity-30 mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header (Velos Style) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-3xl relative">
            <div className="absolute -left-4 md:-left-8 top-1 bottom-1 w-1 bg-gradient-to-b from-white/60 to-transparent opacity-60" />
            <div className="flex items-center gap-3 mb-4 text-[#E5E7EB]">
              <span className="w-2 h-2 rounded-full bg-[#E5E7EB] animate-pulse" />
              <span className="text-xs font-mono-code uppercase tracking-[0.2em] text-[#E5E7EB]/90">
                Engineering Work 2026 // Production Repositories
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-bricolage font-medium tracking-tighter text-white leading-[0.9]">
              Featured <span className="text-white/25 font-light">Work</span>
            </h2>
          </div>
        </div>

        {/* Dynamic Grid: 1 Large Flagship Card (Left) + 2 Stacked Cards (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[640px] md:h-[720px] mb-8">
          {/* Card 1: A.R.G.U.S. (Spans 8 columns) */}
          <div
            ref={flagshipRef}
            onClick={() => onSelectProject(flagshipAres)}
            className={`group relative md:col-span-8 md:row-span-2 rounded-[2rem] overflow-hidden bg-neutral-900/90 border border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-700 ease-out hover:border-white/30 cursor-pointer transform ${
              flagshipVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
            } hover:-translate-y-1`}
          >
            {/* Background Image Frame */}
            <div className="absolute inset-0 z-0">
              <img
                src={flagshipAres.image}
                alt={flagshipAres.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-1000 ease-out grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
            </div>

            {/* Top HUD Overlay */}
            <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-20">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/10 backdrop-blur border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-mono-code text-white/80">
                  ESP32 POS Hardware
                </span>
                <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] uppercase tracking-widest font-mono-code text-[#E5E7EB] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#E5E7EB] rounded-full animate-pulse" />
                  Live Anomaly Pipeline
                </span>
              </div>
              <div className="text-[10px] font-mono-code text-white tabular-nums text-right hidden sm:block">
                LAT: 18.5204° N · LNG: 73.8567° E (Pune)
              </div>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
              <div className="max-w-xl transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                {/* Giant faint number watermark (Velos Signature) */}
                <div className="text-[8rem] md:text-[11rem] font-bricolage font-bold text-white/5 absolute -top-28 md:-top-36 -left-6 pointer-events-none select-none tracking-tighter">
                  01
                </div>

                <h3 className="text-3xl md:text-5xl font-bricolage font-medium text-white mb-3 relative tracking-tight">
                  {flagshipAres.title}
                </h3>
                <p className="text-white text-sm md:text-base font-light leading-relaxed mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-500 max-w-md">
                  {flagshipAres.shortDescription}
                </p>

                <div className="flex items-center gap-4 sm:gap-8 pt-5 border-t border-white/10 text-xs font-mono-code text-white uppercase tracking-widest">
                  <div>
                    <span className="block text-white mb-0.5">Latency Target</span>
                    &lt;95ms P99
                  </div>
                  <div>
                    <span className="block text-white mb-0.5">Detection SLA</span>
                    98.6% Accuracy
                  </div>
                  <div className="ml-auto flex items-center gap-2.5">
                    <a
                      href={flagshipAres.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      title="View A.R.G.U.S on GitHub"
                      className="px-3.5 py-2 rounded-full border border-white/20 flex items-center gap-1.5 text-white hover:bg-white hover:text-black transition-colors bg-white/5 backdrop-blur-md font-mono-code text-xs font-normal"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">GitHub</span>
                    </a>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors bg-white/5 backdrop-blur-md">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Stack (Spans 4 columns) */}
          <div className="md:col-span-4 md:row-span-2 flex flex-col gap-6">
            {/* Card 2: MMA Multi-Model Assistant */}
            <div
              ref={card2Ref}
              onClick={() => onSelectProject(cardGateway)}
              style={{ transitionDelay: '140ms' }}
              className={`group relative flex-1 rounded-[2rem] overflow-hidden bg-neutral-900/90 border border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-700 ease-out hover:border-white/30 cursor-pointer min-h-[300px] transform ${
                card2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
              } hover:-translate-y-1`}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={cardGateway.image}
                  alt={cardGateway.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-45 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
              </div>

              <div className="absolute top-6 right-6 z-20 flex items-center gap-2">
                <a
                  href={cardGateway.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  title="View MMA on GitHub"
                  className="w-9 h-9 rounded-full bg-white/10 backdrop-blur flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <div className="w-9 h-9 rounded-full bg-white/5 backdrop-blur flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-colors">
                  <span className="font-bricolage text-xs font-medium">02</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
                  <span className="text-[10px] uppercase text-indigo-300 tracking-widest font-mono-code">
                    Vision + Audio + Text
                  </span>
                </div>
                <h3 className="text-2xl font-bricolage font-medium text-white mb-1.5 tracking-tight">
                  {cardGateway.title}
                </h3>
                <p className="text-white text-xs leading-relaxed line-clamp-2">
                  {cardGateway.shortDescription}
                </p>
              </div>
            </div>

            {/* Card 3: V.A.L.I.D (Smart India Hackathon) */}
            <div
              ref={card3Ref}
              onClick={() => onSelectProject(cardTitan)}
              style={{ transitionDelay: '260ms' }}
              className={`group relative flex-1 rounded-[2rem] overflow-hidden bg-neutral-900/90 border border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-700 ease-out hover:border-white/30 cursor-pointer min-h-[300px] transform ${
                card3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
              } hover:-translate-y-1`}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={cardTitan.image}
                  alt={cardTitan.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-45 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
              </div>

              <div className="absolute top-6 right-6 z-20 flex items-center gap-2">
                <a
                  href={cardTitan.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  title="View V.A.L.I.D on GitHub"
                  className="w-9 h-9 rounded-full bg-white/10 backdrop-blur flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <div className="w-9 h-9 rounded-full bg-white/5 backdrop-blur flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-colors">
                  <span className="font-bricolage text-xs font-medium">03</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                  <span className="text-[10px] uppercase text-amber-300 tracking-widest font-mono-code">
                    Smart India Hackathon 2026
                  </span>
                </div>
                <h3 className="text-2xl font-bricolage font-medium text-white mb-1.5 tracking-tight">
                  {cardTitan.title}
                </h3>
                <p className="text-white text-xs leading-relaxed line-clamp-2">
                  {cardTitan.shortDescription}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Row: Stock Trading Bot, MeshRoute Ops, HostelEase, Blood Donation, Campus Wallet, etc. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 mb-16">
          {secondaryProjects.map((project, idx) => (
            <SecondaryProjectCard
              key={project.id}
              project={project}
              idx={idx}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>

        {/* Additional Notable Engineering Builds Grid */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono-code uppercase tracking-wider text-[#E5E7EB]">
                RELEVENT LEARNING
              </span>
              <h3 className="text-2xl font-bricolage font-medium text-white mt-0.5">
                Course work and Workshops
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/savar-shetty-usebonded/details/certifications/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono-code text-[#70b5f9] hover:underline flex items-center gap-1.5"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Certifications</span>
              </a>
              <a
                href="https://github.com/Usebonded"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono-code text-white hover:text-white flex items-center gap-1.5 hidden sm:flex"
              >
                <Github className="w-4 h-4" />
                <span>@Usebonded</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADDITIONAL_PROJECTS.map((extra, idx) => (
              <RelevantLearningCard key={idx} extra={extra} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
