
import { Hackathon, Blog, ResearchPaper, Certification, Project } from './types';

export const HACKATHONS: Hackathon[] = [
  {
    id: 1,
    title: "AI Hackathon",
    organization: "Mahindra University",
    result: "Winner (2025)",
    description: "Built a multimodal AI web tool using Gemini API with support for text, images, audio, and custom dashboards.",
    year: 2025,
    tags: ["Gemini API", "React", "AI/ML"]
  },
  {
    id: 2,
    title: "Quantum Computing Hackathon",
    organization: "Qiskit/Google Colab",
    result: "3rd Prize (2025)",
    description: "Solved quantum logic and circuit problems in Python/Qiskit through Google Colab environment.",
    year: 2025,
    tags: ["Quantum", "Python", "Qiskit"]
  },
  {
    id: 3,
    title: "IIT Hyderabad Hackathon",
    organization: "IIT Hyderabad",
    result: "Bicopter UAV Concept",
    description: "Designed a 3D bicopter UAV and simulation model using virtual prototyping tools.",
    year: 2024,
    tags: ["UAV", "Prototyping", "Design"]
  },
  {
    id: 4,
    title: "CBIT Hackathon",
    organization: "CBIT",
    result: "Advanced to Round 3",
    description: "Built an AI-driven sign language translation system using NLP + speech-to-text models.",
    year: 2024,
    tags: ["NLP", "Deep Learning"]
  },
  {
    id: 5,
    title: "Road Safety India Hackathon",
    organization: "Ministry of Transport",
    result: "Smart Pedestrian Safety System",
    description: "Prototyped an automated barrier system to improve traffic discipline in high-density zones.",
    year: 2024,
    tags: ["IoT", "Automation"]
  },
  {
    id: 6,
    title: "ISRO Pollution Analysis",
    organization: "ISRO",
    result: "Project Submission (2025)",
    description: "Developed ML model to estimate particulate pollution using real ISRO-sourced datasets.",
    year: 2025,
    tags: ["Data Science", "Environment"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "OmniSync AI",
    category: "Multimodal Dashboard",
    description: "The winning deployment from AI Hackathon 2025. A unified interface that synthesizes voice, text, and visual data into actionable product insights.",
    stack: ["Gemini 2.5", "React", "Tailwind"],
    productFocus: "User-centric data synthesis",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: "Q-Forge Optimizer",
    category: "Quantum Logic Tool",
    description: "Translating complex quantum circuit logic into visual, manageable product modules. 3rd Prize winner in the 2025 Quantum Circuit Hackathon.",
    stack: ["Qiskit", "Python", "D3.js"],
    productFocus: "Visualizing high-complexity logic",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    title: "Nexus Kernel",
    category: "Systems Intelligence",
    description: "Exploring bare-metal performance. A proof-of-concept bridging Linux system calls with low-latency AI agent triggers for real-time OS automation.",
    stack: ["C", "Linux Kernel", "Rust"],
    productFocus: "Low-latency system agency",
    image: "https://images.unsplash.com/photo-1518433278983-9625ec3dd972?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 4,
    title: "Agent Zero",
    category: "UX Framework",
    description: "Moving beyond chat. A development framework for building AI agents that interact directly with web components to perform complex user tasks.",
    stack: ["LangChain", "TypeScript", "Vite"],
    productFocus: "Invisible automation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000"
  }
];

export const BLOGS: Blog[] = [
  {
    id: 1,
    title: "The Linux Kernel: Understanding the Heart of the OS",
    category: "Linux",
    summary: "A deep dive into why I started learning Linux and the architectural elegance of the kernel.",
    date: "2024-11-10",
    content: "Linux is more than just an OS; it's a philosophy of freedom and efficiency. From handling interrupts to memory management..."
  },
  {
    id: 2,
    title: "GPU Acceleration: How NVIDIA Built the AI Backbone",
    category: "GPU",
    summary: "Analyzing the transition from graphics to general-purpose computing that fueled the AI boom.",
    date: "2024-12-05",
    content: "The CUDA core revolution changed everything. By allowing thousands of threads to run in parallel, NVIDIA turned GPUs into AI workhorses..."
  }
];

export const RESEARCH: ResearchPaper[] = [
  {
    id: 1,
    title: "Large Language Model Architectures: A Comparative Study",
    focus: "LLM Structures",
    summary: "Exploring the evolution from Transformers to specialized MoE (Mixture of Experts) architectures.",
    highlights: ["Transformer self-attention", "Parameter efficiency", "MoE scaling laws"]
  },
  {
    id: 2,
    title: "Agentic AI: The Shift from Chatbots to Autonomous Agents",
    focus: "AI Agents",
    summary: "Learnings from building LLM-based systems that can reason and execute tasks autonomously.",
    highlights: ["Reasoning chains", "Tool usage integration", "Feedback loops"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Career Essentials in AI",
    issuer: "Microsoft & LinkedIn",
    link: "https://drive.google.com/file/d/1Czvpz5ZMXHl-HNn9Qj_4oh9aJs7svsFF/view"
  },
  {
    name: "MATLAB Certification",
    issuer: "MathWorks",
    link: "https://shorturl.at/Zehtt"
  }
];
