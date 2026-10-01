export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'AI / ML' | 'Full-Stack' | 'Cloud & Systems' | 'Open Source' | 'HealthTech' | 'Algorithms' | 'Interactive';
  shortDescription: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  featured?: boolean;
  caseStudy: {
    clientOrContext: string;
    timeline: string;
    role: string;
    problem: string;
    solution: string;
    architecture: string[];
    keyResults: { metric: string; label: string }[];
    techDetails: string;
  };
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Education' | 'Internship' | 'Team Lead';
  achievements: string[];
  techStack: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  honors: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: string; experience: string }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
