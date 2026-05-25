export type IconName =
  | "arrowUpRight"
  | "badgeCheck"
  | "briefcase"
  | "code2"
  | "cpu"
  | "database"
  | "download"
  | "fileText"
  | "github"
  | "globe"
  | "graduationCap"
  | "linkedin"
  | "mail"
  | "qrCode"
  | "server"
  | "shield"
  | "sparkles"
  | "terminal"
  | "workflow"
  | "wrench";

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
}

export interface QuickFact {
  label: string;
  value: string;
}

export interface PracticePoint {
  title: string;
  description: string;
  icon: IconName;
}

export interface PracticeStatus {
  title: string;
  description: string;
  points: PracticePoint[];
}

export interface CapabilityArea {
  title: string;
  description: string;
  items: string[];
  icon: IconName;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: IconName;
}

export interface Project {
  title: string;
  description: string;
  problem: string;
  technologies: string[];
  demoUrl: string;
  githubUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
  labels: string[];
  features: string[];
  note?: string;
  preview: string;
  icon?: IconName;
  theme: "cyan" | "emerald" | "amber" | "sky";
}

export interface TimelineItemData {
  period: string;
  title: string;
  organization: string;
  description: string;
  type: "Académico" | "Formación" | "Curso" | "Disponibilidad";
  status?: string;
}
