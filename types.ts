
export interface Hackathon {
  id: number;
  title: string;
  organization: string;
  result: string;
  description: string;
  year: number;
  tags: string[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  stack: string[];
  productFocus: string;
  image: string;
}

export interface Blog {
  id: number;
  title: string;
  category: 'Linux' | 'Hardware' | 'AI' | 'GPU';
  summary: string;
  content: string;
  date: string;
}

export interface ResearchPaper {
  id: number;
  title: string;
  focus: string;
  summary: string;
  highlights: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  link: string;
}
