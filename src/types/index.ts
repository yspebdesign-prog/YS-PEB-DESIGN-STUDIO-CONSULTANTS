export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'peb-design'
  | 'structural-design'
  | 'detailing'
  | 'estimation'
  | 'foundation-design'
  | 'stability-certificate'
  | 'projects'
  | 'industries'
  | 'insights'
  | 'why-us'
  | 'fabricators'
  | 'faq'
  | 'contact';

export interface ServiceItem {
  id: string;
  pageId: PageId;
  title: string;
  shortTitle: string;
  category: string;
  tagline: string;
  description: string;
  keyDeliverables: string[];
  technicalScope: string[];
  iconName: string;
}

export interface DesignSample {
  id: string;
  title: string;
  category: string;
  drawingNumber: string;
  scale: string;
  description: string;
  specifications: {
    span?: string;
    eaveHeight?: string;
    baySpacing?: string;
    steelGrade?: string;
    roofSlope?: string;
    craneCapacity?: string;
    purlinProfile?: string;
    designCode?: string;
  };
  features: string[];
  svgType: 'portal-frame' | 'knee-joint' | 'base-plate' | 'purlin-detail' | 'pedestal';
}

export interface IndustryItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  typicalSpan: string;
  keyRequirements: string[];
  idealFor: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface QuoteFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  location: string;
  buildingType: string;
  length: string;
  width: string;
  eaveHeight: string;
  estimatedTonnage: string;
  serviceRequired: string;
  hasCrane: boolean;
  craneCapacity?: string;
  message: string;
  fileName?: string;
}

export type InsightCategory =
  | 'All'
  | 'Structural Engineering'
  | 'PEB Optimization'
  | 'IS Code Standards'
  | 'Case Studies'
  | 'Fabrication & Detailing'
  | 'Foundation Design';

export type InsightType =
  | 'Article'
  | 'Case Study'
  | 'Technical Discussion'
  | 'Code Guide';

export interface InsightSection {
  heading: string;
  body: string[];
  callout?: {
    type: 'tip' | 'code-warning' | 'formula';
    title: string;
    text: string;
  };
  diagramType?: 'portal-frame' | 'knee-joint' | 'base-plate' | 'purlin-detail' | 'pedestal';
  bullets?: string[];
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: Exclude<InsightCategory, 'All'>;
  type: InsightType;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  tags: string[];
  featured?: boolean;
  codeReferences?: string[];
  projectMetrics?: {
    span?: string;
    tonnage?: string;
    savings?: string;
    location?: string;
    crane?: string;
  };
  contentSections: InsightSection[];
  keyTakeaways: string[];
}

export interface FeaturedProject {
  id: string;
  title: string;
  sector: string;
  location: string;
  buildingType: string;
  specs: {
    spanAndHeight: string;
    baySpacing: string;
    craneCapacity?: string;
    designStandard: string;
    steelTonnage?: string;
    builtUpArea?: string;
  };
  scopeOfWork: string[];
  status: string;
  drawingRef?: string;
}

